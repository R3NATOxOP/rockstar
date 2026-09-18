const { promises: fs } = require('fs');
const path = require('path');
const mime = require('mime-types');
const {
  S3Client,
  PutObjectCommand,
  ListObjectsV2Command,
  DeleteObjectsCommand,
} = require('@aws-sdk/client-s3');

const BUCKET = process.env.NODE_AWS_S3_BUCKET;
const BUILD_DIR = path.resolve(__dirname, '..', 'build');

const s3 = new S3Client({
  credentials: {
    accessKeyId: process.env.NODE_AWS_ACCESS_KEY,
    secretAccessKey: process.env.NODE_AWS_SECRET_KEY,
  },
  region: process.env.NODE_AWS_S3_REGION,
  endpoint: process.env.NODE_AWS_S3_ENDPOINT,
});

const getFiles = async (dir) => {
  const dirents = await fs.readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    dirents.map((dirent) => {
      const res = path.resolve(dir, dirent.name);
      return dirent.isDirectory() ? getFiles(res) : res;
    }),
  );
  return Array.prototype.concat(...files);
};

const uploadDir = async (localDir) => {
  const files = await getFiles(localDir);
  const keyFor = (filePath) => path.relative(localDir, filePath).split(path.sep).join('/');
  const uploads = files.map(async (filePath) => {
    const body = await fs.readFile(filePath);
    return s3.send(
      new PutObjectCommand({
        Key: keyFor(filePath),
        Bucket: BUCKET,
        Body: body,
        ACL: 'public-read',
        ContentType: `${mime.lookup(filePath) || 'application/octet-stream'}; charset=utf-8`,
        ContentDisposition: 'inline',
        ContentLength: body.length,
      }),
    );
  });
  await Promise.all(uploads);
  return new Set(files.map(keyFor));
};

const listExistingKeys = async () => {
  const keys = [];
  let continuationToken;
  do {
    const res = await s3.send(
      new ListObjectsV2Command({
        Bucket: BUCKET,
        ContinuationToken: continuationToken,
      }),
    );
    for (const obj of res.Contents ?? []) {
      if (obj.Key) keys.push(obj.Key);
    }
    continuationToken = res.IsTruncated ? res.NextContinuationToken : undefined;
  } while (continuationToken);
  return keys;
};

const deleteKeys = async (keys) => {
  for (let i = 0; i < keys.length; i += 1000) {
    const batch = keys.slice(i, i + 1000);
    await s3.send(
      new DeleteObjectsCommand({
        Bucket: BUCKET,
        Delete: {
          Objects: batch.map((Key) => ({ Key })),
          Quiet: true,
        },
      }),
    );
  }
};

(async () => {
  const uploadedKeys = await uploadDir(BUILD_DIR);
  console.log(`Uploaded ${uploadedKeys.size} files to s3://${BUCKET}/`);

  const existingKeys = await listExistingKeys();
  const staleKeys = existingKeys.filter((key) => !uploadedKeys.has(key));

  if (staleKeys.length > 0) {
    await deleteKeys(staleKeys);
    console.log(`Deleted ${staleKeys.length} stale files from s3://${BUCKET}/`);
  } else {
    console.log('No stale files to delete.');
  }
})().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});

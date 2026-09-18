import fs from 'node:fs';
import path from 'node:path';

type MdastNode = { type: string; [key: string]: unknown };

const STATIC_DOWNLOADS = path.join(__dirname, '..', '..', 'static', 'downloads');

const link = (dir: string, relPath: string) =>
  `/downloads/${dir}/${relPath}`.replace(/\/{2,}/g, '/');

const recursiveFiles = (dir: string): string[] => {
  const abs = path.join(STATIC_DOWNLOADS, dir);
  const out: string[] = [];
  const walk = (rel: string) => {
    for (const entry of fs.readdirSync(path.join(abs, rel), { withFileTypes: true })) {
      const relPath = rel ? `${rel}/${entry.name}` : entry.name;
      if (entry.isDirectory()) walk(relPath);
      else out.push(relPath);
    }
  };
  walk('');
  out.sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
  return out;
};

const fileListNode = (dir: string): MdastNode => {
  return {
    type: 'list',
    ordered: false,
    spread: false,
    children: recursiveFiles(dir).map((relPath) => ({
      type: 'listItem',
      spread: false,
      children: [
        {
          type: 'paragraph',
          children: [
            {
              type: 'link',
              url: link(dir, relPath),
              children: [{ type: 'text', value: relPath }],
            },
          ],
        },
      ],
    })),
  };
};

const headingNode = (depth: number, text: string): MdastNode => ({
  type: 'heading',
  depth,
  children: [{ type: 'text', value: text }],
});

const renderBlock = (source: string): MdastNode[] => {
  const nodes: MdastNode[] = [];
  for (const rawLine of source.split('\n')) {
    const line = rawLine.trim();
    if (!line) continue;
    const heading = line.match(/^(#{2,4})\s+(.+)$/);
    if (heading) {
      nodes.push(headingNode(heading[1].length, heading[2]));
      continue;
    }
    const dir = line.match(/^dir:\s*(.+)$/);
    if (dir) nodes.push(fileListNode(dir[1].trim()));
  }
  return nodes;
};

/**
 * Replaces ```download-list fenced blocks with file-link lists generated
 * from static/downloads/, so they can't drift from what's actually there.
 * Block body: `dir: <path>` lines, optionally preceded by a `### Heading` line.
 */
const remarkDownloadList = () => (tree: MdastNode) => {
  const visit = (node: MdastNode): number | undefined => {
    const children = node.children as MdastNode[] | undefined;
    if (!children) return undefined;
    let i = 0;
    while (i < children.length) {
      const child = children[i];
      if (child.type === 'code' && child.lang === 'download-list') {
        const replacement = renderBlock(String(child.value ?? ''));
        children.splice(i, 1, ...replacement);
        i += replacement.length;
        continue;
      }
      visit(child);
      i++;
    }
    return undefined;
  };
  visit(tree);
};

export default remarkDownloadList;

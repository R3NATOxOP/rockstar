---
slug: /onx-mp-faces/
title: onx_mp_faces
---

# onx_mp_faces

This repository contains documentation and examples for the `onx_mp_faces` package, available on the store at https://store.onx.gg.

## Requirements

Once you've purchased and downloaded the package, it is a ready-to-run resource within your FiveM server.

To support the additional 52 faces, your clothing script will need to be modified to increase the maximum value the shape ID can take. This should be an easy change.

Feel free to create a pull request to create additional examples, or [join our discord](https://onx.gg/discord) for support doing this.

## Examples

### qb-clothing

In `client/main.lua`,

```lua
if v.type == "face" then
    maxModelValues[k].item = 45
    maxModelValues[k].texture = 15
end

if v.type == "face2" then
    maxModelValues[k].item = 45
    maxModelValues[k].texture = 15
end
```

becomes

```lua
if v.type == "face" then
    maxModelValues[k].item = 45 + 52
    maxModelValues[k].texture = 15
end

if v.type == "face2" then
    maxModelValues[k].item = 45 + 52
    maxModelValues[k].texture = 15
end
```

### illenium-appearance

In `game/customization.lua`,

```lua
shapeFirst = {
    min = 0,
    max = 45
},
shapeSecond = {
    min = 0,
    max = 45
},
shapeThird = {
    min = 0,
    max = 45
},
```

becomes

```lua
shapeFirst = {
    min = 0,
    max = 45 + 52
},
shapeSecond = {
    min = 0,
    max = 45 + 52
},
shapeThird = {
    min = 0,
    max = 45 + 52
},
```

## Head model previews

Preview thumbnails for the additional face models (46-97), for both female and male.

| #   | Female                                                                                                                                                      | Male                                                                                                                                                  |
| --- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| 46  | [<img src="/downloads/onx-mp-faces/head-model-images/female/46.png" width="90" alt="female 46" />](/downloads/onx-mp-faces/head-model-images/female/46.png) | [<img src="/downloads/onx-mp-faces/head-model-images/male/46.png" width="90" alt="male 46" />](/downloads/onx-mp-faces/head-model-images/male/46.png) |
| 47  | [<img src="/downloads/onx-mp-faces/head-model-images/female/47.png" width="90" alt="female 47" />](/downloads/onx-mp-faces/head-model-images/female/47.png) | [<img src="/downloads/onx-mp-faces/head-model-images/male/47.png" width="90" alt="male 47" />](/downloads/onx-mp-faces/head-model-images/male/47.png) |
| 48  | [<img src="/downloads/onx-mp-faces/head-model-images/female/48.png" width="90" alt="female 48" />](/downloads/onx-mp-faces/head-model-images/female/48.png) | [<img src="/downloads/onx-mp-faces/head-model-images/male/48.png" width="90" alt="male 48" />](/downloads/onx-mp-faces/head-model-images/male/48.png) |
| 49  | [<img src="/downloads/onx-mp-faces/head-model-images/female/49.png" width="90" alt="female 49" />](/downloads/onx-mp-faces/head-model-images/female/49.png) | [<img src="/downloads/onx-mp-faces/head-model-images/male/49.png" width="90" alt="male 49" />](/downloads/onx-mp-faces/head-model-images/male/49.png) |
| 50  | [<img src="/downloads/onx-mp-faces/head-model-images/female/50.png" width="90" alt="female 50" />](/downloads/onx-mp-faces/head-model-images/female/50.png) | [<img src="/downloads/onx-mp-faces/head-model-images/male/50.png" width="90" alt="male 50" />](/downloads/onx-mp-faces/head-model-images/male/50.png) |
| 51  | [<img src="/downloads/onx-mp-faces/head-model-images/female/51.png" width="90" alt="female 51" />](/downloads/onx-mp-faces/head-model-images/female/51.png) | [<img src="/downloads/onx-mp-faces/head-model-images/male/51.png" width="90" alt="male 51" />](/downloads/onx-mp-faces/head-model-images/male/51.png) |
| 52  | [<img src="/downloads/onx-mp-faces/head-model-images/female/52.png" width="90" alt="female 52" />](/downloads/onx-mp-faces/head-model-images/female/52.png) | [<img src="/downloads/onx-mp-faces/head-model-images/male/52.png" width="90" alt="male 52" />](/downloads/onx-mp-faces/head-model-images/male/52.png) |
| 53  | [<img src="/downloads/onx-mp-faces/head-model-images/female/53.png" width="90" alt="female 53" />](/downloads/onx-mp-faces/head-model-images/female/53.png) | [<img src="/downloads/onx-mp-faces/head-model-images/male/53.png" width="90" alt="male 53" />](/downloads/onx-mp-faces/head-model-images/male/53.png) |
| 54  | [<img src="/downloads/onx-mp-faces/head-model-images/female/54.png" width="90" alt="female 54" />](/downloads/onx-mp-faces/head-model-images/female/54.png) | [<img src="/downloads/onx-mp-faces/head-model-images/male/54.png" width="90" alt="male 54" />](/downloads/onx-mp-faces/head-model-images/male/54.png) |
| 55  | [<img src="/downloads/onx-mp-faces/head-model-images/female/55.png" width="90" alt="female 55" />](/downloads/onx-mp-faces/head-model-images/female/55.png) | [<img src="/downloads/onx-mp-faces/head-model-images/male/55.png" width="90" alt="male 55" />](/downloads/onx-mp-faces/head-model-images/male/55.png) |
| 56  | [<img src="/downloads/onx-mp-faces/head-model-images/female/56.png" width="90" alt="female 56" />](/downloads/onx-mp-faces/head-model-images/female/56.png) | [<img src="/downloads/onx-mp-faces/head-model-images/male/56.png" width="90" alt="male 56" />](/downloads/onx-mp-faces/head-model-images/male/56.png) |
| 57  | [<img src="/downloads/onx-mp-faces/head-model-images/female/57.png" width="90" alt="female 57" />](/downloads/onx-mp-faces/head-model-images/female/57.png) | [<img src="/downloads/onx-mp-faces/head-model-images/male/57.png" width="90" alt="male 57" />](/downloads/onx-mp-faces/head-model-images/male/57.png) |
| 58  | [<img src="/downloads/onx-mp-faces/head-model-images/female/58.png" width="90" alt="female 58" />](/downloads/onx-mp-faces/head-model-images/female/58.png) | [<img src="/downloads/onx-mp-faces/head-model-images/male/58.png" width="90" alt="male 58" />](/downloads/onx-mp-faces/head-model-images/male/58.png) |
| 59  | [<img src="/downloads/onx-mp-faces/head-model-images/female/59.png" width="90" alt="female 59" />](/downloads/onx-mp-faces/head-model-images/female/59.png) | [<img src="/downloads/onx-mp-faces/head-model-images/male/59.png" width="90" alt="male 59" />](/downloads/onx-mp-faces/head-model-images/male/59.png) |
| 60  | [<img src="/downloads/onx-mp-faces/head-model-images/female/60.png" width="90" alt="female 60" />](/downloads/onx-mp-faces/head-model-images/female/60.png) | [<img src="/downloads/onx-mp-faces/head-model-images/male/60.png" width="90" alt="male 60" />](/downloads/onx-mp-faces/head-model-images/male/60.png) |
| 61  | [<img src="/downloads/onx-mp-faces/head-model-images/female/61.png" width="90" alt="female 61" />](/downloads/onx-mp-faces/head-model-images/female/61.png) | [<img src="/downloads/onx-mp-faces/head-model-images/male/61.png" width="90" alt="male 61" />](/downloads/onx-mp-faces/head-model-images/male/61.png) |
| 62  | [<img src="/downloads/onx-mp-faces/head-model-images/female/62.png" width="90" alt="female 62" />](/downloads/onx-mp-faces/head-model-images/female/62.png) | [<img src="/downloads/onx-mp-faces/head-model-images/male/62.png" width="90" alt="male 62" />](/downloads/onx-mp-faces/head-model-images/male/62.png) |
| 63  | [<img src="/downloads/onx-mp-faces/head-model-images/female/63.png" width="90" alt="female 63" />](/downloads/onx-mp-faces/head-model-images/female/63.png) | [<img src="/downloads/onx-mp-faces/head-model-images/male/63.png" width="90" alt="male 63" />](/downloads/onx-mp-faces/head-model-images/male/63.png) |
| 64  | [<img src="/downloads/onx-mp-faces/head-model-images/female/64.png" width="90" alt="female 64" />](/downloads/onx-mp-faces/head-model-images/female/64.png) | [<img src="/downloads/onx-mp-faces/head-model-images/male/64.png" width="90" alt="male 64" />](/downloads/onx-mp-faces/head-model-images/male/64.png) |
| 65  | [<img src="/downloads/onx-mp-faces/head-model-images/female/65.png" width="90" alt="female 65" />](/downloads/onx-mp-faces/head-model-images/female/65.png) | [<img src="/downloads/onx-mp-faces/head-model-images/male/65.png" width="90" alt="male 65" />](/downloads/onx-mp-faces/head-model-images/male/65.png) |
| 66  | [<img src="/downloads/onx-mp-faces/head-model-images/female/66.png" width="90" alt="female 66" />](/downloads/onx-mp-faces/head-model-images/female/66.png) | [<img src="/downloads/onx-mp-faces/head-model-images/male/66.png" width="90" alt="male 66" />](/downloads/onx-mp-faces/head-model-images/male/66.png) |
| 67  | [<img src="/downloads/onx-mp-faces/head-model-images/female/67.png" width="90" alt="female 67" />](/downloads/onx-mp-faces/head-model-images/female/67.png) | [<img src="/downloads/onx-mp-faces/head-model-images/male/67.png" width="90" alt="male 67" />](/downloads/onx-mp-faces/head-model-images/male/67.png) |
| 68  | [<img src="/downloads/onx-mp-faces/head-model-images/female/68.png" width="90" alt="female 68" />](/downloads/onx-mp-faces/head-model-images/female/68.png) | [<img src="/downloads/onx-mp-faces/head-model-images/male/68.png" width="90" alt="male 68" />](/downloads/onx-mp-faces/head-model-images/male/68.png) |
| 69  | [<img src="/downloads/onx-mp-faces/head-model-images/female/69.png" width="90" alt="female 69" />](/downloads/onx-mp-faces/head-model-images/female/69.png) | [<img src="/downloads/onx-mp-faces/head-model-images/male/69.png" width="90" alt="male 69" />](/downloads/onx-mp-faces/head-model-images/male/69.png) |
| 70  | [<img src="/downloads/onx-mp-faces/head-model-images/female/70.png" width="90" alt="female 70" />](/downloads/onx-mp-faces/head-model-images/female/70.png) | [<img src="/downloads/onx-mp-faces/head-model-images/male/70.png" width="90" alt="male 70" />](/downloads/onx-mp-faces/head-model-images/male/70.png) |
| 71  | [<img src="/downloads/onx-mp-faces/head-model-images/female/71.png" width="90" alt="female 71" />](/downloads/onx-mp-faces/head-model-images/female/71.png) | [<img src="/downloads/onx-mp-faces/head-model-images/male/71.png" width="90" alt="male 71" />](/downloads/onx-mp-faces/head-model-images/male/71.png) |
| 72  | [<img src="/downloads/onx-mp-faces/head-model-images/female/72.png" width="90" alt="female 72" />](/downloads/onx-mp-faces/head-model-images/female/72.png) | [<img src="/downloads/onx-mp-faces/head-model-images/male/72.png" width="90" alt="male 72" />](/downloads/onx-mp-faces/head-model-images/male/72.png) |
| 73  | [<img src="/downloads/onx-mp-faces/head-model-images/female/73.png" width="90" alt="female 73" />](/downloads/onx-mp-faces/head-model-images/female/73.png) | [<img src="/downloads/onx-mp-faces/head-model-images/male/73.png" width="90" alt="male 73" />](/downloads/onx-mp-faces/head-model-images/male/73.png) |
| 74  | [<img src="/downloads/onx-mp-faces/head-model-images/female/74.png" width="90" alt="female 74" />](/downloads/onx-mp-faces/head-model-images/female/74.png) | [<img src="/downloads/onx-mp-faces/head-model-images/male/74.png" width="90" alt="male 74" />](/downloads/onx-mp-faces/head-model-images/male/74.png) |
| 75  | [<img src="/downloads/onx-mp-faces/head-model-images/female/75.png" width="90" alt="female 75" />](/downloads/onx-mp-faces/head-model-images/female/75.png) | [<img src="/downloads/onx-mp-faces/head-model-images/male/75.png" width="90" alt="male 75" />](/downloads/onx-mp-faces/head-model-images/male/75.png) |
| 76  | [<img src="/downloads/onx-mp-faces/head-model-images/female/76.png" width="90" alt="female 76" />](/downloads/onx-mp-faces/head-model-images/female/76.png) | [<img src="/downloads/onx-mp-faces/head-model-images/male/76.png" width="90" alt="male 76" />](/downloads/onx-mp-faces/head-model-images/male/76.png) |
| 77  | [<img src="/downloads/onx-mp-faces/head-model-images/female/77.png" width="90" alt="female 77" />](/downloads/onx-mp-faces/head-model-images/female/77.png) | [<img src="/downloads/onx-mp-faces/head-model-images/male/77.png" width="90" alt="male 77" />](/downloads/onx-mp-faces/head-model-images/male/77.png) |
| 78  | [<img src="/downloads/onx-mp-faces/head-model-images/female/78.png" width="90" alt="female 78" />](/downloads/onx-mp-faces/head-model-images/female/78.png) | [<img src="/downloads/onx-mp-faces/head-model-images/male/78.png" width="90" alt="male 78" />](/downloads/onx-mp-faces/head-model-images/male/78.png) |
| 79  | [<img src="/downloads/onx-mp-faces/head-model-images/female/79.png" width="90" alt="female 79" />](/downloads/onx-mp-faces/head-model-images/female/79.png) | [<img src="/downloads/onx-mp-faces/head-model-images/male/79.png" width="90" alt="male 79" />](/downloads/onx-mp-faces/head-model-images/male/79.png) |
| 80  | [<img src="/downloads/onx-mp-faces/head-model-images/female/80.png" width="90" alt="female 80" />](/downloads/onx-mp-faces/head-model-images/female/80.png) | [<img src="/downloads/onx-mp-faces/head-model-images/male/80.png" width="90" alt="male 80" />](/downloads/onx-mp-faces/head-model-images/male/80.png) |
| 81  | [<img src="/downloads/onx-mp-faces/head-model-images/female/81.png" width="90" alt="female 81" />](/downloads/onx-mp-faces/head-model-images/female/81.png) | [<img src="/downloads/onx-mp-faces/head-model-images/male/81.png" width="90" alt="male 81" />](/downloads/onx-mp-faces/head-model-images/male/81.png) |
| 82  | [<img src="/downloads/onx-mp-faces/head-model-images/female/82.png" width="90" alt="female 82" />](/downloads/onx-mp-faces/head-model-images/female/82.png) | [<img src="/downloads/onx-mp-faces/head-model-images/male/82.png" width="90" alt="male 82" />](/downloads/onx-mp-faces/head-model-images/male/82.png) |
| 83  | [<img src="/downloads/onx-mp-faces/head-model-images/female/83.png" width="90" alt="female 83" />](/downloads/onx-mp-faces/head-model-images/female/83.png) | [<img src="/downloads/onx-mp-faces/head-model-images/male/83.png" width="90" alt="male 83" />](/downloads/onx-mp-faces/head-model-images/male/83.png) |
| 84  | [<img src="/downloads/onx-mp-faces/head-model-images/female/84.png" width="90" alt="female 84" />](/downloads/onx-mp-faces/head-model-images/female/84.png) | [<img src="/downloads/onx-mp-faces/head-model-images/male/84.png" width="90" alt="male 84" />](/downloads/onx-mp-faces/head-model-images/male/84.png) |
| 85  | [<img src="/downloads/onx-mp-faces/head-model-images/female/85.png" width="90" alt="female 85" />](/downloads/onx-mp-faces/head-model-images/female/85.png) | [<img src="/downloads/onx-mp-faces/head-model-images/male/85.png" width="90" alt="male 85" />](/downloads/onx-mp-faces/head-model-images/male/85.png) |
| 86  | [<img src="/downloads/onx-mp-faces/head-model-images/female/86.png" width="90" alt="female 86" />](/downloads/onx-mp-faces/head-model-images/female/86.png) | [<img src="/downloads/onx-mp-faces/head-model-images/male/86.png" width="90" alt="male 86" />](/downloads/onx-mp-faces/head-model-images/male/86.png) |
| 87  | [<img src="/downloads/onx-mp-faces/head-model-images/female/87.png" width="90" alt="female 87" />](/downloads/onx-mp-faces/head-model-images/female/87.png) | [<img src="/downloads/onx-mp-faces/head-model-images/male/87.png" width="90" alt="male 87" />](/downloads/onx-mp-faces/head-model-images/male/87.png) |
| 88  | [<img src="/downloads/onx-mp-faces/head-model-images/female/88.png" width="90" alt="female 88" />](/downloads/onx-mp-faces/head-model-images/female/88.png) | [<img src="/downloads/onx-mp-faces/head-model-images/male/88.png" width="90" alt="male 88" />](/downloads/onx-mp-faces/head-model-images/male/88.png) |
| 89  | [<img src="/downloads/onx-mp-faces/head-model-images/female/89.png" width="90" alt="female 89" />](/downloads/onx-mp-faces/head-model-images/female/89.png) | [<img src="/downloads/onx-mp-faces/head-model-images/male/89.png" width="90" alt="male 89" />](/downloads/onx-mp-faces/head-model-images/male/89.png) |
| 90  | [<img src="/downloads/onx-mp-faces/head-model-images/female/90.png" width="90" alt="female 90" />](/downloads/onx-mp-faces/head-model-images/female/90.png) | [<img src="/downloads/onx-mp-faces/head-model-images/male/90.png" width="90" alt="male 90" />](/downloads/onx-mp-faces/head-model-images/male/90.png) |
| 91  | [<img src="/downloads/onx-mp-faces/head-model-images/female/91.png" width="90" alt="female 91" />](/downloads/onx-mp-faces/head-model-images/female/91.png) | [<img src="/downloads/onx-mp-faces/head-model-images/male/91.png" width="90" alt="male 91" />](/downloads/onx-mp-faces/head-model-images/male/91.png) |
| 92  | [<img src="/downloads/onx-mp-faces/head-model-images/female/92.png" width="90" alt="female 92" />](/downloads/onx-mp-faces/head-model-images/female/92.png) | [<img src="/downloads/onx-mp-faces/head-model-images/male/92.png" width="90" alt="male 92" />](/downloads/onx-mp-faces/head-model-images/male/92.png) |
| 93  | [<img src="/downloads/onx-mp-faces/head-model-images/female/93.png" width="90" alt="female 93" />](/downloads/onx-mp-faces/head-model-images/female/93.png) | [<img src="/downloads/onx-mp-faces/head-model-images/male/93.png" width="90" alt="male 93" />](/downloads/onx-mp-faces/head-model-images/male/93.png) |
| 94  | [<img src="/downloads/onx-mp-faces/head-model-images/female/94.png" width="90" alt="female 94" />](/downloads/onx-mp-faces/head-model-images/female/94.png) | [<img src="/downloads/onx-mp-faces/head-model-images/male/94.png" width="90" alt="male 94" />](/downloads/onx-mp-faces/head-model-images/male/94.png) |
| 95  | [<img src="/downloads/onx-mp-faces/head-model-images/female/95.png" width="90" alt="female 95" />](/downloads/onx-mp-faces/head-model-images/female/95.png) | [<img src="/downloads/onx-mp-faces/head-model-images/male/95.png" width="90" alt="male 95" />](/downloads/onx-mp-faces/head-model-images/male/95.png) |
| 96  | [<img src="/downloads/onx-mp-faces/head-model-images/female/96.png" width="90" alt="female 96" />](/downloads/onx-mp-faces/head-model-images/female/96.png) | [<img src="/downloads/onx-mp-faces/head-model-images/male/96.png" width="90" alt="male 96" />](/downloads/onx-mp-faces/head-model-images/male/96.png) |
| 97  | [<img src="/downloads/onx-mp-faces/head-model-images/female/97.png" width="90" alt="female 97" />](/downloads/onx-mp-faces/head-model-images/female/97.png) | [<img src="/downloads/onx-mp-faces/head-model-images/male/97.png" width="90" alt="male 97" />](/downloads/onx-mp-faces/head-model-images/male/97.png) |

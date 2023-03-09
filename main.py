import os
from PIL import Image

DIR_PATH = "./asset/img/photos"

photos = []
count = 1
for path in os.listdir(DIR_PATH):
    if os.path.isfile(os.path.join(DIR_PATH, path)):
        print('"{}",'.format(os.path.join(DIR_PATH, path).replace("\\", "/")))
        # photos.append(os.path.join(DIR_PATH, path))

# images = []
# target_width = 1000
# for photo in photos:
#     img = Image.open(photo)
#     width = img.size[0]
#     height = img.size[1]

#     width_percent = (target_width/float(width))
#     new_height = int(float(height)*float(width_percent))

#     img.thumbnail(((target_width, new_height)), Image.LANCZOS)
#     img.save(photo)

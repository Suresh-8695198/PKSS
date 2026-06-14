import cv2
import numpy as np

video_path = r"e:\PKSS Project\Videos\Recording 2026-06-14 160438.mp4"
cap = cv2.VideoCapture(video_path)

frames = []
idx = 0
while True:
    ret, frame = cap.read()
    if not ret:
        break
    if idx <= 20:
        crop = frame[35:85, 1350:1650] # Crop just the word "PRIDE OF SALEM"
        frames.append(crop)
    idx += 1
cap.release()

# Stitch frames vertically with a small black border between them
border = np.zeros((2, 300, 3), dtype=np.uint8)
grid = frames[0]
for i in range(1, len(frames)):
    grid = np.vstack([grid, border, frames[i]])

cv2.imwrite(r"e:\PKSS Project\extracted_frames\pride_grid.jpg", grid)
print("Grid created successfully.")

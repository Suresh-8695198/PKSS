import cv2
import os

video_path = r"e:\PKSS Project\Videos\Recording 2026-06-14 160438.mp4"
output_dir = r"e:\PKSS Project\extracted_frames\video_160438"

os.makedirs(output_dir, exist_ok=True)

cap = cv2.VideoCapture(video_path)
if not cap.isOpened():
    print("Error opening video file")
    exit(1)

fps = cap.get(cv2.CAP_PROP_FPS)
total_frames = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
duration = total_frames / fps
print(f"FPS: {fps}, Total Frames: {total_frames}, Duration: {duration} seconds")

# Let's extract a frame every 5 frames to see the hover transitions and hover states clearly
count = 0
saved_count = 0
while cap.isOpened():
    ret, frame = cap.read()
    if not ret:
        break
    if count % 5 == 0:
        output_path = os.path.join(output_dir, f"frame_{saved_count:03d}.jpg")
        cv2.imwrite(output_path, frame)
        saved_count += 1
    count += 1

cap.release()
print(f"Saved {saved_count} frames to {output_dir}")

import cv2
import numpy as np

video_path = r"e:\PKSS Project\Videos\Recording 2026-06-14 160438.mp4"
cap = cv2.VideoCapture(video_path)

ret, first_frame = cap.read()
if not ret:
    print("Could not read first frame")
    exit(1)

gray_first = cv2.cvtColor(first_frame, cv2.COLOR_BGR2GRAY)

frame_idx = 1
differences = []

while True:
    ret, frame = cv2.VideoCapture(video_path).read() # wait, we should just read from cap
    ret, frame = cap.read()
    if not ret:
        break
    gray_curr = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
    diff = cv2.absdiff(gray_first, gray_curr)
    mean_diff = np.mean(diff)
    if mean_diff > 0.1: # there is some change
        differences.append((frame_idx, mean_diff))
    frame_idx += 1

cap.release()
print(f"Frames with changes from frame 0 (total {frame_idx} frames):")
for idx, d in differences:
    print(f"Frame {idx}: diff={d:.4f}")

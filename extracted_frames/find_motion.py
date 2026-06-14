import cv2
import numpy as np

video_path = r"e:\PKSS Project\Videos\Recording 2026-06-14 160438.mp4"
cap = cv2.VideoCapture(video_path)

frames = []
while True:
    ret, frame = cap.read()
    if not ret:
        break
    frames.append(frame)
cap.release()

print(f"Loaded {len(frames)} frames.")

# Find any changes between adjacent frames
for i in range(1, len(frames)):
    diff = cv2.absdiff(frames[i], frames[i-1])
    gray_diff = cv2.cvtColor(diff, cv2.COLOR_BGR2GRAY)
    _, thresh = cv2.threshold(gray_diff, 5, 255, cv2.THRESH_BINARY)
    contours, _ = cv2.findContours(thresh, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
    
    if len(contours) > 0:
        print(f"Motion between frame {i-1} and {i}:")
        for c in contours:
            x, y, w, h = cv2.boundingRect(c)
            # ignore very small noise (less than 2x2 px)
            if w > 2 or h > 2:
                print(f"  Box: x={x}, y={y}, w={w}, h={h}")

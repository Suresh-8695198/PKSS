import cv2
import numpy as np
import os

video_path = r"e:\PKSS Project\Videos\Recording 2026-06-14 160438.mp4"
output_dir = r"e:\PKSS Project\extracted_frames\menu_changes"
os.makedirs(output_dir, exist_ok=True)

cap = cv2.VideoCapture(video_path)
ret, first_frame = cap.read()
if not ret:
    print("Failed to read first frame")
    exit(1)

# Crop region for menus: width is 1896, let's look at x from 300 to 1600, y from 0 to 122
menu_x1, menu_x2 = 300, 1600
first_menu_crop = first_frame[:, menu_x1:menu_x2]
gray_first = cv2.cvtColor(first_menu_crop, cv2.COLOR_BGR2GRAY)

frame_idx = 1
saved = 0
while True:
    ret, frame = cap.read()
    if not ret:
        break
    curr_menu_crop = frame[:, menu_x1:menu_x2]
    gray_curr = cv2.cvtColor(curr_menu_crop, cv2.COLOR_BGR2GRAY)
    
    diff = cv2.absdiff(gray_first, gray_curr)
    mean_diff = np.mean(diff)
    
    # If there is a change in the menu area, save the cropped region and original frame
    if mean_diff > 0.05:
        cv2.imwrite(os.path.join(output_dir, f"frame_{frame_idx:03d}_diff_{mean_diff:.2f}.jpg"), frame)
        saved += 1
        
    frame_idx += 1

cap.release()
print(f"Saved {saved} frames with changes in menu area to {output_dir}")

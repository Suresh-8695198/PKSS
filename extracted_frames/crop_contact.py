import cv2
import os

video_path = r"e:\PKSS Project\Videos\Recording 2026-06-14 160438.mp4"
output_dir = r"e:\PKSS Project\extracted_frames\contact_crop"
os.makedirs(output_dir, exist_ok=True)

cap = cv2.VideoCapture(video_path)
frame_idx = 0
while True:
    ret, frame = cap.read()
    if not ret:
        break
    if 50 <= frame_idx <= 80:
        # crop around CONTACT US / BLOG: x from 1000 to 1400, y from 30 to 90
        crop = frame[30:90, 1000:1400]
        cv2.imwrite(os.path.join(output_dir, f"frame_{frame_idx:03d}.jpg"), crop)
    frame_idx += 1
cap.release()
print("Cropped contact region saved.")

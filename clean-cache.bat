@echo off
echo ===================================================
echo PKSS Web: Cleaning Next.js Cache ^& Replacing Favicon
echo ===================================================
echo.
echo [1/3] Deleting .next cache directory...
if exist .next (
    rd /s /q .next
    echo Cache deleted successfully.
) else (
    echo Cache is already clean.
)
echo.
echo [2/3] Replacing massive 2.15 MB favicon files with 33 KB logo...
copy /y "public\logo.png" "src\app\icon.png" >nul
copy /y "public\logo.png" "public\icon.png" >nul
echo Favicon replaced successfully.
echo.
echo [3/3] Done! Please restart your development server (npm run dev).
echo.
pause

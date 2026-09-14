@echo off
setlocal enabledelayedexpansion

echo ===================================================
echo   Updating Advanced Fishing Bedrock Development Packs
echo ===================================================

set "BP_SRC=%~dp0BP"
set "RP_SRC=%~dp0RP"

set "MOJANG_DIR="
if exist "%APPDATA%\Minecraft Bedrock\Users\Shared\games\com.mojang" (
    set "MOJANG_DIR=%APPDATA%\Minecraft Bedrock\Users\Shared\games\com.mojang"
) else if exist "%LOCALAPPDATA%\Packages\Microsoft.MinecraftUWP_8wekyb3d8bbwe\LocalState\games\com.mojang" (
    set "MOJANG_DIR=%LOCALAPPDATA%\Packages\Microsoft.MinecraftUWP_8wekyb3d8bbwe\LocalState\games\com.mojang"
) else (
    set "MOJANG_DIR=%APPDATA%\Minecraft Bedrock\Users\Shared\games\com.mojang"
)

set "BP_DEST=!MOJANG_DIR!\development_behavior_packs\AdvancedFishing_BP"
set "RP_DEST=!MOJANG_DIR!\development_resource_packs\AdvancedFishing_RP"

echo.
echo [1/2] Syncing Behavior Pack (BP)...
if not exist "%BP_DEST%" mkdir "%BP_DEST%"
robocopy "%BP_SRC%" "%BP_DEST%" /MIR /FFT /R:1 /W:1 /NFL /NDL /NJH /NJS /nc /ns /np
if %ERRORLEVEL% GTR 7 (
    echo [ERROR] Failed to sync BP! Error code: %ERRORLEVEL%
    exit /b %ERRORLEVEL%
)
echo [OK] Behavior Pack synced to:
echo      %BP_DEST%

echo.
echo [2/2] Syncing Resource Pack (RP)...
if not exist "%RP_DEST%" mkdir "%RP_DEST%"
robocopy "%RP_SRC%" "%RP_DEST%" /MIR /FFT /R:1 /W:1 /NFL /NDL /NJH /NJS /nc /ns /np
if %ERRORLEVEL% GTR 7 (
    echo [ERROR] Failed to sync RP! Error code: %ERRORLEVEL%
    exit /b %ERRORLEVEL%
)
echo [OK] Resource Pack synced to:
echo      %RP_DEST%

echo.
echo ===================================================
echo   Update completed successfully!
echo ===================================================
exit /b 0

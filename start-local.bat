@echo off
setlocal
cd /d "%~dp0"

if not exist "node_modules\.bin\vite.cmd" (
  echo Dependencies are missing. Run npm ci first.
  pause
  exit /b 1
)

echo Starting RETHorizon website locally...
echo Open the URL shown below in your browser. Press Ctrl+C to stop.
call npm run dev -- --host 127.0.0.1

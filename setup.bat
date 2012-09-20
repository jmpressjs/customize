@echo off
start /B /WAIT cmd /c npm install wpt -g
start /B /WAIT cmd /c npm install wpt
start /B /WAIT cmd /c wpt init
start /B /WAIT cmd /c npm install
git submodule init
git submodule update

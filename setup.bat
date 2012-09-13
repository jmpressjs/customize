@echo off
start /B /WAIT cmd /c npm install wpt -g
start /B /WAIT cmd /c npm install wpt
wpt init
start /B /WAIT cmd /c npm install

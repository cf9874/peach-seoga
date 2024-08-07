

!macro customInstall
  DetailPrint "Register evehq-ng URI Handler"
  DeleteRegKey HKEY_CLASSES_ROOT "PeachSeoGa"
  WriteRegStr HKEY_CLASSES_ROOT "PeachSeoGa" "URL Protocol" ""
  WriteRegStr HKEY_CLASSES_ROOT "PeachSeoGa\shell" "" ""
  WriteRegStr HKEY_CLASSES_ROOT "PeachSeoGa\shell\Open" "" ""
  WriteRegStr HKEY_CLASSES_ROOT "PeachSeoGa\shell\Open\command" "" "$INSTDIR\${APP_EXECUTABLE_FILENAME} %1"
!macroend


!macro customUnInstall
  DeleteRegKey HKCR "PeachSeoGa" 
!macroend
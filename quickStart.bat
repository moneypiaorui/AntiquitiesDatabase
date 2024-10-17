cd Nextjs
npm run build && (
    xcopy /s /y /e out\* ..\server\public\     		
	cd ..
    	node server/app.js
pause

)

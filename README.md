# Image Processing API 

## Expected Output Behavior

This API takes URL endpoint parameters that include an image name, width, and height.  The image of the specified name is then returned to the browser in the requested size.

## To Get Started
1. Node must be updated to version v12.22.12 <br>
 	-Using the command line at the project location enter the follwing: <br>
	1. npm cache clean -f <br>
	2. npm install -g n <br>
	3. sudo n 12.22.12 <br>
	4. node -v (To confirm version v12.22.12) <br>
	5. hash -r (if the version has not changed using the command above try this command and re run the node -v command) <br>

2. Test Script
	- -Using the command line at the project location type: NPM run test

3. Start nodemon and run index.ts 
	- -Using the command line at the project location type: NPM run start

4. Build Project 
	- -Using the command line at the project location type: node build/index

## Endpoints that should be accessed to show the required functionality.

1. https://XXXXXXXXjupyterlnsdygces-3000.udacity-student-workspaces.com/api<br>
	<ins>If the main api endpoint is typed then the user is prompted with instructions to use the api.</ins><br>
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Resonse in browser:<br>
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Use the following URL extension and prameters to resize images: /api/resize/?filename=<...>&width=<...>&height=<...>
		
2. https://XXXXXXXXjupyterlnsdygces-3000.udacity-student-workspaces.com/api/resize<br>
	<ins>If the resize endpoint is typed however the user forgets to add parameters they will be promted with instructions add the URL parameters.</ins><br>
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Resonse in browser:<br>		
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;No URL parameters found.  Be sure to use the following parameter format in the URL /resize/?filename=<...>&width=<...>&height=<...>'"

3. https://XXXXXXXXjupyterlnsdygces-3000.udacity-student-workspaces.com/api/resize/?filename=fjord&width=300&height=200<br>
	<ins>-The URL is typed with correct parameters and a valid photo name.</ins><br>
	 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Resonse in browser:	<br>	
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The resized photo is displayed with the photo name and size below it<br>
	<ins>-The URL is typed with an incorrect photo name</ins><br>
	 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Resonse in browser:<br>		
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Error: Input file is missing<br>
	<ins>-The URL is typed with an invalid width or height</ins><br>
	 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Resonse in browser:<br>		
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Width parameter not found<br>
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;or<br> 
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Height parameter not found<br>
		
4. A valid working endpoint that would be returned properly by the api is as follows:<br>
	EndPoint: /api/resize/?filename=fjord&width=300&height=200

## Valid Photo names to use in the endpoint
	1. encenadaport
	2. fjord
	3. icelandwaterfall
	4. palmtunnel
	5. santamonica
	

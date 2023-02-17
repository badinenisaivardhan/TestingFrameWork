﻿# poc-parsing-framework
 
## How to run this project:

* Install Nodejs runtime environment: https://nodejs.org/en/download/ (I am using version 15.4.0)
* Once NodeJs is installed you will be able to run npm commands: ```npm install ts-node -g``` (this will allow you to run the typescript files)
* Clone the project and enter: ```npm install``` in the root of the project
* You can run the project by entering: ```npm run build```, and after that ```npm run start:prod``` (this will run the transpiled project in the dist folder)
* We can run directly the project in typescript and perform jit (just in time transpilation) because we installed ts-node globally: ```npm start```. But by doing this
our parsing file will parse unecessary files, and will return an absurd amount of useless information. It would be nice to update the parsing files to filer only the files we actually want to parse, so that we don't have to build our project and then run in the dist folder.



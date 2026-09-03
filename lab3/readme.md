# HTTP(Hyper Text transfer Protocol) Module
    It is build in Node.js moodule which allow devloper to create web server and web client without any installing any external package.
    One of the most important module in Node.js ,originally  designed for building scalable network application and web services
    1-Create web Servers
    2-Handle client Request
    3-Build REST APIs
    4-Non-blocking I/O
    5-Foundation of Express.jS


    npm=node package manager
    npm init -y  for making project 
    npm i <pacakage name>  install any pacakge
    npm unistall <pacakage name>  unistall any pacakage
    npm i <pacakge name> -D -for devloper purpose only 
    npm start- normal program
    npm run dev- execute the nodemon programm for devlopers-server reload automatically on thr behalf of devlopers 
    98% we use the [npm run dev]

## http status code ->res.WriteHead(),res.SetStatus()
   - 200->OK
   - 201->Created
   - 400->Bad request
   - 403->Forbidden
   - 404->Not found
   - 500-> Internal Server Error

### server can send to the client
    1-HTML content-[prg3,prg2]
    2-HTML file-[prg5]
    3-json data-[prg4]
    4-plain file
    5-js file
    6-any file to download
    7-etc
### Types of inforamtion->res.writeHead(),res.SetStatus()
    1-text/html-for html file/content
    2-text/json-for json data
    3-text/css-for css file/content
    4-application
    5-text/plain-for plain text only
### Note:    .gitignore -> This file contains the list of files that is not added to to github,these files/folder will not push to Github
    

    

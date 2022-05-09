# blocking-node
# Steps to test
* send a GET request from Postman to http://localhost:3001/block-me from postman
* send a GET request from Postman to http://localhost:3001/block-me-2 from postman
* In the same time send a get request from brower to http://localhost:3001/browser 

Result : Request 2 is going to stall for two minutes

# RESTful_API_MySQL

The entire application is contained within the `app.js` file.

## Install

    npm init
    npm install

## Run the app

    node app.js
    
# REST API

The REST API to the RESTful_API_MySQL app is described below.

## Get list of Articles

### Request

`GET /articles`

    http://localhost:3000/articles
    
### Response

    All existing articles will be displayed
    
## Create a new Article

### Request

`POST /articles`

   http://localhost:3000/articles
   postman:
    body = {
    title="Number 1 title",
    content="Number 1 content"
    }
   
### Response

   Article with specified title and content will be created

## Delete Articles

### Request

`DELETE /articles`

   http://localhost:3000/articles

### Response

   All existing articles will be deleted

## Get a specific Article

### Request

`GET /articles/:articleTitle`

   http://localhost:3000/articles/Number%201%20title

### Response

    Specific article will be displayed or error if article does not exist

## Update a Article

### Request

`PUT /articles/:articleTitle`

    http://localhost:3000/articles/Number%201%20title
    postman:
     body = {
     title="Number 10 title",
     content="Number 5 content"
    }
      
### Response

    Found article title will be updated to "Number 10 title" and content to "Number 5 content"

## Delete a specific Article

### Request

`DELETE /thing/id`

    http://localhost:3000/articles/Number%201%20title

### Response

    Specific article with title="Number 1 title" will be deleted

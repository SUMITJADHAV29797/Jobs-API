###Jobs-API - 

This is an example of jobs API backend application

####Install - 
````
git clone https://github.com/SUMITJADHAV29797/Jobs-API.git
````
````
cd Jobs-API/
````
####Run the app -
````
npm start
````
####API - 

#####/auth/register - 

Post request : create a new user

Example :
````
http://localhost:3000/ap/v1/auth/register
````
Sample Response : 
````
{
    "user": {
        "name": "leo",
        "email": "leo@gmail.com",
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2M2I1M2VlNmIzYWM3Mjc2NWZmYjUxNTUiLCJuYW1lIjoibGVvIiwiaWF0IjoxNjcyODIyNTAyLCJleHAiOjE2NzU0MTQ1MDJ9.vbZqopBp7eUo-rd2LeGPkfbTuzWwuJfywVvmW-VfGfw"
    }
}
````
#####/auth/login

Post request : verifies email and password

Example :
````
http://localhost:3000/ap/v1/auth/login
````
Sample Response :
````
{
    "user": {
        "name": "leo",
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2M2I1M2VlNmIzYWM3Mjc2NWZmYjUxNTUiLCJuYW1lIjoibGVvIiwiaWF0IjoxNjcyODIzMzQ0LCJleHAiOjE2NzU0MTUzNDR9.xwEmKoX0vkClzzpMj223_VAVMZD0yWLhHpaS-HgWdeU"
    }
}
````
#####/jobs

Post request : Creates a job

Example : 
````
http://localhost:3000/ap/v1/jobs
````
Sample Response :
````
{
    "company": "apple",
    "position": "intern",
    "createdBy": "63b53ee6b3ac72765ffb5155",
    "status": "pending"
}
````
#####/jobs

Get request : gives a list of all jobs created by a user and total number of jobs

Example : 
````
http://localhost:3000/ap/v1/jobs
````
Sample Response :
````
{
    "jobs": [
        {
            "status": "pending",
            "_id": "63b555c4e1d05b7aaf872c35",
            "company": "apple",
            "position": "intern",
            "createdBy": "63b53ee6b3ac72765ffb5155",
            "__v": 0
        },
        {
            "status": "pending",
            "_id": "63b557e8e1d05b7aaf872c37",
            "company": "google",
            "position": "software developer",
            "createdBy": "63b53ee6b3ac72765ffb5155",
            "__v": 0
        },
        {
            "status": "pending",
            "_id": "63b557f9e1d05b7aaf872c39",
            "company": "netflix",
            "position": "front end developer",
            "createdBy": "63b53ee6b3ac72765ffb5155",
            "__v": 0
        },
        {
            "status": "pending",
            "_id": "63b55811e1d05b7aaf872c3b",
            "company": "quora",
            "position": "full stack developer",
            "createdBy": "63b53ee6b3ac72765ffb5155",
            "__v": 0
        }
    ],
    
    "count": 4
}
````
#####/jobs/jobId

Get request : gives a single job

Example :
````
 http://localhost:3000/ap/v1/jobs/63b557f9e1d05b7aaf872c39
````
Sample Response :
````
{
    "job": {
        "status": "pending",
        "_id": "63b557f9e1d05b7aaf872c39",
        "company": "netflix",
        "position": "front end developer",
        "createdBy": "63b53ee6b3ac72765ffb5155",
        "__v": 0
    }
}
````
#####/jobs/jobId

Patch request : updates a job data

Example : 
````
http://localhost:3000/ap/v1/jobs/63b557f9e1d05b7aaf872c39
````
Sample Response :

######Before sending patch request :
````
{
    "job": {
        "status": "pending",
        "_id": "63b557f9e1d05b7aaf872c39",
        "company": "netflix",
        "position": "front end developer",
        "createdBy": "63b53ee6b3ac72765ffb5155",
        "__v": 0
    }
}
````

######After sending patch request :
````
{
    "job": {
        "status": "pending",
        "_id": "63b557f9e1d05b7aaf872c39",
        "company": "twitter",
        "position": "senior software developer",
        "createdBy": "63b53ee6b3ac72765ffb5155",
        "__v": 0
    }
}
````
#####/jobs/jobId

Delete request : Deletes a job

Example : 
````
http://localhost:3000/ap/v1/jobs/63b557f9e1d05b7aaf872c39
````
Sample Response :
````
{
    "error": {
        "statusCode": 404,
        "message": "no job with id 63b557f9e1d05b7aaf872c39"
    }
}
````






















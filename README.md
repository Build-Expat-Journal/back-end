# back-end


BASE URL: https://bw-expat-journal-ls.herokuapp.com/api/

postgres database deployed on heroku


=== REGISTER ===

POST users/register
    - accepts a new user object

    {
	    "username": "example",  - required
	    "password": "password", - required
	    "first_name": "name", - optional 
	    "last_name": "lastname" - optional
    }
    
   - returns an object with a welcome message, user id and token

        {
            "message": "Thanks for registering, first_name",
            "token": "abcdefg",
            "id": 8
        }


=== LOGIN ===

POST users/login
    - accepts a credentials object

    {
        "username": "example", - required
        "password": "password" - required
    }

    
-  returns an object with welcome message, token and user id

        {
        "message": "Welcome example! have a token...",
        "token": "abcdefg",
        "id": 5
        }


=== USERS ===

GET /users
    - returns an array of all users

GET /users/:id - token required
    - returns a user object by id. 
    - contains a `trips` key with an array of that user's trips

GET /users/:id/trips
    - returns an array of the user's trips


=== TRIPS ===

GET /trips
    - returns an array of all trips

GET /trips/:id
    - returns a trip object by id
    -contains a `photos` key with an array of that trip's photos

POST /trips
    - accepts a new trip object 

    {
    "trip_title": "A super fun vacation",
    "country": "Portugal", - required
    "city": "Lisbon",
    "trip_desc": "We went to Lisbon. It was fun.",
    "user_id": 3 - required
 }

PUT /trips/:id - token required 
    - accepts a modified trip object
    - returns updated trip object

DELETE /trips/:id - token required
    - returns a deleted message with the id of the deleted trip

        {
        "message": "Deleted trip with id 1"
        }

=== PHOTOS ===

GET /photos 
    - returns an array of all photos

GET /photos/:id
    - returns a photo object

    {
        "id": 1,
        "trip_id": 1,
        "user_id": 1,
        "img_caption": "the colosseum",
        "img_url": "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
    }

GET /trips/trip_id/photos
    - returns an array of a trip's photos

POST /photos
    - accepts a new photo object 

    {
        "trip_id": 5, - required
        "img_url": "wwww.unsplash.com/photo", - required
        "img_caption": "Vegas from Hotel",
        "user_id": 4 - required
    }

DELETE /photos/:id
     - deletes a photo by id
     - returns a deleted message

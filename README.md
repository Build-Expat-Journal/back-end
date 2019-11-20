# EXPAT JOURNY BACK-END
*Sandra Kimball's Version*


## Welcome 
_Currently deployed at:_ https://test-expat-db.herokuapp.com/


## Routes

GET: <br>
/api/users 
returns all `users`.

/api/users/:id
returns specific `user`.

/api/users/:id/posts
returns all of a user's `posts`. 

/api/users/:id/posts/:id
returns a user's specific `posts`. 


POST:<br>
/auth/register
Creates new `user`.

/auth/login
Login existing `user`.

/api/posts
Adds new `post`.


PUT:<br>
/:id/posts/:id
Edits a specific `post`.
---

DELETE:<br>
/:id/posts/:id
Removes a specific `post`.




### Users
| Column    | Type  | Required  | Key     |
|-----------|-------|-----------|---------|
| id        | int   | yes       | primary |
| name      | str   | yes       |         |
| username  | str   | yes       |         |
| password  | str   | yes       |         |
| email     | str   | yes       |         |
| location  | str   | no        |         |
| profile_img| str  | no        |         |


### Posts
| Column    | Type  | Required  | Key     |
|-----------|-------|-----------|---------|
| id        | int   | yes       | primary |
| title     | str   | no        |         |
| date      | int   | yes       |         |
| content   | str   | no        |         |
| image     | str   | no        |         |
| user_id   | int   | yes       | foreign |
| city_id   | int   | no        | foreign |
| country_id| int   | no        | foreign |


### Country
| Column    | Type  | Required  | Key     |
|-----------|-------|-----------|---------|
| id        | int   | yes       | primary |
| name      | str   | yes       |         |


### Cities
| Column    | Type  | Required  | Key     |
|-----------|-------|-----------|---------|
| id        | int   | yes       | primary |
| name      | str   | yes       |         |
| country_id| int   | yes       | foreign |


### Location
| Column    | Type  | Required  | Key     |
|-----------|-------|-----------|---------|
| id        | int   | yes       | primary |
| city_id   | int   | yes       | foreign |
| country_id| int   | yes       | foreign |

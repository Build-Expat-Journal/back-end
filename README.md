# EXPAT JOURNY BACK-END
*Sandra Kimball's Version*

## Table of Contents

- [Welcome](#welcome)
- [Routes](#routes)
- [Tables](#tables)



## Welcome 
_Currently deployed at:_ https://test-expat-db.herokuapp.com/
_Expat Journal Website:_ https://expatjournal.now.sh/

This was a project designed to give a more porfessional platform to expats for their journeys.

This database is hosted on Heroku.

Two separate databases were built for this project as part of a competition between the two backend developers.

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


DELETE:<br>
    /:id/posts/:id
    Removes a specific `post`.


## Tables

### Users
| Column    | Type  | Required  | Key     |
|-----------|-------|-----------|---------|
| id        | int   | yes       | primary |
| name      | str   | yes       |         |
| first_name| str   | yes       |         |
| last_name | str   | yes       |         |
| password  | str   | yes       |         |
| email     | str   | yes       |         |
| city_id   | str   | no        |         |
| country_id| str   | yes       | foreign |
| profile_img| str  | no        | foreign |

city_id REFERENCES id IN TABLE cities </br>
country_id REFERENCES id IN TABLE country


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

city_id REFERENCES id IN TABLE cities </br>
country_id REFERENCES id IN TABLE country </br>
user_id REFERENCES id IN TABLE users

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

country_id REFERENCES id IN TABLE country </br>


### Location
| Column    | Type  | Required  | Key     |
|-----------|-------|-----------|---------|
| id        | int   | yes       | primary |
| city_id   | int   | yes       | foreign |
| country_id| int   | yes       | foreign |

city_id REFERENCES id IN TABLE cities </br>
country_id REFERENCES id IN TABLE country </br>



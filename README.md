# EXPAT JOURNY BACK-END
*Sandra Kimball's Version*

## Table of Contents

- [Welcome](#welcome)
- [Routes](#routes)
- [Tables](#tables)
- [Contributing](#contributing)



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

    /api/users/:id/posts
    Adds new `post`.


PUT:<br>
    /:id
    Edits a specific `user`'s information.
    
    /:id/posts/:id
    Edits a specific `post`.


DELETE:<br>
    /:id
    Deletes a specific `user`.

    /:id/posts/:id
    Deletes a user's specific `post`.


## Tables

### Users
| Column    | Type  | Required  | Key     | Unique  |
|-----------|-------|-----------|---------|---------|
| id        | int   | yes       | primary |         |
| username  | str   | yes       |         | Yes     |
| first_name| str   | yes       |         |         |
| last_name | str   | yes       |         |         |
| password  | str   | yes       |         |         |
| email     | str   | yes       |         | Yes     |
| city_id   | str   |           |         |         |
| profile_img| str  |           | foreign |         |

city_id REFERENCES id IN TABLE cities 


### Posts
| Column    | Type  | Required  | Key     |
|-----------|-------|-----------|---------|
| id        | int   | yes       | primary |
| title     | str   |           |         |
| date      | int   | yes       |         |
| content   | str   |           |         |
| image     | str   |           |         |
| user_id   | int   | yes       | foreign |
| city_id   | int   |           | foreign |

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



## Contributing

You are welcomed to contribute using [Github Flow](https://guides.github.com/introduction/flow/). Create a branch, add commits, and [open a pull request](https://github.com/workout-tracktor/labspt4-workout-tracker-BE/compare).
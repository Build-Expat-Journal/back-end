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

This was a project designed to serve as a professional platform to expats to log,blog, share and teach about their journeys and experiences, showcasing the world through their eyes. 

This database is hosted on Heroku.

Two separate databases were built for this project as part of a competition between the two backend developers.

## Routes

GET: <br>
    /api/users 
    _returns all `users`._

    /api/users/:id
   _returns specific `user`._

    /api/users/:id/posts
    _returns all of a user's `posts`._

    /api/users/:id/posts/:id
    _returns a user's specific `posts`._ 

    /api/posts
    _returns all users' posts._

    /api/posts/city:id
    _returns posts by city._

    /api/posts/country/:id
    _returns posts by country._


POST:<br>
    /auth/register
    _Creates new `user`._

    /auth/login
    _Login existing `user`._

    /api/users/:id/posts
    _Adds new `post`._


PUT:<br>
    /:id
    _Edits a specific `user`'s information._


DELETE:<br>
    /:id
    _Deletes a specific `user`._

    /:id/posts/:id
    _Deletes a user's specific `post`._


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
# EXPAT JOURNY BACK-END
*Sandra Kimball's Version*

User <== Trips <== Posts & Location*
Location* <== City & Country 

## Welcome 
_Currently deployed at:_ https://test-expat-db.herokuapp.com/


## Routes

GET:
/api/users 
returns all users 

/api/users/:id
returns specific user

/api/users/:id/trips
returns a user's trips 

/api/users/:id/trips/:id
returns posts in a user's trip 
---

POST:
/auth/register
creates new `user`

/auth/login
login existing `user`

/api/trips
creates new `trip` 

/api/posts
adds new `post` under a `trip`



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

### Trips
| Column    | Type  | Required  | Key     |
|-----------|-------|-----------|---------|
| id        | int   | yes       | primary |
| created_at| int   | yes       | primary |
| title     | str   | no        |         |
| to(date)  | str   | no        |         |
| from(date)| str   | no        |         |
| user_id   | int   | yes       | foreign |
| country_id| int   | yes       | foreign |
| image     | str   | no        |         |
| posts     | str   | no        |         |


### Posts
| Column    | Type  | Required  | Key     |
|-----------|-------|-----------|---------|
| id        | int   | yes       | primary |
| title     | str   | yes       |         |
| date      | str   | no        |         |
| created_at| int   | yes       |         |
| content   | str   | no        |         |
| image     | str   | no        |         |
| trip_id   | int   | yes       | foreign |
| user_id   | int   |           | foreign |

### Country
| Column    | Type  | Required  | Key     |
|-----------|-------|-----------|---------|
| id        | int   | yes       | primary |
| name      | str   | yes       |         |

### City
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

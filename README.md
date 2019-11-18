# EXPAT JOURNY BACK-END
*Sandra Kimball's Version*

User <== Trips <== Posts & Location*
Location* <== City & Country 

## CRUD Endpoints

| Method | Endpoint | Details | Requires |

| GET | /api/users | returns list of users | na |
| GET | /api/users/:id | returns specific user | na |
| GET | /api/users/:id/trips | returns a user's trips | na |
| GET | /api/users/:id/trips/:id | returns posts in a user's trip | na |

| POST | /auth/register |creates new `user` | `username`, `name`, `password`, `current_location`|
| POST | /auth/login | login existing `user` | `username`, `password`|
| POST | /api/trips | creates new `trip` | `title`, `country`, `user_id`|
| POST | /api/posts | adds new `post` under a `trip` | `title`, `trip_id`|


## All Available Data Paramaters

*Required

Users: *id, name, current_location, username, password, profile_img

Countries: id, name

Cities: id, name, country_id

Locations: id, country_id, city_id

Posts: id, title, date, created_at _(auto)_, trip_id, content, image

Trips: id, created_at _(auto)_, title, from (date), to (date), user_id, country_id, image, posts

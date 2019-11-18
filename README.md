# EXPAT JOURNY BACK-END

User <== Trips <== Posts & Location*
Location* <== City & Country 


| Method | Endpoint      | Description                                                                                                                                                                                                                                                            |
| ------ | ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| POST   | /api/register | Creates a `user` using the information sent inside the `body` of the request. Requires `username`, `name`, `password`, `current_location`.  |

| POST   | /api/login    | Credentials sent inside `body` authenticates the user. Logging in requires `username` and `password`. |

| POST   | /api/users/    | Adds trip. Requires: `from date`,  |

| POST   | /api/users/trip    | Adds post. Requires: `title`, `trip_id` |

| GET    | /api/users    | Returns users.    |

| GET   | /api/users/:id    | Returns specific user, username, name, current_location, password, trips. |

| GET   | /api/users/:id/trips   | Returns user's trips |

| GET   | /api/users/:id/trips/:id   | Returns a specific trip with all its posts |
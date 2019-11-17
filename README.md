# EXPAT JOURNY BACK-END

User <== Trips <== Posts & Location*
Location* <== City & Country 


| Method | Endpoint      | Description                                                                                                                                                                                                                                                            |
| ------ | ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| POST   | /api/register | Creates a `user` using the information sent inside the `body` of the request. Requires `username`, `name`, `password`.  |

| POST   | /api/login    | Credentials sent inside `body` authenticates the user. Logging in requires `username` and `password`. |

| GET    | /api/users    | Returns users.    |

| GET   | /api/users/:id    | Returns specific user, username, name, password, trips. |

| GET   | /api/users/:id/trips   | Returns user's trips |

| GET   | /api/users/:id/trips/:id/posts/:id   | Returns a specific trip |

<!-- | GET   | /api/users/:id/trips/:id   | Returns a specific post from a trip | -->
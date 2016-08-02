## Goals

1. Write endpoints for each CRUD operation.
2. Use Params
3. Use Queries

## Work

##### Make the following endpoints.

1.  Get all users.
  Tested with: `GET: /api/users`

2.  Get all users by language. Use `language` as a query ('english, french, spanish or klingon.')
  Tested with: `GET: /api/users?language=klingon`

3.  Get all users, filtering by privilege. Use params. ('admin, moderator, user')
  Tested with: `GET: /api/users/admin`

4.  Create a new user.
  Tested with: `POST: /api/users`

5. Create a new admin user. Use params to set their privilege. ('admin, moderator, or user')
  Tested with: `POST: /api/users/admin`

6.  Change a user's language.
  Tested with: `POST: /api/users/` + userId

7.  Add to a users favorite forums. Use params to get a user by id.
  Tested with: `POST: /api/users/forums/` + userId

8. Remove from a users favorite forums. Use delete method. Since delete cannot send data, use params to get a user by id, and query to get the forum to delete.
  Tested with: `DELETE: /api/users/forums/` + userID + `?favorite=` + forum name.

9.  Ban (delete) a user. Use method delete and params to delete a user by their id number.
  Tested with: `DELETE: /api/users/` + userID

10. Change your get all users endpoint so that it uses queries. Allow queries for age, language, city, state, and gender.

11. Find one user by id. Use params
  Tested with: `GET: /api/users/` + userId

12. Update one user by id.
  Tested with: `PUT: /api/users/` + userId

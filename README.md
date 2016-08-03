# Intermediate Node Assessment

Create the following endpoints in `server.js` using express.
Every endpoint will be using the users collection, found in `users.json`.
Each endpoint in this readme is followed by the path that will be tested. For example, 'Get all users.' will be tested by doing a `GET` request to `/api/users`.
You can test your work by running `npm test` in your CLI.
When you are finished, you should have `11 tests passed`.
Be sure to use the correct method (GET, POST, PUT, or DELETE) and the correct path (i.e. `/api/users`).

##### Make the following endpoints.

1.  Get all users.
   `GET: /api/users`

2.  Get all users by language. Use `language` as a query ('english, french, spanish or klingon.')
   `GET: /api/users?language=klingon`

3.  Get all users, filtering by privilege. Use params. ('admin, moderator, user')
   `GET: /api/users/admin`

4.  Create a new user.
   `POST: /api/users`

5. Create a new admin user. Use params to set their privilege. ('admin, moderator, or user')
   `POST: /api/users/admin`

6.  Change a user's language.
   `POST: /api/users/language` + userId

7.  Add to a users favorite forums. Use params to get a user by id.
   `POST: /api/users/forums/` + userId

8. Remove from a users favorite forums. Use delete method. Since delete cannot send data, use params to get a user by id, and query to get the forum to delete.
   `DELETE: /api/users/forums/` + userID + `?favorite=` + forum name.

9.  Ban (delete) a user. Use method delete and params to delete a user by their id number. Make sure that a get request for a user that does not exists returns 404.
   `DELETE: /api/users/` + userID

10. Change your get all users endpoint so that it uses queries. Allow queries for age, language, city, state, and gender.

11. Find one user by id. Use params
   `GET: /api/users/` + userId

12. Update one user by id.
   `PUT: /api/users/` + userId

This project is a API create with nest js and MONGODB
He is user complete authentification(register and login)
and  user CRUD

#GET all users
url : http://localhost:3000/users
method : GET


#GET  user by id
url : http://localhost:3000/users/id
method : GET

#Delete user
url : http://localhost:3000/users/id
method : DELETE

#Register user
 
 url : http://localhost:3000/users/register
 method: POST
 body: {
     name
     surname
     email
     password
 }

 #Login user
  url : http://localhost:3000/users/login
 method: POST
 body: {
     email
     password
 }

#Update user
 
 url : http://localhost:3000/users/id
 method: PUT
 body: {
     name
     surname
     email
     password
 }
 NB:id = user id you want to update
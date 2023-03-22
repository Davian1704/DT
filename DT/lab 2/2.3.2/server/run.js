var api = require('./api.js').app;
var users = require('./users.json');

api.get('/', function(request, response) {
  response.json("node.js backend");
});

api.get('/users', function(request, response) {
  response.json(users);
});

api.put('/users', function(request, response) {
  users[users.length] = request.body;
  response.json('User was saved succesfully');
});


api.delete('/users/:index', function(request, response) {
  const index = request.params.index;
  index.split(":");
  console.log(index[1]-1);
  users.splice(index[1]-1, 1);
  console.log(users);
  response.json('User with index ' + index[1]-1 + ' was deleted');
});

api.listen(3000, function(){
  console.log('CORS-enabled web server is listening on port 3000...');
});
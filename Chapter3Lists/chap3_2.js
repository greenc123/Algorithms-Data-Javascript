const fs = require("fs")
const List = require('./chap3_1')

function createArr(file) {
  console.log(file, 'file')
  var arr = fs.readdir(`${file}`, (err, files) => {
    if (err) throw err
    return files.split('\n').forEach((e) => {
      e = e.trim()
      console.log(e)
    })
  })
}

var movies = createArr('./films.txt');
var movieList = new List();
var customers = new List();

for (var i = 0; i < movies.length; ++i) {
   movieList.append(movies[i]);
}

print("Available movies: \n");
displayList(movieList);
checkOut("Jane Doe", "The Godfather", movieList, customers);
print("\nCustomer Rentals: \n");
displayList(customers);


var person = {
    fullName: function(city, country) {
      return this.firstName + " " + this.lastName + ", " + city + ", " + country;
    }
  };

  var person1 = {
    firstName: "Akshat",
    lastName: "garg"
  };

  var person2 = {
    firstName: "vansh",
    lastName: "verma"
  };

  var fullName1 = person.fullName.call(person1, "shamli", "UP");
  var fullName2 = person.fullName.call(person2, "Roorkee", "UK");

  var fullName3 = person.fullName.apply(person1, ["Noida", "UP"]);
  var fullName4 = person.fullName.apply(person2, ["Haridwar", "UK"]);

  var output = document.getElementById("output");
  output.innerHTML += "Full Name 1: " + fullName1 + "<br>";
  output.innerHTML += "Full Name 2: " + fullName2 + "<br>";
  output.innerHTML += "Full Name 3: " + fullName3 + "<br>";
  output.innerHTML += "Full Name 4: " + fullName4 + "<br>";







  
  var numbers = [8, 27, 64, 125, 216];
  var cubeRootArray = numbers.map(function(number) {
    return Math.cbrt(number);
  });
  document.getElementById("inputArray").textContent = numbers.join(", ");
  document.getElementById("outputArray").textContent = cubeRootArray.join(", ");






  
var counter = 0;

function callFunction() {
    counter++;

    console.log("Function called: " + counter);

    if (counter === 5) {
        clearInterval(interval);
    }
}

var interval = setInterval(callFunction, 3000);









function filterAge() {
    var table = document.getElementById("peopleTable");
    var rows = table.getElementsByTagName("tr");

    var filteredRows = [];

    for (var i = 1; i < rows.length; i++) {
      var ageCell = rows[i].getElementsByTagName("td")[1];
      var age = parseInt(ageCell.textContent || ageCell.innerText);

      if (age >= 25) {
        filteredRows.push(rows[i]);
      }
    }

    filteredRows.sort(function(a, b) {
      var ageA = parseInt(a.getElementsByTagName("td")[1].textContent || a.getElementsByTagName("td")[1].innerText);
      var ageB = parseInt(b.getElementsByTagName("td")[1].textContent || b.getElementsByTagName("td")[1].innerText);
      return ageB - ageA;
    });

    while (table.rows.length > 1) {
      table.deleteRow(1);
    }

    for (var j = 0; j < filteredRows.length; j++) {
      table.appendChild(filteredRows[j]);
    }
  }

  filterAge();






  var people = [
    { name: "Ashish", age: 23 },
    { name: "Ajay", age: 21 },
    { name: "Arvind", age: 26 },
    { name: "Mahesh", age: 28 },
    { name: "Jay", age: 19 }
  ];

  var peopleList = document.getElementById('people-list');

  var mappedPeople = people.map(function(person) {
    var li = document.createElement('li');
    li.textContent = person.name + ' - ' + person.age;

    peopleList.appendChild(li);
  });





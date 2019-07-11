// Section: Objects vs. Arrays
// Lightning Exercise 1
const car = {
  color: "red",
  year: "2015",
  make: "Ford",
  model: "Mustang"
}

// Use a template literal to embed the selected object property value into a string
// Be sure to use tic marks around the string. Quotation marks will not work. 
console.log(`The color of the car is ${car.color}`)

// Lightning Exercise 2
const animalNames = ["Kipper","Jack","Gypsy","Angus","Seymour Bouts","Sharky"]

// Lightning Exercise 3
const family = [
  {
    name: "Anna",
    relation: "mother"
  },
  {
    name: "Don",
    relation: "father"
  },
  {
    name: "Graham",
    relation: "brother"
  },
  {
    name: "Andrea",
    relation: "sister"
  }
]

// Section: Setting and Accessing Values on Objects
// Lighting Exercise - Dot Notation
const wardrobe = {
  height: 80,
  manufacturer: "Killibrew & Sons",
  contents: ["Dress shirt", "Jeans", "Suit", "Skirt", "Tennis shoes"],
  depth: 38,
  width: 50
}

console.log(`The height of the wardrobe is: ${wardrobe.height}`)
console.log(`The manufacturer of the wardrobe is: ${wardrobe.manufacturer}`)
console.log(`The contents of the wardrobe are: ${wardrobe.contents[0]}, ${wardrobe.contents[1]}, ${wardrobe.contents[2]}, ${wardrobe.contents[3]}, ${wardrobe.contents[4]}`)
console.log(`The depth of the wardrobe is: ${wardrobe.depth}`)
console.log(`The width of the wardrobe is: ${wardrobe.width}`)

wardrobe.material = "Cedar";
console.log(wardrobe);

// Object for Next Lightning Exercises
const empireStateBuilding = {
  stories: 103,
  height: 1453,
  address: "350 Fifth Avenue, Manhattan, New York 10118",
  squareFeet: 2768591,
  constructionDate: 1931,
  cost: 40948900,
  owner: "Empire State Realty Trust",
  eastWestLength: 424,
  northSouthLength: 187,
  architect: "Shreve, Lamb & Harmon"
}

// Lightning Exercise 1
console.log(`${empireStateBuilding["eastWestLength"]}`);
console.log(`${empireStateBuilding["northSouthLength"]}`);

// Lightning Exercise 2
console.log(`${empireStateBuilding["stories"]}`);
console.log(`${empireStateBuilding["height"]}`);
console.log(`${empireStateBuilding["address"]}`);
console.log(`${empireStateBuilding["squareFeet"]}`);
console.log(`${empireStateBuilding["constructionDate"]}`);
console.log(`${empireStateBuilding["cost"]}`);
console.log(`${empireStateBuilding["owner"]}`);
console.log(`${empireStateBuilding["architect"]}`);

// Section: Arrays as Values
const nashvilleSoftwareSchool = {
  founded: 2012,
  director: "John Wark",
  instructors: {
    fullTime: ["Jisie", "Brenda", "Steve", "Joe", "Andy"],
    partTime: ["Zoe", "Nathan"]
  },
  address: "500 Interstate Blvd. S"
}

// Lightning Exercise 1
console.log(`Part-time instructors: ${nashvilleSoftwareSchool.instructors.partTime}`);
console.log(`Full-time instructors: ${nashvilleSoftwareSchool.instructors.fullTime}`);

// Lightning Exercise 2
console.log(`Part-time instructors: ${nashvilleSoftwareSchool.instructors.partTime[0]}`);
console.log(`Full-time instructors: ${nashvilleSoftwareSchool.instructors.fullTime[4]}`);


// ------- Practice Exercise -------
// Output the following value to the console:
// Paul McCartney was in the Beatles from 1960 to 1970. He was born in 1942. He contributed heavily to the Magical Myster Tour Album.

const beatles = {
  albums: ["Abbey Road", "Sgt Peppers Lonely Heart's Club Band", "Revolver", "Magical Mystery Tour", "Something New"],
  history: {
      formed: 1960,
      disbanded: 1970
  },
  members: [
      {
          name: "George Harrison",
          birth: 1943,
          death: 2001
      },
      {
          name: "Paul McCartney",
          birth: 1942,
          death: null
      },
      {
          name: "John Lennon",
          birth: 1940,
          death: 1980
      },
      {
          name: "Ringo Starr",
          birth: 1940,
          death: null
      }
  ]
}

const who = beatles.members[1].name;
const beginning = beatles.history.formed;
const end = beatles.history.disbanded;
const yearBorn = beatles.members[1].birth;
const whichAlbum = beatles.albums[3];
// using concatination: 
console.log(who + " was in the Beatles from " + beginning + " to " + end + ". He was born in " + yearBorn + ". He contributed heavily to the " + whichAlbum + ".");
// using template literal:
console.log(`${who} was in the Beatles from ${beginning} to ${end}. He was born in ${yearBorn}. He contributed heavily to the ${whichAlbum}.`)
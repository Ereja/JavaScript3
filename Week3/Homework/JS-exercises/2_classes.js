'use strict';

//In this exercise you'll read a little story. It's your job to turn the characters in it into classes and instantiate the class into the characters you read about!

/*
# STORY
Abdulkareem is a 35 year old man, that lives in Riyadh. He has a wife and 3 children. As a day job he's a construction worker, that makes houses. He likes to eat dates and smoke water pipe.

Abdulkareem has a horse, named Adel. The horse is 15 years old and has the color brown. Usually the horse eats grass or helps transport materials for Abdulkareem.

And they lived happily ever after!
*/

//Shared properties of Abdulkareem and Adel: name, age, location
//Abdulkareem unique properties wife, 3 children, has a horse, likes, occupation
//Adel unique properties color

class Mammal {
  constructor(name, age, location) {
    this.name = name;
    this.age = age;
    this.location = location;
  }
}

class Human extends Mammal {
  constructor(
    name,
    age,
    location,
    spouse,
    children,
    pets,
    likes,
    occupation,
    workActivities,
  ) {
    super(name, age, location);
    this.spouse = spouse;
    this.children = children;
    this.pets = pets;
    this.likes = likes;
    this.occupation = occupation;
    this.workActivities = workActivities;
  }

  likesTo() {
    console.log(`${this.name} likes ${this.likes[0]} and ${this.likes[1]}.`);
  }

  work() {
    console.log(
      `${this.name} is a ${this.occupation} and is ${this.workActivities}.`,
    );
  }

  biography() {
    console.log(
      `${this.name} is ${this.age} years old. ${this.name} lives in ${this.location}. ${this.name} has a ${this.spouse}, ${this.children} children and a ${this.pets}. ${this.name} works as a ${this.occupation}.`,
    );
  }
}

class Horse extends Mammal {
  constructor(name, age, location, color) {
    super(name, age, location);
    this.color = color;
  }

  eatGrass() {
    console.log(`${this.name} is eating grass.`);
  }

  transportMaterials() {
    console.log(`${this.name} is transporting materials.`);
  }

  details() {
    console.log(
      `${this.name} is ${this.age} years old. ${this.name} is located in ${this.location} and has ${this.color} hair.`,
    );
  }
}

//abdulkareem has a lot of properties, to make it more readable assigned seperately for readability
const abdulkareem = new Human('Abdulkareem');
abdulkareem.age = 35;
abdulkareem.location = 'Riyadh';
abdulkareem.spouse = 'wife';
abdulkareem.children = 3;
abdulkareem.pets = 'horse';
abdulkareem.likes = ['dates', 'water pipe'];
abdulkareem.occupation = 'construction worker';
abdulkareem.workActivities = 'building houses';

//methods
abdulkareem.likesTo();
abdulkareem.work();
abdulkareem.biography();

//since adel has only 4 properties, it is not too confusing to create new horse object like this:
const adel = new Horse('Adel', 15, 'Riyadh', 'brown');
adel.eatGrass();
adel.transportMaterials();
adel.details();

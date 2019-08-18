// CODE here for your Lambda Classes

class Person {
  constructor(attr) {
    this.name = attr.name;
    this.age = attr.age;
    this.location = attr.location;
  }
  speak() {
    return `Hello, my name is ${this.name}, I am from ${this.location}.`
  }
}

class Instructor extends Person {
  constructor(attr) {
    super(attr);
    this.specialty = attr.specialty;
    this.favLanguage = attr.favLanguage;
    this.catchPhrase = attr.catchPhrase;
  }

  demo(subject) {
    return `Today we are learning about ${subject}.`
  }

  grade(student, subject) {
    return `${student.name} receives a perfect score on ${subject}`
  }
}

class Student extends Person {
  constructor(attr) {
    super(attr);
    this.previousBackground = attr.previousBackground;
    this.favSubjects = attr.favSubjects;
  }

  listsSubjects(student) {
    return `${student.name} favorite languages are ${student.favSubjects}`
  }

  PRAssignment(student, subject) {
    return `${student.name} has submitted a PR for ${subject}`
  }

  sprintChallenge(student, subject) {
    return `${student.name} has begun sprint challenge on ${subject}`
  }
}

class TeamLead extends Instructor {
  constructor(attr) {
    super(attr);
    this.gradClassName = attr.gradClassName;
    this.favInstructor = attr.favInstructor;
  }

  standup(channel) {
    return `${this.name} announces to ${channel}, @channel standy times!`
  }

  // takes in student object
  debugsCode(student, subject) {
    return `${this.name} debugs ${student.name}'s code on ${subject}`
  }
}

const fred = new Instructor({
  name: 'Fred',
  location: 'Bedrock',
  age: 37,
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `Don't forget the homies`
});

const barney = new Instructor({
  name: 'Barney',
  location: 'Bedrock',
  age: 30,
  favLanguage: 'Python',
  specialty: 'Backend-end',
  catchPhrase: `Fun Fun Fun`
});

const johnny = new Student({
  name: 'Johnny',
  location: 'Las Vegas',
  age: 37,
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: 'Life is but a dream',
  previousBackground: 'internet marketer',
  className: 'PT9',
  favSubjects: [
    'ReactJS',
    'API\'s',
  ],
});

const gene = new Student({
  name: 'gene',
  location: 'Las Vegas',
  age: 32,
  favLanguage: 'HTML',
  specialty: 'HTML & CSS',
  catchPhrase: 'Lets do this!',
  previousBackground: 'internet marketer',
  className: 'PT9',
  favSubjects: [
    'HTML',
    'CSS',
  ],
});

const sarah = new TeamLead({
  name: 'Sarah',
  location: 'Las Vegas',
  age: 21,
  favLanguage: 'Python',
  specialty: 'Backend Development',
  catchPhrase: 'Dont forget me',
  gradClassName: 'CS1',
  favInstructor: 'Sean'
});

const kevin = new TeamLead({
  name: 'Kevin',
  location: 'San Diego',
  age: 26,
  favLanguage: 'Python',
  specialty: 'Full Stack Developer',
  catchPhrase: 'It\'s so easy',
  gradClassName: 'CS1',
  favInstructor: 'Ryan'
});

console.log(fred.speak());
console.log(fred.demo('JavaScript'));
console.log(fred.grade(johnny, 'JavaScript'));
console.log(barney.speak());
console.log(barney.demo('Python'));
console.log(barney.grade(gene, 'HTML & CSS'));
console.log(johnny.listsSubjects(johnny));
console.log(johnny.PRAssignment(johnny, 'JavaScript'));
console.log(johnny.sprintChallenge(johnny, 'JavaScript'));
console.log(sarah.standup('webpt9'))
console.log(sarah.debugsCode(johnny, 'JavaScript'))
console.log(kevin.standup('webpt9'))
console.log(kevin.debugsCode(johnny, 'Python'))
console.log(gene.listsSubjects(gene));
function listOfNames() {
  let content = document.querySelector("#content");


  for (let x = 0; x < people.length; x++) {
    let personName = document.createElement('h1');
    let personJob = document.createElement('h2');
    personName.textContent = people[x].name
    personJob.textContent = people[x].job
    content.append(personName, personJob)
  }
}

let people = [
  { name: "Chris", job: "Teacher" },
  { name: "Joanna", job: "Student" },
  { name: "Boris", job: "Prime Minister" },
];

listOfNames(people);

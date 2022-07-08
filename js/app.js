// console.log('Fear is the mind killer.');

// ==============================
//       ANCHOR - Dramatis Personae
// ==============================

const hobbits = [
  "Frodo Baggins",
  "Samwise 'Sam' Gamgee",
  "Meriadoc 'Merry' Brandybuck",
  "Peregrin 'Pippin' Took"
];

const buddies = [
  "Gandalf the Grey",
  "Legolas",
  "Gimli",
  "Strider",
  "Boromir"
];

const baddies = [
  "Sauron",
  "Saruman",
  "The Uruk-hai",
  "Orcs"
];

const lands = [
  "The-Shire",
  "Rivendell",
  "Mordor"
];

let theShire;
let mountain;
let gollumn;
let theRing;

// ====================================
//           ANCHOR - Chapters
// ====================================



// ============
// SECTION - Chapter 1
// ============
const makeMiddleEarth = () => {

  // HINT: Make a console.log for each of your functions to make sure that, when you click, the correct function is being called!

  console.log("Chapter 1 - Make Middle Earth");

  // 1. create a section tag with an id of middle-earth

  // NOTE - Appears that you can't chain any other vanilla JS methods to document.createElement() unless they also return an element. Adding any like, appendChild() or setAttribute() throw an error eventually because they do not return an element.
  const newDiv = document.createElement('div')

  // 2. append the section to the body of the DOM.

    // NOTE - Below is an example of working to chain methods together ... if in a verbose way. Remember, VanillaJS is syntax-heavy, hence so many libraries like jQuery to 
  document
    .querySelector('body')
    .appendChild(newDiv)
    .setAttribute('id', 'middle-earth');

  // 3. use a for loop to iterate over the lands array that does the following:

  for (let a = 0; a < lands.length; a++) {
    let newArticle = document.createElement('article');
    newArticle.innerHTML = `<h1>${lands[a]}</h1>`;
    // document.newArticle.innerHTML('<h1></h1>');
    document
      .querySelector('#middle-earth')
      .appendChild(newArticle)
      .setAttribute('id', lands[a]);
  };

  //   3a. creates an article tag (there should be one for each land when the loop is done)

  //   3b. gives each land article an `id` tag of the corresponding land name

  //   3c. includes an h1 with the name of the land inside each land article

  //   3d. appends each land to the middle-earth section

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 1 complete - Made Middle Earth".



// ============
// SECTION - Chapter 2
// ============
const makeHobbits = () => {

  console.log('Chapter 2 - Make hobbits');

  // 1. display an unordered list of the hobbits in the shire.
  let hobbitList = document.createElement('ul');
  document
    .querySelector('#The-Shire')
    .append(hobbitList);

  // 2. give each hobbit a class of "hobbit"

  // hint: create a 'ul' outside the loop upon which to append the 'li's

  for (let a = 0; a < hobbits.length; a++) {
    let newListItem = document.createElement('li');
    newListItem.innerHTML = hobbits[a];
    // NOTE - append() will not let you chain .setAttribute(), but appendChild() will.
    document
      .querySelector('#The-Shire ul')
      .appendChild(newListItem)
      .setAttribute('class', 'hobbit');
  }

  // hint: get 'The-Shire' by using its id

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 2 complete - Made the Hobbits".



// ============
// SECTION - Chapter 3
// ============
const keepItSecretKeepItSafe = () => {
  console.log('Chapter 3 - Keep It Secret, Keep It Safe');

  // 1. create an empty div with an id of 'the-ring'
  theRing = document.createElement('div');
  document
    .querySelector('.hobbit')
    .appendChild(theRing)
    .setAttribute('id', 'the-ring');

  // 2. add the ring as a child of Frodo

  // hint: Frodo does not have an id, but there is a command to retrieve all elements with a certain class. This should give you an array for you to access . . .

  // when you think you have given Frodo the ring, check in your Elements tab

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 3 complete - Made the ring and gave it to Frodo".



// ============
// SECTION - Chapter 4
// ============
const makeBaddies = () => {
  console.log('Chapter 4 - Make Baddies');

  // 1. display an unordered list of baddies in Mordor
  let baddiesList = document.createElement('ul');
  document
    .querySelector('#Mordor')
    .appendChild(baddiesList);
  
  for (let a = 0; a < baddies.length; a++) {
    let listItem = document.createElement('li');
    listItem.innerHTML = baddies[a];
    document
      .querySelector('#Mordor ul')
      .appendChild(listItem)
      .setAttribute('class', 'baddy');
  }
  // 2. give each of the baddies a class of "baddy"

  // 3. remember to append them to Mordor
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 4 complete - Made the Baddies"..



// ============
// SECTION - Chapter 5
// ============
const makeBuddies = () => {
  console.log('Chapter 5 - Make Buddies');

  // 1. create an aside tag and append it to middle-earth below mordor
  const buddiesList = document.createElement('aside');
  buddiesList.innerHTML = '<ul></ul>';
  document
    .querySelector('body')
    .appendChild(buddiesList);

  // 2. display an unordered list of buddies in the aside

  for (let a = 0; a < buddies.length; a++) {
    let listItem = document.createElement('li');
    listItem.innerHTML = buddies[a];
    document
      .querySelector('aside ul')
      .appendChild(listItem)
      .setAttribute('class', 'buddy');
  }

  // 3. give each of the buddies a class of "buddy"

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 5 complete - Made the Buddies".



// ============
// SECTION - Chapter 6
// ============
const leaveTheShire = () => {
  console.log('Chapter 6 - Leave The Shire');

  // 1. grab the hobbits (the ul in which they reside) and move them to Rivendell
  document
    .querySelector('#Rivendell')
      .appendChild(document.querySelector('#The-Shire ul'));

  // hint: the hobbits ul is a childNode of The-Shire-- there is way to get a list of childNodes

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 6 complete - Left the Shire"



// ============
// SECTION - Chapter 7
// ============
const beautifulStranger = () => {
  console.log('Chapter 7 - Beautiful Stranger');

  // 1. change the buddy 'Strider' textnode to "Aragorn"
  document
    .querySelector('aside li:nth-child(4)')
    .innerText = 'Aragorn';

  // hint: You can get a list of elements by tag name, such as 'aside'

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 7 complete - Strider is changed to Aragorn"



// ============
// SECTION - Chapter 8
// ============
const forgeTheFellowShip = () => {
  console.log('Chapter 8 - Forge The Fellowship');

  // 1. create a new div with an id 'the-fellowship'
  let theFellowship = document.createElement('div');
  theFellowship.innerHTML = '<h1>The Fellowship</h1>';

  document
    .querySelector('#middle-earth')
    .appendChild(theFellowship)
    .setAttribute('id', 'the-fellowship');
  theFellowship
    .appendChild(document.querySelector('#Rivendell ul'));
  theFellowship
    .appendChild(document.querySelector('aside ul'));
  // let fewllowshipBuddies = document.querySelectorAll('aside li');
  // for (let a = 0; a < fewllowshipBuddies.length; a++){
  //   theFellowship.appendChild(fewllowshipBuddies[a]);
  // };
  
  // 2. add an h1 with the text 'The Fellowship' to this new div

  // 3. append the fellowship to middle-earth

  // 4. add the unordered lists of hobbits and buddies to 'the-fellowship'

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 8 complete - The Fellowship is created"



// ============
// SECTION - Chapter 9
// ============
const theBalrog = () => {
  console.log('Chapter 9 - The Balrog');

  // 1. change the 'Gandalf' textNode to 'Gandalf the White'
  // NOTE - My guess is that it takes less memory / "effort" for the script to only have to do one 'querySelector' search vs. indivdually doing a 'querySelector' search for two lines of code in a row (below).
  let whiteWizard = document.querySelector('.buddy');
  whiteWizard.innerText = 'Gandalf the White';

  // 2. add a class "the-white" to this element
  whiteWizard.setAttribute('class', 'the-white');
  // 3. in the style.css file, add a css rule to make elements of the class "the-white" have a white background and a grey border

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 9 complete - Updated Gandalf"



// ============
// SECTION - Chapter 10
// ============
const hornOfGondor = () => {
  console.log('Chapter 10 - The Horn of Gondor');

  // 1. create a pop-up alert that the horn of gondor has been blown
  alert('The horn of Gondor has been blown!');

  // 2. Boromir's been killed by the Uruk-hai! Put a linethrough on Boromir's name
  document
    .querySelector('.buddy:nth-child(5)')
    .style.textDecoration = 'line-through';
  // 3. Tricky: Remove the Uruk-Hai from the Baddies on the page
  document
    .querySelector('#Mordor li:nth-child(3').remove();
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 10 complete - horn of gandor blew and Boromir is dead"



// ============
// SECTION - Chapter 11
// ============
const itsDangerousToGoAlone = () => {
  console.log(`Chapter 11 - It's Dangerous To Go Alone`);

  // 1. take Frodo and Sam out of the fellowship and move them to Mordor (they don't need to be inside a ul in Mordor)
  document
    .querySelector('#Mordor')
    .appendChild(document.querySelector('.hobbit'));
  document
    .querySelector("#Mordor")
    .appendChild(document.querySelector(".hobbit:nth-child(1)"));
  
    // 2. Add a div with and id of 'mount-doom' to Mordor
  mountain = document.createElement('div')
  mountain.setAttribute('id', 'mount-doom');
  document.querySelector('#Mordor')
    .prepend(mountain);

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 11 complete - Sam and Frodo are in Mordor and Mount Doom has been created"



// ============
// SECTION - Chapter 12
// ============
const weWantsIt = () => {
  console.log('Chapter 12 - We Wants It');

  // 1. Create a div with an id of 'gollum' and add it to Mordor
  gollum = document.createElement('div');
  document.querySelector('#Mordor').appendChild(gollum).setAttribute('id', 'gollum');

  // 2. Move the ring from Frodo and give it to Gollum
  gollum.appendChild( document.querySelector('#the-ring'));

  // 3. Move Gollum into Mount Doom
  mountain.appendChild(gollum);


};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 12 complete - Gollum is trying to get the ring".



// ============
// SECTION - Chapter 13
// ============
const thereAndBackAgain = () => {
  console.log('Chapter 13 - There And Back Again');

  // 1. remove Gollum and the Ring from the DOM
    gollum.remove();
    theRing.remove();
  // 2. remove all the baddies from the DOM
    let baddiesGroup = document.querySelectorAll('.baddy');
    for (let a = 0; a < baddiesGroup.length; a++){
      baddiesGroup[a].remove();
    }

  // 3. Move all the hobbits back to the shire
  let hobbitGroup = document.querySelectorAll('.hobbit');
  for (let a = 0; a < hobbitGroup.length; a++) {
    document.querySelector('#The-Shire').appendChild(hobbitGroup[a]);
  }

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 13 complete -Gollum and the ring are gone, the baddies are done, and the hobbits are back in the shire".


// =====================================
// Don't change anything below this line
// =====================================
// =====================================
// This code is loading all of the event listeners for the buttons in your application.
// =====================================

// NOTE - VanillaJS seems to not take numeric element IDs. While '#1' would work as an element ID when using jQuery, in VanillaJS it has to become "one" to work.

const btn1 = document.querySelector('#one')
const btn2 = document.querySelector('#two');
const btn3 = document.querySelector('#three')
const btn4 = document.querySelector('#four')
const btn5 = document.querySelector('#five')
const btn6 = document.querySelector('#six')
const btn7 = document.querySelector('#seven')
const btn8 = document.querySelector('#eight')
const btn9 = document.querySelector('#nine')
const btn10 = document.querySelector('#ten')
const btn11 = document.querySelector('#eleven')
const btn12 = document.querySelector('#twelve')
const btn13 = document.querySelector('#thirteen')
const btn14 = document.querySelector('#fourteen')

btn1.addEventListener('click', () => {
  makeMiddleEarth();
});
btn2.addEventListener('click', () => {
  makeHobbits();
});
btn3.addEventListener('click', () => {
  keepItSecretKeepItSafe();
});
btn4.addEventListener('click', () => {
  makeBaddies();
});
btn5.addEventListener('click', () => {
  makeBuddies();
});
btn6.addEventListener('click', () => {
  leaveTheShire();
});
btn7.addEventListener('click', () => {
  beautifulStranger();
});
btn8.addEventListener('click', () => {
  forgeTheFellowShip();
});
btn9.addEventListener('click', () => {
  theBalrog();
});
btn10.addEventListener('click', () => {
  hornOfGondor();
});
btn11.addEventListener('click', () => {
  itsDangerousToGoAlone();
});
btn12.addEventListener('click', () => {
  weWantsIt();
});
btn13.addEventListener('click', () => {
  thereAndBackAgain();
});
btn14.addEventListener('click', () => {
  makeMiddleEarth();
  makeHobbits();
  keepItSecretKeepItSafe();
  makeBaddies();
  makeBuddies();
  leaveTheShire();
  beautifulStranger();
  forgeTheFellowShip();
  theBalrog();
  hornOfGondor();
  itsDangerousToGoAlone();
  weWantsIt();
  thereAndBackAgain();
});

// $(() => {

//   $('#1').on('click', makeMiddleEarth);
//   $('#2').on('click', makeHobbits);
//   $('#3').on('click', keepItSecretKeepItSafe);
//   $('#4').on('click', makeBaddies);
//   $('#5').on('click', makeBuddies);
//   $('#6').on('click', leaveTheShire);
//   $('#7').on('click', beautifulStranger);
//   $('#8').on('click', forgeTheFellowShip);
//   $('#9').on('click', theBalrog);
//   $('#10').on('click', hornOfGondor);
//   $('#11').on('click', itsDangerousToGoAlone);
//   $('#12').on('click', weWantsIt);
//   $('#13').on('click', thereAndBackAgain);
//   $('#14').on('click', () => {
//     makeMiddleEarth();
//     makeHobbits();
//     keepItSecretKeepItSafe();
//     makeBaddies();
//     makeBuddies();
//     leaveTheShire();
//     beautifulStranger();
//     forgeTheFellowShip();
//     theBalrog();
//     hornOfGondor();
//     itsDangerousToGoAlone();
//     weWantsIt();
//     thereAndBackAgain();
//   });

// });


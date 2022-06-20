## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Author](#author)

## Overview

SUPER STICKY NOTES 

I originally coded this app with class based components. It was one of the projects I did in my curriculum for my React.js class at Skillcrush.com. You can see the original code here: 
[Sticky-Notes](https://codesandbox.io/s/l12-build-your-big-component-deletesavenotesstickynotesui9-x1cks)

I decided that it would be good to modernise the code for the app with functional components, useState and useEffect hooks. I changed it slightly and added a dark mode feature and updated the CSS and the color scheme. I used CSS grid to make the list of notes responsive. 

The original app was coded in CodeSandbox. This time I decided to use Create React App so I could get it online via Netlify.

Please note that this notes app is best viewed on screen sizes above 350px and I added a footer which prevents the functionality of the notes added below it from working. In a real project this wouldn’t be the case. I added a footer as it’s a portfolio project.


### The challenge

Users should be able to:

- Type in the Title and Content fields of the note
- Click on the '+New Note' button to add a new note whilst any previous notes are still saved in the notes app
- Delete any notes by clicking the X
- Search for any notes by typing its text in the search bar
- Toggle the dark mode on or off

### Screenshot

![](./public/images/app.png)

### Links

- Live Site URL: https://

## My process

1 -Setting  up the App

I first set up the Footer and Header components with css styles.

I added another component called AddSearch in the components folder which is containing the ‘+ New Note’ button and the input for searching for a note.

The last component I added in the components folder, the Note component, contains the basic jsx and styles that each note will have.

We create an array to store the notes.Since this array will change depending on how many notes we have we will need to use the useState hook. This notes array will be initialised to an empty array. 

Inside the return function in the App.js we add an ul container that will hold the notes from the notes array. We map through each note and render a Note component which contains an id and the content inside each note, i.e the title and its content. These will be destructured and passed as props to the Note component and added as the values. 

The onChange eventhandler will grab the typed input of the title and the content via e.target.value.

2 -Tie the functionalities together:

Add a note

The first functionality will be adding a note. In App.js we create the addNote function that will be passed to the ‘+ New Note’ button in AddSearch.js via the prop addNote. In this function we create a new note object that will be added to the notes array via setNotes. It will now hold an array of the new note added and all the previous notes if any, see:…prevNotes.

Edit a note 

We can edit a note we have saved with the function editNote that we define in App.js. This function will be passed as a prop, editNote, to the Note component and called in the onChange event handler of both the title or the content area.

The editNote function takes in the id of the note, a field and the text. It will be set into state via setNotes. It then maps over all previous notes and checks if the id of the note has the same id and if the field is equal to “title”. If so then it will return a new note with the new edited text. If field is not equal to “title”, i.e. it's equal to “content” then it will return the note with the new content text. Else if the id of the note is the same it will just return the note, i.e it’s not been edited.

Delete a note 

In App.js we add a function called deleteNote which will accept the id of the note to be deleted. Each note in our notes array has an id and when a new note gets added a new id for this note gets generated. 

Inside our deleteNote function we will use the filter function to remove the note that had the same id as the id that was passed in. We store the filtered (deleted notes) in a new array variable called updatedNotes. We set this in state via setNotes and then we pass it the updatedNotes.

We will pass this deleteNote function down the component tree to the Note component via the deleteNote prop. In the X, the delete button, we add the OnClick event handler and pass in an arrow function which takes in the id we get from the destructured prop.

Searching for a note

In App.js we add a new state for searching for text where the initial value is set to an empty string. We then pass the setSearchText and searchText props to the AddSearch component. This is so we can get the value the user has typed via the e.target.value.

Next we filter the notes to only show the notes that contain the text that's typed in. In App.js we filter each note to see if the search text contains what's been typed in the title field or if the content field contains the same text.


Saving to local storage

We want to save and retrieve from local storage so that we still have the same notes/data when we close the app or refresh it. In App.js we add the useEffect hook. This effect will save our notes to local storage anytime the notes change.

We are saving the notes to local storage with the key ‘notes’ which we will use to retrieve the notes. We add the notes variable to the dependency array so that every time the notes array gets updated with new notes it will trigger the function we have set in the useEffect function, i.e to save the new notes to local storage.

Then we want to retrieve any notes that are saved in local storage when the app loads. This will handled in the notes array. To retrieve the notes the App goes to local storage when it first loads and retrieves the data that has the key of ‘notes’. 

Dark mode

I added a dark mode toggle button to the right of the search bar. When we toggle it will turn dark mode on/off.

In App.js we use the useState hook, const [darkMode, setDarkMode] = useState(false) to indicate whether the app is currently in dark mode or not. The initial state should not be in dark mode so we set the initial state to false. 

We then  pass the setDarkMode function to the Search component via the prop handleToggleDarkMode. Then in Search.js we can destructure this prop and call it in the onClick handler of the toggle button. In this function we set the state to the opposite of what the current dark mode value is. 

To apply the dark mode class from App.css we will need to create a new div that wraps around the container div in App.js. This allows us to add styles to the overall app i.e the dark mode without affecting any previous styles. In this wrapper div we will add a template string to determine if we want to add the dark-mode class or not based on the dark mode state variable, darkMode. The logic says that if darkMode is equal to true then add the dark-mode class.


### Built with

- React.js
- JavaScript
- CSS 
- Flexbox
- CSS Grid


### What I learned
 
I feel more confident with using functional components and setting 'things' in state with the useState hook. 

It was a good exercise to see how we can use the useEffect hook for saving data, 'the notes', to localStorage. 

I got a lot of practice with passing functions and props down and up the component tree. I see this as probably one of the fundamental skills you need to master to fully understand how React.js works!

### Continued development

I will continue to practice building apps with a focus on mastering passing functions from child up to the parent component. That's the part I struggled with most and I intend to work on this until I feel it's second nature!


## Author

- Website - https://www.annie-indreiten.com/
- Github – https://github.com/AnnieCat73
- LinkedIn - https://www.linkedin.com/in/annieindreitendeveloper/

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

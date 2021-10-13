# Would You Rather Project

This is the code for the final assessment project for Udacity's React & Redux course.



## To start this code you need to:
- Install [Node.js](https://nodejs.org/en/).
- Open the terminal/cmd in the project's directory and run `npm install` to install the required dependencies.
- Run `npm start` to start previewing the web app on the local host 

## Tasks

### Aplication Setup
- [x] Application is easy to install and start
    - The application requires only `npm install` and `npm start` to install and launch. 
- [x] Application include README with clear installation and launch instructions
    - A README is included with the project. The README includes a description and clear instructions for installing and launching the project.
_________________

### Login Flow
- [x] Application have a way to log in and log out
- [x] application work correctly regardless of which person the user impersonates
_________________

### Application Functionality
- [ ]  Home page have the desired functionality.
    1. The answered and unanswered polls are both available at the root.
    2. The user can alternate between viewing answered and unanswered polls.
    3. The unanswered questions are shown by default.
    4. The name of the logged in user is visible on the page.
    5. The user can navigate to the leaderboard.
    6. The user can navigate to the form that allows the user to create a new poll.

- [x] The polling questions listed in the correct category (Unanswered vs Answered), and they have the desired functionality on the home page.
    - Each polling question resides in the correct category. For example, if a question hasn’t been answered by the current user, it should be in the “Unanswered” category.

- [x] The details of each poll displayed with all of the relevant information
    1. The details of the poll are available at questions/:question_id.
    2. When a poll is clicked on the home page, the following is shown:
        the text “Would You Rather”;
        the picture of the user who posted the polling question; and
        the two options.
    3. For answered polls, each of the two options contains the following:
        the text of the option;
        the number of people who voted for that option;
        the percentage of people who voted for that option.
    4. The option selected by the logged in user should be clearly marked.
    5. When the user is logged in, the details of the poll are shown. If the user is logged out, he/she is asked to log in before before being able to access the poll.
    6. The application asks the user to sign in and shows a 404 page if that poll does not exist. (In other words, if a user creates a poll and then the same or another user tries to access that poll by its url, the user should be asked to sign in and then be shown a 404 page. Please keep in mind that new polls will not be accessible at their url because of the way the backend is set up in this application.)

- [x] The voting mechanism work correctly
    1. Upon voting in a poll, all of the information of the answered poll is displayed.
    2. The user’s response is recorded and is clearly visible on the poll details page.
    3. When the user comes back to the home page, the polling question appears in the “Answered” column.
    4. The voting mechanism works correctly, and the data on the leaderboard changes appropriately.

- [x] Users can add new polls
    1. The form is available at `/add`.
    2. The application shows the text “Would You Rather” and has a form for creating two options.
    3. Upon submitting the form, a new poll is created and the user is taken to the home page.
    4. The new polling question appears in the correct category on the home page.

- [ ] The leaderboard work correctly and have the desired functionality
    1. The Leaderboard is available at/leaderboard.
    2. Each entry on the leaderboard contains the following:
        - the user’s name;
        - the user’s picture;
        - the number of questions the user asked; and
        - the number of questions the user answered.
    3. Users are ordered in descending order based on the sum of the number of questions they’ve answered and the number of questions they’ve asked.

- [ ] The application navigable
    - The app contains a navigation bar that is visible on all of the pages.
    - The user can navigate between the page for creating new polls, and the leaderboard page, and the home page without typing the address into the address bar.

- [ ] The application interact with the backend correctly
    - The data that’s initially displayed is populated correctly from the backend.
    - Each user’s answer and each new poll is correctly recorded on the backend.

- [ ] The code free of warnings that resulted from not following the best practices
    - The code runs without errors. There are no warnings that resulted from not following the best practices listed in the documentation, such as using `key` for list items. All code is functional and formatted properly.
_________________

### Architecture
- [ ] The store serve as the application’s single source of truth
    - The store is the application’s source of truth.
    - Components read the necessary state from the store; they do not have their own versions of the same state.
    - There are no direct API calls in the components' lifecycle methods.

- [ ] Application state managed by Redux
    - Most application state is managed by the Redux store. State-based props are mapped from the store rather than stored as component state.
    - Form inputs and controlled components may have some state handled by the component.

- [ ] Application state update correctly
    - Updates are triggered by dispatching action creators to reducers.
    - Reducers and actions are written properly and correctly return updated state to the store.

- [ ] The architecture of the application make sense
    - The code is structured and organized in a logical way.
    - Components are modular and reusable.
_________________

## Bonus Tasks
- [ ] Add the functionality for creating new users.
- [ ] Add authentication.
- [ ] Add a loading bar.



The `_DATA.js` file represents a fake database and methods that let you access the data. The only thing you need to edit in the ` _DATA.js` file is the value of `avatarURL`. Each user should have an avatar, so you’ll need to add the path to each user’s avatar.


## Data

There are two types of objects stored in our database:

* Users
* Questions

### Users

Users include:

| Attribute    | Type             | Description           |
|-----------------|------------------|-------------------         |
| id                 | String           | The user’s unique identifier |
| name          | String           | The user’s first name  and last name     |
| avatarURL  | String           | The path to the image file |
| questions | Array | A list of ids of the polling questions this user created|
| answers      | Object         |  The object's keys are the ids of each question this user answered. The value of each key is the answer the user selected. It can be either `'optionOne'` or `'optionTwo'` since each question has two options.

### Questions

Questions include:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| id                  | String | The question’s unique identifier |
| author        | String | The author’s unique identifier |
| timestamp | String | The time when the question was created|
| optionOne | Object | The first voting option|
| optionTwo | Object | The second voting option|

### Voting Options

Voting options are attached to questions. They include:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| votes             | Array | A list that contains the id of each user who voted for that option|
| text                | String | The text of the option |

Your code will talk to the database via 4 methods:

* `_getUsers()`
* `_getQuestions()`
* `_saveQuestion(question)`
* `_saveQuestionAnswer(object)`

1) `_getUsers()` Method

*Description*: Get all of the existing users from the database.  
*Return Value*: Object where the key is the user’s id and the value is the user object.

2) `_getQuestions()` Method

*Description*: Get all of the existing questions from the database.  
*Return Value*: Object where the key is the question’s id and the value is the question object.

3) `_saveQuestion(question)` Method

*Description*: Save the polling question in the database.  
*Parameters*:  Object that includes the following properties: `author`, `optionOneText`, and `optionTwoText`. More details about these properties:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| author | String | The id of the user who posted the question|
| optionOneText| String | The text of the first option |
| optionTwoText | String | The text of the second option |

*Return Value*:  An object that has the following properties: `id`, `author`, `optionOne`, `optionTwo`, `timestamp`. More details about these properties:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| id | String | The id of the question that was posted|
| author | String | The id of the user who posted the question|
| optionOne | Object | The object has a text property and a votes property, which stores an array of the ids of the users who voted for that option|
| optionTwo | Object | The object has a text property and a votes property, which stores an array of the ids of the users who voted for that option|
|timestamp|String | The time when the question was created|

4) `_saveQuestionAnswer(object)` Method

*Description*: Save the answer to a particular polling question in the database.
*Parameters*: Object that contains the following properties: `authedUser`, `qid`, and `answer`. More details about these properties:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| authedUser | String | The id of the user who answered the question|
| qid | String | The id of the question that was answered|
| answer | String | The option the user selected. The value should be either `"optionOne"` or `"optionTwo"`|

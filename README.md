*About project's arch*

For making navigation through project more clear, I've made next steps:

First and common:
    Reducer and actions for each page holds in the page's root folder.

    for example auth page

    pages/Auth
         /model
             /actions.js
             /reducer.js
         /components
             / there's components for this page, smth like loginForm
         auth.jsx
         auth.styl

Extra case:
    Also we have some abstract models, like App and User which holds information for unity application, not only for separate page,
    this kind of data holds in folder app

    /app
        /models
                /App
                    /actions.js
                    /reducers.js
                /User
                    /actions.js
                    /reducers.js




*How to work with it*

npm install

Second: choose mode and going to work.

for run development mode
    npm start

for run production mode
    npm run prod


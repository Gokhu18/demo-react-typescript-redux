# Welcome
I admit it. I'm not a fan of typed JavaScript...at all. However...TypeScript is beginning to grow on me, and after encountering some growing pains I figured it was time to create a simple starting point that others can share.

This project is a demo based on the guide at [https://github.com/Microsoft/TypeScript-React-Starter](https://github.com/Microsoft/TypeScript-React-Starter) - with the following additional goals in mind:
  + Ability to work with React, Redux, and TypeScript **IMMEDIATELY**
    - Sure. You could go through the guide at [https://github.com/Microsoft/TypeScript-React-Starter](https://github.com/Microsoft/TypeScript-React-Starter) - which I strongly encourage anyone to do - but this is a great way to get you off and coding right now.
  + Experience the default TypeScript rules and frustrations right out of the box
    - Rules can be configured in `tsconfig.json`
  + Clean organization and minor rewrite of original code
  + Added the ability to work with Redux DevTools right out of the box
    ![Dashboard](public/images/00-screencast.gif)  

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). Feel free to consult their project for some really useful tidbits and guides.

## Getting started
Once you have cloned this repo, simply run:

    $ cd ~/demo-react-redux-typescript
    $ npm install
    $ npm start

That's it. Your application will be running in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser. If you make any minor edits to your source code, it will automatically reload.

If you are familiar with [Create React App](https://github.com/facebookincubator/create-react-app), the usual `npm test`, `npm run build`, and ability to eject the app are available, as well.

## Third party services
### Heroku
This project is available on Heroku at [https://demo-react-redux-typescript.herokuapp.com/](https://demo-react-redux-typescript.herokuapp.com/)

As long as you have the [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli) installed on your machine, this project is ready for you to deploy to Heroku. All you need to do is create your Heroku app with the [create-react-app-buildpack](https://github.com/mars/create-react-app-buildpack). 

If you are familiar with this process, here is how you would create a new app on Heroku (free) using their command-line tool for your account - where <APP_NAME> is whatever you want to call the application on Heroku (ultimately being accessible at `https://APP_NAME.herokuapp.com/`):

    $ cd ~/demo-react-redux-typescript
    $ heroku create <APP_NAME> --buildpack https://github.com/mars/create-react-app-buildpack.git

To deploy your app to Heroku, you can use the quick helper script I created. This script has the benefit of determining what branch you are on, and automatically deploying that as the master branch to your Heroku app:

    $ cd ~/demo-react-redux-typescript
    $ npm run heroku:deploy

If you would like to deploy a branch other than your master branch to Heroku, you can run:

    $ cd ~/demo-react-redux-typescript
    $ npm run heroku:deploy:force

Once you have successfully deployed your app to Heroku, you will see the URL where you can view your app. Pretty cool, eh?
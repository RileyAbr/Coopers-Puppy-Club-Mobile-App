# Cooper's Puppy Club
 
Cooper's Puppy Club is a mobile app designed to make using the dog park easier. One of the major hurdles to attending a dog park is having no idea how many other pups there may be to play with. With a simple one-tap check-in model, users can easily let others know when there is are puppies at the park.

## Project Structure
The project is divided into two parts in this repository.

1. The App

The App is a React Native project. It is built in pure JavaScript--no custom Android or iOS components were utilized. The project has no scaffold like Expo to run, instead it is a standalone project. In order to run it, you must have either an iOS and Android emulator available. Given that I was building this on a Windows machine, I used an Android emulator set-up via *Android Studio*.

To run the app, install all packages with `yarn install`. Then run the command `npm start`. This command will launch the live project builder while you code. Next run `npm run android` (or `npm run ios`), which will launch and connect to an emulator if you have one available and configured correctly. A guide for setting up an emulator can be found from the React Native documenation: [https://reactnative.dev/docs/environment-setup](https://reactnative.dev/docs/environment-setup)

2. The Server

The Server for the app is a Node.js project. It is built on modern ES6 JavaScript. It uses Express as it's framework of choice. All data is stored in a MongoDB database. It is currently hosted live on a Heroku instance: `https://coopers-puppy-club-server.herokuapp.com`. While many of the routes are private and require authentication, one example of a public route is [https://coopers-puppy-club-server.herokuapp.com/parks](https://coopers-puppy-club-server.herokuapp.com/parks).

To run the server, install all packages with `yarn install`. You must provide a local `.env` with credentials for your localhost version of the server. This includes a `MONGO_URI` link to an available MongoDB database as well as the `PORT` you would like to run it on. Then run the `yarn start` command. A local version of the server will be available at `http://localhost:{PORT}`.

3. Additional Repo Info

Both portions of the project also utilize ESlint and Prettier to keep the code nice and clean. If your editor has plugins to use them, it is highly recommend to enable the features. 

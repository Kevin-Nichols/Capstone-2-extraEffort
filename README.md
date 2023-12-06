# extraEffort <div style='width:30px ; height:30px'>![logo](https://i.imgur.com/vXXHQvP.png)</div>
A research tool to start your fitness journey! Search a large library of exercises, learn what they do and how to perform them.

## Deployment
- [extraEffort](https://extraeffort.onrender.com/)

## Features
- Browse over 1000 unique exercises
- Search for specific body parts, muscle groups or equipment types
- View gif animations for each exercise
- Discover related YouTube videos for more information on an exercise
- Checkout similar exercises to the one you are researching

## How To Run
- Make you have [NodeJS](http://nodejs.org/download/) installed.
- Once you have NodeJS installed, you have two choices for downloading:
 
1. Download & extract a [zip file](https://github.com/Kevin-Nichols/Capstone-2-extraEffort/archive/refs/heads/main.zip) of the source code.
2. Fork this repository and git clone your fork.

- Next, you need to install the package dependencies by running the following command in the top-level directory of this source tree:
```
npm install
```

- Navigate to the APIs listed below to sign up, subscribe to each and recieve a free API key.

- Create a .env file in the top-level directory and enter your API key with the following line:
```
REACT_APP_RAPID_API_KEY=TheAPIKeyYouJustRecieved
```

- Once the dependancies are installed, and you have your API key, you can start the application server by running:
```
npm start
```

- Once the server is running, you can access the start page by opening your browser to [http://localhost:3000](http://localhost:3000).

- To stop the server, press CTRL-C.

### How To Run Tests
Run the following command in the top-level directory of this source tree:
```
npm test
```

### APIs Used
- [ExerciseDB](https://rapidapi.com/justin-WFnsXH_t6/api/exercisedb?utm_source=youtube.com%2FJavaScriptMastery&utm_medium=referral&utm_campaign=DevRel)
- [Youtube Search and Download](https://rapidapi.com/h0p3rwe/api/youtube-search-and-download?utm_source=youtube.com%2FJavaScriptMastery&utm_medium=referral&utm_campaign=DevRel)

### Stack
- JavaScript
- CSS
- React
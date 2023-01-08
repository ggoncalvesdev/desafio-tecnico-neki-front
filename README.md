> # Agile Front-End
<p align="center">
  <img width= 200 src= https://user-images.githubusercontent.com/92227976/211206151-d3999d11-9a7a-4a3d-8ef6-1b9b9129793d.png>
</p>
<p>

Full Stack technical challenge for the company <a href="https://neki-it.com.br/" target="_blank" rel="noopener noreferrer">Neki-it.</a></p>

This codebase was created to demonstrate a full-stack application based on Spring boot,
react native(
Expo)

including CRUD operations, authentication,
sequence,
password check,
encrypted password
 and much more.
    
   If you are interested in knowing how the complete application works, we have a Back-end ready for that, access the <a href="https://github.com/ggoncalvesdev/desafio-tecnico-neki-back" target="_blank" rel="noopener noreferrer"> desafio-tecnico-neki-back</a> repository
 
 <p align="left">
   <img src="https://img.shields.io/badge/Status-Maintained-green.svg" alt="This repository is           actively maintained" />
   <a href="LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-brightgreen.svg" alt="MIT License" />
   </a>
   <a href="https://www.npmjs.com/package/npm/v/8.5.0">
    <img src="https://img.shields.io/badge/npm-8.5.5-blue" alt="NPM">
   </a>
 </p>

<p align="left">
  <a href="https://docs.expo.dev/">
    <img src="https://img.shields.io/badge/expo-47.0.9-blue" alt="Expo">
  </a>
  <a href="https://pt-br.reactjs.org/">
    <img src="https://img.shields.io/badge/react-18.1.0-orange" alt="React">
  </a>
   <a href="https://reactnative.dev/">
    <img src="https://img.shields.io/badge/react--native-0.70.5-orange" alt="React-Native">
  </a>
  <a href="https://www.typescriptlang.org/">
    <img src="https://img.shields.io/badge/typescript-4.6.3-blue" alt="TypeScript">
  </a>
</p>

# Tools
  
* [Axios](https://www.npmjs.com/package/axios/v/0.27.2) for integration with the api.
* [Ngrok](https://ngrok.com/) for create a public HTTPS URL
* [Jwt Decode](https://www.npmjs.com/package/jwt-decode) for decode the JWTs token.
* [Lodash Filter](https://www.npmjs.com/package/lodash.filter?activeTab=versions) to return a collection of the same item.
* [Lottie](https://www.npmjs.com/package/lottie-react-native) is a library focused on animation.
* [Async Storage](https://www.npmjs.com/package/@react-native-async-storage/async-storage) it is an unencrypted storage system.
* [React Navigation](https://reactnavigation.org/) is a standalone library that enables you to implement navigation functionality in a React Native application.
    * Bottom Tabs to a row of links, displayed at the bottom of the screen.
    * Native Stack provides a way for your app to transition between screens where each new screen is placed on top of a stack.

# Preview
 
 ### Splash Screen
 ![gifSplashScreen](https://user-images.githubusercontent.com/92227976/211207690-84ac7385-592a-407a-b5b6-d7232f06c20e.gif)
 
 ### Login
 ![gifLogin](https://user-images.githubusercontent.com/92227976/211208217-6d29b94e-ebe6-454f-a9b8-04a1f70ebd12.gif)

 ### Home
![gifHome](https://user-images.githubusercontent.com/92227976/211208726-cf0bbfbe-277b-4e29-8ba4-575bd5fc2277.gif)

### Skill
![gifSkill](https://user-images.githubusercontent.com/92227976/211209424-bea353db-479e-4c13-90f0-c457a7588d8b.gif)
    
## Files

-   `App.tsx` responsible for starting the application.
-   `Api.ts` responsible for connecting to the API.
-   `NavigateScreen.tsx` responsible for navigating the application.
-   `LocalStorageService.tsx` responsible for the storage service.
-   `DataContext` responsible for storing the data of the logged in user.

And the code is organized as this:

1. `assets` stores images and icons.
2. `components` store application components.
3. `context` stores the DataContext.tsx file.
4. `models` stores representations of API responses.
5. `pages` store application pages.
6. `services` service layer.

# Security

Jwt token process.
The secret key is stored in `DataContext.tsx`.

# Getting started

You'll need React: 18.1.0, React Native: 0.70.5 and  Expo:  47.0.9
installed.

## Setup

* `npm install`

## Running
* run the Ngrok client and enter the command: `ngrok http 8080`

* `npx expo start`</br>
or
* `npx expo start --tunnel`

# Help

Please fork and PR to improve the project.


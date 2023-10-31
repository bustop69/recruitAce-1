
recruitAce 

RecruitAce is a mobile application designed for recruiters to connect with the most qualified candidates for their teams, based on both skills and requirements. 

The current version of the app includes fundamental features like creating, editing, deleting, and viewing job posts. 

In the future, we plan to enhance the app by adding search functionalities that will enable recruiters to  filter candidates based on their skills. Futhermore, we aim to implement a messaging system that allows direct communication between recruiters and candidates.

## Demo

![Media_231030_094458](https://github.com/OpenZeppelin/openzeppelin-contracts/assets/109417931/da378969-ade7-4d09-80b4-4e228bc45763)
![Media_231031_005118](https://github.com/OpenZeppelin/openzeppelin-contracts/assets/109417931/329982e8-e39d-40ba-b413-669b966e48d5)

<h2>💻 Tecnologies</h2>

Technologies used in the project:

*   React Native - Expo (Java Script)
*   Redux
*   Laravel (PHP)
*   MySQL

  
<h2>🔌 Set up Instructions</h2>

Backend - 
*   Clone this repo
*   Open the folder in VsCode
*   Run command - npm install
*   In .env file configure the below 3 lines 
      *   DB_DATABASE= the schema of your mySQL database
      *   DB_USERNAME= login name
      *   DB_PASSWORD = login password
*  Run command - php artisan migrate
*  Run command - php artisan serve
      *   This starts the local host to start listening to HTTP requests

Middleware -
*   In React native, you might get errors trying to connect to local host serve. So its the best if we use a proxy.
*   Download Ngrok - https://ngrok.com/
*   Use Ngrok to connect to the local host and Ngrok will return an url
*   The url returned is the one we will use

Front End -
*   Open the folder in VsCode
*   Run command - npm install
*   Navigate to the below folder
      *   Utilities -> redux -> action.js
      *   on line 12, update API_URL variable to the url returned by Ngrok and make sure to add "api/jobs/" at the end
*   Run command - npm start
*   This will return an QR Code
*   Final step, download expo on your phone and scan the QR code to launch the project.

<h2>🚀 Testing </h2>
PHPUnit file has been set up in the backend folder, if there are any issues with the Database or connection, run command - php artisan test to test the errors 

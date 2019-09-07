# Follow-Me React App

Follow-Me is a React/Redux based web app that uses cookies for authentication and a REST database to keep track of who follows whom.



Try the live demo here ℹ  
[https://follow-me-vlad-react.herokuapp.com/](https://follow-me-vlad-react.herokuapp.com/)   
Demo not working? Due to the free Heroku hosting package, the url above works only for ~18 hours a day, so check back later! or... install on your local machine.

## 📖 Installation  

Clone this repository and open your terminal in the project folder and install dependencies.

```bash
npm install
```
Also make sure to install the database dependencies as we have a little back-end server for the REST API.
```bash
cd db
npm install
```
Go back to parent directory and run the app with  **npm run app**    

```bash
cd ../
npm run app
```
The app will be located at **http://localhost:1234/**   
The database is located at **http://localhost:3000/api/**  
Api endpoints: **/users/** and **/groups/**

#### 🎁 Dependencies  
Front-End    

    @material-ui/core: 4.4.0
    @material-ui/icons: 4.2.1
    notistack: 0.9.0
    react: 16.9.0
    react-dom: 16.9.0
    react-redux: 7.1.1
    react-scripts: 3.1.1
    redux: 4.0.4
    redux-thunk: 2.3.0
    universal-cookie: 4.0.2  

    Dev Dependencies
    @babel/core": 7.5.5
    babel-preset-nano-react-app: 0.1.0
    npm-run-all": 4.1.5
    parcel-bundler: 1.12.3  

Back-End    

    dotenv: 8.1.0
    express: 4.17.1
    json-server: 0.15.1
import React from "react";
import Lottie from "lottie-react";
import pyhton from '/python.json'
import js from '/javascript.json'
import react from '/react.json'
import chrome from '/chrome.json'
export  const data = [
  {
    id:1,
    title:"Project 1",
    subtitle:"Snake",
    url:"https://aozzy.github.io/project-1/",
    github:"https://github.com/aozzy/project-1",
    type:"Solo",
    ga:true,
    image:"./images/snake.png",
    openingDesc:"Project 1 for the General Assembly Software Immersive course. This was my first project during my time at General Assembly, It was a solo project and the duration was a week, the technologies I used are HTML CSS and JavaScript.",
    icons:[<img width="50" height="50" src="https://img.icons8.com/ios/50/html-filetype--v1.png" alt="html-filetype--v1"/>,<img width="50" height="50" src="https://img.icons8.com/ios-filled/50/css3.png" alt="css3"/>,<Lottie animationData={js} loop={true}/>],
    additionalTechUsed:[],
  }, 
    {
      id: 2,
      title:"Project 2",
      subtitle:"The Breaking Bad Project",
      url:"https://aozzy.github.io/project-2/",
      type:"Pair Programming Hackathon",
      ga:true,
      image:"./images/breakingbad.png",
      openingDesc:"Project 2 was a pair programming project in which we had to build a React application that consumes a public API.",
      icons:[ <img width="50" height="50" src="https://img.icons8.com/windows/64/node-js.png" alt="node-js"/> ,<Lottie  animationData={react} loop={true}/>,<img width="50" height="50" src="https://img.icons8.com/wired/50/webpack.png" alt="webpack"/>,<img width="50" height="50" src="https://img.icons8.com/ios-filled/50/sass.png" alt="sass"/>,],
      techUsedDesc:"the technologies we used were React Node.js React Router Webpack Axios React Player Bulma Babel Google Fonts Git GitHub Lodash Sass and VScode Live Share.",
      additionalTechUsed:[ <Lottie  animationData={chrome} loop={true} style={{width:'50px'}}/>,<img width="50" height="50" src="https://img.icons8.com/ios-filled/50/visual-studio.png" alt="visual-studio"/>,<img width="50" height="50" src="https://img.icons8.com/wired/64/babel.png" alt="babel"/>],
    },
  ,{
    id:3,
    title:"Project 3",
    subtitle:"Cityscapes",
    url:"https://project-3-api.onrender.com/",
    github:"https://github.com/aozzy/project-3",
    type:"Group Project",
    ga:true,
    image:"./images/cityscapes.png",
    openingDesc:"For the third project we were tasked as a group to build a full-stack application by making our own backend and front-end.",
    icons:[ <img width="50" height="50" src="https://img.icons8.com/windows/64/node-js.png" alt="node-js"/> ,<Lottie  animationData={react} loop={true}/>,<img width="50" height="50" src="https://img.icons8.com/ios/50/express-js.png" alt="express-js"/>,<img width="35" height="50"  src="https://img.icons8.com/external-tal-revivo-bold-tal-revivo/24/external-mongodb-a-cross-platform-document-oriented-database-program-logo-bold-tal-revivo.png" alt="external-mongodb-a-cross-platform-document-oriented-database-program-logo-bold-tal-revivo"/>],
    techUsedDesc:"And to use an Express API to serve data from a Mongo database. We built a travel site. Technologies we used include Express MongoDB Mongoose React Node.js JWT Bcrypt Axios GitHub Git Bulma MapboxGL Supertest Chai and Mocha.",
    additionalTechUsed:[<img width="50" height="50" src="https://img.icons8.com/ios-filled/50/css3.png" alt="css3"/>, <Lottie  animationData={chrome} loop={true} style={{width:'50px'}}/>,<img width="50" height="50" src="https://img.icons8.com/ios-filled/50/visual-studio.png" alt="visual-studio"/>],
  
  },{
    id:4,
    title:"Project 4",
    subtitle:"Baggle",
    url:"https://baggle.onrender.com/",
    github:"https://github.com/aozzy/project-4",
    type:"Group Project",
    ga:true,
    image:"./images/homepage.png",
    openingDesc:"For the final project of the General Assembly Software Immersive Course we were tasked as a group to build a full stack application with a Python Flask back-end.",
    icons:[<Lottie className={classes.icon} animationData={pyhton} loop={true}/>,<img width="50" height="50" src="https://img.icons8.com/ios/50/flask.png" alt="flask"/>,<Lottie  animationData={react} loop={true}/>,<img width="40" height="40" src="https://img.icons8.com/ios-filled/50/postgreesql.png" alt="postgreesql"/>],
    techUsedDesc:" The duration of the project was a week. After exchanging ideas for the project we choose to develop Baggle, The idea behind Baggle came from the story of Kyle McDonald who went from owning a paper clip to a house in 14 trades. Technologies we used include React Python PostgreSQL Flask Marshmallow & SQLalchemy Git & GitHub Bulma Webpack Heroku Insomnia Tableplus and Babel",
    additionalTechUsed:[<img width="50" height="50" src="https://img.icons8.com/ios-filled/50/css3.png" alt="css3"/>, <Lottie  animationData={chrome} loop={true} style={{width:'50px'}}/>,<img width="50" height="50" src="https://img.icons8.com/ios-filled/50/visual-studio.png" alt="visual-studio"/>],
  },
    {
      id: 5,
      title: "Blog Central",
      url:"https://blog-central.onrender.com/",
      github:"https://github.com/aozzy/blog",
      type: 'solo',
      ga:false,
      image:"./images/blogcentral.png",
      openingDesc:"Blog central is a full stack application I built in a week.The app utilises full Crud capabilities,users are able to login/register and post blog content.",
      icons:[<Lottie className={classes.icon} animationData={pyhton} loop={true}/>,<img width="50" height="50" src="https://img.icons8.com/ios/50/flask.png" alt="flask"/>,<img width="40" height="40" src="./images/jinja.svg" alt="jinja"/>,<img width="40" height="40" src="https://img.icons8.com/ios-filled/50/postgreesql.png" alt="postgreesql"/>],
      techUsedDesc:"I used Python Flask as a backend and rendered html templates using Jinja2.Technologies used include flask_bootstrap flask_ckeditor flask_sqlalchemy flask wtforms flask_gravatar werkzeug.security and Postgresql database.",
      additionalTechUsed:[],
      
      
      
      
      
      
      
      
    },
    
  
  {
    id:6,
    title:"Yelp Camp",
    subtitle:"Explorers welcome",
    url:"https://yelp-camp-rn9k.onrender.com/",
    github:"https://github.com/aozzy/YelpCamp",
    type:"Solo",
    ga:false,
    image:"./images/yelpcamp.png",
    openingDesc:"YelpCamp is a full stack application, it was built in 2 weeks. The app displays campgrounds from all over the world, users are able to login register and add campgrounds as well as commenting on campgrounds. ",
    icons:[<Lottie animationData={js} loop={true}/>,<img width="50" height="50" src="https://img.icons8.com/ios/50/express-js.png" alt="express-js"/>,<img width="35" height="50"  src="https://img.icons8.com/external-tal-revivo-bold-tal-revivo/24/external-mongodb-a-cross-platform-document-oriented-database-program-logo-bold-tal-revivo.png" alt="external-mongodb-a-cross-platform-document-oriented-database-program-logo-bold-tal-revivo"/>,<img src="./images/ejs.svg" alt="ejs" />],
    techUsedDesc:"I used Express as a backend and ejs to render templates on the frontend. The following technologies were used Express MongoDB Mongoose ejs cloudinary passport for authentication Mapbox and sanitize-html to prevent xss vulnerabilities.",
    additionalTechUsed:[<img width="50" height="50" src="https://img.icons8.com/ios/50/html-filetype--v1.png" alt="html-filetype--v1"/>,<img width="50" height="50" src="https://img.icons8.com/ios-filled/50/css3.png" alt="css3"/>],
    
  
  },
  {
    id:7,
    title:"Sidescroller",
    subtitle:"A classic sidescroller",
    url:"https://aozzy.github.io/Sidescroller-/",
    github:"https://github.com/aozzy/Sidescroller-",
    type:"Solo",
    ga:false,
    image:"./images/sidescroller.png",
    openingDesc:"I completed the Sidescrolling game project using HTML CSS and JavaScript, this project taught me how to use the Canvas API and has improved my animation skills",
    icons:[<img width="50" height="50" src="https://img.icons8.com/ios/50/html-filetype--v1.png" alt="html-filetype--v1"/>,<img width="50" height="50" src="https://img.icons8.com/ios-filled/50/css3.png" alt="css3"/>,<Lottie animationData={js} loop={true}/>,<img width="50" height="50" src="https://img.icons8.com/ios-filled/50/visual-studio.png" alt="visual-studio"/>],
    additionalTechUsed:[],
  
  },

]





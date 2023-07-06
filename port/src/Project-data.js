import Lottie from "lottie-react";
import pyhton from '/python.json'
import js from '/javascript.json'
import react from '/react.json'
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
    icons:[<img width="50" height="50" src="https://img.icons8.com/ios/50/html-filetype--v1.png" alt="html-filetype--v1"/>,<img width="50" height="50" src="https://img.icons8.com/ios-filled/50/css3.png" alt="css3"/>,<Lottie animationData={js} loop={true}/>]
  
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
    icons:[  <Lottie  animationData={react} loop={true}/>],
    techUsedDesc:"the technologies we used were React Node.js React Router Webpack Axios React Player Bulma Babel Google Fonts Git GitHub Lodash Sass and VScode Live Share."
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







  },


]
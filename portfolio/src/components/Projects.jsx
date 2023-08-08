
import React, { useEffect, useState } from "react";
import { styled } from '@mui/material/styles';

import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import js from '/javascript.json'
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import pyhton from '/python.json'
import Lottie from "lottie-react";
import react from '/react.json'
import classes from "./modules/Projects.module.css";

const data = [
  {
    id:1,
    title:"Project 1",
    subtitle:"Snake",
    url:"https://aozzy.github.io/project-1/",
    github:"https://github.com/aozzy/project-1",
    type:"Solo project",
    ga:true,
    image:"./images/snake.png",
    openingDesc:"Project 1 for the General Assembly Software Immersive course. This was my first project during my time at General Assembly...",
    icons:[<img className={classes.icons}  src="https://img.icons8.com/ios/50/html-filetype--v1.png" alt="html-filetype--v1"/>,<img className={classes.icons}  src="https://img.icons8.com/ios-filled/50/css3.png" alt="css3"/>,<Lottie className={classes.icons} animationData={js} loop={true}/>],
    techUsedDesc:"It was a solo project and the duration was a week, the technologies I used are HTML CSS and JavaScript.",
    additionalTechUsed:[<img className={classes.icons}  src="https://img.icons8.com/ios-filled/50/visual-studio.png" alt="visual-studio"/>],
  }, 
  {
    id:2,
    title:"Project 2",
    subtitle:"The Breaking Bad Project",
    url:"https://aozzy.github.io/project-2/",
    github:"https://github.com/aozzy/project-2",
    type:"Pair Project",
    ga:true,
    image:"./images/breakingbad.png",
    openingDesc:"Project 2 was a pair programming Hackathon project in which we had to build a React application that consumes a public API...",
    icons:[ <img className={classes.icons}  src="https://img.icons8.com/windows/64/node-js.png" alt="node-js"/> ,<Lottie  className={classes.icons} animationData={react} loop={true}/>,<img className={classes.icons}  src="https://img.icons8.com/wired/50/webpack.png" alt="webpack"/>,<img className={classes.icons} src="https://img.icons8.com/ios-filled/50/sass.png" alt="sass"/>,],
    techUsedDesc:" The duration of the project was two days, My classmate Fabien Depasse and I built the Breaking Bad project as we both enjoyed the tv series. The technologies we used were React Node.js React Router Webpack Axios React Player Bulma Babel Google Fonts Git GitHub Lodash Sass and VScode Live Share.",
    additionalTechUsed:[ <img className={classes.icons}  src="https://img.icons8.com/ios-filled/50/visual-studio.png" alt="visual-studio"/>,<img className={classes.icons} src="https://img.icons8.com/wired/64/babel.png" alt="babel"/>],
  },
  {
    id:"3",
    title:"Project 3",
    subtitle:"Cityscapes",
    url:"https://project-3-api.onrender.com/",
    github:"https://github.com/aozzy/project-3",
    type:"Group Project",
    ga:true,
    image:"./images/cityscapes.png",
    openingDesc:"For the third project we were tasked as a group to build a full-stack application by making our own backend and front-end...",
    icons:[ <img className={classes.icons}  src="https://img.icons8.com/windows/64/node-js.png" alt="node-js"/> ,<Lottie className={classes.icons} animationData={react} loop={true}/>,<img className={classes.icons}  src="https://img.icons8.com/ios/50/express-js.png" alt="express-js"/>,<img className={classes.icons}  src="https://img.icons8.com/external-tal-revivo-bold-tal-revivo/24/external-mongodb-a-cross-platform-document-oriented-database-program-logo-bold-tal-revivo.png" alt="external-mongodb-a-cross-platform-document-oriented-database-program-logo-bold-tal-revivo"/>],
    techUsedDesc:"The duration of the project was 9 days and worked in a group of four. As a group we decided we wanted to build a travel site. And to use an Express API to serve data from a Mongo database. We built a travel site. Technologies we used include Express MongoDB Mongoose React Node.js JWT Bcrypt Axios GitHub Git Bulma MapboxGL Supertest Chai and Mocha.",
    additionalTechUsed:[<img className={classes.icons}  src="https://img.icons8.com/ios-filled/50/css3.png" alt="css3"/>, <img className={classes.icons}  src="https://img.icons8.com/ios-filled/50/visual-studio.png" alt="visual-studio"/>],
    
  },{
    id:4,
    title:"Project 4",
    subtitle:"Baggle",
    url:"https://baggle.onrender.com/",
    github:"https://github.com/aozzy/project-4",
    type:"Group Project",
    ga:true,
    image:"./images/homepage.png",
    openingDesc:"For the final project of the General Assembly Software Immersive Course we were tasked as a group to build a full stack application...",
    icons:[<Lottie className={classes.icons} animationData={pyhton} loop={true}/>,<img className={classes.icons} src="https://img.icons8.com/ios/50/flask.png" alt="flask"/>,<Lottie  className={classes.icons} animationData={react} loop={true}/>,<img className={classes.icons} src="https://img.icons8.com/ios-filled/50/postgreesql.png" alt="postgreesql"/>],
    techUsedDesc:"with a Python Flask back-end. The duration of the project was a week. After exchanging ideas for the project we choose to develop Baggle, The idea behind Baggle came from the story of Kyle McDonald who went from owning a paper clip to a house in 14 trades. Technologies we used include React Python PostgreSQL Flask Marshmallow & SQLalchemy Git & GitHub Bulma Webpack Heroku Insomnia Tableplus and Babel",
    additionalTechUsed:[<img className={classes.icons} src="https://img.icons8.com/ios-filled/50/css3.png" alt="css3"/>, <img className={classes.icons} src="https://img.icons8.com/ios-filled/50/visual-studio.png" alt="visual-studio"/>],
  },
  {
    id: 5,
    title: "Blog Central",
    url:"https://blog-central.onrender.com/",
    github:"https://github.com/aozzy/blog",
    type: 'Solo project',
    ga:false,
    image:"./images/blogcentral.png",
    openingDesc:"Blog central is a full stack application I built in a week.The app utilises full Crud capabilities, users are able to login/register and post...",
    icons:[<Lottie className={classes.icons} animationData={pyhton} loop={true}/>,<img className={classes.icons} src="https://img.icons8.com/ios/50/flask.png" alt="flask"/>,<img className={classes.icons} src="./images/jinja.svg" alt="jinja"/>,<img className={classes.icons} src="https://img.icons8.com/ios-filled/50/postgreesql.png" alt="postgreesql"/>],
    techUsedDesc:"blog content. The app is a solo projectI used Python Flask as a backend and rendered html templates using Jinja2.Technologies used include flask_bootstrap flask_ckeditor flask_sqlalchemy flask wtforms flask_gravatar werkzeug.security and Postgresql database.",
    additionalTechUsed:[<img className={classes.icons}src="https://img.icons8.com/ios-filled/50/visual-studio.png" alt="visual-studio"/>],
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
    openingDesc:"YelpCamp is a full stack application, it was built in 2 weeks. The app displays campgrounds from all over the world, users are able to...",
    icons:[<Lottie className={classes.icons} animationData={js} loop={true}/>,<img className={classes.icons} src="https://img.icons8.com/ios/50/express-js.png" alt="express-js"/>,<img className={classes.icons}  src="https://img.icons8.com/external-tal-revivo-bold-tal-revivo/24/external-mongodb-a-cross-platform-document-oriented-database-program-logo-bold-tal-revivo.png" alt="external-mongodb-a-cross-platform-document-oriented-database-program-logo-bold-tal-revivo"/>,<img className={classes.icons} src="./images/ejs.svg" alt="ejs" />],
    techUsedDesc:"login register and add campgrounds as well as commenting on campgrounds. I used Express as a backend and ejs to render templates on the frontend. The following technologies were used Express MongoDB Mongoose ejs cloudinary passport for authentication Mapbox and sanitize-html to prevent xss vulnerabilities.",
    additionalTechUsed:[<img className={classes.icons} src="https://img.icons8.com/ios/50/html-filetype--v1.png" alt="html-filetype--v1"/>,<img className={classes.icons} src="https://img.icons8.com/ios-filled/50/css3.png" alt="css3"/>],
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
    icons:[<img className={classes.icons} src="https://img.icons8.com/ios/50/html-filetype--v1.png" alt="html-filetype--v1"/>,<img className={classes.icons} src="https://img.icons8.com/ios-filled/50/css3.png" alt="css3"/>,<Lottie className={classes.icons} animationData={js} loop={true}/>],
    additionalTechUsed:[<img className={classes.icons} src="https://img.icons8.com/ios-filled/50/visual-studio.png" alt="visual-studio"/>],
    
  },
  
]




function Exp() {
  const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));
  
 
  
  
  
  const [expanded, setExpanded] = useState(-1);
  // const [expandedId, setExpandedId] = useState(-1)
  const handleExpandClick = (id) => {
    setExpanded(expanded === id ? -1 : id);
  };
  const [projectData,updateProjectData] = useState([])

  useEffect(()=>{
  updateProjectData(data)
},[])


  return (
    <section id="projects" className={classes.section}>
<div className={classes.innerContainer}>

   <h3 className={classes.title}>Projects</h3>
</div>
   <div className={classes.container}>

      <Grid container spacing={2} alignItems="center" justifyContent="center">
      
       

       
          {projectData.map(card => {
            return  <React.Fragment  key={card.id}>
              <Grid item xs={9} lg={5} md={6} sm={8} xl={4}>
    <Card sx={{ width:{
      xs:300,
      sm:400,
      md:400,
      lg:400,
      xl:450,
    } }} >
      <CardHeader avatar={
        
        card.ga ? <img className={classes.logo} src="./images/galogo.png"/> : <Avatar sx={{ bgcolor: red[500],height:"40px", }} aria-label="logo"></Avatar>
      } action={
        <div className={classes.btnGroup}>

          <IconButton aria-label="settings">
        <a className={classes.btn} href={`${card.url}`}>Visit</a>
          </IconButton>
          <IconButton aria-label="settings">
          <a className={classes.btn} href={`${card.github}`}>Github</a>
          </IconButton>
          </div>
        }title={`${card.title}`}
        subheader={`${card.type}`}/>

        
<CardMedia
     
        component="img"
        height="260"
        image={card.image}
        alt={card.title}
        />
      
      <CardContent>
        <div className={classes.projectInfo}>

        {card.openingDesc}
        </div>
        
       
      </CardContent>
        <h5 className={classes.subheader}>Tech used</h5>
        <CardActions disableSpacing>
          
        <IconButton aria-label="icon">
       
        </IconButton>
        
      {card.icons}
        <ExpandMore
        // key={card.id}
        expand={expanded}
        onClick={() => handleExpandClick(card.id)}
        aria-expanded={expanded === card.id}
        aria-label="show more"
        >
         <Typography id="#readMore" className={classes.readMore}>Read more</Typography>
         
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded === card.id} timeout="auto" unmountOnExit>
        <CardContent>
         
         
          {card.additionalTechUsed && <div className={classes.extraTech}>
          <Typography className={classes.subtitle}>Tools</Typography>
            
            {card.additionalTechUsed}</div>}


        
         {card.techUsedDesc  &&
         
         <Typography variant="body2" color="text.primary">
          {card.techUsedDesc}
          </Typography>}
         
         
          
        </CardContent>
      </Collapse>
      </Card>
           </Grid>
           </React.Fragment>
     })}
      
     
     </Grid>
     </div>
     </section>
  )
}

export default Exp
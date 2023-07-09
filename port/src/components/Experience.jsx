import React, { useState } from "react";
import { styled } from '@mui/material/styles';
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
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import pyhton from '/python.json'
import Lottie from "lottie-react";
import react from '/react.json'
import classes from "./modules/Experience.module.css";



const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));
const data = [
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
export default function Experience() {
  
  
  
  
  
  
  // const data = [
  //   "Projects",
  //   "Infrastructure & IT support",
  //   "Skills"
    
    
  // ];
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  // const [listItem, setListItem] = useState("Projects");
  return (
    
    <section id="experience" className={classes.section}>
      <div className={classes.container}>
      <Card sx={{ maxWidth: 450 }}>
    

      <CardHeader
        avatar={
          <img className={classes.logo} src="./images/galogo.png"/>
          // <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
          //   R
          // </Avatar>
        }
        action={
          <div>

          <IconButton aria-label="settings">
          <button className={classes.btn}><a href="https://blog-central.onrender.com/">Visit</a></button>
          </IconButton>
          <IconButton aria-label="settings">
          <button className={classes.btn}><a href="https://github.com/aozzy/blog">Github</a></button>
          </IconButton>
          </div>
        }
        title="Blog Central"
        subheader="Solo Project"
        />
        
      <CardMedia
        component="img"
        height="300"
        image="./images/blogcentral.png"
        alt="Blog Central"
        />
        
      <CardContent>
        <Typography variant="body2" color="text.primary">
        Blog central is a full stack application I built in a week.The app utilises full Crud capabilities,users are able to login/register and post blog content.
        
        </Typography>
      </CardContent>
        <h5 className={classes.subheader}>Tech used</h5>
      <CardActions disableSpacing>
        <IconButton aria-label="python icon">
        <Lottie className={classes.icon} animationData={pyhton} loop={true}/>
        </IconButton>
        <IconButton aria-label="flask icon">
        <img width="50" height="50" src="https://img.icons8.com/ios/50/flask.png" alt="flask"/>
        </IconButton>
        <IconButton aria-label="jinja icon">
        <img width="40" height="40" src="./images/jinja.svg" alt="jinja"/>
        </IconButton>
        <IconButton aria-label="flask icon">
        <img width="40" height="40" src="https://img.icons8.com/ios-filled/50/postgreesql.png" alt="postgreesql"/>
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
          >
         <h6 className={classes.readMore}>Read more</h6>
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          {/* <Typography paragraph>Method:</Typography> */}
          <Typography paragraph>
           I used Python Flask as a backend and rendered html templates using Jinja2.Technologies used include flask_bootstrap flask_ckeditor flask_sqlalchemy flask wtforms flask_gravatar werkzeug.security and Postgresql database.
          </Typography>
         
         
          
        </CardContent>
      </Collapse>
          
    </Card>
     {/* {data.map(card => {
      <Card sx={{ maxWidth: 450 }}>

      </Card>
     })} */}
      </div>

    </section>
  );
}











{/* <div className={classes.heading}>
      
<h3>Projects</h3>
</div>
<div className={classes.projects}>

<div className={classes.card}>
  <div className={classes.images}>
    <img src="../images/blogcentral.png" alt="blog central site" />
  </div>
  <div className={classes.title}>

  <h4>Blog Central</h4>
  </div>
  <div className={classes.info}>
    <button className={classes.btn}>Github Repo</button>
    <button className={classes.btn}>Open Project</button>
  </div>
  <div className={classes.description}>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil nam neque quaerat quibusdam aliquam corporis velit, ad quia amet deserunt quae voluptate natus fugiat eum nisi aspernatur placeat laudantium. Sapiente.</p>
  </div>
  <div className={classes.subtitle}>
    
  <h4>Tech used</h4>

  </div>
  <div className={classes.skillsContainer}>

  <div className={classes.iconContainer}>
    <img className={classes.icons} src="https://img.icons8.com/color/48/000000/python.png" alt="" />
  <div>
    Python
  </div>
  </div>
  <div className={classes.iconContainer}>
    <img className={classes.icons} src="https://img.icons8.com/cute-clipart/64/000000/flask.png" alt="" />
  <div>
   Flask
  </div>
  </div>
  <div className={classes.iconContainer}>
    <img className={classes.icons} src="https://img.icons8.com/color/48/bootstrap.png" alt="" />
  <div>
    Flask Bootstrap
  </div>
  </div>
  <div className={classes.iconContainer}>
    <img className={classes.icons} src="../images/jinja.svg" alt="" />
  <div>
    Jinja
  </div>
  </div>
  </div>

</div>

</div>

 */}

































// <div className={classes.section}>
//   <div className={classes.container}>
//     <div className={classes.left}>
     
//       <ul className={classes.list}>
//         {data.map((item) => (
//           <li className={classes.item} key={item} onClick={()=> setListItem(item)}>
//             {item}
//           </li>
//         ))}
//       </ul>
//     </div>
//     <div className={classes.right}>
//       {listItem === "Projects" ? (
//         // <h3>Hello World</h3>
//         <Projects />
//         ) : listItem === "Infrastructure & IT support" ? (
//         <Projects />
//       ) : listItem === "Skills" ? (
//         <Skills />
//       ) : (
//         <h3>Hello</h3>
//       )}
//     </div>
//   </div>
// </div>
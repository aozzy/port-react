import React, { useState } from "react";
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
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
export default function Experience() {
  
  const data = [
    "Projects",
    "Infrastructure & IT support",
    "Skills"
    
    
  ];
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  // const [listItem, setListItem] = useState("Projects");
  return (
    
    <section id="experience" className={classes.section}>
      <div className={classes.container}>
      <Card sx={{ maxWidth: 420 }}>
    

      <CardHeader
        avatar={
          <img className={classes.logo} src="./images/galogo.png"/>
          // <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
          //   R
          // </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            {/* <MoreVertIcon /> */}
          </IconButton>
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
        <div className={classes.btnContainer}><button className={classes.btn}><a href="https://blog-central.onrender.com/">Visit</a></button><button className={classes.btn}><a href="">Github</a></button></div>
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
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
           I used Python Flask as a backend and rendered html templates using Jinja2. Technologies used include flask_bootstrap flask_ckeditor flask_sqlalchemy flask wtforms flask_gravatar werkzeug.security and Postgresql database
          </Typography>
         
         
          
        </CardContent>
      </Collapse>
          
    </Card>
     
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
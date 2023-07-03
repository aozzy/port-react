import React, { useState } from "react";
import { Image,Card, CardHeader, CardBody, CardFooter,Stack,Heading,Text,Button,Divider,ButtonGroup } from '@chakra-ui/react'
import classes from "./modules/Experience.module.css";

export default function Experience() {
  
  const data = [
    "Projects",
    "Infrastructure & IT support",
    "Skills"
    
    
  ];
  // const [listItem, setListItem] = useState("Projects");
  return (
    <section id="experience" className={classes.section}>
      <div className={classes.container}>
      <Card maxW='sm' variant="outline" size='lg'>
  <CardBody>
    <Image
      src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80'
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Living room Sofa</Heading>
      <Text>
        This sofa is perfect for modern tropical spaces, baroque inspired
        spaces, earthy toned spaces and for people who love a chic design with a
        sprinkle of vintage design.
      </Text>
      <Text color='blue.600' fontSize='2xl'>
        $450
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        Buy now
      </Button>
      <Button variant='ghost' colorScheme='blue'>
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>
    <div className={classes.card}>
    <img className={classes.image} src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80" alt="" />
    <h3 className={classes.title}>Living room Sofa </h3>
    <p className={classes.description}>This sofa is perfect for modern tropical spaces, baroque inspired spaces, earthy toned spaces and for people who love a chic design with a sprinkle of vintage design.</p>
    </div>
     
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
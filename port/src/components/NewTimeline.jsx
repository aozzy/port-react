import React from 'react'
import { VerticalTimeline, VerticalTimelineElement}  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import WorkIcon from 'react-vertical-timeline-component'
import classes from './modules/Newtimeline.module.css'

function NewTimeline() {
  return (
    <section id='experience'>
      <h3 className={classes.title}>Experience</h3>
      <VerticalTimeline >
      <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="11/2022 - 03/2022"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    // icon={  <img width="50" height="50" src="https://img.icons8.com/ios/50/c-sharp-logo.png" alt="c-sharp-logo"/>}
  >
    <h3 className="vertical-timeline-element-title">The Lighbulb</h3>
    <h4 className="vertical-timeline-element-subtitle">Online</h4>
    <p>
   I completed a skills bootcamp with the Lightbulb learning new skills like unreal engine and got to mentor junior developers.  
    </p>
  </VerticalTimelineElement>
        
      <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="02/2022 - 11/2022"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    // icon={<SchoolIcon />}
  >
    <h3 className="vertical-timeline-element-title">Udemy</h3>
    <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
    <p>
   I completed the following Udemy courses: The complete JavaScript course 20222, 100 days of Python, React the complete guide,
   The Web Developer Bootcamp 2022
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="9/2021 - 1/2022"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    // icon={<WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title">
IT Support Engineer, Contract</h3>
    <h4 className="vertical-timeline-element-subtitle">Medpace, London</h4>
    <p>
      Supporting a base of 400 users in the London office, Providing 1st & 2nd Line Support 
    </p>
  </VerticalTimelineElement>
   <VerticalTimelineElement
    className="vertical-timeline-element--education"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    date="12/2020 - 04/2021"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    // icon={<SchoolIcon />}
  >
    <h3 className="vertical-timeline-element-title">Software Engineering Immersive student</h3>
    <h4 className="vertical-timeline-element-subtitle">General Assembly, London</h4>
    <p>
    During the 12 week Software Engineering Immersive course I learned about the fundamentals of web development, the Creation of front-end web applications using Javascript, React, HTML5, CSS & SCSS and how to develop and deploy full-stack applications with technologies including Python with Flask and Express with Node.js. I also learned how to consume and integrate third-party APIs and got to practice version control with Git and Github.
    </p>
  </VerticalTimelineElement>
  
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="02/2020 - 08/2020"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    // icon={<WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title">Field and Ad hoc Engineer, Contract</h3>
    <h4 className="vertical-timeline-element-subtitle">Wavex, London</h4>
    <p>
    Providing desketop support & Ad-Hoc infrastructure support and bespoke infrastructure checks for Wavex clients at Wavex HQ and at the client’s site, with a user base of over 2000 users across the professional services industry
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="03/2019 - 09/2019"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    // icon={<WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title">Field Engineer, Contract</h3>
    <h4 className="vertical-timeline-element-subtitle">Wavex, London</h4>
    <p>
Working within an ISO27001 environment proving high quality IT & Infrastructure support to Wavex clients.
Ability to work effectively with minimal supervision and the ability to prioritise tasks appropriate
Providing Desktop Support and bespoke infrastructure checks for Wavex clients at Wavex HQ and at the client’s site, with a user base of over 2000 users across the professional services industry.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="09/2018 - 12/2018"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    // icon={<WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title">IT Support Engineer, Contract</h3>
    <h4 className="vertical-timeline-element-subtitle">Ethos, London</h4>
    <p>
    Providing 3rd & 2nd Line Support to a user base of 250 users, Working in a team of two.
Administration and maintenance of all IT infrastructure, Supporting Windows Server 2003 R2. 
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="04/2018 - 03/2018"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    // icon={<WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title">2nd Line Support, Contract</h3>
    <h4 className="vertical-timeline-element-subtitle">RIBA, London</h4>
    <p>
Providing 2nd Line support to a user base of 400 users, Desk side phone and remote support.
Taking ownership of tickets escalated from 1st line support, also participating in 3rd line projects
Supporting Windows Server 2008r2 Server 2012r2 and 2016 datacentre, Windows 7 and OSX operating systems.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="02/2018 - 03/2018"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    // icon={<WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title">Office 365 rollout and audit Engineer, Contract</h3>
    <h4 className="vertical-timeline-element-subtitle">Havas Media, London</h4>
    <p>
Working in a team of four rolling out 0365 to a user base of 1600
Installing Office 2016 on windows 7/10 and OSX devices.
Ensuring all previous versions of office has been uninstalled off every device.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="08/2017 - 11/2018"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    // icon={<WorkIcon />}
    >
    <h3 className="vertical-timeline-element-title">Technical Support Analyst, Contract</h3>
    <h4 className="vertical-timeline-element-subtitle">London South Bank University, London</h4>
    <p>
Providing Technical support to a user base of over 3500 staff and Research students.
Ensuring deskside, phone and AV support across all LSBU Southbank sites.
Logging Tickets using Topdesk ITSM, Resolving Tickets or escalating tickets to the relevant teams.
    </p>
  </VerticalTimelineElement>
  
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      date="01/2017 - 07/2017"
      iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
      // icon={<WorkIcon />}
    >
      <h3 className="vertical-timeline-element-title">Team Lead , Windows 10 rollout Engineer, Contract</h3>
      <h4 className="vertical-timeline-element-subtitle">Colt Technology Services, London, Barcelona, Zurich, Paris, Milan</h4>
      <p>
Imaging and building 2000+ laptops and desktop machines as part of a rollout project.
Configuring Lenovo Yoga’s 260 and Dell Latitude E5270 Laptops for staff in the UK France Germany Spain the Netherlands Belgium Switzerland Italy Portugal Romania and the US.
Deploying images using SCCM and using Counter Act to whitelist the machines.
Ensuring all users has access to their VDI once migrated to Windows 10.
      </p>
    </VerticalTimelineElement>
  
  
  
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      date="07/2016 - 10/2016"
      iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
      // icon={<WorkIcon />}
    >
      <h3 className="vertical-timeline-element-title">Service Desk Analyst, Contract</h3>
      <h4 className="vertical-timeline-element-subtitle">Cancer Research, London</h4>
      <p>
      •Working within a team of 8 supporting a user base of 4000 users.
Providing 1st / 2nd line resolutions where applicable and logging calls via the Service Now system and assigning tickets to the relevant teams.
      </p>
    </VerticalTimelineElement>
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      date="09/2015 - 06/2016"
      iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
      // icon={<WorkIcon />}
    >
      <h3 className="vertical-timeline-element-title">2nd Line Support, Contract</h3>
      <h4 className="vertical-timeline-element-subtitle">Omnicom Media Group UK, London</h4>
      <p>
Working in a Team of 3 providing deskside and phone support to over 400 users.
Creating network accounts for new joiners using Active Directory and MS Exchange.
Logging and Resolving Tickets through the Altiris ticking system and the Cherwell system. 

      </p>
    </VerticalTimelineElement>
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      date="01/2015 - 04/2015"
      iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
      // icon={<WorkIcon />}
    >
      <h3 className="vertical-timeline-element-title">1st Line Support, Contract</h3>
      <h4 className="vertical-timeline-element-subtitle">GroupM, London</h4>
      <p>
  Working alongside IBM staff supporting 2000+ users across four Group M sites in London.
 Troubleshooting printer issues, replacing toner and fusers, fixing paper jams and solving printer errors.
Imaging and configuring laptops and desktops using LANDesk. 
 Configuring Macs and installing requested software for users. Re-imaging and software installation of rebuilds.

      </p>
    </VerticalTimelineElement>
  
  
  
  {/* <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="April 2013"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    // icon={<SchoolIcon />}
  >
    <h3 className="vertical-timeline-element-title">Content Marketing for Web, Mobile and Social Media</h3>
    <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
    <p>
      Strategy, Social Media
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="November 2012"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    // icon={<SchoolIcon />}
  >
    <h3 className="vertical-timeline-element-title">Agile Development Scrum Master</h3>
    <h4 className="vertical-timeline-element-subtitle">Certification</h4>
    <p>
      Creative Direction, User Experience, Visual Design
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="2002 - 2006"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    // icon={<SchoolIcon />}
  >
    <h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
    <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
    <p>
      Creative Direction, Visual Design
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
    // icon={<StarIcon />}
  /> */}
</VerticalTimeline>
    </section>
  )
}

export default NewTimeline
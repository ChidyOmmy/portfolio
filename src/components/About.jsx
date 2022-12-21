import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { useTheme } from "@mui/material/styles";
import Dev from "./Dev";
import Skills from "./Skills";

const About = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        [theme.breakpoints.down("sm")]: { padding: 2 },
        [theme.breakpoints.up("sm")]: { padding: 10 }
      }}>
      <Typography variant='h3'>ABOUT THE DEVELOPER</Typography>
      <Box
        sx={{
          [theme.breakpoints.down("sm")]: {
            width: "100%",
            maxWidth: "100%",
            flexDirection: "column"
          },
          [theme.breakpoints.up("sm")]: {
            width: "530px"
          },
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}>
        <Dev />
        <Typography
          variant='h2'
          color='titleColor.main'
          sx={{ [theme.breakpoints.down("sm")]: { fontSize: "300%" } }}>
          Rashid Shakili
        </Typography>
      </Box>
      <Typography component='div'>
        I am a{" "}
        <Typography component='span' color='titleColor.main'>
          23 years old software developer based in Tanzania{" "}
        </Typography>
        , I started to learn coding back when I was a teenager in secondary
        school. I learned from online sources and later on joined{" "}
        <Typography
          component='a'
          href='https://ucc.co.tz'
          color='titleColor.main'>
          The University of Dar es Salaam Computing Center (UCC)
        </Typography>{" "}
        where I learned Computing and Information Technology (CIT), but I
        couldn't finish due to financial reasons. I then joined Harvard
        Extension School{" "}
        <Typography
          component='a'
          href='https://www.edx.org/school/harvardx'
          color='titleColor.main'>
          (HarvardX){" "}
        </Typography>
        via the online learning platform{" "}
        <Typography
          component='a'
          href='https://www.edx.org/course/cs50s-web-programming-with-python-and-javascript'
          color='titleColor.main'>
          edX
        </Typography>
        , at edX I joined one of the largest (even on campus) Computer Science
        course CS50. I enrolled at{" "}
        <Typography
          component='a'
          href='https://cs50.harvard.edu/web/2020/'
          color='titleColor.main'>
          CS50's Web Programming with Python and JavaScript{" "}
        </Typography>
        which includes 9 lectures and 6 projects. I completed all lectures in 9
        weeks and 5 out of 6 projects of the course while the remaining project
        being the final project which I will finish after paying the
        professional certificate fees. CS50's Web Programming with Python and
        JavaScript contains 9 lectures which are
        <List>
          <ListItem key='lecture0'>
            <ListItemText
              primary='HTML/CSS'
              secondary='all of the basic and advanced HTML tags and CSS tricks'
            />
          </ListItem>
          <ListItem key='lecture1'>
            <ListItemText
              primary='Git/GitHub'
              secondary='Version control tool that development team use to keep track of changes made to different documents and repositories'
            />
          </ListItem>
          <ListItem key='lecture2'>
            <ListItemText
              primary='Python'
              secondary='A multi-purpose, cross-platform most popular programming language that can be used to create backend scripts'
            />
          </ListItem>
          <ListItem key='lecture3'>
            <ListItemText
              primary='Django'
              secondary='A Python framework for creating dynamic web application'
            />
          </ListItem>
          <ListItem key='lecture4'>
            <ListItemText
              primary='SQL, Models and Migration'
              secondary='Database design and object relation mapping'
            />
          </ListItem>
          <ListItem key='lecture5'>
            <ListItemText
              primary='JavaScript'
              secondary="A front-end scripting language for web browsers, it's important for web page to be dynamic and interactive. It can also be used for backend development using Node.js"
            />
          </ListItem>
          <ListItem key='lecture6'>
            <ListItemText
              primary='User Interfaces'
              secondary='A way for user to interact with a webpage different libraries and frameworks such as React, Angular, VueJs and Bootstrap'
            />
          </ListItem>
          <ListItem key='lecture7'>
            <ListItemText
              primary='Testing, CI/CD'
              secondary='Different tools and libraries such as selenium for automated. Continous Integration and Continous Deployment so that you spend less time writing tests'
            />
          </ListItem>
          <ListItem key='lecture8'>
            <ListItemText
              primary='Scalability and Security'
              secondary='Scaling servers and database servers as websites grows but also increasing security and making sure the website works on each device by using technologies such as creating Docker files and virtual machines'
            />
          </ListItem>
        </List>
      </Typography>
      <Skills />
    </Box>
  );
};

export default About;

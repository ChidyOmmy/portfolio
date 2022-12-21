import React from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Paper from "@mui/material/Paper";
import { useTheme } from "@mui/material/styles";

const Skills = () => {
  const theme = useTheme();
  return (
    <Box>
      <Typography variant='h6'>My skills</Typography>
      <Box
        sx={{
          display: "flex",
          [theme.breakpoints.down("md")]: { flexDirection: "column" },
          justifyContent: "space-between"
        }}>
        <Card
          sx={{ margin: 2, [theme.breakpoints.down("sm")]: { margin: 0.2 } }}>
          <Typography variant='h5' sx={{ textAlign: "center" }}>
            {" "}
            Front-end{" "}
          </Typography>
          <List>
            <ListItem>
              <ListItemText
                primary='I can create a responsive website'
                secondary='A website that looks good on desktop,laptop,tablet, mobile and when printed using css grids, flexboxes and media queries'
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary='I can create different themes for the entire web application'
                secondary='I can also create different type of dark modes and light mode that looks good on the eye'
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary='I can make a web app use different font face based on an OS'
                secondary='For an instance people using iPhones and Macbooks would see the apple system default fonts while people on android and pc would see a different font face'
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary='I can create a dynamic single page web app'
                secondary='a single page web app could have dynamic contents as user keeps interacting with it but new contents gets loaded without refreshing the entire page'
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary='I can create eye catching animations on html elements and svg images'
                secondary='I use animations libraries that makes animation looks a little more lively as if they obey the laws of physics'
              />
            </ListItem>
          </List>
          <Typography variant='h6' m={1}>
            Technologies used in the front-end
          </Typography>
          <Box sx={{ margin: 2 }}>
            <Paper
              sx={{
                display: "flex",
                justifyContent: "space-evenly"
              }}>
              <Card sx={{ margin: 1, padding: 1 }}>
                <img
                  alt='Javascript'
                  width='50px'
                  height='50px'
                  src='https://w7.pngwing.com/pngs/640/199/png-transparent-javascript-logo-html-javascript-logo-angle-text-rectangle-thumbnail.png'
                />
                <Typography>JavaScript</Typography>
              </Card>
              <Card sx={{ margin: 1, padding: 1 }}>
                <img
                  width='50px'
                  height='50px'
                  alt='react'
                  src='https://w7.pngwing.com/pngs/452/495/png-transparent-react-javascript-angularjs-ionic-github-text-logo-symmetry-thumbnail.png'
                />
                <Typography>React</Typography>
              </Card>
              <Card sx={{ margin: 1, padding: 1 }}>
                <img
                  width='50px'
                  height='50px'
                  alt='MUI'
                  src='https://w7.pngwing.com/pngs/625/531/png-transparent-material-ui-hd-logo-thumbnail.png'
                />
                <Typography>MUI</Typography>
              </Card>
              <Card sx={{ margin: 1, padding: 1 }}>
                <img
                  alt='api'
                  src='https://w7.pngwing.com/pngs/131/718/png-transparent-representational-state-transfer-computer-icons-application-programming-interface-web-api-others-miscellaneous-blue-computer-network-thumbnail.png'
                  width='50px'
                  height='50px'
                />
                <Typography>Rest API</Typography>
              </Card>
              <Card sx={{ margin: 1, padding: 1 }}>
                <img
                  alt='Framer'
                  src='https://w7.pngwing.com/pngs/766/746/png-transparent-framer-blue-logo-thumbnail-tech-companies-thumbnail.png'
                  width='50px'
                  height='50px'
                />
                <Typography>FramerMotion</Typography>
              </Card>
            </Paper>
          </Box>
        </Card>
        <Card
          sx={{ margin: 2, [theme.breakpoints.down("sm")]: { margin: 0.2 } }}>
          <Typography variant='h5' sx={{ textAlign: "center" }}>
            Backend
          </Typography>
          <List>
            <ListItem>
              <ListItemText
                primary='I have in-depth knowledge of Python and JavaScript programming language'
                secondary='The two programming languages are the most popular among developers in 2022 according to Google trends'
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary='I can create dynamic web application using the Django framework'
                secondary='The Django framework is the framework which is currently used to create YouTube, Instagram and more'
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary='I can create APIs for front-end developers'
                secondary='API or Application Programming Interface is the interface for  communication and data sharing between the backend (server-side) and the front-end (client-side)'
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary='I can create data models in different SQL databases'
                secondary='I can write python code to auto generate SQL commands to write, update, get, and delete data in the database securely'
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary='I can write automated test and code actions'
                secondary='I can write github code actions to test and deploy whenever change is made to a master branch'
              />
            </ListItem>
          </List>
          <Typography variant='h6' m={1}>
            Technologies used in the Back-end
          </Typography>
          <Box sx={{ margin: 2 }}>
            <Paper
              sx={{
                display: "flex",
                justifyContent: "space-evenly"
              }}>
              <Card sx={{ margin: 1, padding: 1 }}>
                <img
                  alt='Python'
                  src='https://w7.pngwing.com/pngs/140/948/png-transparent-blue-and-yellow-logo-python-logo-programmer-fierce-python-s-cdr-angle-text-thumbnail.png'
                  width='50px'
                  height='50px'
                />
                <Typography>Python</Typography>
              </Card>
              <Card sx={{ margin: 1, padding: 1 }}>
                <img
                  alt='django'
                  src='https://w7.pngwing.com/pngs/159/366/png-transparent-django-python-computer-icons-logo-python-text-label-rectangle-thumbnail.png'
                  width='50px'
                  height='50px'
                />
                <Typography>Django</Typography>
              </Card>
              <Card sx={{ margin: 1, padding: 1 }}>
                <img
                  alt='SQL'
                  src='https://w7.pngwing.com/pngs/105/17/png-transparent-microsoft-azure-sql-database-microsoft-sql-server-cloud-computing-blue-text-logo-thumbnail.png'
                  width='50px'
                  height='50px'
                />
                <Typography>SQL</Typography>
              </Card>
              <Card sx={{ margin: 1, padding: 1 }}>
                <img
                  alt='git'
                  src='https://w7.pngwing.com/pngs/651/927/png-transparent-git-repository-version-control-commit-bitbucket-github-angle-git-repository-thumbnail.png'
                  width='50px'
                  height='50px'
                />
                <Typography>GIT</Typography>
              </Card>
            </Paper>
          </Box>
        </Card>
      </Box>
    </Box>
  );
};

export default Skills;

import React from "react";
import Box from "@mui/material/Box";
import Appbar from "@mui/material/Appbar";
import Toolbar from "@mui/material/toolbar";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import { useTheme, styled } from "@mui/material/styles";

const ProjectCard = styled(Card)(({ theme }) => ({
  width: "45%",
  margin: 5,
  [theme.breakpoints.down("md")]: { width: "80%" },
  [theme.breakpoints.down("sm")]: { width: "100%", margin: 1, marginBottom: 12 }
}));

const FrontendProjects = () => {
  const theme = useTheme();
  return (
    <Box sx={{ maxWidth: "100%" }}>
      <Appbar color='transparent' position='sticky'>
        <Toolbar>
          <Typography variant='h6' color='primary'>
            Front-end Technology
          </Typography>
        </Toolbar>
      </Appbar>
      <Typography
        color='text.secondary'
        variant='h3'
        sx={{
          m: 4,
          fontFamily: "Roboto",
          [theme.breakpoints.down("sm")]: { fontSize: "16px" }
        }}>
        The following are web applications made using React, Material UI and
        OMDB API
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          padding: 5,
          [theme.breakpoints.down("sm")]: { padding: 0 },
          [theme.breakpoints.down("md")]: {
            padding: 2,
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
          }
        }}>
        <ProjectCard>
          <CardHeader
            title='React Movieapp'
            subheader='A Netflix-like web application that allows you to search for a movie title and get search results in forms of cards with movie title,genre, poster and year'
          />
          <Box
            sx={{
              position: "relative"
            }}>
            <CardMedia
              alt='React Movie app'
              component='img'
              image='https://live.staticflickr.com/65535/52575223729_c636c89798_z.jpg'
            />
            <Box
              sx={{
                position: "absolute",
                width: "100%",
                height: "100%",
                top: 0,
                opacity: 0,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: theme.palette.background.paper,
                "&:hover": { opacity: 0.6 }
              }}>
              <Link href='https://chidyommy.github.io/react-movieapp/'>
                <Button variant='contained' sx={{ m: 2 }}>
                  View Web App
                </Button>
              </Link>
              <Link href='https://github.com/ChidyOmmy/react-movieapp'>
                <Button variant='contained' sx={{ m: 2 }}>
                  View Source Code
                </Button>
              </Link>
            </Box>
          </Box>
        </ProjectCard>
        <ProjectCard>
          <CardHeader
            title='React Insta-clone'
            subheader="a clone of meta's instagram, dark mode is also available, made using React and Material-UI"
          />

          <Box
            sx={{
              position: "relative"
            }}>
            <CardMedia
              component='img'
              alt='React Insta-clone app'
              image='https://live.staticflickr.com/65535/52575178476_0b99de39b8_z.jpg'
            />
            <Box
              sx={{
                position: "absolute",
                width: "100%",
                height: "100%",
                top: 0,
                opacity: 0,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: theme.palette.background.paper,
                "&:hover": { opacity: 0.6 }
              }}>
              <Link href='https://chidyommy.github.io/react-insta/'>
                <Button variant='contained' sx={{ m: 2 }}>
                  View Web App
                </Button>
              </Link>
              <Link href='https://github.com/ChidyOmmy/react-insta'>
                <Button variant='contained' sx={{ m: 2 }}>
                  View Source Code
                </Button>
              </Link>
            </Box>
          </Box>
        </ProjectCard>
      </Box>
    </Box>
  );
};

export default FrontendProjects;

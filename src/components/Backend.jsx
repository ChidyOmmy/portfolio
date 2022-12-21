import React, { useState } from "react";
import { motion } from "framer-motion";
import { styled } from "@mui/material/styles";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import About from "./About";
import Media from "./Media";
import ContactCard from "./ContactCard";

const Iframe = styled("iframe")(({ theme }) => ({
  [theme.breakpoints.down("sm")]: { maxWidth: "100%" }
}));

const ytvideos = [
  {
    id: 1,
    caption: `A WikiPedia-like web application that allows anonymous users to create and edit existing encyclopedia entry, the beautiful part is that users 
       don't have to write html code and instead users have to write entries using markdown syntax which will then be converted to HTML inside the application `,
    children: (
      <Iframe
        width='560'
        height='315'
        src='https://www.youtube.com/embed/2h0uMyzCZSI'
        title='YouTube video player'
        frameBorder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen></Iframe>
    )
  },
  {
    id: 2,
    caption: `An e-commerce web application that allows users to create account, create listings and the initial price then the rest of other users
    can place biddings higher than the current price/bid. Anyone with the highest bid may become the winner of a certain listing auction, users can also create watchlists for some listings
    `,
    children: (
      <Iframe
        width='560'
        height='315'
        src='https://www.youtube.com/embed/Tb4kAr3XH2E'
        title='YouTube video player'
        frameBorder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen></Iframe>
    )
  },
  {
    id: 3,
    caption: `A G-mail like web application that allows users to create email accounts, send emails to one or multiple recipients.
    Users can also receive emails, read them and archive/unarchive them. All of this is done in real-time without page reloading`,
    children: (
      <Iframe
        width='560'
        height='315'
        src='https://www.youtube.com/embed/IoVvug0ZWWs'
        title='YouTube video player'
        frameBorder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen></Iframe>
    )
  },
  {
    id: 4,
    caption: `A social network app, that alows user to create accounts, login and logout, create posts, edit them, like and unlike posts in real time and also follow and unfollow users without having to reload.
    Users also have a few restrictions such as the inability for a user to follow themselves and a different user to edit posts of other users. all of this is done without page reloading and in both post and get requests
    `,
    children: (
      <Iframe
        width='560'
        height='315'
        src='https://www.youtube.com/embed/rIgek1fOWME'
        title='YouTube video player'
        frameBorder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen></Iframe>
    )
  }
];

const MotionVideo = styled(motion.div)(({ theme }) => ({}));
const Backend = () => {
  const [videos] = useState(ytvideos);
  const [mode, setMode] = useState("dark");
  const theme = createTheme({
    palette: {
      mode: mode,
      titleColor: {
        main: mode === "dark" ? "#00ffff" : "#0008b"
      },
      background: {
        default: mode === "light" ? "ddd" : "rgb(4, 43, 36)",
        paper: mode === "light" ? "#ddd" : "rgb(4, 43, 36)"
      }
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <Box bgcolor='background.paper' color='text.primary'>
        <AppBar position='sticky' color='inherit'>
          <Toolbar
            variant='dense'
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center"
            }}>
            <Typography variant='h6' sx={{ fontFamily: "CYBORG" }}>
              Backend Technologies
            </Typography>
            <Button
              onClick={() => setMode(mode === "dark" ? "light" : "dark")}
              children={
                mode === "light" ? "Turn off the Lights" : "Light It Up"
              }
            />
          </Toolbar>
        </AppBar>
        <Box
          sx={{
            padding: 10,
            minHeight: "100vh",
            [theme.breakpoints.down("lg")]: {
              padding: 2
            }
          }}>
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ ease: "easeInOut" }}>
            <Typography
              variant='h4'
              sx={{
                fontWeight: "bolder",
                fontFamily: "CYBORG, Helvetica, sans-serif",
                color: theme.palette.titleColor.main
              }}>
              As beautiful as the front-end UI looks, the backend is as
              functional and comprehent
            </Typography>
          </motion.div>
          <Typography component='div' sx={{ fontFamily: "sans-serif, Aerial" }}>
            These are videos showing the functionality of web applications made
            using Python and JavaScript with frameworks like Django and
            Bootstrap and a SQLite database. Some apps use asynchronous
            technologies like fetch API,and Websockets for real time data
            management and to generate HTML.
          </Typography>
          <Typography>
            The code for these applications can be found on github branches{" "}
            <Typography
              key='me50'
              component='a'
              color='titleColor.main'
              sx={{ fontFamily: "arial,sans-serif" }}
              href='https://github.com/me50/ChidyOmmy'>
              ME50
            </Typography>
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
              overflow: "none"
            }}>
            {videos.map((video) => (
              <MotionVideo
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                transition={{ easy: "easyIn" }}>
                <Media
                  key={video.id}
                  embed={video.children}
                  caption={video.caption}
                />
              </MotionVideo>
            ))}
          </Box>
        </Box>
        <About />
        <ContactCard />
      </Box>
    </ThemeProvider>
  );
};

export default Backend;

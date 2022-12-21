import { createTheme, styled, ThemeProvider } from "@mui/material/styles";
import { motion } from "framer-motion";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Dev from "./Dev";
import ModeNight from "@mui/icons-material/ModeNight";
import { useState } from "react";

const ContainerBox = styled(Box)(({ theme }) => ({
  display: "flex",
  marginTop: 15,
  paddingBottom: 35,
  [theme.breakpoints.down("md")]: { flexDirection: "column" },
  width: "100%",
  alignItems: "center"
}));
const IntroductionBox = styled(motion.div)(({ theme }) => ({
  [theme.breakpoints.up("md")]: { width: "50%" },
  [theme.breakpoints.down("md")]: {
    width: "100%",
    fontSize: "100%"
  }
}));
const GreenText = styled("span")(({ theme }) => ({
  color: "rgb(1, 230, 1)"
}));

const Intro = () => {
  const [mode, setMode] = useState("dark");

  const theme = createTheme({
    palette: {
      mode: mode,
      otherColor: {
        main: "white"
      }
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <Box bgcolor='background.default'>
        <AppBar position='relative' color='otherColor'>
          <Toolbar
            sx={{
              fontFamily: "Helvetica, Avenir,Futura",
              display: "flex",
              justifyContent: "space-between"
            }}>
            <Typography variant='h6'>DEV CHIDY</Typography>
            <ModeNight
              onClick={() => setMode(mode === "dark" ? "light" : "dark")}
            />
          </Toolbar>
        </AppBar>
        <ContainerBox>
          <IntroductionBox
            animate={{ x: 2, scale: 1 }}
            initial={{ scale: 0 }}
            transition={{ ease: "easeIn" }}>
            <Box>
              <Typography
                sx={{
                  backgroundColor: "rgba(0,255,0, 0.1)",
                  borderRadius: "25px 5px",
                  color: "#0f0",
                  fontWeight: "bolder",
                  padding: 1,
                  [theme.breakpoints.down("md")]: {
                    margin: 2
                  },
                  [theme.breakpoints.down("lg")]: {
                    fontSize: "16px"
                  }
                }}
                variant='h4'
                component='span'>
                Hello World!, I'm Rashid Shakili
              </Typography>
              <Typography
                variant='h6'
                component='div'
                sx={{
                  fontWeight: "bolder",
                  margin: 3,
                  [theme.breakpoints.down("md")]: { fontSize: "150%" },
                  [theme.breakpoints.up("md")]: { fontSize: "300%" },
                  color: "text.secondary",
                  fontFamily: "CYBORG, Helvetica, sans-serif"
                }}>
                A <GreenText>FULL-STACK WEB DEVELOPER </GreenText>, I HELP
                STARTUPS AND TECH COMPANIES DESIGN AND IMPLEMENT
                <GreenText> IDEAS INTO SOFTWARE</GreenText>
              </Typography>
            </Box>
          </IntroductionBox>
          <IntroductionBox
            sx={{
              [theme.breakpoints.down("md")]: {}
            }}
            animate={{ x: -2, scale: 1 }}
            initial={{ scale: 0 }}>
            <Dev />
          </IntroductionBox>
        </ContainerBox>
      </Box>
    </ThemeProvider>
  );
};

export default Intro;

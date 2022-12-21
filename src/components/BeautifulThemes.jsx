import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import { useState } from "react";
import { motion } from "framer-motion";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Badge from "@mui/material/Badge";
import Rocket from "./Rocket";
import FrontendProjects from "./FrontendProjects";

import ModeNight from "@mui/icons-material/ModeNight";

const SpanText = styled("span")(({ theme }) => ({
  color: theme.palette.primary.main
}));

const StyledBadge = styled(Badge)(({ theme }) => ({
  marginRight: 25,
  [theme.breakpoints.down("sm")]: { marginRight: 25 }
}));

const StyledMotionDiv = styled(motion.div)(({ theme }) => ({
  [theme.breakpoints.down("md")]: { width: "100%" },
  [theme.breakpoints.up("md")]: { width: "50%" }
}));

const redPalette = {
  primary: {
    main: "#cc0000"
  }
};
const bluePalette = {
  primary: {
    main: "#0000cc"
  }
};
const greenPalette = {
  primary: {
    main: "#00cc00"
  }
};
const tomatoPalette = {
  primary: {
    main: "#ff6347"
  }
};

const BeautifulThemes = () => {
  const [mode, setMode] = useState("light");
  const [palette, setPalette] = useState(bluePalette);
  const theme = createTheme({
    palette: {
      mode,
      ...palette,
      background: {
        default: mode === "dark" ? "rgb(1,1,27)" : "#ccc",
        paper: mode === "dark" ? "rgb(1,1,23)" : "#ddd"
      }
    }
  });
  return (
    <ThemeProvider theme={theme}>
      <Box bgcolor='background.default'>
        <AppBar position='relative' color='transparent'>
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant='h6' color='primary'>
              Try different themes
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                color: theme.palette.text.primary
              }}>
              <StyledBadge
                sx={{
                  "& .MuiBadge-badge": {
                    color: "lightblue",
                    backgroundColor: "blue"
                  }
                }}
                onClick={() => setPalette(bluePalette)}
                badgeContent={<span style={{ padding: 3 }} />}
              />
              <StyledBadge
                sx={{
                  "& .MuiBadge-badge": {
                    color: "lightblue",
                    backgroundColor: "red"
                  }
                }}
                onClick={() => setPalette(redPalette)}
                badgeContent={<span style={{ padding: 3 }} />}
              />
              <StyledBadge
                sx={{
                  "& .MuiBadge-badge": {
                    color: "lightblue",
                    backgroundColor: "green"
                  }
                }}
                onClick={() => setPalette(greenPalette)}
                badgeContent={<span style={{ padding: 3 }} />}
              />
              <StyledBadge
                sx={{
                  "& .MuiBadge-badge": {
                    color: "lightblue",
                    backgroundColor: "#ff6347"
                  }
                }}
                onClick={() => setPalette(tomatoPalette)}
                badgeContent={<span style={{ padding: 3 }} />}
              />
              <ModeNight
                sx={{
                  marginRight: 5
                }}
                onClick={() => setMode(mode === "dark" ? "light" : "dark")}
              />
            </Box>
          </Toolbar>
        </AppBar>
        <Box
          bgcolor='background.default'
          sx={{
            display: "flex",
            alignItems: "center",
            paddingBottom: 5,
            [theme.breakpoints.down("md")]: { flexDirection: "column" }
          }}>
          <StyledMotionDiv
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2 }}>
            <Box
              sx={{
                [theme.breakpoints.down("md")]: { padding: 2 },
                [theme.breakpoints.up("md")]: { padding: 10 },
                color: theme.palette.text.primary
              }}>
              <Typography
                variant='h2'
                sx={{
                  fontWeight: "bolder",
                  [theme.breakpoints.down("md")]: {
                    fontSize: "150%"
                  }
                }}>
                Choose to have a <SpanText>web application</SpanText> that
                supports <SpanText>different themes</SpanText> and
                <motion.span> animations</motion.span>
              </Typography>
              <Typography
                variant='subtitle1'
                sx={{
                  margin: 1,
                  padding: 1,
                  fontFamily: "Helvetica, Roboto",
                  fontWeight: "bolder",
                  fontSize: "80%",
                  textAlign: "center"
                }}>
                Try changing themes using the navigation bar above and see the
                magic <br />
                Click and drag the rocket anywhere to see the animation
              </Typography>
            </Box>
          </StyledMotionDiv>
          <StyledMotionDiv
            sx={{
              [theme.breakpoints.down("sm")]: {
                width: "40%",
                textAlign: "center",
                marginLeft: "30%",
                marginRight: "30%"
              }
            }}
            drag
            dragConstraints={{ top: 0, bottom: 0, right: 0, left: 0 }}
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}>
            <Box>
              <Rocket />
            </Box>
          </StyledMotionDiv>
        </Box>
        <FrontendProjects />
      </Box>
    </ThemeProvider>
  );
};

export default BeautifulThemes;

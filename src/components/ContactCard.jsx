import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import Tooltip from "@mui/material/Tooltip";
import Link from "@mui/material/Link";
import { useTheme } from "@mui/material/styles";
import { motion } from "framer-motion";

import Call from "@mui/icons-material/Call";
import Mail from "@mui/icons-material/Mail";
import LocationOn from "@mui/icons-material/LocationOn";

const ContactCard = () => {
  const theme = useTheme();
  return (
    <motion.div
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      transition={{ ease: "linear" }}>
      <Box
        sx={{
          padding: 5,
          display: "flex",
          justifyContent: "center",
          [theme.breakpoints.down("sm")]: { padding: 1 }
        }}>
        <Card
          sx={{
            width: "560px",
            display: "flex",
            [theme.breakpoints.down("sm")]: {
              width: "100%",
              flexDirection: "column"
            }
          }}>
          <CardMedia
            sx={{
              width: "50%",
              [theme.breakpoints.down("sm")]: { width: "100%" }
            }}
            component='img'
            alt='Rashid Shakili'
            src='https://live.staticflickr.com/65535/52568914559_53c267415f_n.jpg'
          />
          <CardContent>
            <Typography variant='h6'>Rashid Shakili</Typography>
            <Typography variant='caption'>Full-stack web developer</Typography>
            <List>
              <Link sx={{ textDecoration: "none" }} href='tel:+255 764 044 285'>
                <ListItem>
                  <ListItemIcon>
                    <Call />
                  </ListItemIcon>
                  <ListItemText
                    component='a'
                    tel='+255764044285'
                    primary='0764 044 285'
                    secondary='mobile'
                  />
                </ListItem>
              </Link>
              <Link
                sx={{ textDecoration: "none" }}
                href='mailto: chidyommy@outlook.com'>
                <ListItem>
                  <ListItemIcon>
                    <Mail />
                  </ListItemIcon>
                  <ListItemText
                    primary='chidyommy@outlook.com'
                    secondary='email'
                  />
                </ListItem>
              </Link>
              <ListItem>
                <ListItemIcon>
                  <LocationOn />
                </ListItemIcon>
                <Tooltip
                  title={
                    <iframe
                      title="Developer's address"
                      src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.5166241984734!2d39.19535111436528!3d-6.70662226743366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x185c51b8b21e6061%3A0xf94be13ba950bbcd!2sSalasala!5e0!3m2!1sen!2stz!4v1671449100126!5m2!1sen!2stz'
                      width='400'
                      height='300'
                      frameBorder='0'
                      allowFullScreen='true'
                      loading='lazy'
                      referrerpolicy='no-referrer-when-downgrade'></iframe>
                  }>
                  <ListItemText primary='Salasala Mbezi beach, Dar es Salaam' />
                </Tooltip>
              </ListItem>
            </List>
          </CardContent>
        </Card>
      </Box>
    </motion.div>
  );
};

export default ContactCard;

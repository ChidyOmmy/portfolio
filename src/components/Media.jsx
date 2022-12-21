import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";

const Media = ({ embed, caption }) => {
  const theme = useTheme();
  return (
    <Card
      sx={{
        display: "flex",
        [theme.breakpoints.up("md")]: { maxHeight: "315px", margin: 1 },
        [theme.breakpoints.down("md")]: {
          flexDirection: "column",
          margin: 0.5,
          maxWidth: "100%"
        }
      }}>
      <CardMedia children={embed} />
      <CardContent
        sx={{ overflowY: "auto" }}
        children={
          <Typography
            variant='h6'
            sx={{ [theme.breakpoints.down("lg")]: { fontSize: "16px" } }}>
            {caption}
          </Typography>
        }
      />
    </Card>
  );
};

export default Media;

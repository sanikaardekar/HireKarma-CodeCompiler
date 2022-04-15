import { Grid, Typography, CardMedia, Card, Button } from "@mui/material";
import Home from "../assets/home.jpg";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";
import Video from "../assets/code.mp4";

export default function LandingPage() {
  const classes = useStyles();
  return (
    <>
      <Grid
        container
        display="flex"
        justifyContent="center"
        alignItems="center"
        className={classes.outerGrid}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "90vw",
            height: "100vh",
            // marginTop: "150px",
          }}
        >
          <Grid
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <span
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginLeft: "40px",
                textAlign: "center",
              }}
            >
              <Typography
                style={{
                  fontSize: "40px",
                  fontWeight: "800",
                  color: "white",
                }}
              >
                Code • Create • Learn
              </Typography>
            </span>

            <div>
              <Link to="/code" style={{ textDecoration: "none" }}>
                <Button
                  variant="contained"
                  style={{
                    marginTop: "80px",
                    borderRadius: "10px",
                    width: "120px",
                    fontSize: "25px",
                    fontWeight: "700",
                    background: "rgb(164, 23, 235)",
                  }}
                >
                  Start
                </Button>
              </Link>
            </div>
          </Grid>
          <Grid item display="flex" justifyContent="center" alignItems="center">
            <Card className={classes.card}>
              <CardMedia
                component="iframe" src={Video} allow="autoPlay" 
              />
            </Card>
          </Grid>
        </div>
      </Grid>
    </>
  );
}
const useStyles = makeStyles(() => ({
  outerGrid: {
    width: "100vw",
    height: "100vh",
    position: "relative",
    content: " ",
    display: "block",
    backgroundImage: `url(${Home})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    overflow: "hidden",
    filter: "brightness(100%)",
  },
  card: {
    marginTop: "40px",
    display: "flex",
    justifyContent: "center",
    background: "rgba( 84, 78, 78, 0.35 )!important",
    boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )!important",
    backdropFilter: "blur( 3.5px )!important",

    border: "1px solid rgba( 255, 255, 255, 0.18 )!important",
    width: "600px",
    height: "400px",
    backgroundColor: "none!important",
  },
}));

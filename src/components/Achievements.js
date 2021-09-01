import React from "react";
import Typography from "@material-ui/core/Typography";
import { Grid, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { HeadingWithText } from "./utils/HeadingWithText";
import StarIcon from "@material-ui/icons/Star";
import * as path from "path";
import "@fontsource/nunito-sans";
import "@fontsource/open-sans";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundImage: "linear-gradient(to right, #3567D6, #13DED2)",
  },
  imgLeft: {
    backgroundImage: `url(${path.join(
      process.env.PUBLIC_URL,
      "achievements",
      "achievements-background1.png"
    )})`,
    backgroundRepeat: "no-repeat",
  },

  imgRight: {
    backgroundImage: `url(${path.join(
      process.env.PUBLIC_URL,
      "achievements",
      "achievements-background2.png"
    )})`,
    backgroundRepeat: "no-repeat",
  },
  title: {
    wordWrap: "break-word",
    fontFamily: '"Nunito Sans", "Helvetica", "Arial", sans-serif',
    fontWeight: "700",
  },
  text: {
    fontFamily: '"Open Sans", "Helvetica", "Arial", sans-serif',
    textAlign: "left",
  },
  feature: {
    fontFamily: '"Nunito Sans", "Helvetica", "Arial", sans-serif',
    fontSize: "2rem",
    border: "1px solid #B8BBBD",
    "&__image-box": {
      backgroundColor: "#E9F5FF",
      padding: "1rem 3rem",
    },
  },
  "&__content": {},
}));

const Item = ({ textBig, textSmall }) => {
  return (
    <>
      <Grid
        container
        item
        sm={2}
        style={{
          backgroundColor: "#1242AC",
          borderRadius: "2rem",
          color: "#fff",
          padding: "2rem 1rem",
        }}
        direction="column"
      >
        <Grid item>
          <Typography variant="h4">{textBig}</Typography>
        </Grid>
        <Grid item>
          <Typography variant="h6">{textSmall}</Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default function Achievements() {
  const classes = useStyles();
  const achievements = useAchievements();

  return (
    <Grid
      container
      spacing={4} 
      sm={12}
      justifyContent="space-between"
      className={classes.root}
    >
      <Grid container item style={{ top: 0 }} sm={12}>
        <Grid
          item
          sm={4}
          justifyContent="flex-start"
          className={classes.imgLeft}
        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem tempora veritatis est. Velit accusamus nisi fugit accusantium optio cupiditate voluptatum, corrupti nostrum, asperiores nam exercitationem fuga officiis quis a dicta. </Grid>
        <Grid
          item
          sm={4}
          justifyContent="flex-end"
          className={classes.imgRight}
        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quia neque doloribus fuga, totam voluptatibus? Corrupti ut nostrum ratione dolorum, dolorem consequuntur ab totam repudiandae eum porro necessitatibus illum repellendus.</Grid>
      </Grid>
      {/* <Grid item style={{ top: 0 }}>
        {achievements}
      </Grid> */}
    </Grid>
  );
}

const useAchievements = () => {
  const achievements = [
    {
      textBig: "40+",
      textSmall: "Labs Running",
    },
    {
      textBig: "300,000",
      textSmall: "Reports Generated",
    },

    {
      textBig: <>4.7 &#x2B50;</>,
      textSmall: "Rating from Users",
    },
    {
      textBig: "04",
      textSmall: "Countries Reached",
    },
  ];
  return achievements.map(({ textBig, textSmall }) => (
    <Item textBig={textBig} textSmall={textSmall} />
  ));
};

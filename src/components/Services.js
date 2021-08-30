import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { HeadingWithText } from "./utils/headingWithText";



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  feature: {
    fontFamily: '"Nunito Sans", "Helvetica", "Arial", sans-serif',
    fontSize: "2rem",
    border: "1px solid #B8BBBD",
    borderRadius: "10px",
    "&__image-box": {
      backgroundColor: "#E9F5FF",
      padding: "1rem 3rem"
    }
  },
  "&__content": {
  }
}

));



const Card = ({ imgPath, heading, content }) => {
  const classes = useStyles();
  console.log(imgPath);
  return (
    <Grid container direction="column" className={classes.feature}>
      <Grid item xs={12}>
        <img src={imgPath} alt="service" />
      </Grid>
      <Grid item xs={12} >
        <Typography variant="h5">{heading}</Typography>
      </Grid>
      <Grid item xs={12} >
        <Typography variant="body1">{content}</Typography>
      </Grid>
    </Grid>
  );
}


export default function Services() {
  const classes = useStyles();
  const cardList = [
    {
      imgPath: process.env.PUBLIC_URL + "/services/services-templates.png",
      heading: "Multiple Reporting Templates",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel auctor mauris. Proin convallis lobortis risus,"
    },
    {
      imgPath: process.env.PUBLIC_URL + "/services/services-instant.png",
      heading: "Instant, Automated, Secure",
      content: "Buy  your medicines with our mobile application with a simple delivery system"
    },
    {
      imgPath: process.env.PUBLIC_URL + "/services/services-pdf-whatsapp.png",
      heading: "PDF, App, E-mail, Whatsapp",
      content: "Free consultation with our trusted doctors and get the best recomendations"
    },
    {
      imgPath: process.env.PUBLIC_URL + "/services/services-marketing.png",
      heading: "Whitelabel + Marketing",
      content: "Free consultation with our trusted doctors and get the best recomendations"
    }
    ,
    {
      imgPath: process.env.PUBLIC_URL + "/services/services-affordable.png",
      heading: "Special Corporate Offerings",
      content: "You can get 24/7 urgent care for yourself or your children and your lovely family"
    },
    {
      imgPath: process.env.PUBLIC_URL + "/services/services-corporate-offerings.png",
      heading: "Affordable & Doctor-friendly", content: "Track and save your medical history and health data"
    }

  ];
  return (

    <Grid container direction="column">
      <Grid item>
        <HeadingWithText
          heading="The best Patient-Engagement Tool out there"
          content="We value the organisation that you’ve built. Hence, so many choices for the perfect fit for your use-case." />
      </Grid>
      <Grid container spacing={3}>
        {cardList.map(({ imgPath, heading, content }, index) => (
          <Grid item xs={12} lg={4} key={index}>
            <Card {...{ imgPath, heading, content }} />
          </Grid>
        ))}
      </Grid>
    </Grid>);
}

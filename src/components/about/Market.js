import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import "@fontsource/nunito-sans";
import "@fontsource/open-sans";
import "../component.css"
import BigRightImageSection from "../utils/BigRightImageSection";
import List from "@material-ui/core/List";
import ListSubheader from "@material-ui/core/ListSubheader";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingTop: "3rem"
  },
  header: {
    fontFamily: '"Nunito Sans", "Helvetica", "Arial", sans-serif',
    fontWeight: "700",
    "&>*": {
      marginBottom: "1rem"
    },
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    }
  },
  contentLeft: {
    borderRadius: "10px",
    padding: "2rem",
  },
  cardsList: {
    marginTop: "2rem",
  },
  card: {
    border: "1px solid #B8BBBD",
    marginBottom: "2rem",
    borderRadius: "10px",
  },
  imageBox: {
    verticalAlign: "middle",
    textAlign: "center",
    backgroundColor: "#E9F5FF",
    borderTopLeftRadius: "10px",
    borderBottomLeftRadius: "10px",

    "&>img": {
      margin: "auto",
      maxHeight: "100%",
      maxWidth: "auto",

    }
  },
  textBox: {

    "&>*": {
      textAlign: "left",
      fontFamily: '"Open Sans", "Helvetica", "Arial", sans-serif',
      paddingBottom: "1rem",
      textWrap: "word-break",

    }
  },
  headingstyle: {
    fontSize: "1.5rem",
  }
})
);

export default function Market({ state: market }) {


  return (
    <BigRightImageSection
      contentLeft={<ContentLeft content={market.contentLeft} />}
      image={market.contentRight.image} />
  );
}


const ContentLeft = ({ content }) => {
  const classes = useStyles();
  return <Grid container item direction="column" className={classes.contentLeft} justifyContent="flex-end" alignItems="center" md={6}>
    <Grid container item md={9}>
      <Header content={content.header} />
      <CardsList content={content.cardsList} />
    </Grid>
  </Grid>
}

const Header = ({ content, ...props }) => {
  const classes = useStyles();
  return <Grid container item direction="column" className={classes.header} justifyContent="space-evenly" {...props}>
    <Grid item>
      <Typography
        variant="h4" gutterBottom
        className={classes.headingstyle}>
        {
          content.heading.map(
            ({ text, style = {} }, index) => ((style && <span key={index} style={style}> {`${text} `}</span>) || `${text} `)
          )}
      </Typography>
      {
        content?.description.map(({ text }, index) => <Typography
          variant="body1"
          color="textSecondary"
          key={index}
          style={{
            fontFamily: '"Open Sans", "Helvetica", "Arial", sans-serif',
            // padding: "0.5rem"
            paddingBottom: "0.5rem"
          }}>
          {text}
        </Typography>
        )}

    </Grid>
  </Grid>
}



const CardsList = ({ content }) => {
  const classes = useStyles();
  return <Grid container item direction="column" justifyContent="space-evenly" className={classes.cardsList}>
    {content.map((props, index) => (<Card {...props} key={index} />))}
  </Grid>


}




const Card = ({ image: { imagePath, altText = "logo-default" }, items }) => {
  const classes = useStyles();

  return (
    <Grid container className={classes.card}   >
      <Grid container item xs={4} className={classes.imageBox} justifyContent="center" alignItems="center">
        <Grid item>
          <img loading="lazy" src={imagePath} alt={altText} width="60px" height="60px" />
        </Grid>
      </Grid>
      <Grid item xs={8} className={classes.textBox}>


        <List >

          <ListSubheader color="primary" style={{ position: "relative" }}>
            <Typography variant="h4" color="textPrimary" style={{ marginBottom: "1rem" }}>

            </Typography>

          </ListSubheader>
          {items.map((item, index) => (
            <ListItem key={index}>
              <ListItemText
                primary={
                  <Typography variant="body1" color="textSecondary" key={index}>
                    {item}
                  </Typography>
                }

              />
            </ListItem>

          )
          )}
        </List>
      </Grid>
    </Grid>
  )
}

import {React, useState} from "react";
import Typography from "@material-ui/core/Typography";
import { Grid} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "@fontsource/nunito-sans";
import "@fontsource/open-sans";
import BigRightImageSection from "../utils/BigRightImageSection";
import Card from "../utils/FeatureCard";
import Grow from "@material-ui/core/Grow"
import { useInView } from "react-intersection-observer"


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: "2rem"

  },
  heading: {
    fontFamily: '"Nunito Sans", "Helvetica", "Arial", sans-serif',
    fontWeight: "700",
    marginBottom: "2rem",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    }
  },
  contentLeft: {
    fontFamily: '"Nunito Sans", "Helvetica", "Arial", sans-serif',
    borderRadius: "10px",
  },
  imageBox: {
    textAlign: "center",
    padding: "1rem",
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
      padding: "1rem",
      textWrap: "word-break"
    }
  },
  card: {
    border: "1px solid #B8BBBD",
    marginBottom: "2rem",
    borderRadius: "10px",
  },

  contentRight: {
    textAlign: "center",
    "& >img": {
      maxWidth: "100%",
      maxHeight: "100%"
    },
    imageBox: {
      minHeight: "70vh",
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      [theme.breakpoints.down('md')]: {
        minHeight: "50vh",

      }
    }
  }
}));


export default function Features({ state: features }) {

  const classes = useStyles();

  return (
    <BigRightImageSection
      contentLeft={<ContentLeft content={features.contentLeft} />}
      image={{
        imagePath: features.contentRight.imagePath, altText: "feature"
      }} />

  );
}


const ContentLeft = ({ content }) => {
  const classes = useStyles();
  const [slideIn, setSlideIn] = useState(true);
  const [slideDirection, setSlideDirection] = useState('down');
  const [ref, inView] = useInView({
    threshold: 0.1,
  })

  return <Grid container item direction="column" alignContent="center" >
    <Grid item style={{ marginBottom: "4%" }}>
      <Header content={content.header} />
    </Grid>
    <Grid item>
      <Grow in={inView} direction={slideDirection} {...(slideIn ? { timeout: 3000 } : {})} >
        <div>
          <CardsList content={content.cardsData} />
        </div>
      </Grow>
    </Grid>
  </Grid>
}

const Header = ({ content }) => {
  const classes = useStyles();
  return <Grid item >
    <Typography
      variant="h4">
      {content.line1}
    </Typography>

    <Typography
      variant="h4">
      {content.line2}
    </Typography>
    <Typography
      variant="h4">
      {content.line3}
    </Typography>

  </Grid>
}



const CardsList = ({ content }) => {
  const classes = useStyles();
  return <Grid container item direction="column" justifyContent="space-evenly" className={classes.cardsList}>
    {content.map(({ imagePath, textThin, textBold }, index) => (<Card {...{ imagePath, textThin, textBold }} key={index} />))}
  </Grid>


}


// const Card = ({ imagePath, textThin, textBold }) => {
//   const classes = useStyles();

//   return (
//     <Grid container className={classes.card}  >
//       <Grid item xs={4} className={classes.imageBox}>
//         <img src={imagePath} alt="feature" />
//       </Grid>
//       <Grid item xs={8} className={classes.textBox}>
//         <Typography component="div">
//           <Box fontWeight="fontWeightLight" m={1}>
//             {textThin}
//           </Box>
//           <Box fontWeight="fontWeightBold" m={1}>
//             {textBold}
//           </Box>
//         </Typography>
//       </Grid>
//     </Grid>
//   )
// }

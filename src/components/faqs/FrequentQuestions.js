import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Grid } from '@material-ui/core';
import HeadingWithText from "../utils/HeadingWithText"

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "3rem",
    width: '100%',
    "&>*": {
      marginBottom: "1rem"
    }
  },
  heading: {
    fontWeight: "700",
  },
}));

export default function FrequentQuestions({ state: frequentquestions }) {
  const classes = useStyles();

  return (
    <Grid container direction="column" className={classes.root} alignItems="space-evenly">
      <HeadingWithText content={ frequentquestions.content}/>
      {frequentquestions.cardsList.map(({ heading, content }, index) => <Card key={index} question={heading} answer={content} />)}
    </Grid>
  );
}


const Card = ({ question, answer }) => {
  const classes = useStyles();
  return <Accordion>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel1a-content"
      id="panel1a-header"
      style={{ backgroundColor: '#F2F0F0'}}
    >
      <Typography variant="h6" className={classes.heading}>{question}</Typography>
    </AccordionSummary>
    <AccordionDetails>
      <Typography>
        {answer}
      </Typography>
    </AccordionDetails>
  </Accordion>
}
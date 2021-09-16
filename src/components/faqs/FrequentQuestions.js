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
    padding: "2rem",
    width: '100%',
    "&>*": {
      marginBottom: "1rem"
    },
  },
  heading: {
    fontWeight: "700",
  },
  accord: {
  },
  summary: {
    backgroundColor: '#F2F0F0',
  }

}));

export default function FrequentQuestions({ state: frequentquestions }) {
  const classes = useStyles();

  return (
    <Grid container direction="column" className={classes.root} alignItems="space-evenly">
      <HeadingWithText content={frequentquestions.content} />
      {frequentquestions.cardsList.map(({ heading, content }, index) => <Card key={index} question={heading} answer={content} />)}
    </Grid>
  );
}


const Card = ({ question, answer }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  return <Accordion className={classes.accord}
    expanded={expanded}
    elevation={expanded ? 1 : 0}

  >
    <AccordionSummary
      expandIcon={<ExpandMoreIcon style={{ backgroundColor: expanded ? '#3567D6' : '#C4C4C4', color: "#fff", borderRadius: '50%' }} />}
      aria-controls="panel1a-content"
      id="panel1a-header"
      className={classes.summary}
      IconButtonProps={{ onClick: () => setExpanded(state => !state) }}
    >
      <Typography variant="h6" className={classes.heading}>{question}</Typography>
    </AccordionSummary>
    <AccordionDetails elevation={3} boxShadow={3}>
      <Typography>
        {answer}
      </Typography>
    </AccordionDetails>
  </Accordion>
}
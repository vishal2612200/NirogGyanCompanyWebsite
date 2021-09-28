import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import { IconButton } from "@material-ui/core";

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles({
    cardsList: {
        justifyContent: "center",
        alignItems: "stretch",
        textAlign: "center",
    },
    card: {
        fontFamily: '"Nunito Sans", "Helvetica", "Arial", sans-serif',
        justifyContent: "space-evenly",
        margin: "2%",
        alignContent: "center",
        border: "1px solid #B8BBBD",
        textAlign: "center",
        borderRadius: "10px",
    },

    image: {
        maxWidth: "100%",
        maxHeight: "auto"
    },
    iconContainer: {
        justifyContent: "center",
        alignContent: "center",
    },
    root: {
        maxWidth: "90%",
        '@media (max-width: 780px)' : {
            margin:'5%',
            maxWidth:'100%'
          }
    },
    media: {
        height: 280,
    },
    iconStyle:{
        border: "1px solid #B8BBBD",
        borderRadius: "50%",
        padding: "5px",

    }
}
)


export default function CardsList({ cardsList }) {
    const classes = useStyles();

    return <Grid container item alignItems="center">
        {cardsList.map(({ imgPath, heading, content }, index) => (
            <Grid item md={4} xs={12} justifyContent="center">
                <TeamCard {...{ imgPath, heading, content }} key={index} />
            </Grid>
        ))
        }
    </Grid>
}


const TeamCard = ({ imgPath, heading, content }) => {

    const classes = useStyles();
    const icons = [
        <FacebookIcon className={classes.iconStyle}/>,
        <InstagramIcon className={classes.iconStyle}/>,
        <TwitterIcon className={classes.iconStyle}/>]
    return (
        <Card className={classes.root} >
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={imgPath}
          />
          <CardContent >
          <Typography variant="h4" color="textSecondary">
                <Box textAlign="center">
                {heading}
                </Box>
            </Typography>
            <Typography variant="body1" color="textSecondary">
                <Box textAlign="center">
                    {content}
                </Box>
            </Typography>
            <Typography variant="h5">
              
            </Typography>
            
            
          </CardContent>
        </CardActionArea>
        <CardActions style={{justifyContent: 'center'}}>
                <Box >
                    {
                        icons.map(icon => (
                            <IconButton>
                                {icon}
                            </IconButton>  
                            )
                            )
                        }
                </Box>
            
        </CardActions>
      </Card>
    );
}


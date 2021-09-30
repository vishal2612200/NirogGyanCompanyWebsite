import React from "react";
import Typography from "@material-ui/core/Typography";
import {
    Grid,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "@fontsource/nunito-sans";
import "@fontsource/open-sans";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: "#EAEEF3",
        justifyContent: "space-evenly",
        fontFamily: '"Open Sans", "Helvetica", "Arial", sans-serif',
        textAlign: "left",
        padding: "3rem",
        [theme.breakpoints.down('sm')]: {
            textAlign: "center",
        }
    },
    title: {
        wordWrap: "break-word",
        fontWeight: "700",
    },
    contentLeft: {

        fontFamily: '"Nunito Sans", "Helvetica", "Arial", sans-serif',

        "&>*": {
            marginBottom: "2rem"

        }
    },
    headerContainer: {

        [theme.breakpoints.down('sm')]: {
            textAlign: "center",
        }

    },
    cardList: {
        marginTop: "2rem",
        justifyContent: "space-around",
    },
    cardContainer: {
        alignItems: "center",
        textAlign: "center",
        padding: "1rem 0",
        justifyContent: "flex-start",
        [theme.breakpoints.down('sm')]: {
            justifyContent: "center",

        }
    },
    card: {
        boxShadow: "0px 2px 4px 4px #B8BBBD",
        width: "200px",
        height: "160px",
        padding: "1rem",
        borderRadius: "20px",
        backgroundColor: "#fff",

        "&:hover": { backgroundColor: "#E9F5FF" },
    },
    description: {
        fontSize: "1rem"
    },
    footer: {
        textAlign: "left",
        padding: "1rem",
        [theme.breakpoints.up('sm')]: {
            paddingLeft: "4rem",

        },
        "&>*": {
            paddingBottom: "1rem"
        }
    },

    contentRight: {
        textAlign: "center",
        margin: "auto",
        "& img": {
            maxWidth: "100%",
            height: "auto"
        }
    }
}
));






export default function BigRightImageSection({ contentLeft, image, ...props }) {
    const classes = useStyles();
    return (<React.Fragment>
        
                {contentLeft}
            <ImageBox image={image} />
    </React.Fragment>
    );

}


const ImageBox = ({ image: { imagePath, altText = "logo" } }) => {
    const classes = useStyles();

    return <Grid container item direction="column" xs={12} md={6} className={classes.contentRight}>
        <Grid item >
            <img src={imagePath} alt={altText}  />
        </Grid>
    </Grid>
}

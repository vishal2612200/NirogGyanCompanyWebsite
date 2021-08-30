import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    }
}));



export const HeadingWithText = ({ heading, content }) => {
    const classes = useStyles();
    return <>
        <Typography variant="h3" color="textPrimary" className={classes.title}>
            {heading}
        </Typography>
        <Typography
            variant="body1"
            color="textSecondary"
            className={classes.typography}
            gutterBottom
        >
            {content}
        </Typography>
    </>


}
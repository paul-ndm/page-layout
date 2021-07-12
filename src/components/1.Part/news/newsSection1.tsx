import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

interface Props {
    
}

const useStyles = makeStyles<Theme, Props>((theme: Theme) =>
  createStyles({
    container: {
        flexGrow: 1,
        height: "100%",
        minHeight: "280px"
      },
    segment: {
      border: "solid red 5px",
    // height: "100%"
    }
    
  }))


export const NewsSection1 = () => {

  const classes = useStyles()

    return (
        <Grid container className={classes.container}>

          <Grid item container xs={12} md={6} className={classes.segment}>
            <Grid item xs={12} sm={6} className={classes.segment}>
            </Grid>

            <Grid item xs={12} sm={6} className={classes.segment}>
            </Grid>

          </Grid>

          <Grid item xs={12} md={6} className={classes.segment}>
          </Grid>


        </Grid>
    );
};
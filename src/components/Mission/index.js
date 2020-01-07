import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {Grid, Paper, Typography} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    background: '#fff'
  },
  conatiner: {
    margin: 'auto',
    maxWidth: 1248,
    boxShadow: 'none',
    background: 'none',
    padding: 0,

  },
  component: {
    padding: theme.spacing(8, 8, 12),
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(4, 2),
    }
  },
  sectionHeading: {
    fontWeight: '400',
    fontSize: '24px',
    lineHeight: '29px',
    position: 'relative',
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down('xs')]: {
      fontSize: '18px',
      lineHeight: '22px',
    },
    '&::after': {
      position: 'absolute',
      top: '100%',
      left: '0',
      width: '148px',
      height: '5px',
      background: '#37A000',
      content: '""',
      [theme.breakpoints.down('xs')]: {
        width: '113px',
        height: '3px',
      },
    }
  },
  caption: {
    marginBottom: theme.spacing(4),
    fontSize: '18px',
    lineHeight: '34px',
    fontWeight: 400,
    [theme.breakpoints.down('xs')]: {
      lineHeight: '22px',
    }
  },
  paper: {
    height: '100%',
    padding: theme.spacing(8,6),
    boxShadow: '0px 0px 25px rgba(0, 0, 0, 0.1)',
    borderRadius: 0,
    position: 'relative'
  },
  typo: {
    fontSize: '18px',
    lineHeight: '34px',
    [theme.breakpoints.down('xs')]: {
      fontSize: '14px',
      lineHeight: '22px',
    }
  },
  missions: {
    counterReset:'item',
  },
  mission: {
    position: 'relative',
    '&::after': {
      position: 'absolute',
      color: '#fff',
      width: '52px',
      height: '51px',
      left: '16px',
      top: '16px',
      fontSize: '22px',
      lineHeight: '51px',
      background: '#37A000',
      boxShadow: '0 0 25px rgba(0, 0, 0, 0.1)',
      content: 'counters(item, ".") " "',
      counterIncrement: 'item',
      textAlign: 'center'
    }
  }
}))

export default function MissionComponent() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div className={classes.component}>

        <Paper className={classes.conatiner}>
          <Typography variant="h3" className={classes.sectionHeading}>
            Our <strong>Mission</strong>:
          </Typography>

          <Typography variant="h4" className={classes.caption}>
            Our mission is to help you promote a <strong>honest, healthy, & filter free lifestyle.</strong>
          </Typography>
          <Grid className={classes.missions} container spacing={4} direction="row" justify="center" alignItems="stretch">
            <Grid className={classes.mission} item md={6}>
              <Paper className={classes.paper}>
                <Typography className={classes.typo}>
                   REAL is the healthier social media movement. It's a camera app & social media platform designed with mental health in mind. No ads, no filters, & no likes.
                </Typography>
              </Paper>
            </Grid>

            <Grid className={classes.mission} item md={6}>
              <Paper className={classes.paper}>
                <Typography className={classes.typo}>
                  REAL will also instantly verify filter-free, blur-free, and high quality photos/videos, giving you a certificate sticker and link to place in your story, post or bio on any social media platform.
                </Typography>
              </Paper>
            </Grid>

          </Grid>
        </Paper>
      </div>
    </div>
  )
}

import React from 'react'
import {Grid, Typography, makeStyles} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    background: theme.palette.common.white
  },
  component: {
    padding: theme.spacing(8, 8, 4),
    margin: 'auto',
    maxWidth: 1248,
    boxShadow: 'none',
    background: 'none',
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(0, 0, 2),
    }
  },
  container: {
    [theme.breakpoints.down('xs')]: {
      justifyContent: 'left',
      width: '100%',
      margin: '0',
      alignItems: 'end'
    }
  },
  sectionHeading: {
    display: 'inline-block',
    fontWeight: '400',
    fontSize: '24px',
    lineHeight: '29px',
    position: 'relative',
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down('xs')]: {
      fontSize: '18px',
      lineHeight: '22px',
      marginLeft: theme.spacing(0),
      flex: '0 0 100%',
      WebkitFlex: '0 0 100%'
    },
    '&::after': {
      position: 'absolute',
      top: '100%',
      left: '0',
      width: '232px',
      height: '5px',
      background: '#37A000',
      content: '""',
      [theme.breakpoints.down('xs')]: {
        height: '3px',
        width: '165px'
      },
    }
  },
  para:{
    fontSize: '16px',
    lineHeight: '24px',
    color: '#202020',
    textAlign: 'center',
    fontStyle: 'italic',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'left',
      fontSize: '14px',
      lineHeight: '20px',
    }
  },
  icons: {
    opacity: '0.03',
    width: '180px',
    [theme.breakpoints.down('sm')] : {
      width: '100%',
    }
  },
  ico: {
    float: 'right'
  },
  Grid1: {
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  Grid2: {
    [theme.breakpoints.down('sm')]: {
      order: 2,
      flex: '0 0 60%',
      WebkitFlex: '0 0 60%',
      padding: '0 10px 30px 0 !important'
    }
  },
  Grid3: {
    [theme.breakpoints.down('sm')]: {
      order: 1,
      flex: '0 0 40%',
      WebkitFlex: '0 0 40%',
      padding: '0 20px !important'
    }
  }
}))

export default function CompetitorsComponent() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div className={classes.component}>
        <Grid container className={classes.container} spacing={4} direction="row" justify="center" alignItems="center">
          <Grid item sm={12} spacing={0} className={classes.gridHeading}>
            <Typography variant="h3" className={classes.sectionHeading}>
              Does REAL have any <strong>competitors</strong>? 
            </Typography>
          </Grid>
          <Grid item sm={3} className={classes.Grid1}>
            <div className={classes.entre}>
              <img className={classes.icons + ' ' + classes.ico} src={`${process.env.PUBLIC_URL}/assets/icon-1.png`} alt="" />
            </div>
          </Grid>
          <Grid item sm={6} className={classes.Grid2}>
            <Typography className={classes.para}>
              To our knowledge, there is no other social media app which blocks filters, doctored images, is fully open source, and is ad free. There are however a few apps which do at least one of those things.
            </Typography>
          </Grid>
          <Grid item sm={3} className={classes.Grid3}>
            <div className={classes.entre}>
              <img className={classes.icons} src={`${process.env.PUBLIC_URL}/assets/icon-2.png`} alt="" />
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}
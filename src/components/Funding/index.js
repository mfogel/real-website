import React from 'react'
import {Grid, Typography, makeStyles, Link} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: '#f3f3f3',
  },
  conatiner: {
    padding: theme.spacing(10, 0),
    margin: 'auto',
    maxWidth: 1248,
    boxShadow: 'none',
    background: 'none',
    overflow: 'hidden',
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(6, 2),
    }
  },
  sectionHeading: {
    fontWeight: '400',
    fontSize: '24px',
    lineHeight: '29px',
    position: 'relative',
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down('lg')]: {
      marginLeft: theme.spacing(2)
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '18px',
      lineHeight: '22px',
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
        width: '165px',
        height: '3px',
      },
    }
  },
  entre: {
    textAlign: 'right',
    [theme.breakpoints.down('md')]: {
      textAlign: 'center'
    }
  },
  avatar: {
    display: 'block',
    width: '170px',
    margin: '0 auto',
    [theme.breakpoints.up('lg')]: {
      float: 'right',
      marginLeft: theme.spacing(2),
      marginRight: '-50px',
      position: 'relative',
      zIndex: '9',
    }
  },
  entrePara: {
    overflow: 'hidden',
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(2),
    fontSize: '14px',
    lineHeight: '24px',
    [theme.breakpoints.down('sm')]: {
      paddingBottom: theme.spacing(8),
    }
  },
  fundIcon: {
    display: 'block',
    width: '170px',
    margin: '0 auto',
    [theme.breakpoints.up('lg')]: {
      float: 'left',
      marginRight: theme.spacing(2),      
      marginLeft: '-50px',
    }
  },
  fundPara: {
    paddingTop: theme.spacing(4),
    overflow: 'hidden',
    fontSize: '14px',
    lineHeight: '24px',
    [theme.breakpoints.down('md')]: {
      textAlign: 'center'
    }
  },
  container: {
    [theme.breakpoints.down('xs')]: {
      justifyContent: 'left'
    }
  },
  Grid1: {
    [theme.breakpoints.down('sm')]: {
      paddingTop: '0 !important',
      paddingBottom: '16px !important',
    }
  }
}))

export default function FundingComponent() {
  const classes = useStyles()

  return (null);/*
    <div className={classes.root}>
      <div className={classes.conatiner}>
        <Grid container className={classes.container} spacing={8} direction="row" justify="center" alignItems="center">
          <Grid item sm={12} spacing={0} className={classes.gridHeading}>
            <Typography variant="h3" className={classes.sectionHeading}>
              How is REAL <strong>funded</strong> today?
            </Typography>
          </Grid>
          <Grid item sm={6} pb={2} className={classes.Grid1}>
            <div className={classes.entre}>
              <img className={classes.avatar} src={`${process.env.PUBLIC_URL}/assets/ian.png`} alt="" />
              <Typography className={classes.entrePara}>
                REAL is funded by tech entrepreneur <strong>Ian McLoughlin</strong>, is very well supported, and <strong>isn’t going anywhere</strong>.
              </Typography>
              <Link href="https://www.linkedin.com/in/ian-mcloughlin"><img src={`${process.env.PUBLIC_URL}/assets/linkedin.png`} alt="" /></Link>
            </div>
          </Grid>

          <Grid item sm={6} pb={2} className={classes.Grid2}>
            <img className={classes.fundIcon} src={`${process.env.PUBLIC_URL}/assets/fund-icon.png`} alt="" />
            <Typography className={classes.fundPara}>
              Overall the goal is to make the world a healthier place, but Ian has been more than upfront that <strong>this is a large investment</strong> for him, and as such, it will be run as a business expecting to eventually make money. The best we can do is be transparent & upfront about our intentions.
            </Typography>
          </Grid>            
        </Grid>
      </div>
    </div>
  )
*/
}

import React from 'react'
import {Grid, Typography, makeStyles} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    background: '#fff',
    overflow: 'hidden'
  },
  component: {
    padding: theme.spacing(14, 4),
    margin: 'auto',
    maxWidth: 1248,
    boxShadow: 'none',
    background: 'none',
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(4, 2, 0),
    }
  },
  caption: {
    marginBottom: theme.spacing(2),
  },
  brand: {
    width: '600px',
    height: '386px',
    background: '#2D2D2D',
    position: 'relative',
    display: 'block',
    [theme.breakpoints.down('md')]: {
      marginLeft: -theme.spacing(18)
    },
    [theme.breakpoints.down('sm')]: {
      marginLeft: theme.spacing(0),
      width: '100%',
      height: '224px'
    },

  },
  txtLogo: {
    top: '50px',
    left: '50%',
    position: 'absolute',
    opacity: '.3',
    marginLeft: '-400px',
    [theme.breakpoints.down('sm')]: {
      width: '440px',
      marginLeft:'-220px',
      top: '40px',
    }
  },
  brandLogo: {
    position: 'absolute',
    top: '-23px',
    right: '90px',
    [theme.breakpoints.down('md')]: {
      right: '150px'
    },
    [theme.breakpoints.down('sm')]: {
      right: '20px',
      width: '190px'
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
      marginLeft: '0',
      marginBottom: theme.spacing(4),
    },
    '&::after': {
      position: 'absolute',
      top: '100%',
      left: '0',
      width: '100%',
      height: '5px',
      background: '#37A000',
      content: '""',
      [theme.breakpoints.down('xs')]: {
        height: '3px',
      },
    }
  },
  paragraph: {
    fontSize: '14px',
    lineHeight: '24px',
    marginBottom: theme.spacing(4),
    paddingLeft: theme.spacing(8),
    [theme.breakpoints.down('md')]: {
      paddingRight: theme.spacing(12)
    },
    '@media only screen and (max-width:1204px)': {
      paddingRight: '166px',
      paddingLeft: '0'
    },
    [theme.breakpoints.down('sm')]: {
      paddingRight: theme.spacing(2),
      paddingLeft: theme.spacing(2)
    },
    [theme.breakpoints.down('xs')]: {
      paddingRight: theme.spacing(0),
      paddingLeft: theme.spacing(0),
      marginBottom: theme.spacing(2),
    }
  },
  Grid1: {
    width: '100%',
    [theme.breakpoints.down('xs')]: {
      order: 2,
      paddingTop: '50px'
    }
  },
  Grid2: {
    width: '100%',
    [theme.breakpoints.down('xs')]: {
      order: 1
    }
  },
  gridHeading: {
    [theme.breakpoints.down('xs')]: {
      padding: '0 !important',
      textAlign: 'left'
    }
  },
  container: {
    [theme.breakpoints.down('xs')]: {
      justifyContent: 'left'
    }
  }
}))

export default function NamingComponent() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div className={classes.component}>
        <Grid container className={classes.container} spacing={0} direction="row" justify="center" alignItems="center">
          <Grid item sm={12} spacing={0} className={classes.gridHeading}>
            <Typography variant="h3">
              <span className={classes.sectionHeading}>Why is it called “<strong>REAL</strong>”?</span>
            </Typography>
          </Grid>
          <Grid item sm={6} className={classes.Grid1}>
            <Typography className={classes.paragraph}>
              Typically companies like to patent all code & fully own (trademark) their brand. Any T-Shirt or hat with their brand on it would require paying the brand owner. We went another direction and decided to choose a brand which would be nearly impossible for anyone to trademark.
            </Typography>
            <Typography className={classes.paragraph}>
              Our community wants REAL to be a healthy social media movement/lifestyle, not a single app, nor brand.
            </Typography>
          </Grid>

          <Grid item sm={6} className={classes.Grid2}>
            <Typography variant="div" className={classes.brand}>
              <img className={classes.txtLogo} src={`${process.env.PUBLIC_URL}/assets/real-text.svg`} alt="" />
              <img className={classes.brandLogo} src={`${process.env.PUBLIC_URL}/assets/brand-img.png`} alt="" />
            </Typography>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

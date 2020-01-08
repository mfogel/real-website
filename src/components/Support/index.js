import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {Grid, Paper, Typography, Link, Button} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    background: '#f3f3f3'
  },
  conatiner: {
    margin: 'auto',
    maxWidth: 1248,
    boxShadow: 'none',
    background: 'none',
    padding: 0,

  },
  component: {
    padding: theme.spacing(8),
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(4, 2),
    }
  },
  sectionHeading: {
    fontWeight: '400',
    fontSize: '24px',
    lineHeight: '29px',
    position: 'relative',
    marginBottom: '84px',
    paddingBottom: '5px',
    [theme.breakpoints.down('xs')]: {
      fontSize: '18px',
      lineHeight: '22px',
      marginBottom: '54px',
    },
    '&::after': {
      position: 'absolute',
      top: '100%',
      left: '0',
      width: '232px',
      height: '3px',
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
    maxWidth: '400px',
    height: '440px',
    padding: '80px 26px 40px',
    boxShadow: '0px 0px 25px rgba(0, 0, 0, 0.1)',
    borderRadius: 0,
    position: 'relative',
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      height: '355px',
      padding: '50px 10px 40px'
    }
  },
  typo: {    
    fontSize: '14px',
    lineHeight: '24px',
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
      content: 'counter(item, upper-latin)',
      counterIncrement: 'item',
      textAlign: 'center'
    }
  },
  buttons: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: '10px',
    justifyContent: 'center'
  },
  button: {
    padding: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(0, 1)
    }
  },
  store: {
    width: 140,
    [theme.breakpoints.down('sm')] : {
      width: 120
    }
  },
  icon: {
    display: 'block',
    margin: '0 auto 70px',
    [theme.breakpoints.down('sm')] : {
      marginBottom: '30px'
    }
  },
  buttonGitHub: {
    maxWidth: '200px',
    height: '42px',
    background: theme.palette.common.white,
    boxShadow: '0px 0px 7px rgba(0, 0, 0, 0.25)',
    WebkitBoxShadow: '0px 0px 7px rgba(0, 0, 0, 0.25)',
    borderRadius: '2px',
    fontFamily: '"Open Sans"',
    fontWeight: 'bold',
    fontSize: '14px',
    lineHeight: '42px',
    textAlign: 'center',
    color: '#37A000',
    textTransform: 'capitalize',
    margin: '50px auto 0',
    display: 'block',
    padding: '0',
    [theme.breakpoints.down('sm')] : {
      marginTop: '20px'
    }
  }
}))

export default function FooterComponent() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div className={classes.component}>
        
        <div className={classes.conatiner}>
          <Typography variant="h3" className={classes.sectionHeading}>
            How can you help <strong>support us</strong>?
          </Typography>
          
          <Grid className={classes.missions} container spacing={4} direction="row" justify="center" alignItems="stretch">
            <Grid className={classes.mission} item>
              <Paper className={classes.paper}>
                <Typography className={classes.typo}>
                  <img src={`${process.env.PUBLIC_URL}/assets/icon-5.svg`} className={classes.icon} alt="" />
                  If you’re an influencer, please help us produce content! We need your help to change the world!<br/><br/>
                  <strong>Download:</strong>
                  <div className={classes.buttons}>
                    <div className={classes.button}>
                      <Link href="https://apps.apple.com/us/app/real-social-media/id1485194570?ls=1"><img src={`${process.env.PUBLIC_URL}/assets/appstore.png`} className={classes.store} alt="" /></Link>
                    </div>

                    <div className={classes.button}>
                      <Link href="/android_coming_soon.html"><img src={`${process.env.PUBLIC_URL}/assets/playstore.png`} className={classes.store} alt="" /></Link>
                    </div>
                  </div>
                </Typography>
              </Paper>
            </Grid>

            <Grid className={classes.mission} item>
              <Paper className={classes.paper}>
                <Typography className={classes.typo}>
                  <img src={`${process.env.PUBLIC_URL}/assets/icon-6.svg`} className={classes.icon} alt="" />
                  If you’re a developer, please help us code! Our platform is fully OpenSource and on Github. Meaningful contributions will be compensated!
                </Typography>
                <Button component={Link} className={classes.buttonGitHub} href="https://github.com/real-social-media" color="inherit">GitHub</Button>
              </Paper>
            </Grid>
            
          </Grid>
        </div>
      </div>
    </div>
  )
}

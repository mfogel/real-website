import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {Link, Typography, Button} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    height: 500,
    overflow: 'hidden',
    color: theme.palette.common.white,
    position: 'relative',
    marginTop: '65px',
    [theme.breakpoints.down('sm')]: {
      height: 300,
      marginTop: '57px',
    }
  },
  component: {
    marginLeft: '-624px',
    maxWidth: 1248,
    padding: 0,
    // paddingLeft: theme.spacing(30),
    // paddingRight: theme.spacing(30),
    position: 'absolute',
    zIndex: 1,
    top: 0,
    left: '50%',
    bottom: 0,
    right: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    [theme.breakpoints.down('lg')]: {
      paddingLeft: theme.spacing(8),
      paddingRight: theme.spacing(8),
    },
    '@media only screen and (max-width:1024px)': {
      left: '0',
      maxWidth: '100%',
      marginLeft: '0',
    },
    [theme.breakpoints.down('sm')]: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(12),
      marginLeft: '0',
      maxWidth: '100%',
      left: '0'
    }
  },
  bannerImg: {
    height: '100%'
  },
  img : {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    [theme.breakpoints.down('sm')]: {
      objectPosition : '60%'
    }
  },
  title: {
    fontSize: '42px',
    lineHeight: '51px',
    fontWeight: 400,
    marginBottom: '43px',
    textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    [theme.breakpoints.down('sm')]: {
      fontSize: '36px',
      lineHeight: '36px',
      marginBottom: '16px',
    }
  },
  subtitle: {
    fontSize: '18px',
    lineHeight: '22px',
    fontWeight: 400,
    marginBottom: '1.55em',
    [theme.breakpoints.down('sm')]: {
      fontSize: '14px',
      lineHeight: '17px',
      marginBottom: '1em'
    }
  },
  promotion: {
    //paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(14),
    [theme.breakpoints.down('sm')]: {
      paddingBottom: theme.spacing(2),
      paddingRight: theme.spacing(5),
    }
  },
  buttons: {
    display: 'flex',
    flexDirection: 'row',
    margin: -theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      margin: '0 -8px',
    }
  },
  button: {
    padding: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(0, 1)
    }
  },
  store: {
    width: 140,
    [theme.breakpoints.down('sm')]: {
      width: 87
    }
  },
  scrollTo: {
    width: '176px',
    marginLeft: '-88px',
    position: 'absolute',
    bottom: '30px',
    left: '50%',
    textAlign: 'center',
    fontWeight: 'normal',
    fontSize: '14px',
    lineHeight: '17px',
    textTransform: 'uppercase',
    color: theme.palette.common.white,
    zIndex: '99',
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  dropIcon: {
    display: 'block',
    margin: '0 auto'
  }
}))

export default function JumbotronComponent() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div className={classes.component}>
        <div>
          <Typography variant="h1" className={classes.title}>
            <strong>WHAT</strong> IS REAL ?
          </Typography>
        </div>

        <div className={classes.promotion}>
          <Typography variant="h3" className={classes.subtitle} gutterBottom>
            REAL <strong> analyzes, verifies,</strong> & <strong>marks</strong> undoctored social media posts.
          </Typography>
          <Typography variant="h3" className={classes.subtitle} gutterBottom>
            REAL is also <strong>Filter-Free</strong> & <strong>Ad-Free</strong> social media.
          </Typography>
        </div>

        <div className={classes.buttons}>
          <div className={classes.button}>
            <Link href="https://apps.apple.com/us/app/real-social-media/id1485194570?ls=1"><img src={`${process.env.PUBLIC_URL}/assets/appstore.png`} className={classes.store} alt="" /></Link>
          </div>

          <div className={classes.button}>
            <Link href="/android_coming_soon.html"><img src={`${process.env.PUBLIC_URL}/assets/playstore.png`} className={classes.store} alt="" /></Link>
          </div>
        </div>
      </div>
      <Typography className={classes.scrollTo}>
          scroll to see more

        <Button component={Link} href="#mission" color="inherit">
          <img src={`${process.env.PUBLIC_URL}/assets/icon-7.svg`} className={classes.dropIcon} alt="" />
        </Button>
      </Typography>
      <div className={classes.bannerImg}>
        <img className={classes.img} src={`${process.env.PUBLIC_URL}/assets/background.png`} alt="" />
      </div>
    </div>
  )
}

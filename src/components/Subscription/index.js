import React from 'react'
import { makeStyles, Grid, Typography } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: '#37A000',
    color: theme.palette.common.white,
  },
  component: {
    padding: theme.spacing(0),
    overflow: 'hidden'
  },
  avaHoler: {
    flexWrap: 'wrap',
    WebkitFlexWrap: 'wrap',
    maxWidth: '400px',
    margin: '0',
    display: 'flex',
    WebkitDisplay: 'flex',
    padding: '0',
    background: '#C4C4C4',
    listStyle: 'none',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    [theme.breakpoints.down('md')] : {
      maxWidth: '200px',
    },
    [theme.breakpoints.down('sm')] : {
      maxWidth: '100% !important',
      width: '100vw'
    }
  },
  avaHolder2: {
    maxWidth: '600px',
    marginLeft: 'auto',
    '@media only screen and (max-width:1366px)' : {
      width: '510px'
    },
    [theme.breakpoints.down('md')] : {
      maxWidth: '200px',
    },
    [theme.breakpoints.down('sm')] : {
      maxWidth: '100% !important',
      width: '100vw'
    }
  },
  mask: {
    position: 'relative',
    '&::after': {
      content: '""',
      position: 'absolute',
      width: '100%',
      height: '100%',
      background: '#37A000',
      opacity: '0.4',
      top: '0',
      left: '0',
      zIndex: '99',
    }
  },
  ico3: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: '70px',
    height: '70px',
    zIndex: '999',
    margin: '-35px',
  },
  avatar: {
    maxHeight: '200px',
    flexGrow: '0',
    maxWidth: '50%',
    flexBasis: '50%',
    overflow: 'hidden',
    [theme.breakpoints.down('md')] : {
      '&:not(:nth-child(2)):not(:nth-child(3))': {
        display: 'none'
      },
      maxWidth: '100%',
      flexBasis: '100%',
    },
    '@media only screen and (max-width:768px)' : {
      maxWidth: '33.33%',
      flexBasis: '33.33%',
      '&:nth-child(3)': {
        display: 'none !important'
      },
      display: 'block !important'
    },
    [theme.breakpoints.down('sm')] : {
      '&:nth-child(3)': {
        display: 'none'
      },
      maxWidth: '33.33%',
      flexBasis: '33.33%',
    }
  },
  avatar2: {
    flexGrow: '0',
    maxWidth: '33.33%',
    flexBasis: '33.33%',
    overflow: 'hidden',
    [theme.breakpoints.down('md')] : {
      '&:not(:nth-child(1)):not(:nth-child(4))': {
        display: 'none !important'
      },      
      display: 'block !important',
      maxWidth: '100%',
      flexBasis: '100%',
    },
    '@media only screen and (max-width:768px)' : {
      maxWidth: '33.33%',
      flexBasis: '33.33%',
      '&:not(:nth-child(1)):not(:nth-child(4))': {
        display: 'block !important'
      }, 
      display: 'block !important'
    },
    [theme.breakpoints.down('sm')] : {
      '&:nth-child(3)': {
        display: 'block'
      },
    }
  },
  img: {
    margin: '0 auto',
    display: 'block',
    [theme.breakpoints.down('lg')] : {
      width: '100%'
    }
  },
  desc: {
    padding: theme.spacing(0),
    overflow: 'hidden',
    [theme.breakpoints.down('lg')] : {
      padding: theme.spacing(2, 4),
    },
    [theme.breakpoints.down('sm')] : {
      padding: '32px 32px 42px',
    }
  },
  title: {
    fontWeight: 'normal',
    fontSize: '24px',
    lineHeight: '29px',
    borderBottom: '5px solid #fff',
    marginBottom: theme.spacing(8),
    display: 'inline-block',
    [theme.breakpoints.down('lg')] : {
      marginBottom: theme.spacing(2),
    },
    '&::after': {
      
    }
  },
  txt: {
    fontSize: '14px',
    lineHeight: '24px',
    marginBottom: theme.spacing(4),
    [theme.breakpoints.down('lg')]: {
      fontSize: '11px',
      lineHeight: '24px',
      marginBottom: '6px',
    }
  }
}))

export default function SubscriptionComponent() {
  const classes = useStyles()
  return (null);
  /*return (
    <div className={classes.root}>
      <div className={classes.component}>        
        <Grid container spacing={0} direction="row" justify="center" alignItems="center">
          <Grid item md={3}>
            <ul className={classes.avaHoler}>
              <li className={classes.avatar}>
                <img className={classes.img} src={`${process.env.PUBLIC_URL}/assets/img-01.jpg`} alt="" />
              </li>
              <li className={classes.avatar + ' ' + classes.mask}>
                <img className={classes.img} src={`${process.env.PUBLIC_URL}/assets/img-09.jpg`} alt="" />
                <img className={classes.ico3} src={`${process.env.PUBLIC_URL}/assets/icon-3.png`} alt="" />
              </li>
              <li className={classes.avatar}>
                <img className={classes.img} src={`${process.env.PUBLIC_URL}/assets/img-08.jpg`} alt="" />
              </li>
              <li className={classes.avatar}>              
                <img style={{width: 'auto'}} className={classes.img} src={`${process.env.PUBLIC_URL}/assets/icon-4.png`} alt="" />
              </li>
            </ul>
          </Grid>
          <Grid item md={5}>
            <div className={classes.desc}>
              <Typography variant="h1">
                <span className={classes.title}>REAL will always be <strong>Free</strong>:</span>
              </Typography>
              <Typography className={classes.txt}>
                We plan to add an optional filter-free dating service for people who are comfortable showing their true selves. There will also be a service to upload your drivers license & verify your identity to recieve a “id verified” watermark. <strong>Both dating & identity verification will require a subscription</strong> to “REAL Diamond”.
              </Typography>
              <Typography className={classes.txt}>Subscribers will more than cover the cost of free members.</Typography>
            </div>
          </Grid>
          <Grid item md={4}>
            <ul className={classes.avaHoler + ' ' + classes.avaHolder2}>
              <li className={classes.avatar + ' ' + classes.avatar2}>
                <img className={classes.img} src={`${process.env.PUBLIC_URL}/assets/img-02.jpg`} alt="" />
              </li>
              <li className={classes.avatar + ' ' + classes.avatar2 + ' ' + classes.mask}>
                <img className={classes.img} src={`${process.env.PUBLIC_URL}/assets/img-03.jpg`} alt="" />
              </li>
              <li className={classes.avatar + ' ' + classes.avatar2}>
                <img className={classes.img} src={`${process.env.PUBLIC_URL}/assets/img-04.jpg`} alt="" />
              </li>
              <li className={classes.avatar + ' ' + classes.avatar2}>              
                <img className={classes.img} src={`${process.env.PUBLIC_URL}/assets/img-05.jpg`} alt="" />
              </li>
              <li className={classes.avatar + ' ' + classes.avatar2}>              
                <img className={classes.img} src={`${process.env.PUBLIC_URL}/assets/img-06.jpg`} alt="" />
              </li>
              <li className={classes.avatar + ' ' + classes.avatar2 + ' ' + classes.mask}>              
                <img className={classes.img} src={`${process.env.PUBLIC_URL}/assets/img-07.jpg`} alt="" />
              </li>
            </ul>
          </Grid>
        </Grid>
      </div>
    </div>
  )*/
}

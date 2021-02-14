import React from 'react'
import { makeStyles, Grid, Typography, List, ListItem, ListItemText, Link } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: '#2D2D2D',
    color: theme.palette.common.white,
  },
  component: {
    padding: theme.spacing(8, 8, 4),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(4, 3),
    }
  },
  paper: {
    padding: theme.spacing(2),
  },
  copyRights: {
    background: '#191919',
    textAlign: 'center',
    fontSize: '12px',
    lineHeight: '16px',
    color: '#ffffff7d',
    padding: '15px'
  },
  title: {
    fontWeight: 'bold',
    fontSize: '14px',
    lineHeight: '19px',
    marginBottom: '24px'
  },
  nav: {
    maxWidth: '400px'
  },
  links: {
    display: 'inline-block',
    verticalAlign: 'top',
    color: theme.palette.common.white,
    width: '50%',
    fontWeight: 'normal',
    fontSize: '14px',
    lineHeight: '19px',
    margin: '0 16px 0 -16px',
    whiteSpace: 'nowrap'
  },
  buttons: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '135px',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '400px',
      flexDirection: 'row',
      width: 'calc(100vw - 48px)'
    }
  },
  button: {
    paddingBottom: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      padding: '0 20px 0 0'
    }
  },
  store: {
    width: 135,
    [theme.breakpoints.down('sm')]: {
      width: 120
    }
  },
}))

export default function SupportComponent() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div className={classes.component}>
        <Grid className={classes.missions} container spacing={4} direction="row" justify="center" alignItems="stretch">
          <Grid className={classes.mission} item>
            <Typography variant="h3" className={classes.title}>Website</Typography>
            <List component="nav" className={classes.nav}>
              <ListItem className={classes.links} button component="a" href="#id">
                What
              </ListItem>
{/*           <ListItem className={classes.links} button component="a" href="#naming">
                Free
              </ListItem> */}
              <ListItem className={classes.links} button component="a" href="#mission">
                Mission
              </ListItem>
{/*           <ListItem className={classes.links} button component="a" href="#funding">
                The Name REAL
              </ListItem> */}
{/*           <ListItem className={classes.links} button component="a" href="#privacy">
                Secure
              </ListItem> */}
{/*           <ListItem className={classes.links} button component="a" href="#competitors">
                Competitors
              </ListItem> */}
{/*           <ListItem className={classes.links} button component="a" href="#subscription">
                Funding
              </ListItem> */}
              <ListItem className={classes.links} button component="a" href="#support">
                Support Us
              </ListItem>
              <ListItem className={classes.links} button target="_blank" component="a" href="https://real.app/real-privacy-policy-html-english.html">
                Privacy Policy
              </ListItem>
              <ListItem className={classes.links} button target="_blank" component="a" href="https://real.app/real-terms-service-html-english.html">
                Terms and Service
              </ListItem>
              <ListItem className={classes.links} button target="_blank" component="a" href="https://real.app/real-eula-html-english.html">
                EULA
              </ListItem>
            </List>
          </Grid>
          <Grid className={classes.mission} item>
            <Typography variant="h3" className={classes.title}>Get the App</Typography>
            <div className={classes.buttons}>
              <div className={classes.button}>
                <Link href="https://apps.apple.com/us/app/real-social-media/id1485194570?ls=1"><img src={`${process.env.PUBLIC_URL}/assets/appstore.png`} className={classes.store} alt="" /></Link>
              </div>
{/* 
              <div className={classes.button}>
                <Link href="/android_coming_soon.html"><img src={`${process.env.PUBLIC_URL}/assets/playstore.png`} className={classes.store} alt="" /></Link>
              </div>
*/}
            </div>
          </Grid>
        </Grid>
      </div>
      <div className={classes.copyRights}>
      </div>
    </div>
  )
}

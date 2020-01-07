import React from 'react'
import { makeStyles, Grid, Typography } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: '#f3f3f3',
  },
  component: {
    padding: theme.spacing(8, 0),
    margin: 'auto',
    maxWidth: 990,
    boxShadow: 'none',
    background: 'none',
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(8, 2)
    },
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(4, 2)
    }
  },
  caption: {
    marginBottom: theme.spacing(4),
    fontSize: '24px',
    lineHeight: '28px',
    [theme.breakpoints.down('xs')]: {
      fontSize: '18px',
      lineHeight: '22px',
    }
  },
  spanCaption: {
    display: 'block',
    fontSize: '14px',
    lineHeight: '24px',
    position: 'relative',
    '&::after' : {
      content: '""',
      position: 'absolute',
      width: '232px',
      height: '5px',
      left: '0',
      bottom: '-5px',
      background: '#37A000',
      [theme.breakpoints.down('xs')]: {
        width: '116px',
        height: '3px',
        bottom: '-20px',
      }
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '14px',
      lineHeight: '17px',
    }
  },
  subCaption: {
    fontSize: '14px',
    lineHeight: '24px',
    [theme.breakpoints.down('xs')]: {
      fontSize: '12px',
      lineHeight: '20px',
    }
  },
  logo: {
    display: 'block',
    [theme.breakpoints.down('md')]: {
      width: theme.spacing(20),
      margin: '0 auto'
    },
    [theme.breakpoints.down('xs')]: {
      width: theme.spacing(12),
      marginBottom: theme.spacing(3)
    }
  }
}))

export default function PrivacyComponent() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div className={classes.component}>
        <Grid container spacing={1} direction="row" justify="center" alignItems="center">
          <Grid item sm={4}>
            <img className={classes.logo} src={`${process.env.PUBLIC_URL}/assets/eye.svg`} alt="" />
          </Grid>

          <Grid item sm={8}>
            <Typography className={classes.caption}>
              <strong>Secure</strong>: Have you ever seen a creepy advertisement
              <span className={classes.spanCaption}>which made you think your phone is <strong>listening in on private conversations?</strong></span>
            </Typography>

            <Typography className={classes.subCaption}>
              Free social media apps make money by selling your personal data to advertisers. <strong>REAL never shares your data</strong> with any advertiser, it’s <strong>ad-free</strong>, <strong>secure</strong>, and it’s fully <strong>open source</strong> (you can see our code).
            </Typography>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

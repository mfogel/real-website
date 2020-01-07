import React, { useState } from 'react'
import { makeStyles, AppBar, Toolbar, Typography, Link, Button, IconButton } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'



const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  component: {
  },
  appbar: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
  },
  menuButton: {
    display: 'none',
    [theme.breakpoints.down('sm')]: {
      display: 'block'
    },
  },
  title: {
    flexGrow: 1,
  },

  navigation: {

  },
  listContainer: {
    display: 'block',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
      position: 'absolute',
      top: '100%',
      left: '0',
      background: theme.palette.common.white,
      width: '100%',
      textAlign: 'center',
      boxShadow: 'inset 0px 4px 10px rgba(0, 0, 0, 0.15)',
      padding: '20px'
    },
    listStyle: 'none',
    margin: 0,
    padding: 0,
    overflow: 'hidden'
  },
  listMenus: {
    float: 'left',
    padding: theme.spacing(0, 3),
    
    [theme.breakpoints.down('md')]: {
      padding: '0 22.5px'
    },
    [theme.breakpoints.down('sm')]: {
      padding: '0 12px',
      float: 'none',
      borderTop: '1px solid #E5E5E5',
      padding: '16px 0'
    }
  },
  listItems: {
    display: 'inline-block',
    textAlign: 'center',
    padding: '6px 8px'
  },
  linkNav: {
    [theme.breakpoints.down('sm')]: {
      fontSize: '24px',
      lineHeight: '33px'
    },
    color: theme.palette.common.black,
    textTransform: 'capitalize',
    fontSize: '14px',
    lineHeight: '19px',
    fontFamily: 'Open Sans',
    padding: 0,
    minWidth: 'auto',
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  hide: {
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  show: {
    [theme.breakpoints.down('sm')]: {
      display: 'block'
    }
  }
}))

export default function HeaderComponent() {
  const classes = useStyles()
  const [open, setOpen] = useState(false)

  //Menu Open Handler
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  //Menu Close Handler
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appbar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <strong>REAL</strong>
          </Typography>
          <div className={classes.navigation}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={!open ? handleDrawerOpen : handleDrawerClose}
              //className={clsx(open && classes.hide)}
              className={classes.menuButton}
            >
              <MenuIcon className={open ? classes.hide : classes.show} />
              <CloseIcon className={!open ? classes.hide : classes.show} />
            </IconButton>
            <ul className={classes.listContainer + ' ' + `${!open ? classes.hide : classes.show}`} id="list-appbar-collapse">
              <li className={classes.listMenus}>
                <Button component={Link} className={classes.linkNav} href="#jumbotron" color="inherit">What</Button>
              </li>
              <li className={classes.listMenus}>
                <Button component={Link} className={classes.linkNav} href="#mission" color="inherit">Mission</Button>
              </li>
              <li className={classes.listMenus}>
                <Button component={Link} className={classes.linkNav} href="#privacy" color="inherit">Secure</Button>
              </li>
              <li className={classes.listMenus}>
                <Button component={Link} className={classes.linkNav} href="#subscription" color="inherit">Free</Button>
              </li>
              <li className={classes.listMenus}>
                <Button component={Link} className={classes.linkNav} href="#naming" color="inherit">”REAL”</Button>
              </li>
              <li className={classes.listMenus}>
                <Button component={Link} className={classes.linkNav} href="#funding" color="inherit">Funding</Button>
              </li>
              <li className={classes.listMenus}>
                <Button component={Link} className={classes.linkNav} href="#competitors" color="inherit">Competitors</Button>
              </li>
              <li className={classes.listMenus}>
                <Button component={Link} className={classes.linkNav} href="#support" color="inherit">Support Us</Button>
              </li>
            </ul>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  )
}

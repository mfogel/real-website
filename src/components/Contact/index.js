import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: '#2D2D2D',
    color: theme.palette.common.white,
  },
  component: {
    padding: theme.spacing(8),
  },
}))

export default function SupportComponent() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div className={classes.component}>
        <Typography>Contact us at support@real.app</Typography>
        <Typography>REAL 2019</Typography>
      </div>
    </div>
  )
}

import React from 'react'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import HeaderComponent from './components/Header'
import JumbotronComponent from './components/Jumbotron'
import MissionComponent from './components/Mission'
import PrivacyComponent from './components/Privacy'
import SubscriptionComponent from './components/Subscription'
import NamingComponent from './components/Naming'
import FundingComponent from './components/Funding'
import CompetitorsComponent from './components/Competitors'
import SupportComponent from './components/Support'
import FooterComponent from './components/Footer'
import ContactComponent from './components/Contact'
import { makeStyles } from '@material-ui/core/styles'

const theme = createMuiTheme({
  typography: {
    fontSize: 18,
    fontFamily: [
      '"Montserrat"',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  overrides: {
    MuiTypography: {
      h1: {
        fontSize: 52,
        fontWeight: 700,
      },
      h3: {
        fontSize: 28,
        fontWeight: 500,
      },
      h4: {
        fontSize: 22,
        fontWeight: 500,
      },
    },
  },
})
const useStyles = makeStyles(theme => ({
  header: {
    position: 'relative',
    zIndex: '999'
  }
}))

export default function App() {
  const classes = useStyles()
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div id="header" className={classes.header}>
        <HeaderComponent />
      </div>
      <div id="jumbotron">
        <JumbotronComponent />
      </div>
      <div id="mission">
        <MissionComponent />
      </div>
      <div id="privacy">
        <PrivacyComponent />
      </div>
      <div id="subscription">
        <SubscriptionComponent />
      </div>
      <div id="naming">
        <NamingComponent />
      </div>
      <div id="funding">
        <FundingComponent />
      </div>
      <div id="competitors">
        <CompetitorsComponent />
      </div>
      <div id="support">
        <SupportComponent />
      </div>
      <div id="footer">
        <FooterComponent />
      </div>
      <div id="contact">
        {/* <ContactComponent /> */}
      </div>
    </ThemeProvider>
  )
}
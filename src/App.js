import React from 'react';
import 'typeface-roboto'
import {
  createMuiTheme, ThemeProvider,
} from '@material-ui/core'
import { grey, purple } from '@material-ui/core/colors';
import Home from './Container/Home'

const theme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: grey
  },
  status: {
    danger: 'red'
  }
})





class App extends React.Component {


  render() {

    return (




      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>



    )
  }

}



export default App;

import React from 'react'
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles'
import {LinearProgress} from '@material-ui/core'

export default function Loader(){
    
    const theme = createMuiTheme({
      palette: {
        secondary: {
          main: '#000',
        },
      },
    });

    return <div className="d-flex align-items-center justify-content-center" style={    {'height':'90vh', 'backgroundColor':'#f0f0f0'}}>
      <div style={{'backgroundColor':'#fff', 'box-shadow':'3px 3px 25px 6px #ccc','borderRadius':'20px'}}>
        <div style={{'display':'flex', 'justifyContent':'center', 'alignItems':'center'}}> 
          <span style={{'color':'#000', 'width':'250px', 'textAlign':'center'}} className="navbar-brand"><span style={{'font-family': "'Akaya Kanadaka', cursive", 'fontWeight':'500'}}>Quizzers' Club</span><br />MANIT</span>
        </div>
        <div style={{'width':'250px', 'margin':'auto'}}>
          <ThemeProvider theme={theme}>
            <LinearProgress color="secondary"  />
          </ThemeProvider>
        </div>
      </div>
    </div>
}
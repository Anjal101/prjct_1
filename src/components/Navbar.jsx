import React from 'react'
import App from '../App'
import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <AppBar>
            <Toolbar>
              <Typography variant='h4'>MY APP</Typography>
                <Typography variant='h6' component="div" sx={{ flexGrow: 1 }}> </Typography>
                <Button><Link to={'/'} style={{color:"white"}}>Table</Link> </Button>
                <Button><Link to={'/a'} style={{color:"white"}}>Data</Link> </Button>

            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar
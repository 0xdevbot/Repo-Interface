import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const NavBar = () => {
    return(
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="title" color="inherit" style={{flex: 1, flexDirection: 'row'}}>
                        <h3 style={{textAlign: 'center', alignSelf: 'stretch', flexDirection: 'row'}}>Repo-Interface</h3>
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}
export default NavBar;
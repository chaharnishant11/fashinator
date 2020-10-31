import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';


export default function header() {
	return (
		<div>
			<AppBar position="fixed">
				<Toolbar>
					<Grid item sm={1}> </Grid>
					<Typography variant="h6">
                        Fashinator
                    </Typography>
				</Toolbar>
			</AppBar>
		</div>
	);
}

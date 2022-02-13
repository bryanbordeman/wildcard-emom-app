import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { Paper } from '@mui/material';
import TimerIcon from '@mui/icons-material/Timer';
import HomeIcon from '@mui/icons-material/Home';
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';


export default function SimpleBottomNavigation() {
const [value, setValue] = React.useState(0);

return (
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <Box sx={{ flexGrow: 1, overflow: 'hidden', px: 3 }}>
            <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
            >
            <BottomNavigationAction label="Home" icon={<HomeIcon />} />
            <BottomNavigationAction label="Timer" icon={<TimerIcon />} />
            <BottomNavigationAction label="Workouts" icon={<AddToPhotosIcon />} />
            </BottomNavigation>
        </Box>
    </Paper>
);
}

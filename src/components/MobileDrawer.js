import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Button, Typography } from '@mui/material';
import { draw } from '../utils/common';

export default function AnchorTemporaryDrawer() {
    const [state, setState] = React.useState({
        left: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250, height: '100vh' }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                <Button >        
                  <CloseIcon />
                </Button>
                {draw.map((ele) => (
                    <ListItem key={ele.name} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {ele.value}
                            </ListItemIcon>
                            <Typography sx={{color:'black',fontSize:'20px',fontWeight:'500',fontFamily:'inherit'}}>{ele.name}</Typography>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
        </Box>
    );

    return (
        <div>
            <React.Fragment key="top">
                <IconButton onClick={toggleDrawer('top', true)}>
                    <MenuIcon />
                </IconButton>
                <Drawer
                    anchor="top"
                    open={state['top']}
                    onClose={toggleDrawer('top', false)}
                >
                    {list('top')}
                </Drawer>
            </React.Fragment>
        </div>
    );
}

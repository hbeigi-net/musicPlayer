import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Player from "../components/Player"
import {useSelector , useDispatch} from "react-redux"
const drawerWidth = 240;
import { toggleList } from '../store/slice/slideList';
import SongItem from "./songItem"
const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function PersistentDrawerLeft(props) {
  const isOpen = useSelector(state => state.UI.SideList.isOpen);
  const musicList = useSelector(state => state.ent.musicList);
  const currentMusic = useSelector(state => state.ent.currentMusic.id);
  const dispatch=useDispatch();

  const handleDrawerOpen = () => {
    dispatch(toggleList(false))
  };
  
  const handleDrawerClose = () => {
    dispatch(toggleList(true))
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" color='secondary' open={isOpen}>
        <Toolbar>

          <Typography variant="h6" noWrap component="div">
            Music Player
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={isOpen}
      >


        <List sx={{paddingX : '10px'}}>

          {
            musicList.map(item=>
              {
                if(item.id ===currentMusic)
                {
                  return (
                    <songItem music = {item} isActive ={true}/>
                  )
                }
                return (
                  <SongItem music ={item} />
                )
              })
          }
        </List>
      </Drawer>
      <Main open={isOpen}>
        <DrawerHeader />
          <IconButton   onClick={handleDrawerClose} sx={{fontSize : "5rem" , position : "fixed" , zIndex : "100" ,top:"100px",right:"100px" ,...(!isOpen && { display: 'none' }) }}>
              <CloseIcon fontSize='.8rem' color ="error" />
          </IconButton>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(isOpen && { display: 'none' }) ,fontSize : "5rem" ,  position : "fixed" , zIndex : "100" ,top:"100px",right:"100px" }}
          >
            <MenuIcon color='warning' fontSize='1rem' />
          </IconButton>
          
            <Player/>
      </Main>
    </Box>
  );
}

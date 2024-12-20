import React, { useState } from "react";
import ItemList from "./components/itemsList";
import Calender from "./components/calender";
import Course from "./components/course";
import Mend from "./components/mend";

import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Link } from "react-router-dom/cjs/react-router-dom.min";


import './home.css';

const ARTICLE = [
  {
      id: 'a1',
      name: 'Жанцан',
      image: 'image/bigGate.jpg',
      url: "http://www.mongoltoli.mn/search.php?ug_id=41523&opt=1&word=%D0%96%D0%90%D0%9D%D0%A6%D0%90%D0%9D"
  },
  {
      id: 'a2',
      name: 'Гандан Хийд',
      image: 'image/gandan.jpg',
      url: 'https://www.mongolianguideschool.com/info7/detail/183'
  },
  {
      id: 'a3',
      name: 'Буддын сургаал',
      image: 'image/gandan.jpg',
      url: 'https://www.facebook.com/photo.php?fbid=3165073873506921&id=354619971219006&set=a.354627067884963'
  },
  {
      id: 'a4',
      name: 'Буддын сургаал',
      image: 'image/gandan.jpg',
      url: 'https://www.facebook.com/photo.php?fbid=3165073873506921&id=354619971219006&set=a.354627067884963'
  },
  {
      id: 'a5',
      name: 'Гандан Хийд',
      image: 'image/gandan.jpg',
      url: 'https://www.facebook.com/photo.php?fbid=3165073873506921&id=354619971219006&set=a.354627067884963'
  },
  {
      id: 'a6',
      name: 'Буддын сургаал',
      image: 'image/gandan.jpg',
      url: 'https://www.facebook.com/photo.php?fbid=3165073873506921&id=354619971219006&set=a.354627067884963'
  },
  {
      id: 'a7',
      name: 'Буддын сургаал',
      image: 'image/gandan.jpg',
      url: 'https://www.facebook.com/photo.php?fbid=3165073873506921&id=354619971219006&set=a.354627067884963'
  }
]


const drawerWidth = 140;

  
  const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  }));
  

export default function Home() {

    const theme = useTheme();
    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => {
      setOpen(true);
    };

    const handleDrawerClose = () => {
      setOpen(false);
    };




    return (
        <Box>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={[
                { mr: 2, },               
                open && { display: 'none' },
                {display: 'none'}
              ]}
              id="icon-button"
            >
              <MenuIcon />
            </IconButton>


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
              open={open}
            >
            <DrawerHeader>
              <IconButton onClick={handleDrawerClose}>
                {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
              </IconButton>
            </DrawerHeader>
            <Divider />
            <List>
              
              <ListItem  disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <Link to="/">Мэндчилгээ</Link>
                  </ListItemIcon>
                  <ListItemText  />
                </ListItemButton>
              </ListItem>
              
            </List>
            <Divider />
            <List>
                <ListItem  disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                       <Link to="/">Calendar</Link>
                    </ListItemIcon>
                    <ListItemText />
                  </ListItemButton>
                </ListItem>
            </List>
            <Divider />
            <List>
                <ListItem  disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                       <Link to="/">Номын зар</Link>
                    </ListItemIcon>
                    <ListItemText />
                  </ListItemButton>
                </ListItem>
            </List>
            </Drawer>


        <main className="home">        
            <section className="section-1">
              <Mend />
            </section>

            <section className="section-2">
                <div >
                    <ItemList articles={ARTICLE} /> 
                </div>               
            </section>

            <section className="section-3">
                <div className="cali-container">
                  <Calender />    
                </div>

                <h3 style={{marginBottom: '0px'}}>Course Schedule</h3>                                          
                  <Course />         
            </section>        
        </main>
        </Box>
    )
};


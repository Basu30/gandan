import React, { useEffect, useRef, useState } from "react";
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
    const clickRef = useRef(null);

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState()
    const [loadedNews, setLoadedNews] = useState();
  
    const theme = useTheme();
    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => {setOpen(true);};
    const handleDrawerClose = () => {setOpen(false);};

     //Close the dropdown when clicking outside
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (clickRef.current && !clickRef.current.contains(event.target)){
          setOpen(false) // close the dropdown
        }
      };
        // Add event listener to the document
      document.addEventListener("mousedown", handleClickOutside);
      // Cleanup the event listener when component unmounts;
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };  
    }, []);


    // Fetching news data
    useEffect(() => {
      const fetchNews = async () => {
        setIsLoading(true)
        try {
          const response = await fetch('http://localhost:5000/api/news'); 
          const responseData = await response.json();

          if(!response.ok) {
            throw new Error(responseData.message)
          }

          setLoadedNews(responseData.news);
          setIsLoading(false);
        } catch (err) {
          setIsLoading(false);
          setError(err.message)
          }
      };
      fetchNews();
    }, [])
    
  
    // const errorHandler = () +


    return (
        <Box>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              ref={clickRef}
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
              <IconButton  onClick={handleDrawerClose}>
                {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
              </IconButton>
            </DrawerHeader>

            <Divider />
            <List>
       
              <ListItem  disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <Link to="/mend">Мэндчилгээ</Link>
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
                       <Link to="/calendar">Calendar</Link>
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
                       <Link to="/course">Номын зар</Link>
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
                    {!isLoading && loadedNews && <ItemList articles={loadedNews} /> }
                </div>               
            </section>

            <section className="section-3">
                <div className="cali-controller">
                  <div className="cali-container">
                    <Calender />    
                  </div>
                </div>
                
                <h3 style={{marginBottom: '0px'}}>Course Schedule</h3> 

                <div className="home-course-container">                                                        
                  <Course /> 
                </div>
                        
            </section>        
        </main>
        </Box>
    )
};


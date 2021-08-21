import React from 'react'; 
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon'; 
import MailIcon from '@material-ui/icons/Mail';
import MainDrawerStyles from "./MainDrawerStyles"; 
import Link from 'next/link'
import RoutesConfig from '../../constants/RoutesConfig'; 
import IconButton from "@material-ui/core/IconButton"; 
 import Badge from "@material-ui/core/Badge";
 import NotificationsIcon from "@material-ui/icons/Notifications";
 import AccountCircle from '@material-ui/icons/AccountCircle'; 
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import MoreIcon from '@material-ui/icons/MoreVert';
const drawerWidth = 240;



export default function MainDrawer() {

  const classes = MainDrawerStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}> 
        <Toolbar>
           
          <Typography className={classes.title} variant="h6" noWrap>
           NextJS React framework demo
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase style={{marginLeft:20, color:'white'}}
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="secondary">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={17} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user" 
              aria-haspopup="true" 
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more" 
              aria-haspopup="true" 
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
           
           
            
            {RoutesConfig.map(({ title, path,icon }, index) => (
              <div key={title}>
              <ListItem  button key={title} >
                <ListItemIcon key={title}>{icon}</ListItemIcon> 
                <Link key={title}  href={path}>
                    
                    <Typography key={title}  noWrap style={{color:'white'}}>
                           {title}
                    </Typography>
                   
                </Link> 

              </ListItem> 
              <Divider  style={{backgroundColor: "white"}} /> 
              </div>
            ))}

          </List> 
        </div>
      </Drawer>
     
    </div>
  );
}

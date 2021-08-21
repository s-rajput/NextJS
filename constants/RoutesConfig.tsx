 
import React from "react";
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import WebIcon from '@material-ui/icons/Web';
import DnsIcon from '@material-ui/icons/Dns';
  
const iconStyles = {
	color: "white",
};
 

const  RoutesConfig  = [
	{
		id: "home",
		path: "/",
		title: "CSR",
		icon: <HomeIcon key ={1} style={iconStyles} />
	}, 
	{
		id: "ServerSu",
		path: "/ssr",
		title: "SSR",
		icon: <WebIcon key ={2} style={iconStyles} />
	}, 
	{
		id: "Contact",
		path: "/contact",
		title: "Contact",
		icon: <DnsIcon  key ={3} style={iconStyles} />
	}, 
	{
		id: "about",
		path: "/about-us",
		title: "About",
		icon: <InfoIcon key ={4} style={iconStyles} />
	}, 
];

export default RoutesConfig;

import { useEffect, useRef, useCallback, Fragment } from "react";
import { useAppDispatch, useAppSelector } from "../store/store";
import MainChart from  "../components/main-chart/MainChart"; 
import PageWrapper from "../components/page-wrapper/PageWrapper";
import { Grid } from "@material-ui/core";
import {getCatsAsync} from '../store/petsSlice';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader'; 
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '../components/alert/Alert';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > * + *': {
      marginLeft: theme.spacing(20),
    }
  },
}));

 

const IndexPage = () => {

  const { pets } = useAppSelector((state) => ({
                      pets: state.petsSlice
                    }));

  const classes = useStyles();

  const { loading,data,error } = pets || {};

  const appDispatch = useAppDispatch();
 

  const catsReportData = [
    {
      name: 'Cats with male owner',
      value : data == null ? 0 : data?.filter(x=> x.ownerGender == 'Male')[0].names.length
    },
    {
        name: 'Cats with female owner',
        value : data == null ? 0 :data?.filter(x=> x.ownerGender == 'Female')[0].names.length
     } 
] 
  

  useEffect(() => { 

    if (data == undefined || (data !==undefined && data.length === 0)) { 
      console.log('dispath');
      appDispatch(getCatsAsync());
     };
   }, [appDispatch, data]);
 
 
   if(loading) { 
  
    return (
      <div className={classes.root}> 
        <CircularProgress color="secondary" />
      </div>
    );

   };

   if(error) { 
  
    return (
      <div className={classes.root}>
          <Alert severity="error">Error occured : {error}</Alert>
      </div>
    );
    
   };
  
    return (
        
		<PageWrapper>
			
            <Typography component="div">
                
                <Box fontFamily="Monospace" fontSize="h5.fontSize" m={1}>
                Client side rendering
                </Box>
            </Typography>

            
			<Grid container spacing={2}>
				<Grid item xs={12} sm={12} md={5}>
					<Grid container spacing={2}>
						<Grid item xs={12} sm={12}>
                        <Grid container spacing={2}> 
                                {data !==undefined ? 
                                  data.map(cat => (
                                    
                                    <Grid item xs={4}  >
                                     
                                     <List   key={cat.ownerGender} subheader={<ListSubheader style={{color:'red'}}>{cat.ownerGender}</ListSubheader>}>
 
                                        {cat.names.map(c => (

                                            <ListItem key={c}>
                                            
                                                <ListItemText key={c} id="switch-list-label-wifi" primary={c} /> 
                                              
                                            </ListItem>

                                        ))}
                                  

                                    </List>
                                     
                                    </Grid>
                                ))
                            : <h1></h1>}
                                
                            </Grid>
						</Grid> 
					</Grid>
				</Grid>
				<Grid item xs={12} sm={12} md={7}>
					<Grid container spacing={2}>
						  
                         <MainChart data={catsReportData} /> 
					</Grid>
				</Grid>
			</Grid>
		</PageWrapper>
	);
};

export default IndexPage;

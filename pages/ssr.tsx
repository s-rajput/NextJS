import { useState } from "react"; 
import MainChart from  "../components/main-chart/MainChart"; 
import PageWrapper from "../components/page-wrapper/PageWrapper";
import { Grid } from "@material-ui/core"; 


import { IPetsService } from "../backend/pet/pets";
import { DIContainer } from '../ioc/DIContainer';
import { TYPES } from '../ioc/TYPES';  
import { Cats } from "../backend/pet/pets.types";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
 

interface HomePageProps {
  sData: Cats[];
} 


const SSR = ({ sData }: HomePageProps) => {

  
  const [data, setPostList] = useState(sData)
   
  
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
  


    return (
		<PageWrapper>
			 <Typography component="div"> 
            <Box fontFamily="Monospace" fontSize="h5.fontSize" m={1}>
                  Server side rendering
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

SSR.getInitialProps = async() => {
  
  const petsSvc = DIContainer.get<IPetsService>(TYPES.IPetsService);
  const response = await petsSvc.getCatsGroupedByOwnerGender(); // Hello from client
  console.log('SSR');
  var props : HomePageProps = {
     sData : response
  }
  return props ;
}
 

export default SSR;

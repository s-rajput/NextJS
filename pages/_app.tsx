import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'; 
import  store  from '../store/store'; 
import MainDrawer from '../components/main-appbar/MainDrawer';
import Grid from '@material-ui/core/Grid';
import SEO from '../components/seo';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <SEO description ="Demo" title = "Next JS" siteTitle = "React framework" />
      <Grid   container   style={{backgroundColor: '#fff0ee', height:1400}} >
        <Grid key={Math.random.toString()} item xs={2}  >
             <MainDrawer/>

        </Grid>
        <Grid key={Math.random.toString()} item xs={10} style={{marginTop : 90}} >
              <Component {...pageProps} />
        </Grid> 
      </Grid>
     
    </Provider>
  );
}
export default MyApp

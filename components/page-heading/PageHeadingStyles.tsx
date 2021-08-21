//== IMPORT PACKAGE ==

import { makeStyles, Theme } from "@material-ui/core/styles";

//== STYLES ==

const PaheHeadingStyles = makeStyles((theme:Theme)=>{
    return ({
        "page-heading":{
            marginBottom: theme.spacing(2)
        },
        "page-heading-container":{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            [theme.breakpoints.down("sm")]:{
                flexDirection: "column"
            }
        },
        "page-heading-text": {
            lineHeight: 1,
            marginBottom: 0
        }
    })
    
});


export default PaheHeadingStyles;
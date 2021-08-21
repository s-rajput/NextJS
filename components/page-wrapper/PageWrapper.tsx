//== IMPORT PACKAGE ==

import { ReactNode, ReactElement } from "react";

//== IMPORT STYLES ==

import { Box } from "@material-ui/core";

//== MAIN COMPONENT ==

export interface PageWrapperInterface {
  children: ReactNode;
  fullWidth?: Boolean;
}

const PageWrapper = ({ children,fullWidth }: PageWrapperInterface): ReactElement => {
  return (
    <Box aria-label="page wrapper" className="user-page" pb={6} mx={"auto"} width={fullWidth?null:({
      xs: "100%",
      sm: "95%",
      md: "90%",
      lg: "95%"
    })}>
      {children}
    </Box>
  );
};

export default PageWrapper;

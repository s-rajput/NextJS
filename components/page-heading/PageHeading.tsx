//== IMPORT PACKAGE ==

import { ReactNode, ReactElement } from "react";

//== IMPORT STYLES ==

import { Box, Typography, PropTypes } from "@material-ui/core";
import PageHeadingStyles from "./PageHeadingStyles";

//== IMPORT ASSET == 

//== IMPORT VIEWS == 

//== MAIN COMPONENT ==

export interface PageHeadingInterface {
	children: ReactNode;
	wrapper?: boolean;
	align?: PropTypes.Alignment;
}

export default function PageHeading({
	children,
	wrapper = true,
	align = "left",
}: PageHeadingInterface): ReactElement {
	/** vars */

	const styles = PageHeadingStyles();

	/** render */

	if (wrapper) {
		return (
			 
				<Box className={styles["page-heading-container"]}>
					<Typography
						variant={"h4"}
						component={"h1"}
						align={align ? align : "left"}
						color={"primary"}
						className={styles["page-heading-text"]}
					>
						{children}
					</Typography> 
				</Box>
		 
		);
	}
	return (
		<Box
			aria-label="heading"
			mb={{
				xs: 1,
				sm: 2,
			}}
		>
			<Typography
				variant={"h4"}
				component={"h1"}
				align={"left"}
				color={"primary"}
			>
				{children}
			</Typography>
		</Box>
	);
}

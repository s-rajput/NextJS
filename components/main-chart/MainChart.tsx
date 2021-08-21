//== PACKAGES ==

import { ReactElement } from "react";

//== VIEWS ==
 
import Chart, { ChartDataInterface } from "../chart/Chart";
import {Grid} from "@material-ui/core";

//== MAIN ==

const MainChart = ({
	data,
}: {
	data: ChartDataInterface[];
}): ReactElement => {
	const option = {
		tooltip: {
			trigger: "item",
		},
		legend: { 
			left: 'left'
		},
		series: [
			{
				name: "Cats",
				type: "pie",
				radius: ["45%", "70%"],
				avoidLabelOverlap: false,
				itemStyle: {
					borderRadius: 10,
					borderColor: "#fff",
					borderWidth: 2,
				},
				emphasis: {
					label: {
						show: false,
						fontSize: "20",
						fontWeight: "normal",
					},
				},
				label: {
					show: false,
				},
				data,
			},
		],
	};

	/** render */

	const isPageReady = data && data.length;

	return isPageReady ? (
		<Grid item xs={12} sm={12} md={12} lg={6}> 
				<Chart height={"350px"} option={option} /> 
		</Grid>
	) : (
		<></>
	);
};

export default MainChart;

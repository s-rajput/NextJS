//== PACKAGES ==

import { ReactElement, useRef, useEffect, useCallback, useState } from "react";
import * as echarts from "echarts";

//== MAIN ==

export interface ChartDataInterface {
	name: String;
	value: any;
}

export interface ChartInterface {
	height: string;
	option: any;
}

const Chart = ({ height, option }: ChartInterface): ReactElement => { 

	/** element */

	const chartEl = useRef<HTMLDivElement | null>(null);

	/** callback ref */

	const previousWidthRef = useRef<number | undefined>();
	const addOnResizeListener = useRef<boolean>(false);
	const chartObj = useRef<any>();
	const prevOption= useRef<string|undefined>();

	/** callback */

	const onChangeOption = useCallback(()=>{

		/** call set option when we option values are updated */

		if(prevOption.current !== JSON.stringify(option)){

			if(prevOption.current){

				chartObj.current && chartObj.current.setOption(option,true);
			
			}

			prevOption.current = JSON.stringify(option);
		}

	},[option,prevOption,chartObj])

 
	const initChartCallback = useCallback(() => {
		
		/** init chart and add resize listener */

		if (!addOnResizeListener.current) {
			chartObj.current = chartEl.current && echarts.init(chartEl.current);
			chartObj.current && chartObj.current.setOption(option, true); 
			addOnResizeListener.current = true;
		}

		/** call resize method when window with updated */

	 
	}, [
		chartEl,
		option,
		previousWidthRef, 
		addOnResizeListener, 
		chartObj,
	]);

	/** life cycle */

	useEffect(() => {
		
		initChartCallback();
		
		onChangeOption();
	
	}, [initChartCallback,onChangeOption]);

 

	/** render */

	return option ? (
		<div
			ref={chartEl}
			style={{
				height,
				display: "flex",
				justifyContent: "center",
			}}
		/>
	) : (
		<></>
	);
};

export default Chart;

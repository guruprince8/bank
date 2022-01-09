import React from 'react';
import './Chart.css';
import ChartBar from './ChartBar';

const Chart = (props) => {
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
    const totalMaximum = Math.max(...dataPointValues);
    //console.log(totalMaximum);
    return (
        <div className='chart'>
            {props.dataPoints.map((datapoint) =>(
                <ChartBar 
                    value={datapoint.value} 
                    max={totalMaximum} 
                    label={datapoint.label} 
                    key={datapoint.label}
                />
            ))}
        </div>
    )
}
export default Chart;
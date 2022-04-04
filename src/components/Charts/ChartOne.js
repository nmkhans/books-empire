import React from 'react';
import { Bar, BarChart, Tooltip, XAxis, YAxis } from 'recharts';
import useChart from '../../hooks/useChart';

const ChartOne = () => {
    const [chart] = useChart();

    return (
        <div>
            <BarChart width={300} height={300} data={chart}>
                <Bar dataKey="revenue" fill="#8884d8" />
                <XAxis />
                <YAxis />
                <Tooltip />
            </BarChart>
        </div>
    );
};

export default ChartOne;
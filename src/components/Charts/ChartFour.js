import React from 'react';
import { AreaChart, CartesianGrid, XAxis, YAxis, Tooltip, Area } from 'recharts';
import useChart from '../../hooks/useChart';

const ChartFour = () => {
    const [chart] = useChart();

    return (
        <div>
            <AreaChart
                width={500}
                height={400}
                data={chart}
                margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="revenue" stroke="#8884d8" fill="#8884d8" />
            </AreaChart>
        </div>
    );
};

export default ChartFour;
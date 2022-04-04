import React from 'react';
import { PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart } from 'recharts';
import useChart from '../../hooks/useChart';

const ChartThree = () => {
    const [chart] = useChart();

    return (
        <div>
            <RadarChart height={400} width={400} cx="50%" cy="50%" outerRadius="80%" data={chart}>
                <PolarGrid />
                <PolarAngleAxis dataKey="revenue" />
                <PolarRadiusAxis />
                <Radar name="Khan" dataKey="investment" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
            </RadarChart>
        </div>
    );
};

export default ChartThree;
import React from 'react';
import ChartOne from './../../components/Charts/ChartOne';
import ChartTwo from './../../components/Charts/ChartTwo';
import ChartThree from './../../components/Charts/ChartThree';
import ChartFour from './../../components/Charts/ChartFour';
import './DashBoard.css';

const DashBoard = () => {
    return (
        <div className="dashBoard">
            <div className="inner__dashBoard container">
                <div className="dashBoard__content">
                    <ChartOne />
                    <ChartTwo />
                    <ChartThree />
                    <ChartFour />
                </div>
            </div>
        </div>
    );
};

export default DashBoard;
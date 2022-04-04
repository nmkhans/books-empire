import React from 'react';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className="notFound">
            <div className="inner__notFound container">
                <div className="notFound__content">
                    <div className="notFound__fourOFour">
                        <h2>404</h2>
                    </div>
                    <div className="notFound__desc">
                        <p>The page you are looking for is not Found</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
import React from 'react';
import Reviews from '../../components/Reviews/Reviews';
import useReviews from './../../hooks/useReviews';
import './Review.css';

const Review = () => {
    const [reviews] = useReviews();

    return (
        <div className="review">
            <div className="inner__review container">
                <div className="review__content">
                    <div className="reviews__title"></div>
                    <div className="client__reviews">
                        {
                        reviews.map(client => <Reviews client={client} />)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;
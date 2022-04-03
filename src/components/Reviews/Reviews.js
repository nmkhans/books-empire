import React from 'react';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import './Reviews.css';

const Reviews = ({ client }) => {
    console.log(client)
    
    return (
        <div className="reviews">
            <div className="inner__reviews">
                <div className="reviews__content">
                    <div className="review__img">
                        <img src={client.picture} alt="" />
                    </div>
                    <div className="review__name">
                        <p>{client.name}</p>
                    </div>
                    <div className="review__comment">
                        <p>{client.description}</p>
                    </div>
                    <div className="review__star">
                        <span><StarBorderIcon /></span>
                        <span>{client.rating}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reviews;
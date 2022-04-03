import React, { useState, useEffect } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import useReviews from './../../hooks/useReviews';
import Image from './book.png';
import Reviews from './../../components/Reviews/Reviews';
import './Home.css';

const Home = () => {
    const [newReview, setNewReview] = useState([]);
    const [reviews] = useReviews();
    useEffect(() => {
        const minReview = [...reviews];
        const minimumReview = minReview.slice(0, 3);
        setNewReview(minimumReview)
    }, [reviews])


    return (
        <div className="home">
            <div className="inner__home container">
                <div className="home__content">
                    <div className="home__hero__area">
                        <div className="home__hero__text">
                            <h3>Find All The Best Book Here<span>.</span></h3>
                            <h5>We Are here to provide you the best books.</h5>
                            <p>Books Arena is a place for you to find all types of books you desire. Its a place of haven for add the books lovers. Find any type of books of any category here. We are always there for you to help you finding the books you want.</p>
                            <button>browse now</button>
                        </div>
                        <div className="home__hero__img">
                            <img src={Image} alt="" />
                        </div>
                    </div>

                    <div className="home__review__area">
                        <div className="review__title">
                            <h3>What out clients say</h3>
                        </div>
                        <div className="client__review">
                            {
                                newReview.map(client => <Reviews cleint={client} key={client.id} />)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Home;



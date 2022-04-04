import React, { useState, useEffect } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import useReviews from './../../hooks/useReviews';
import Image from './book.png';
import Reviews from './../../components/Reviews/Reviews';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
    const [newReview, setNewReview] = useState([]);
    const [reviews] = useReviews();
    useEffect(() => {
        const minReview = [...reviews];
        const minimumReview = minReview.slice(0, 3);
        setNewReview(minimumReview)
    }, [reviews])

    const navigate = useNavigate();
    const seeAll = () => {
        const path = '/review';
        navigate(path);
    }

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };

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
                            <Carousel
                                swipeable={true}
                                draggable={true}
                                showDots={true}
                                responsive={responsive}
                                ssr={true} // means to render carousel on server-side.
                                infinite={true}
                                autoPlay={true}
                                autoPlaySpeed={2000}
                                keyBoardControl={true}
                                customTransition="all .5"
                                transitionDuration={500}
                                containerClass="carousel-container"
                                removeArrowOnDeviceType={["tablet", "mobile"]}
                                deviceType={this?.props?.deviceType}
                                dotListClass="custom-dot-list-style"
                                itemClass="carousel-item-padding-40-px"
                            >
                                {newReview.map(client => <Reviews client={client} key={client.id} />)}
                            </Carousel>
                        </div>
                        <div className="client__review__button">
                            <button onClick={seeAll}>See All</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Home;



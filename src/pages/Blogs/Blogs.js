import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className="blogs">
            <div className="inner__blogs container">
                <div className="blogs__title">
                    <h2>Blogs</h2>
                </div>
                <div className="blogs__content">
                    <div className="blog">
                        <div className="blog__title">
                            <h4>What is contex api?</h4>
                        </div>
                        <div className="blog__body">
                            <p>Contex Api is a way to send data from a component to another easily. As we know React Works in one unidirectional flow. That means the data can only be passed from top to bottom. But if we want to pass a data from bottom component or child component to its parent component, Its very complicated. We have to use props drilling for that. Its becomes painfull when the parent child element get bigger. That's when contex api comes in handy. With api, we can easily send data form a component to another by provider. This is contex api.</p>
                        </div>
                    </div>
                    <div className="blog">
                        <div className="blog__title">
                            <h4>What is semantic tags?</h4>
                        </div>
                        <div className="blog__body">
                            <p>Semantic tags means meaningfull tags. before html 5 we used to use tags like div every where and for every reason. After html 5, this changed. They brought us semantic tags. Its besically Meaningfull tags. If we want to make header we should use a tag named header instead of using div for it. for sections there is a tag section. and like that nav, aside, main etc tags are semantic tags. The are more meaningfull than div tags every where.</p>
                        </div>
                    </div>
                    <div className="blog">
                        <div className="blog__title">
                            <h4>Display inline vs block vs inline block!</h4>
                        </div>
                        <div className="blog__body">
                            <p>Every html tags have e default display element behaivior. They are display property of html tags. There are three of them, inline, inline-block, block. The inline means in one line. every inline elements will sit right after each other and will not have space between them. Block element are opossite. One block element take the entire space to sit. other elements will sit after the block element take tha full space of the screen. inline elements have some drawbacks. They cant have perfect padding and margin and many more problem. The inline-block solve the issue. This element behave like element but we can apply the spacing styles on them.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;
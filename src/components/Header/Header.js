import React from 'react';
import LinkTo from './../LinkTo/LinkTo';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <div className="inner__header container">
                <div className="header__content">
                    <div className="header__logo">
                        <h3>
                            B<span>o</span>o<span>k</span>s <span>A</span>r<span>e</span>n<span>a</span>.
                        </h3>
                    </div>
                    <nav className="header__navigation">
                        <ul>
                            <li>
                                <LinkTo className="link" to='/'>Home</LinkTo>
                            </li>
                            <li>
                                <LinkTo className="link" to='/review'>Review</LinkTo>
                            </li>
                            <li>
                                <LinkTo className="link" to='/dash-board'>Dashboard</LinkTo>
                            </li>
                            <li>
                                <LinkTo className="link" to='/blogs'>Blogs</LinkTo>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Header;
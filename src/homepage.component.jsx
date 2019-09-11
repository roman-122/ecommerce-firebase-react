import React from 'react';
import './homepage.styles.scss';

const HomePage = () => (
    <div className='homepage'>
        <div className='directory-menu'>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className="title"> Paintings </h1>
                    <span className="subtitle"> Shop Now </span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className="title"> Book </h1>
                    <span className="subtitle"> Order Now </span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className="title"> Prints </h1>
                    <span className="subtitle"> Shop Now </span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className="title"> Shirts </h1>
                    <span className="subtitle"> Shop Now </span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className="title"> Hats </h1>
                    <span className="subtitle"> Shop Now </span>
                </div>
            </div>
        </div>
    </div>
);

export default HomePage;
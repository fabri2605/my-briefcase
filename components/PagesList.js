import React from 'react';
import PageItem from './PageItem';
import classes from './PagesList.module.css';

/* {
        title: 'Food Page',
        img: '/eye_mid.jpg',
        description:
            'A simple food page where you can order and add different menus to your cart',
        link: '',
    } */

const PagesList = (props) => {
    return (
        <div className='centered'>
            <h2>This are some pages I created while learning..</h2>
            {props.pages.map((e) => {
                return (
                    <PageItem
                        link={e.link}
                        title={e.title}
                        img={e.image}
                        description={e.description}
                        key={e.id}
                    />
                );
            })}
        </div>
    );
};

export default PagesList;

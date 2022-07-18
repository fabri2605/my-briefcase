import React from 'react';
import PageItem from './PageItem';
import classes from './PagesList.module.css';
const PagesList = (props) => {
    return (
        <div className='centered'>
            <h2 className={classes.open}>Hi, this are some pages I created while learning..</h2>
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

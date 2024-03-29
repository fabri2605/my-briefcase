import React from 'react';
import MyBody from '../../components/MyBody';
import Head from 'next/head';

const AboutMe = () => {
    return (
        <div className='centered tall'>
            <Head>
                <title>My Creations</title>
                <link rel='icon' href='/favicon.ico' />
                <meta
                    name='description'
                    content='Generated by create next app'
                />
                <meta name='description' content='My personal briefcase' />
            </Head>
            <MyBody></MyBody>
        </div>
    );
};

export default AboutMe;

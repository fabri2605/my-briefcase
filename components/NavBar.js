import React from 'react';
import classes from './NavBar.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';

const NavBar = () => {
    const router = useRouter();
    const goHome = () => {
        router.push('/');
    };
    return (
        <React.Fragment>
            <nav className={classes.container}>
                <h1 onClick={goHome} className={classes.logo}>
                    My briefcase!
                </h1>
                <ul>
                    <li className={classes.avatar}>
                        <label htmlFor='about'><Link href='/about-me' id='about'>
                            About me
                        </Link></label>
                        <Link href='/about-me' id='about'>
                            <img src='/user_64.png' alt='About me' />
                        </Link>
                    </li>
                </ul>
            </nav>
        </React.Fragment>
    );
};

export default NavBar;

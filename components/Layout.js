import Footer from './Footer';
import NavBar from './NavBar';
import classes from './NavBar.module.css';

const Layout = (props) => {
    return (
        <div>
            <main className={classes.main}>
                <NavBar/>
                {props.children}
                <Footer/>
            </main>
        </div>
    );
};

export default Layout;

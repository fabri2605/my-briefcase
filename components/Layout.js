import NavBar from './NavBar';
import classes from './NavBar.module.css';

const Layout = (props) => {
    return (
        <div>
            <main className={classes.main}>
                <NavBar></NavBar>
                {props.children}
            </main>
        </div>
    );
};

export default Layout;

import NavBar from "./NavBar";
import classes from "./NavBar.module.css";

const Layout = (props) => {
    return <div>
        <NavBar></NavBar>
        <main className={classes.main}>{props.children}</main>
    </div>
};

export default Layout;
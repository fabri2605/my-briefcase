import classes from './myBody.module.css';

const myBody = () => {
    return (
        <>
            <h1 className={classes.title}>Hi im Fabricio Di Paolo..</h1>
            <div className={classes.info}>
                <div>
                    <h3>Here are some of my studies</h3>
                    <ul>
                        <li>Html and CSS</li>
                        <li>Java fullstack using Spring Boot</li>
                        <li>Javascript with JQuery</li>
                        <li>
                            Actually working on a React course with applications
                            of NextJs %70
                        </li>
                        <li>MySQL & MongoDB </li>
                        <li>GitHub</li>
                    </ul>
                </div>
                <div>
                    <h3>And some of my aptitudes</h3>
                    <ul>
                        <li>Coperative work</li>
                        <li>Autodidact</li>
                        <li>Creativity</li>
                        <li>Proactive</li>
                    </ul>
                </div>
                <div className={classes.contact}>
                    <ul>
                        <li>+54 2616149941 fabridp77@gmail.com</li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default myBody;

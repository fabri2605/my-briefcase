import classes from './PageItem.module.css';

const PageItem = (props) => {
    const detailsHandler = () => {
        window.location.assign(props.link);
    };

    return (
        <section className={classes.card} >
            <h2>{props.title}</h2>
            <div className={classes.image_cont}>
                <img src={props.img}></img>
                <button onClick={detailsHandler}>Enjoy it by yourself!</button>
            </div>
            <div className={classes.desc}>
                <p>{props.description}</p>
            </div>
        </section>
    );
};

export default PageItem;

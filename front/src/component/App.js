import Header from './Header';
import Content from './Content';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    header: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '80px'
    },
    content: {
        height: '100vh'
    }
});

const App = () => {
    const classes = useStyles();
    return (
        <div>
            <Header className={classes.header}/>
            <Content className={classes.content}/>
        </div>
    );
};

export default App;


import classes from './DashBoard.module.css'
import ListAltOutlinedIcon from '@material-ui/icons/ListAltOutlined'
import PlaylistAddOutlinedIcon from '@material-ui/icons/PlaylistAddOutlined';
import TaskList from './TaskList/TaskList';

const DashBoard = () => {
    return (
        <div className={classes["dash-board"]}>
            <div className={classes.wrapper}>
                <div className={classes.nav}>
                    <div className={classes.profile}>

                    </div>
                    <div>
                        <ListAltOutlinedIcon style={{ fontSize: 50 }} />
                    </div>
                    <div>
                        <PlaylistAddOutlinedIcon style={{ fontSize: 50 }}/>
                    </div>
                </div>
                <div className={classes.main}>
                    <div className={classes.tasks}>
                       <TaskList/> 
                    </div>
                    <div className={classes.details}>

                    </div>
                </div>
            </div>
           
        </div>
    )
}

export default DashBoard

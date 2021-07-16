
import classes from './DashBoard.module.css'
import ListAltOutlinedIcon from '@material-ui/icons/ListAltOutlined'
import PlaylistAddOutlinedIcon from '@material-ui/icons/PlaylistAddOutlined';
import TaskList from './TaskList/TaskList';
import TaskListContextProvider from '../../contexts/TaskListContextProvider';
import TaskContextProvider from '../../contexts/OrderContextProvider';
import OrderDetails from './TaskList/Orders/OrderDetails/OrderDetails';
import OrderStatusContextProvider from '../../contexts/OrderStatusContextProvider';
const DashBoard = () => {

    return (
        <TaskListContextProvider>
            <TaskContextProvider>
              <OrderStatusContextProvider>
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
<OrderDetails/>
                    </div>
                </div>
            </div>
          
            </div>
                </OrderStatusContextProvider>
          </TaskContextProvider>

        </TaskListContextProvider>
    )
}

export default DashBoard

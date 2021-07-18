import {useState} from 'react'
import classes from './DashBoard.module.css'
import ListAltOutlinedIcon from '@material-ui/icons/ListAltOutlined'
import PlaylistAddOutlinedIcon from '@material-ui/icons/PlaylistAddOutlined';
import TaskList from './TaskList/TaskList';
import TaskListContextProvider from '../../contexts/TaskListContextProvider';
import TaskContextProvider from '../../contexts/OrderContextProvider';
import OrderDetails from './TaskList/Orders/OrderDetails/OrderDetails';
import OrderStatusContextProvider from '../../contexts/OrderStatusContextProvider';
import Profile from '../../assets/profile.jpg'
import ModifyMenu from './ModifyMenu/ModifyMenu';
const DashBoard = () => {
const [display,setDisplay] = useState("list")
    return (
        <TaskListContextProvider>
            <TaskContextProvider>
              <OrderStatusContextProvider>
        <div className={classes["dash-board"]}>
           
            <div className={classes.wrapper}>
                <div className={classes.nav}>
                    <div className={classes.profile}>
                                    <img src={Profile} alt="profile"/>
                    </div>
                    <div onClick = {()=>setDisplay("list")}>
                        <ListAltOutlinedIcon style={{ fontSize: 50 ,color:`${(display==='list')?"orange":"white"}`}} />
                    </div>
                    <div onClick={()=>setDisplay("new-item")}>
                                    <PlaylistAddOutlinedIcon style={{ fontSize: 50, color: `${(display === 'new-item') ? "orange" : "white"}` }}/>
                    </div>
                            </div>
                            {(display === "list") &&
                                <div className={classes.main}>
                                    <div className={classes.tasks}>
                                        <TaskList />
                                    </div>
                                    <div className={classes.details}>
                                        <OrderDetails />
                                    </div>
                                </div>
                            }
                            {(display==="new-item")&&<ModifyMenu/>}
            </div>
          
            </div>
                </OrderStatusContextProvider>
          </TaskContextProvider>

        </TaskListContextProvider>
    )
}

export default DashBoard

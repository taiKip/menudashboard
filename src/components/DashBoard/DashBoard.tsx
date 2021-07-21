import { useState } from "react";
import classes from "./DashBoard.module.css";
import ListAltOutlinedIcon from "@material-ui/icons/ListAltOutlined";
import PlaylistAddOutlinedIcon from "@material-ui/icons/PlaylistAddOutlined";
import TaskList from "./TaskList/TaskList";
import TaskListContextProvider from "../../contexts/TaskListContextProvider";
import TaskContextProvider from "../../contexts/OrderContextProvider";
import OrderDetails from "./TaskList/Orders/OrderDetails/OrderDetails";
import OrderStatusContextProvider from "../../contexts/OrderStatusContextProvider";

import ModifyMenu from "./ModifyMenu/ModifyMenu";
import SearchContextProvider from "../../contexts/SearchContext";
import MenuContextProvider from "../../contexts/MenuContext";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import ModifyModal from "../../UI/Modal/ModifyModal";
const DashBoard = () => {
    const [display, setDisplay] = useState("list");
    const { logout } = useContext(AuthContext)
    const [show,setShow] = useState(false)
    const toggle = () => {
        setShow(prev=>!prev)
    }
  return (
    <TaskListContextProvider>
      <TaskContextProvider>
        <OrderStatusContextProvider>
          <MenuContextProvider>
            <SearchContextProvider>
              <div className={classes.modal}>
                {show && <ModifyModal click={toggle}>
                  <OrderDetails toggle={toggle}/>
                </ModifyModal>
                }
              </div>
                          
              <div className={classes["dash-board"]}>
                <div className={classes.wrapper}>
                  <div className={classes.nav}>
                    <div className={classes.profile}>

                    </div>
                    <div onClick={() => setDisplay("list")}>
                      <ListAltOutlinedIcon
                        style={{
                          fontSize: 50,
                          color: `${display === "list" ? "orange" : "white"}`,
                        }}
                      />
                    </div>
                    <div onClick={() => setDisplay("new-item")}>
                      <PlaylistAddOutlinedIcon
                        style={{
                          fontSize: 50,
                          color: `${
                            display === "new-item" ? "orange" : "white"
                          }`,}}
                      />
                    </div>
                    <div onClick={() => logout()}>
                      <ExitToAppIcon style={{ fontSize: 50, color: "white" }} />
                    </div>
                  </div>
                  {display === "list" && (
                    <div className={classes.main}>
                      <div className={classes.tasks}>
                        <TaskList toggleModal={toggle}/>
                      </div>
                      <div className={classes.details}>
                        <OrderDetails />
                                          </div>
                                          
                    </div>
                  )}
                  {display === "new-item" && <ModifyMenu />}
                </div>
              </div>
            </SearchContextProvider>
          </MenuContextProvider>
        </OrderStatusContextProvider>
      </TaskContextProvider>
    </TaskListContextProvider>
  );
};

export default DashBoard;

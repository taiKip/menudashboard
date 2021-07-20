import classes from "./ModifyMenu.module.css";
import NewItemForm from "./NewItemForm/NewItemForm";
import SearchMenuItem from "./SearchMenuItem/SearchMenuItem";
import Menu from "./Menu/Menu";
import { useContext, useState } from "react";
import { SearchContext } from "../../../contexts/SearchContext";
import ModifyModal from "../../../UI/Modal/ModifyModal";

import { IMenuItem } from "../../../interfaces/IMenuItem";

const ModifyMenu = () => {
  const { searchItem } = useContext(SearchContext);
  const [showModal, setShowModal] = useState(false);
  const [updateItem, setUpdateItem] = useState<IMenuItem | null>(null);
  const toggleModal = () => {
    setShowModal((prev) => !prev);
  };
  const handleSetUpdateItem = (item: IMenuItem) => {
    setUpdateItem(item);
  };
  return (
    <div className={classes.menu}>
      {showModal && (
        <ModifyModal click={toggleModal}>
          <NewItemForm
            newDesc={updateItem ? updateItem.description : ""}
            newName={updateItem ? updateItem.name : ""}
            newPrice={updateItem ? updateItem.price.toString() : ""}
            type="modify"
                      id={updateItem ? updateItem.id : ""}
                      toggle={toggleModal}
          />
        </ModifyModal>
      )}

      <div>
        <SearchMenuItem />
      </div>
      <div>
        {searchItem === "" ? (
                  <NewItemForm type="add" toggle={toggleModal}/>
        ) : (
          <Menu toggle={toggleModal} handleSetState={handleSetUpdateItem} />
        )}
      </div>
    </div>
  );
};

export default ModifyMenu;

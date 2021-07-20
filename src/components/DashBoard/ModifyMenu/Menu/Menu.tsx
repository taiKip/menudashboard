//display list of items when there is a search

import MenuItem from './MenuItem'
import classes from './Menu.module.css'
import { useContext } from 'react'
import { SearchContext } from '../../../../contexts/SearchContext'
import { MenuContext } from '../../../../contexts/MenuContext'
import { IMenuItem } from '../../../../interfaces/IMenuItem'
const Menu = ({toggle,handleSetState}:{toggle:()=>void,handleSetState:(a:IMenuItem)=>void}) => {
    const { searchItem } = useContext(SearchContext)
    const { state } = useContext(MenuContext)

    return (
        <div className={classes.wrapper}>
            <h1>Search Results</h1>
            <ul className={classes.menu}>
                {(state && searchItem !== "") &&(
                    state
                        .filter((item: IMenuItem) =>
                            item.name
                                .toLowerCase()
                                .includes(searchItem.toLowerCase())
                        )
                        .map((item: IMenuItem) => <MenuItem key={item.id} item={item} toggle={toggle} setState={handleSetState}/>)
                )}
            </ul>
        </div>
       
    )
}

export default Menu

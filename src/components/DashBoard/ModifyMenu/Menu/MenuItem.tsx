

import { IMenuItem } from '../../../../interfaces/IMenuItem'
import classes from './MenuItem.module.css'
const MenuItem = ({ item, toggle,setState }: { item: IMenuItem, toggle: () => void,setState:(a:IMenuItem)=>void }) => {
   
    const handleClick = () => {
       
        setState(item)
      
        toggle();
    }
    return (
        <li className={classes["menu-item"]} onClick={handleClick}>
            <div>
                <h3>Name</h3>
                <span>{item.name}</span>
            </div>
            <div>
                <h4>Price</h4>
                <span>{item.price}</span>
            </div>
            <div>
                <h4>
                    ingredients
                </h4>
                <span>{item.description}</span>
                </div>
        </li>
    )
}

export default MenuItem

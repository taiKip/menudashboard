import React from 'react'
import { IFoodItem } from '../../../../interfaces/IFoodItem'

const Item = ({item}:{item:IFoodItem}) => {
    return (
        <li>
            <span>
                {item.name}
            </span>
            <span>
                {item.quantiy}
            </span>
            <span>
                
            </span>
        </li>
    )
}

export default Item

import React from 'react'
import { orderStatusType } from '../../../../../Types/orderStatusType'
import classes from './Button.module.css'
const Button = ({ children, click, status }: { children: string, click: () => void, status: orderStatusType }) => {
    let styles = `${classes.button} ${(status==="prep")&&classes.ready}`
    return (
        <button className={styles} onClick={click}>
            {children}
        </button>
    )
}

export default Button

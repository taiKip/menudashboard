import React, { ReactNode } from 'react'
import classes from './ModifyModal.module.css'
const ModifyModal = ({children,click}:{children:ReactNode,click:()=>void}) => {
    return (
        <>
        <div className={classes.backdrop} onClick={click}>
            
            </div>
            <div className={classes.modal}>
               {children}
            </div>
            </>
    )
}

export default ModifyModal

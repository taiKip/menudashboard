import  { ReactNode } from 'react'
import ReactDom from 'react-dom'
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

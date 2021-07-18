import {useEffect} from 'react'
import useFetch from '../../../hooks/useFetch'
import classes from './ModifyMenu.module.css'
import firebase from '../../../data/firebase'
import { IMenuItem } from '../../../interfaces/IMenuItem'
import { useState } from 'react'
const ModifyMenu = () => {
    const [menu,setMenu] = useState<IMenuItem[]>([])
    const db = firebase.firestore()
    useEffect(() => {
      let array:IMenuItem[]=[]
     db.collection('meals').get().then(snapshot => {
          snapshot.docs.forEach(doc => {
              array.push({
                  id:doc.id,
                  name: doc.data().name,
                  description: doc.data().description,
                  image: doc.data().image,
                  price:doc.data().price
             })
          })
         setMenu(array)
     })
     
  }, [])
    return (
        <div className={classes.menu}>
            <div className={classes.modify}>
                <h1>Modify Menu Item</h1>
                <div>
                    <label htmlFor="search">Search</label>
                    <input/>
                </div>
                <h2>or </h2>
                <div>
                    <label htmlFor="menu">Menu</label>
                    <select id="menu">
                        {menu && menu.map(item => <option value={item.id} key={item.id}>{item.name}</option>)}
                    </select>
                </div>
            </div>
            <div className={classes.add}>
            <div>
                <h1>Add New Menu Item</h1>
            </div>
            <form>
                <div>
                    <label htmlFor="name">name</label>
                    <input id="name" type="text"/>
                </div>
                <div>
                    <label htmlFor="description">description</label>
                        <textarea id="description" rows={4} spellCheck={true}/>
                </div>
                <div>
                    <label htmlFor="price">price</label>
                    <input id="price" type="number"/>
                </div>
               
                </form>
            </div>
           
        </div>
       
    )
}

export default ModifyMenu

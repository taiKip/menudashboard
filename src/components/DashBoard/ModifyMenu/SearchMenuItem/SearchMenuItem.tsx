import {useState,useEffect} from 'react'
import { IMenuItem } from '../../../../interfaces/IMenuItem'
import classes from './SearchMenuItem.module.css'
import firebase from '../../../../data/firebase'
import { useContext } from 'react'
import { SearchContext } from '../../../../contexts/SearchContext'
import { ChangeEventHandler } from 'react'
import { MenuContext } from '../../../../contexts/MenuContext'
const SearchMenuItem = () => {
    const { setSearchItem, searchItem } = useContext(SearchContext)
    const {dispatch } =useContext(MenuContext)
    const [menu, setMenu] = useState<IMenuItem[]>([])
    const db = firebase.firestore()
    useEffect(() => {
        let array: IMenuItem[] = []
        db.collection('meals').orderBy("name", "asc").get().then(snapshot => {
            snapshot.docs.forEach(doc => {
                array.push({
                    id: doc.id,
                    name: doc.data().name,
                    description: doc.data().description,
                    image: doc.data().image,
                    price: doc.data().price
                })
            })
            setMenu(array)
        })

    }, [])
    useEffect(() => {
        if (menu.length === 0) {
            return
        }
        dispatch({ type: "initialize", payload: menu })
    },[menu])
      
    
    const handleSearch: ChangeEventHandler<HTMLInputElement> = (event) => {
        setSearchItem(event.target.value)
    }
    const handleSelect: ChangeEventHandler<HTMLSelectElement> = (event) => {
        setSearchItem(event.target.value)
    }
    return (
        <div className={classes.modify}>
            
            <h1>Modify Menu Item</h1>
            <div>
               
                <label htmlFor="search">Search</label>
                <input type="text" spellCheck={true} required value={searchItem} onChange={handleSearch}/>
         
            </div>
            <h2>or </h2>
            <div>
                <label htmlFor="menu">Menu</label>
                <select id="menu" onChange={handleSelect}>
                    {menu && menu.map(item => <option value={item.name} key={item.id}>{item.name}</option>)}
                </select>
            </div>
        </div>
    )
}

export default SearchMenuItem

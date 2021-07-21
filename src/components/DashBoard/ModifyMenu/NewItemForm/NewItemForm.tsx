import { useContext } from "react";
import { ChangeEventHandler, FormEventHandler, useState } from "react";
import { SearchContext } from "../../../../contexts/SearchContext";
import firebase from '../../../../data/firebase'
import classes from "./NewItemForm.module.css";
const NewItemForm = ({ newName, newDesc, newPrice, type, id, toggle }: { newName?: string, newDesc?: string, newPrice?: string, type: "add" | "modify", id?: string, toggle: () => void }) => {
  const {setSearchItem} = useContext(SearchContext) //reset search 
    const [name, setName] = useState(newName||'')
    const [description, setDescription] = useState(newDesc||'')
  const [price, setPrice] = useState(newPrice || '')
  
  const [error, setError] = useState<string | null>(null)
  const [success,setSucces] = useState<string | null>(null)


    const db = firebase.firestore()
    const handleName:ChangeEventHandler<HTMLInputElement> = (event) => {
        setName(event.target.value)
    }
    const handleDescription: ChangeEventHandler<HTMLTextAreaElement> = (event) => {
setDescription(event.target.value)
    }
    const handlePrice: ChangeEventHandler<HTMLInputElement> = (event) => {
setPrice(event.target.value)
    }
  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault()
      
     const priceFormat = price && +price
    const newMenuItem = {
      name: name,
      image: "https://burgerapp-photo-bucket.s3.eu-north-1.amazonaws.com/burger_image.png",
      price: priceFormat,
      description: description
    }
    if (type === "add") {
      db.collection('meals').add(newMenuItem).then(() => {
        setSucces("Item added Succesfully")
      }).catch(error => {
        setSucces(null)
        setError("Item could not be added "+error)
      })
      setPrice("");
      setDescription("");
      setName("");
    }
    if (type === "modify") {
      db.collection('meals').doc(id).update(newMenuItem).then(() => {
        setSucces("Item updated")
      }).catch(error => {
        setError("Item could not be updated:"+error)
      })
      setSearchItem('')
  setTimeout(toggle,2000)
    
    }
   
  }
  const handleDelete = () => {
    db.collection('meals').doc(id).delete().then(() => {
      setSucces("Item Succesfully Deleted")
      setError(null)
    }).catch(error => {
      setError("Error in deleting the document:"+error)
    })
  }
  
  return (
    <div className={classes.add}>
      {(type === "modify") ? <h1>Modify Item</h1> : <h1>Add New Menu Item</h1>}
      {success && <h3 style={{color:"greenyellow"}}>{success}</h3>}
      {error && <h3 style={{color:"red"}}>{error}</h3>}
      <form className={classes.form} onSubmit={handleSubmit}>
        <div>
          <label htmlFor={type+"name"}>name</label>
          <input id={type + "name"} type="text" value={name} onChange={handleName} required/>
        </div>
        <div>
          <label htmlFor={type + "description"}>description</label>
          <textarea id={type + "description"} rows={5} spellCheck={true} value={description} onChange={handleDescription}/>
        </div>
        <div>
          <label htmlFor={type + "price"}>price</label>
          <input id={type + "price"} type="number" onChange={handlePrice} value={price} required/>
        </div>
        <div className ={classes.controls}> 
        <button type="submit" className={classes.button} disabled={!name || !description || !price}>{(type === "modify") ? "Update" : "Add"}</button>
          {(type === "modify") && <button className={classes.button} onClick={handleDelete} >Delete</button>}
        </div>
      </form>
    </div>
  );
};

export default NewItemForm;

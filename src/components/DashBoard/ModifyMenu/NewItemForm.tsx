import React from 'react'

const NewItemForm = () => {
    return (
        <>
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
            </div >
        </>
    )
}

export default NewItemForm

import React from 'react'
import { useState,useEffect } from 'react'
import { IOrder } from '../interfaces/IOrder'
import firebase from '../data/firebase'

const useFetch = (collection:string) => {
    const [orders, setNewOrders] = useState<IOrder[]>([])
    const [loading, setLoading] = useState(false);
    const [error,setError] = useState<null|string>(null)
    const db = firebase.firestore();
    useEffect(() => {
       
      var unsubscribe=  db.collection(collection).orderBy("date", "desc").onSnapshot(snapshot => {
          setLoading(true)
          
          let orders: IOrder[] = []
          
            if (snapshot.empty) {
                setLoading(false)
                return
            }
            snapshot.forEach(doc => {
                orders.push({
                    id: doc.id,
                    orderedItems: doc.data().orderedItems,
                    status: doc.data().status,
                    user: doc.data().user,
                    date: doc.data().date.toDate() //typescript doesnt know anything about firestore timestamps
                })
            })
            setLoading(false)
            setNewOrders(orders)
      }, (error) => {
         setError(error.message)
        })
        //stop listening to changes
        return ()=>unsubscribe()
    }, [collection,db])
    return {orders,loading,error}
}

export default useFetch

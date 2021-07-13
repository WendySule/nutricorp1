import {fb}from '../environments/firebase-config'

import 'firebase/firestore'

export const getProducts = (cb) =>{
    fb.firestore().collection('product')
    .onSnapshot((querySnapshot)=>{
        const prod = []
         querySnapshot.docs.forEach((doc)=>{
            prod.push({
                ...doc.data()
            })
         })
        cb(prod)
    })
    
}


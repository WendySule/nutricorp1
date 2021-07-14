import {fb}from '../environments/firebase-config'

import 'firebase/firestore'

export const getClients = (callback) => {
    fb.firestore().collection('client').onSnapshot((querySnapshot) => {
        const cli = [];
        querySnapshot.docs.forEach((doc) => {
            cli.push({
                ...doc.data(), 
                id: doc.id
            })
        })
        console.log(cli);
        callback(cli);
    })
} 

export const createClient = (dni, nombre, codigodezona, uidusuario) => {
    
    return fb.firestore().collection('client').add({
        dni,
        nombre,
        codigodezona,
        uidusuario
    })
}




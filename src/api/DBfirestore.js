import React, { useEffect, useState } from 'react'
import appFirebase from "../../Credenciales";
import {getFirestore, collection, addDoc, getDocs, doc, deleteDoc, getDoc, setDoc} from 'firebase/firestore';
import { Alert } from 'react-native';

const db = getFirestore(appFirebase);

const saveRegion = async(state) => {
    try{
        await addDoc(collection(db, 'regions'), {
            ...state
        })
        Alert.alert('Alerta', 'guardado con exito')

    }
    catch{
        console.error(error)
    }
}

const useSheds = (region) => {
    const [sheds, setSheds] = useState([]);

    const getSheds = async () => {
        const querySnapshot = await getDocs(collection(db, `departments/${region}/galpones`));
        //console.log(`departments/${region}/galpones`)
        const docs = [];
        querySnapshot.forEach((doc) => {
            // console.log(doc.data())
            docs.push({...doc.data(), id:doc.id})
        })
        setSheds(docs);
    }

    useEffect(() => {
        getSheds();
    }, [])

    return sheds;
}

//Get Prices
const usePrices = (region) => {
    const [prices, setPrices] = useState([]);

    const getPrices = async () => {
        const querySnapshot = await getDocs(collection(db, `departments/${region}/galpones`));
        const docs = [];
        querySnapshot.forEach((doc) => {
            docs.push({...doc.data(), id: doc.id})
        })
        setPrices(docs);
    }

    useEffect(() => {
        getPrices();
    }, [])

    return prices;
}

const apiObject = {
    saveRegion,
    useSheds,
    usePrices
}

export default apiObject;
import React, { useEffect, useState } from 'react'
import appFirebase from "../../Credenciales";
import { getFirestore, collection, addDoc, getDocs, doc, deleteDoc, getDoc, setDoc, query, where } from 'firebase/firestore';
import { Alert } from 'react-native';

const db = getFirestore(appFirebase);

//Set Shed
const setShed = async (state, region) => {
    const shedsRef = collection(db, `departments/${region}/galpones`)
    try {
        await setDoc(doc(shedsRef, state.name), {
            name: String(state.name),
            elegida_kl: Number(state.elegida_kl),
            hojeada_esp: Number(state.hojeada_esp),
            hojeada: Number(state.hojeada),
            mediana_esp: Number(state.mediana_esp),
            mediana: Number(state.mediana),
            comun: Number(state.comun),
            chimi: Number(state.chimi),
            choqueta: Number(state.choqueta),
            view: Boolean(state.view)
        })
        Alert.alert('Alerta', 'guardado con exito')

    }
    catch {
        console.error(error)
    }
}

//Get Sheds
const useSheds = (region) => {
    const [sheds, setSheds] = useState([]);

    const getSheds = async () => {
        const querySnapshot = await getDocs(collection(db, `departments/${region}/galpones`));
        const docs = [];
        querySnapshot.forEach((doc) => {
            docs.push({ ...doc.data(), id: doc.id })
        })
        setSheds(docs);
    }

    useEffect(() => {
        getSheds();
    }, [])

    return sheds;
}

const apiObject = {
    setShed,
    useSheds
}

export default apiObject;
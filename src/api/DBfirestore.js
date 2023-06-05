import React, { useEffect, useState } from 'react'
import appFirebase from "../../Credenciales";
import { getFirestore, collection, addDoc, getDocs, doc, deleteDoc, getDoc, setDoc, query, where, onSnapshot } from 'firebase/firestore';
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

//Get List Sheds
const useSheds = (region) => {
    const [sheds, setSheds] = useState([]);

    const getSheds = async () => {
        try {
            const q = collection(db, `departments/${region}/galpones`);
            onSnapshot(q, (querySnapshot) => {
                const docs = [];
                querySnapshot.forEach((doc) => {
                    docs.push({ ...doc.data(), id: doc.id });
                });
                setSheds(docs);
            });

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getSheds();
    }, [])

    return sheds;
}

//Delete Shed
const deleteShed = async (region, shed) => {
    try {
        await deleteDoc(doc(db, `departments/${region}/galpones`, `${shed}`))
        Alert.alert('Alerta', 'eliminado con exito')
    } catch (error) {
        console.log(error)
    }
}

//Get Prices of Shed
const usePrice = (region, shed) => {
    const [price, setPrice] = useState([]);

    const getPrice = async () => {
        const docRef = doc(db, `departments/${region}/galpones`, `${shed}`);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            // console.log("Document data:", docSnap.data());
            setPrice(docSnap.data())
        } else {
            console.log("No such document!");
        }
    }

    useEffect(() => {
        getPrice();
    }, [])

    return price
}

//Get Price
// const usePrice = async (region, shed) => {

//     const [price, setPrice] = useState();

//     const getPrice = async () => {
//         try {
//     onSnapshot(doc(db, `departments/${region}/galpones`, `${shed}`), (doc) => {
//     setPrice({...doc.data(), id: doc.id});
//     });
//         } catch (error) {
//             console.log(error)
//         }
//     }

//     useEffect(() => {
//         getPrice();
//     }, [])

//     return price
// }

// const useAux = () => {
//     const [auxNames, setAuxnames] = useState();

//     const getNames = async () => {
//         const q = collection(db, 'departments/adepcoca/galpones');
//         const querySnapshot = await getDocs(q);
//         const docs = [];
//         querySnapshot.forEach((doc) => {
//             docs.push(doc.id);
//         });
//         setAuxnames(docs)
//     }

//     useEffect(() => {
//         getNames();
//     }, [])

//     return auxNames;
// }

const apiObject = {
    setShed,
    useSheds,
    deleteShed,
    usePrice,
    // useAux
}

export default apiObject;
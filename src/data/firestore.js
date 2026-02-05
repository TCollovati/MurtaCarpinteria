import { initializeApp } from "firebase/app";
import {addDoc, collection, getFirestore, getDocs, getDoc, doc, query, where } from "firebase/firestore";
import Item from "../components/Item";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "murta-1a301.firebaseapp.com",
  projectId: "murta-1a301",
  storageBucket: "murta-1a301.firebasestorage.app",
  messagingSenderId: "292804444640",
  appId: import.meta.env.VITE_FIREBASE_APIKID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function getData(){
  const collectionRef = collection(db, "products");
  const productsSnapshot = await getDocs(collectionRef)
  const docs = productsSnapshot.docs;
  const dataDocs = docs.map( item => {
    return ({...item.data(), id: item.id})
  })
    return dataDocs;
}

export async function getItemData(itemID){
  const documentRef = doc (db, "products", itemID);
  const docSnapshot = await getDoc (documentRef);
  const docData = docSnapshot.data()
  const docDataWithID = {...docData, id: docSnapshot.id}
  return docDataWithID;
}

export async function getCategoryData(categoryID){
  const collectionRef = collection(db, "products");
  const q= query(collectionRef, where("category", "==", categoryID));
  const productsSnapshot = await getDocs(q);
  const docs = productsSnapshot.docs;
  const dataDocs = docs.map( item => {
    return ({...item.data(), id: item.id})
  })
    return dataDocs;
}

export async function createBuyOrder(buyOrderData){
    const collectionRef = collection (db, "orders")
    const docRef = await addDoc (collectionRef, buyOrderData); 

    alert("GRACIAS POR TU COMPRA. Orden creada con el ID: " + docRef.id);
}


export async function exportProductsToFirestore(products){
  
  // * for... of -> ok con async
  for(let item of products){
    delete item.id;
    const docRef = await addDoc( collection(db, "products"), item )     
    console.log("Doc creado:", docRef.id)
  }  
}
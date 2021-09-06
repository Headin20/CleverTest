import React, { useState, useEffect} from 'react';
import { collection, doc, getDocs, addDoc, updateDoc, deleteDoc } from '@firebase/firestore';
import {db} from '../firebase';

import style from '../style/Catalog.module.css';
import AddProduct from './AddProduct';
import CardProduct from './CardProduct';
import ModulAddForm from './ModulAddForm';

const Catalog = () => {
        
    const [products, setProduct] = useState([]);

    const donloadDate = async () => {
        const queryProduct = await getDocs(collection(db, 'products'))
        let pr = [];

        queryProduct.forEach(doc => pr.push({id: doc.id, ...doc.data()}))
        setProduct([...pr])
    }

    useEffect(() => {
        donloadDate();
    }, [])

    const creaetCard = async (newCard) => {
        //setProduct([...products, newCard])
        try{
            await addDoc(collection(db, 'products'),{
                name: newCard.name,
                description: newCard.description,
                prise: newCard.prise,
                sale: newCard.sale || null,
                date: newCard.date || null
            });           
        } catch (e){
            console.error(e);
        }
        donloadDate()
    }

    const removeCard = async (card) => {
        await deleteDoc(doc(db, "products", card.id));
        donloadDate()
    }

    const handleUpdate = (product) => {
        setCurrentCard({...product});
        setModulActive(true);
    }

    const closerModulForm = () => {
        setCurrentCard({});
        setModulActive(false)
    }

    const updateCard = async (card) => {     
        const updateInDB = doc(db, 'products', card.id)
        await updateDoc(updateInDB, {
            name: card.name,
            description: card.description,
            prise: card.prise,
            sale: card.sale,
            date: card.date
        })

        donloadDate()

        //let updateProducts = [];
        // for(let i = 0; i < products.length; i++){
        //     if(products[i].id === card.id){
        //         updateProducts.push(card);
        //         console.log(card.id)
        //     } else{
        //         updateProducts.push(products[i]);
        //         console.log(products[i].id + "----")
        //     }            
        // }

        //setProduct(updateProducts);
    }

    const[modulActive, setModulActive] = useState(false)
    const [currentCard, setCurrentCard] = useState();

    return(
        <div className={style.serv}>
            <ul>
                {                    
                    products.map(product => {
                        return (
                            <li><CardProduct removeCard={removeCard} handleUpdate={handleUpdate} setCurrentCard={setCurrentCard} setModulActive={setModulActive} product={product} key={product.id} /></li>
                        )
                    }
                )}
                <li onClick={() => setModulActive(true)}><AddProduct /></li>
            </ul>
            
            {modulActive && <ModulAddForm currentCard={currentCard} create={creaetCard} update={updateCard} active={modulActive} setActive={setModulActive} close={closerModulForm}/>}
        </div>
    );
}

export default Catalog;
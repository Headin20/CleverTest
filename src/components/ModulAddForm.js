import React, { useState } from 'react';
import style from '../style/ModulAddForm.module.css'

const ModulAddForm = ({create, active, update, currentCard, close}) => {

    const[card, setCard] = useState(
        {id: currentCard?.id, name: currentCard?.name, description: currentCard?.description, prise: currentCard?.prise, sale: currentCard?.sale, date: currentCard?.date} 
        || {id: null, name: '', description: '', prise: '', sale: '', date: ''}
        )


    const validateForm = (card) => {

        if(card.name === undefined || card.name.length < 4 || card.prise > 999999999 || card.prise === undefined ||
            (card.sale !== undefined && card.date === undefined) || (card.sale === undefined && card.date !== undefined) ||
            card.sale === "" || card.sale > 90 || card.sale < 10)
        {
            return false
        }
        return true
    }

    const addNewProduct = (e) => {
        e.preventDefault()

        if(validateForm(card)){
            const newCard = {
                ...card, id:Date.now()
            }
        
            create(newCard)           
            close()
        } else {
            console.log('error')
        }
        
    }  

    const saveCurrentProduct = (e) => {
        e.preventDefault()

        if(validateForm(card)){
            update(card)
            close()
        }  else {
            console.log('error')
        }      
    }

    return(
        <div className={active ? style.active + " " + style.modal : style.modal} onClick={() => close()}>
            <div className={style.modal__content} onClick={e => e.stopPropagation()}>
                
                <form>
                    <input  
                        value = {card.name}
                        onChange = {e => setCard({...card, name: e.target.value})}
                        placeholder="name product"
                        type="text"

                    />
                    <textarea 
                        value = {card.description}
                        onChange = {e => setCard({...card, description: e.target.value})}
                        placeholder="description product"
                        maxLength = '200'
                        type="text"
                        
                    />
                    <input
                        value = {card.prise}
                        onChange = {e => setCard({...card, prise: e.target.value})}  
                        placeholder="prise product"
                        
                        type="number"
                        
                    />
                    <input
                        value = {card.sale}
                        onChange = {e => setCard({...card, sale: e.target.value})}  
                        placeholder="sale to product"
                        type="number"
                        
                    />
                    <input
                        value = {card.date}
                        onChange = {e => setCard({...card, date: e.target.value})}  
                        type="date"
                        
                    />
                    {!card.id && <button onClick={(e) => addNewProduct(e)}>Add new product</button>}
                    {card.id && <button onClick={(e) => saveCurrentProduct(e)}>Save</button>}
                </form>

            </div>
        </div>
        
    );
}

export default ModulAddForm;
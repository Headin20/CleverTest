import React from 'react';
import style from '../style/CardProduct.module.css'
import picture from '../style/picture.jpg'


const CardProduct = ({product, removeCard, handleUpdate}) => {
    const day = new Date(product.date);

    return(
        <div className={style.card}>
            <div className={style.name}>{product.name}</div>
            <div className={style.image}>
                <img alt="" src={picture} /> 
            </div>
            <div className={style.description}>{product.description}</div>
            {product.sale && Math.round((day - Date.now()) / 86400000) > 0
            ?(<div className={style.prise}>
                <div>                   
                    <div><s>{product.prise}</s></div>
                    <div style={{fontSize: '22px'}}>{product.prise - (product.prise / 100 * product.sale)}</div>
                </div>
                <div>
                    <div>Скидка: <samp style={{fontSize: '20px', color: "red"}}>-{product.sale}%</samp></div>
                    <div>Осталось <samp style={{fontSize: '18px', color: "red"}}>{Math.round((day - Date.now()) / 86400000)}</samp> дней</div>
                </div>
            </div>)
            :(<div style={{fontSize: '26px', textAlign: 'center'}}>{product.prise}</div>)
            }
            
            <div className={style.btn}>
                <button onClick={() => removeCard(product)}>delete</button>
                <button onClick={() => handleUpdate(product)}>update</button>
            </div>
        </div>
    );
}

export default CardProduct;
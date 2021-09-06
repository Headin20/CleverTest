import React from 'react';
import style from '../style/AddProduct.module.css'

const AddProduct = () => {
    return(
        <div className={style.card}>
            <div>
                <div className={style.plus}>+</div>
                <div>Add New Product</div>
            </div>
        </div>
    );
}

export default AddProduct;
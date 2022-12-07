import style from './Card.module.scss'
import React from 'react'
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../store/cartSlice";

// eslint-disable-next-line react/prop-types
function Card(product) {
    const dispatch = useDispatch();
    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
    };
    const handleRemoveFromCart = (cartitem) => {
        dispatch(removeFromCart(cartitem));
    };
    return (
        <>

            <div className={style.itemContainer} key={product.product.key}>

                <img src={product.product.imageUrl} alt="sushka"></img>
                <div className={style.itemnameline}>
                    <span className={style.itemName}>{product.product.title}</span>

                </div>
                <div className={style.itempriceline}>
                    <span className={style.itemPrice}>{product.product.price}₽</span>
                    <span className={style.itemWeight}>{product.product.weight}гр</span>
                </div>

                {
                    product.quantity[0] ?
                        (<div className={style.buttonmenu}>
                            <button onClick={() => handleRemoveFromCart(product.quantity[0])} className={style.addButtonMinus} >-</button>

                            <button className={style.counter}> {product.quantity[0].cartQuantity}</button>

                            <button onClick={() => handleAddToCart(product.product)} className={style.addButtonPlus} >+</button>
                        </div>)

                        :
                        (<button onClick={() => handleAddToCart(product.product)} className={style.addButtontoCart} >

                            <span> + Добавить</span>
                        </button>)

                }




            </div>

        </>


    )
}
export default Card;
{/* {isItemQuant == 0 ?
     :
    (<div className='buttonmenu'>
        <button onClick={handleAddToCart} className='addButtontoCart_active' > - </button>
        <span>{isItemQuant}</span>
        <button onClick={onClickPlus} className='addButtontoCart_active' > + </button>
    </div>
    )
} */}
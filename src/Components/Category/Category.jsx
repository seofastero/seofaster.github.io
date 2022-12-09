/* eslint-disable react/prop-types */
import style from './Category.module.scss';
import React from 'react';
import { useDispatch } from 'react-redux';
import { setCategoryName } from '../../store/filterSlice';


function Category() {
  const dispatch = useDispatch();

  const categoryChange = (value) => {
    dispatch(setCategoryName(value));
  };




  return (
    <div className={style.categoryMenu}>
      <a onClick={(e) => categoryChange(e.target.innerHTML)}>Сеты</a>
      <a onClick={(e) => categoryChange(e.target.innerHTML)}>Классические</a>
      <a onClick={(e) => categoryChange(e.target.innerHTML)}>Wok</a>
      <a onClick={(e) => categoryChange(e.target.innerHTML)}>Супы</a>
      <a onClick={(e) => categoryChange(e.target.innerHTML)}>Напитки</a>
      <a onClick={(e) => categoryChange(e.target.innerHTML)}>Десерты</a>


    </div>
  )
}



export default Category

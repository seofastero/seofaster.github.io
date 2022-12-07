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
      <ul>
        <a href='#2' title='box' ><li onClick={(e) => categoryChange(e.target.innerHTML)}>Сеты</li></a>
        <a href='#2'><li onClick={(e) => categoryChange(e.target.innerHTML)}>Классические</li></a>
        <a href='#2'> <li onClick={(e) => categoryChange(e.target.innerHTML)}>Wok</li></a>
        <a href='#2'> <li onClick={(e) => categoryChange(e.target.innerHTML)}>Суши и Гунканы</li></a>
        <a href='#2'> <li onClick={(e) => categoryChange(e.target.innerHTML)}>Супы</li></a>
        <a href='#2'> <li onClick={(e) => categoryChange(e.target.innerHTML)}>Напитки</li></a>
        <a href='#2'><li onClick={(e) => categoryChange(e.target.innerHTML)}>Десерты</li></a>


      </ul>
    </div>
  )
}



export default Category

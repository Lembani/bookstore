import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const Categories = () => {
  const dispatch = useDispatch();
  const label = useSelector((state) => state.categories);

  return (
    <>
      <h2>{label}</h2>
      <button type="button" onClick={() => dispatch(checkStatus())}>Check status</button>
    </>
  );
};

export default Categories;

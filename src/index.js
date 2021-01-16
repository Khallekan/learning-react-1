import React from 'react';
import ReactDom from 'react-dom';
import Book from './Book';

import './index.css';

const books = [
  {
    id: 1,
    image:
      'https://images-na.ssl-images-amazon.com/images/I/817T4J3dzhL._AC_UL200_SR200,200_.jpg',
    name: `1984 (Signet Classics)`,
    author: `George Orwell`,
  },
  {
    id: 2,
    image: `https://images-na.ssl-images-amazon.com/images/I/910lu-HKDYL._AC_UL200_SR200,200_.jpg`,
    name: `Little Blue Truck's Valentine`,
    author: `Alice Schertle`,
  },
  {
    id: 3,
    image: `https://images-na.ssl-images-amazon.com/images/I/91Uh0bjVvTL._AC_UL200_SR200,200_.jpg`,
    name: `2021 The Legacy of Ruth Bader Ginsburg Wall…`,
    author: `Sourcebooks`,
  },
  {
    id: 4,
    image: `https://images-na.ssl-images-amazon.com/images/I/817T4J3dzhL._AC_UL200_SR200,200_.jpg`,
    name: `If Animals Get Kissed Good Night`,
    author: `Ann Whitford Paul`,
  },
  {
    id: 5,
    image: `https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg`,
    name: `I Love You To The Moon And Back`,
    author: `Amelia Hepworth`,
  },
  {
    id: 6,
    image: `https://images-na.ssl-images-amazon.com/images/I/81rXtkBC1YL._AC_UL200_SR200,200_.jpg`,
    name: `Be Here Now`,
    author: `Ram Dass`,
  },
];

const BookList = () => {
  return (
    <div className='booklist'>
      {books.map((book) => {
        return <Book key={book.id} {...book} />;
      })}
    </div>
  );
};

ReactDom.render(<BookList />, document.getElementById('root'));

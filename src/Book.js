import React from 'react'
// import './Book.css';

const Book = ({ image, name, author }) => {
  return (
    <article className='book'>
      <img src={image} alt='Book' />
      <h1>{name}</h1>
      <h4>{author}</h4>
    </article>
  )
}

export default Book

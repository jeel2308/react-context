import React, { createContext, useEffect, useReducer } from 'react';
import { bookReducer } from '../reducers/bookreducer';

export const BookContext = createContext();

const BookContextProvider = (props) => {
  // const [books, setBooks] = useState([
  //   { title: 'name of the wind', author: 'patrick rothfuss', id: 1 },
  //   {
  //     title: 'the final empire',
  //     author: 'brandon sanderson',
  //     id: 2,
  //   },
  // ]);

  const [books, dispatch] = useReducer(bookReducer, [], () => {
    const localData = localStorage.getItem('books');
    if (localData) return JSON.parse(localData);
    return [];
  });

  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books));
  }, [books]);

  return (
    <BookContext.Provider value={{ books, dispatch }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;

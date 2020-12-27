import React from 'react';
import BookForm from './componenets/BookForm';
import BookList from './componenets/BookList';
import NavBar from './componenets/NavBar';
import BookContextProvider from './contexts/BookContext';
function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <NavBar />
        <BookList />
        <BookForm />
      </BookContextProvider>
    </div>
  );
}

export default App;

import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';
import { ThemeContext } from '../contexts/ThemeContext';

// class BookList extends Component {
//   static contextType = ThemeContext;

//   render() {
//     const { isLightTheme, light, dark } = this.context;
//     const theme = isLightTheme ? light : dark;
//     return (
//       <div
//         className="book-list"
//         style={{
//           color: theme.color,
//           background: theme.bg,
//         }}
//       >
//         <ul>
//           <li style={{ background: theme.ui }}>The way of kings</li>
//           <li style={{ background: theme.ui }}>The name of the wind</li>
//           <li style={{ background: theme.ui }}>The final Empire</li>
//         </ul>
//       </div>
//     );
//   }
// }

const BookList = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const { books } = useContext(BookContext);

  const theme = isLightTheme ? light : dark;
  return (
    <div
      className="book-list"
      style={{
        color: theme.color,
        background: theme.bg,
      }}
    >
      <ul>
        {books.map(({ title, id }) => (
          <li style={{ background: theme.ui }} key={id}>
            {title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;

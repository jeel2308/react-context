import React, { createContext, Component } from 'react';

export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
  state = {
    isLightTheme: true,
    light: {
      color: '#555',
      ui: '#ddd',
      bg: '#eee',
    },
    dark: {
      color: '#eee',
      ui: '#333',
      bg: '#555',
    },
  };

  toggleTheme = () => {
    this.setState((prevState) => ({
      isLightTheme: !prevState.isLightTheme,
    }));
  };
  render() {
    return (
      <ThemeContext.Provider
        value={{ ...this.state, toggleTheme: this.toggleTheme }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

export default ThemeContextProvider;

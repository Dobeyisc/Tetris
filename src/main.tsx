import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import App from './App';
import bgImage from './image/tetrisBackground.jpg';

// eslint-disable-next-line react-refresh/only-export-components
const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: url(${bgImage}) #000;
    background-size: cover;
    background-position: center;
  }
`;

ReactDOM.render(
  <>
    <GlobalStyles />
    <App />
  </>,
  document.getElementById('root')
);
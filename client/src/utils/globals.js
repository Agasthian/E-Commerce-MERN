import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
      margin: 0;
      padding: 0;
    }

    button {
      outline: none;
      cursor: pointer;
    }

    *,
    *::before,
    *::after {
      box-sizing: inherit;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    html {
      font-size: 62.5%; //1rem = 10px
      box-sizing: border-box;
      --color-primary: ${props => props.theme.colors.main};
      --color-primary-dark: ${props => props.theme.colors.dark};
      --color-primary-light: ${props => props.theme.colors.light};
      --color-primary-lighter: ${props => props.theme.colors.lighter};
      --text-color: ${props => props.theme.colors.text};
      --text-color-dark: ${props => props.theme.colors.textdark};
      --link-color: ${props => props.theme.colors.link};
      --link-hover-button: ${props => props.theme.colors.button};
      --border-color: rgba(176, 190, 197, 0.5);
      --shadow-color: rgba(0, 0, 0, 0.1);
      --shadow-color-dark: rgba(0, 0, 0, 0.25);
      --background:${props => props.theme.colors.background};

      @media ${props => props.theme.mediaQueries.largest} {
          font-size: 57.5%;
      }

      @media ${props => props.theme.mediaQueries.large} {
          font-size: 55%;
      }
    }

    body {
      
      font-family: 'Poppins' ;
      font-weight: 400;
      line-height: 1.6;
      font-size:1.3rem;
    }
    

    form,
    input,
    textarea,
    button,
    select,
    a {
      -webkit-tap-highlight-color: rgba(0,0,0,0);
    }


    p{
      margin-bottom: 0;
    }
`;

import styled from 'styled-components';

export const Container = styled.nav`
  background: linear-gradient(150deg, #53f 15%, #05d5ff);

  > ul{
    display: flex; /*formato horizontal*/
    align-items: center;
    justify-content: center;

    padding: 0 21px;
  }
`;

export const DropDownStyles = styled.div`
  .dropdown-option{
    padding: 20px 25px;
    outline: 0; 
    color: #FFF;
    font-size: 18px;

    transition: opacity 0.2s;

    &:hover, &:focus{ /* opacidade no hover e no foco */
      opacity: 0.55;
    }
  }
`;
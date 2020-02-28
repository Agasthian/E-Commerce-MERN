import styled from 'styled-components';

export const CartDropdownWrapper = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 72px;
  right: 15%;
  z-index: 5;
`;
export const CartItems = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;
export const EmptyCart = styled.div`
  margin: 50px auto;
  font-size: 18px;
`;
export const ButtonWrapper = styled.div`
  margin-top: auto;
`;

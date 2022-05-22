import styled from "styled-components";

export const Form = styled.form`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #cecccc;
  width: ${(props) => (props.barOpened ? "30rem" : "1rem")};
  cursor: ${(props) => (props.barOpened ? "auto" : "pointer")};
  padding: 15px;
  height: 1rem;
  border-radius: 10rem;
  transition: width 300ms cubic-bezier(0.645, 0.045, 0.355, 1);
  @media(max-width:690px){
    width: ${(props) => (props.barOpened ? "20rem" : "1rem")};
    height: 1rem;
  }

`;

export const Input = styled.input`
  font-size: 14px;
  line-height: 1;
  background-color: transparent;
  width: 100%;
  margin-left: ${(props) => (props.barOpened ? "1rem" : "0rem")};
  border: none;
  color: white;
  transition: margin 300ms cubic-bezier(0.645, 0.045, 0.355, 1);

  &:focus,
  &:active {
    outline: none;
  }
  &::placeholder {
    color: white;
  }
`;

export const Button = styled.button`
  line-height: 1;
  pointer-events: ${(props) => (props.barOpened ? "auto" : "none")};
  cursor: ${(props) => (props.barOpened ? "pointer" : "none")};
  background-color: transparent;
  border: none;
  outline: none;
  color: white;
  svg{
      font-size: 25px;
      margin-left: 3px;
  }
`;

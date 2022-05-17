import styled from "styled-components";


const Container = styled.div`
    max-height: 100vh;

`
const InputWrapper = styled.div`
    width: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    border:1px solid var(--border-color);
    padding: 10px;
    @media(max-width: 600px){
        width: 100%;
    }
`
const Img = styled.img`
    width:250px;
    padding-bottom: 20px ;
    @media(max-width: 600px){
     width: 80%;
    }
`
const InputBox = styled.div`
    width: 500px;

    @media(max-width: 600px){
        width: 100%;
    }
`
const Input = styled.input`
    all:unset;
    outline: none;
    text-indent: 20px;      
    color: var(--inputing-color);
    
    font-family: var(--font-family);

    border-radius: 8px;
    border:1px solid var(--border-color);
    font-size: 16px;
    width: 100%;
    height: 36px;
    margin-bottom: 18px;
    background-color: var(--background-input-color);

   
    :focus{
        filter: brightness(95%);
    }

    ::placeholder {
        color: var(--placeholder-color);
        font-family: var(--font-family);
        font-weight: 400px;
        font-size: 16px;
    }
    @media(max-width: 900px) {
        height: 55px;

    }
   
`

const Button = styled.button`
    height: 55px;
    width: 100%;
    color: var(--inputing-color);
    background-color: var(--button-color); 
    font-family: var(--font-family);
    font-weight: 400px;
    font-size: 30px;

    text-align: center;
    border-radius: 8px;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    :hover{
        filter: brightness(95%);
    }
`
const PersonLogo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    div{
        color: var(--placeholder-color);
        font-weight: bolder;
        font-size: 20px;
        @media(max-width: 360px) {
            font-size: 12px;
        }
    }
    svg{
        width: 80px;
        height: 80px;
        color: var(--placeholder-color);
         @media(max-width: 360px) {
            width: 50px;
            height: 50px;
        }

    }
`


export { Container, InputWrapper, Img, InputBox, Input, Button, PersonLogo }
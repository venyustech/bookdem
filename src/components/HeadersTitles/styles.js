import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    display:flex;
    flex-direction: column;
    align-items:center ;
    `
const HeaderWrapper = styled.div`
    width: 80%;
    margin:8px  0;
    display:flex;
    justify-content:space-between ;

    @media(max-width: 770px){
        width: 95%;
    }
    @media(min-width: 2500px){
        font-size: 3rem;
        width: 70%;
    }
`
const HeaderTitle = styled.h1`
    font-weight: bolder;
    font-size: 2rem;
    font-family: var(--font-family);
    color: var(--font-color);
    @media(max-width: 770px){
        font-size: 30px;
        transition: width 300ms cubic-bezier(0.8, 0.8, 0.4, 1);
    }
`

const HorizontalBar = styled.div`
    width: 80%;
    height: 1px;
    background-color: var(--font-color);
    margin-bottom: 15px;
    @media(max-width: 770px){
        width: 95%;
    } 
    @media(min-width: 2500px){
        width: 70%;
    }

`

export { Container, HeaderWrapper, HorizontalBar, HeaderTitle }
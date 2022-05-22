import styled from "styled-components";

const Container = styled.div`
    display:flex;
    justify-content:center;
    align-items:center ;
    text-align:center ;
    color: var(--font-color);
    svg{
        font-size: 15px;
    }
    span{
        margin-right: 6px;
    }
    :hover{
        color:red;
    }
`
export { Container }
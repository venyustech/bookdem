import styled from "styled-components";

const Container = styled.div`
    display:flex;
    justify-content:center;
    align-items:center ;
    text-align:center ;
    color:  var(--inputing-color);
    svg{
        font-size: 15px;
    }
    span{
        margin-right: 6px;
    }
    :hover{
        color: rgba(122,0,209,1);
    }
`
export { Container }
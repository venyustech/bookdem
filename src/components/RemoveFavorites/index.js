import React from 'react';
import { TiDeleteOutline } from 'react-icons/ti';
import { Container } from './styles';

function RemoveFavorites() {
    return (
        <Container>
            <span>Remover </span><TiDeleteOutline />
        </Container>
    );
}

export default RemoveFavorites;
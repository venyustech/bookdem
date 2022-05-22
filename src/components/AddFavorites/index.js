import React from 'react';
import { FaHeart } from 'react-icons/fa';
import { Container } from './styles';

function AddFavorites() {
    return (
        <Container>
            <span>Add aos favoritos </span><FaHeart />
        </Container>
    );
}

export default AddFavorites;
import React from 'react';
import { CgEnter } from 'react-icons/cg';
import { Container } from './styles';

function JoinGroupOverlay() {
    return (
        <Container>
            <span>Participar </span><CgEnter />
        </Container>
    );
}

export default JoinGroupOverlay;
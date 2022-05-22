import React from 'react';

import { Container } from './styles';

function AddTitleOverlay({ title }) {
    return (
        <Container>
            <span>{title}</span>
        </Container>
    );
}

export default AddTitleOverlay;
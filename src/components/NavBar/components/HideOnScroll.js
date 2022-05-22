import React from 'react';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';

function HideOnScroll({ children }) {
    const trigger = useScrollTrigger();

    return (
        <Slide appear={false} direction={'down'} in={!trigger}>
            {children}
        </Slide>
    )
}


export default HideOnScroll;
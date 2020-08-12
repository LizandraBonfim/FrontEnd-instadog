import React from 'react';
import { Button } from '../styles';

function Botao({ children, ...props }) {
    return (
        <Button {...props}>
            {children}
        </Button>
    )
}

export default Botao

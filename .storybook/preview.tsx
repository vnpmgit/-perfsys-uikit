import React from 'react';

function createModalRoot() {
    if (!document.getElementById('modal-root')) {
        const modalRoot = document.createElement('div');
        modalRoot.id = 'modal-root';
        document.body.appendChild(modalRoot);
    }
}

export const decorators = [
    (Story: any) => {
        createModalRoot();
        return <Story/>;
    }
];

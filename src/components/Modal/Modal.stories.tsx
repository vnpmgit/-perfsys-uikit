import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Modal from './Modal';
import IconBadge from '../IconBadge';
import Icon from '../Icon';
import Button from '../Button';
import Alert from '../Alert';

const meta: Meta<typeof Modal> = {
    title: 'Perfsys/Modal',
    component: Modal
};
export default meta;

type Story = StoryObj<typeof Modal>;


// const modalContents = [
//     {
//         title: 'Warning',
//         message: 'This is a warning message!',
//         icon: <IconBadge color="warning" double><Icon name="warning"/></IconBadge>
//     },
//     {
//         title: 'Information',
//         message: 'This is an informative message.',
//         icon: <IconBadge color="primary" double><Icon name="info"/></IconBadge>
//     }
// ];

// export const VariousModals: Story = {
//     render: () => {
//         const [isOpen, setIsOpen] = useState(false);
//         const [selectedContent, setSelectedContent] = useState(modalContents[0]);
//
//         return (
//             <>
//                 {modalContents.map((content, index) => (
//                     <Button key={index} onClick={() => {
//                         setSelectedContent(content);
//                         setIsOpen(true);
//                     }}>
//                         Open {content.title} Modal
//                     </Button>
//                 ))}
//                 <Modal
//                     isOpen={isOpen}
//                     title={selectedContent.title}
//                     message={selectedContent.message}
//                     icon={selectedContent.icon}
//                     onClose={() => setIsOpen(false)}
//                 >
//                     <p>Some content</p>
//                 </Modal>
//             </>
//         );
//     }
// };

export const Basic: Story = {
    render: () => {
        const [isOpen, setIsOpen] = useState(false);

        return (
            <div style={{ width: '400px' }}>
                <Alert style={{ marginBottom: '24px' }} type="error"
                       alertTitle="Important"
                       description="This story is not working. Need to fix. It concerns div.#modal-root element. See .storybook/preview.tsx file."
                />

                <Button onClick={() => setIsOpen(true)}>Open</Button>
                <Modal
                    isOpen={isOpen}
                    title="title"
                    message="message"
                    icon={<IconBadge color="primary" double><Icon name="info"/></IconBadge>}
                    onClose={() => setIsOpen(false)}
                    onArrowClick={()=>alert("use to navigate somewhere")}
                >
                    <p>Some content</p>
                </Modal>
            </div>
        );
    }
};

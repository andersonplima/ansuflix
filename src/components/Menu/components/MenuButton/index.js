import styled from 'styled-components';
import Button from '../../../Button';

const MenuButton = styled(Button)`
    @media (max-width: 800px) {
        position: fixed;
        left: 0;
        bottom: 0;
        right: 0;

        background-color: var(--primary);
        color: var(--white);
        text-align: center;
        
        outline: 0;
        border: 0;
        border-radius: 0;
    }
`;

export default MenuButton;

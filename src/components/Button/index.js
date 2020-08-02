import styled from 'styled-components';

const Button = styled.button`
    border: 1px solid var(--white);
    border-radius: 4px;
    color: var(--white);
    font-size: 16px;
    font-weight: bold;
    padding: 16px 24px;
    text-decoration: none;
    transition: opacity .3s;
    background-color: var(--black);

    &:hover, 
    &:focus {
        opacity: .5
    }    
`;

export default Button;

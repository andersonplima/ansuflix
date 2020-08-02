import styled from 'styled-components';

const FormFieldContainer = styled.div`
    width: 50%;
    display: flex;
    padding-top: 10px;
    padding-bottom: 10px;
    
    @media (max-width: 800px) {
        width: 100%;
    }

`;

FormFieldContainer.Label = styled.label`
    display: flex;
    flex-direction: column;
    justify-content: stretch;
    flex: 1;
    position: relative;
    
    padding: 2px;
    padding-top: 20px;

    background-color: var(--white);
    border-radius: 5px;
    border-width: 1px;
    border-color: var(--black);
    
    textarea:not(:empty) + span, input:not([value='']) + span {
        top: 2px;
        left: 2px;
        font-size: 12px;
        color: var(--grayDark);
    }

    textarea, input {
        background-color: var(--white);
        border: 0;
        outline: 0;
        margin-left: 5px;

        font-size: 16px;

        :focus + span {
            top: 2px;
            left: 2px;
            font-size: 12px;
            color: var(--primary);
        }
    }

    input[type='color'] {
        width: 100%;
        padding: 0;
        margin: 0;
    }
`;

FormFieldContainer.Caption = styled.span`
    position: absolute;
    top: 21px;
    left: 8px;
    font-size: 16px;
    color: var(--grayDark);
    transition: top .3s, left .3s, font-size .3s, color .3s;
`;

export default FormFieldContainer;

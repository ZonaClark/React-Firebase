import styled from 'styled-components';

const Button = styled.button`
    font-family: Dosis;
    background: transparent;
    color: ${props => props.color};
    border-radius: 2px;
    border: 2px solid ${props => props.color};
    padding: 0.25em 1em;
    font-weight: 700;
    font-size: 1em;
    text-decoration: none;

    &:hover {
        cursor: pointer;
        background: white;
        color: ${props => props.primary};
    }
`;

const SignoutButton = styled(Button)`
    color: tomato;
    border-color: tomato;
`;

export {
    Button, 
    SignoutButton,
}
import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    border: none;
    padding: 0 ${props => props.theme.spacing.small};
    cursor: pointer;
    &:disabled {
        pointer-events: none;
        text-decoration: none;
        opacity: 0.5;
    }
`;


const DefaultButton = styled(StyledButton)`
    background: ${props => props.theme.colors.primary};
    height: 32px;
    width: 128px;
    color: white;
    &:hover {
        background: ${props => props.theme.colors.secondary};
    }
`;

const StyledLinkButton =  styled(StyledButton)`
    background: transparent;
    color: ${props => props.theme.colors.primary};
    &:hover {
        color: ${props => props.theme.colors.secondary};
        text-decoration: underline;
    }
`;


export enum BUTTON_TYPES {
    LINK = 'link',
    DEFAULT = 'default'
}

interface ButtonProps {
    type?: BUTTON_TYPES;
    onClick?: () => void;
    disabled?: boolean;
}

const Button: React.FC<ButtonProps> = (props) => {
    if (props?.type === BUTTON_TYPES.LINK) {
        return (
            <StyledLinkButton onClick={props?.onClick} disabled={props.disabled}>
                {props.children}
            </StyledLinkButton>
        )
    }
    return (
        <DefaultButton onClick={props?.onClick} disabled={props.disabled}>
            {props.children}
        </DefaultButton>
    );
};

export default Button;

import React from 'react';
import styled from 'styled-components'
import { fontSize, color } from '../styles/variables'

const btnSizeStyle: {[key: string]: any} = {
  large: {
    padding: '6px 15px',
    fontSize: '16px',
    height: '40px',
  },
  middle: {
    padding: '4px 12px',
    fontSize: fontSize.base,
    height: '32px',
  },
  small: {
    fontSize: '14px',
    padding: '0 7px',
    height: '24px',
  }
}

interface IBtnStyledProps {
  disabled: boolean
  size: 'small' | 'large' | 'middle'
}

const ButtonStyled = styled.button.attrs((props: IBtnStyledProps)=> ({
  disabled: props.disabled,
}))`
  cursor: pointer;
  user-select: none;
  white-space: nowrap;
  text-align: center;
  line-height: 1.5715;
  font-size: ${({ size }: IBtnStyledProps) => btnSizeStyle[size].fontSize};
  padding: ${({ size }: IBtnStyledProps) => btnSizeStyle[size].padding};
  height: ${({ size }: IBtnStyledProps) => btnSizeStyle[size].height};
  border-radius: 4px;
  border: 1px solid rgb(217, 217, 217);
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  &:active {
    border-color: ${color.active};
  }

  &[disabled] {
    background: #f5f5f5;
    border-color: #d9d9d9;
    box-shadow: none;
    color: rgba(0, 0 ,0, .25);
    cursor: not-allowed;

    &:hover,
    &:active {
      border-color: #d9d9d9;
      background: #f5f5f5;
      color: rgba(0, 0 ,0, .25);
    }
  }
`;

const DefaultButton = styled(ButtonStyled)`
  background: ${color.white};
  color: rgba(0, 0, 0, 0.85);
  box-shadow: rgba(0, 0, 0, 0.016) 0px 2px 0px;
  &:hover {
    color: ${color.hover};
    border-color: ${color.hover};
  }
`;

const GhostButton = styled(DefaultButton)`
  border-style: dashed;
`;

const PrimaryButton = styled(ButtonStyled)`
  background: ${color.primary};
  border-color: ${color.primary};
  color: ${color.white};
  &:hover {
    border-color: ${color.hover};
    background: ${color.hover};
  }
  &:active {
    background: ${color.active};
  }
`;

const LinkButton = styled(ButtonStyled)`
  color: ${color.primary};
  background: 0 0;
  border-color: transparent;
  box-shadow: none;
  &:hover {
    color: ${color.hover};
  }
  &:active {
    color: ${color.active};
    border-color: transparent;
  }

  &[disabled] {
    background: transparent;
    border-color: transparent;
    box-shadow: none;

    &:hover,
    &:active {
      border-color: transparent;
      background: transparent;
    }
  }
`

const TextButton = styled(ButtonStyled)`
  color: rgba(0, 0, 0, 0.85);
  background: 0 0;
  border-color: transparent;
  box-shadow: none;
  &:hover,
  &:active {
    color: rgba(0, 0, 0, 0.85);
    border-color: transparent;
  }

  &[disabled] {
    background: transparent;
    border-color: transparent;
    box-shadow: none;

    &:hover,
    &:active {
      border-color: transparent;
      background: transparent;
    }
  }
`

export interface IProps {
  type?: 'primary' | 'ghost' | 'dashed' | 'link' | 'text' | 'default'
  size?: 'small' | 'large' | 'middle'
  children: React.ReactNode
  disabled?: boolean
  onClick?: () => void
}

const Button: React.FC<IProps> = (props) => {
  const { children, type = 'default', disabled = false, onClick = () => {}, size = 'middle' } = props

  const RenderButton = {
    primary: PrimaryButton,
    default: DefaultButton,
    ghost: GhostButton,
    dashed: DefaultButton,
    link: LinkButton,
    text: TextButton,
  }[type]

  return <RenderButton onClick={onClick} disabled={disabled} size={size}>{children}</RenderButton>;
}

Button.defaultProps = {
  type: 'default',
  disabled: false,
  onClick: () => {},
}

export default Button

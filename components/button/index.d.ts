import { ReactNode } from 'react';

export interface ButtonProps {
  type: 'primary' | 'default' | 'ghost' | 'link' | 'text';
  size: 'lg' | 'default' | 'sm';
  children: ReactNode;
  disabled?: boolean;
}

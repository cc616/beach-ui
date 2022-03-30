export interface InputProps {
  maxLength: number;
  content: 'number' | 'string';
  type: 'default' | 'underline' | 'bold';
  disabled: boolean;
  placeHolder: string;
}

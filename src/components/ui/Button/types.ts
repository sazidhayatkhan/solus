export type ButtonVariant = 'primary' | 'outline';

export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  variant?: ButtonVariant;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

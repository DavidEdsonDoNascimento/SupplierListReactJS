import { ButtonHTMLAttributes } from 'react';
import { Icon } from '../Icon';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  iconName: 'company' | 'supplier';
  selected: boolean;
}

export const MenuButton = ({ iconName, title, selected, ...rest }: ButtonProps) => {
  return (
    <button type="button" {...(selected && { className: 'selected' })} {...rest}>
      <Icon name={iconName} color={selected ? '#FAE800' : '#FBFBFB'} />
      {title}
    </button>
  );
}
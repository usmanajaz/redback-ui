import { FC } from 'react';
import { StyledButton } from './Button.style.ts';
import { ThemeColor, ThemeElementAppearance, ThemeElementSize } from '../../types.ts';

type ButtonProps = {
	label: string;
	color?: ThemeColor;
	onClick: () => void;
	appearance?: ThemeElementAppearance;
	size?: ThemeElementSize;
}

const Button: FC<ButtonProps> = ({
	label,
	color = 'primary',
	onClick,
	appearance = 'solid',
	size = 'md'
}) => {
	return (
		<StyledButton data-testid="Button" onClick={onClick} $color={color} $appearance={appearance} $size={size}>
			{label}
		</StyledButton>
	);
};

export default Button;

import { FC } from 'react';
import { StyledButton } from './Button.style';
import { ThemeColor, ThemeElementAppearance, ThemeElementSize } from '../../types';

type ButtonProps = {
	label: string;
	color?: ThemeColor;
	onClick: () => void;
	appearance?: ThemeElementAppearance;
	size?: ThemeElementSize;
}

export const Button: FC<ButtonProps> = ({
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

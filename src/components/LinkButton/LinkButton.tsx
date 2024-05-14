import { FC } from 'react';
import { StyledLinkButton } from './LinkButton.style';
import { ThemeColor, ThemeElementAppearance, ThemeElementSize } from '../../types';

type LinkButtonProps = {
	label: string;
	color?: ThemeColor;
	href?: string;
	appearance?: ThemeElementAppearance;
	size?: ThemeElementSize;
	target?: '_blank';
}

export const LinkButton: FC<LinkButtonProps> = ({
	label,
	color = 'primary',
	href = '#',
	target = undefined,
	appearance = 'solid',
	size = 'md'
}: LinkButtonProps) => {
	return (
		<StyledLinkButton data-testid="LinkButton" href={href} target={target} $color={color} $appearance={appearance} $size={size}>
			{label}
		</StyledLinkButton>
	);
};

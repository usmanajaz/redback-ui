import { FC } from 'react';
import { StyledLabel } from './Label.style';

type LabelProps = {
	type: 'info' | 'warning' | 'success' | 'error';
	text: string;
}

const Label: FC<LabelProps> = ({ type, text }: LabelProps) => {
	return (
		<StyledLabel data-testid="Label" type={type}>
			{text}
		</StyledLabel>
	);
};

export default Label;

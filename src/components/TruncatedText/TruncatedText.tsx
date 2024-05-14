import { FC, PropsWithChildren } from 'react';
import { StyledTruncatedText } from './TruncatedText.style';

type TruncatedTextProps = {
	text: string;
	lines: number;
}

export const TruncatedText: FC<PropsWithChildren<TruncatedTextProps>> = ({ lines, text }) => {
	return (
		<StyledTruncatedText data-testid="TruncatedText" lines={lines}>
			{text}
		</StyledTruncatedText>
	);
};

import { FC, PropsWithChildren } from 'react';
import { StyledTruncatedText } from './TruncatedText.style';

type TruncatedTextProps = {
	text: string;
	lines: number;
}

const TruncatedText: FC<PropsWithChildren<TruncatedTextProps>> = ({ lines, text }) => {
	return (
		<StyledTruncatedText data-testid="TruncatedText" lines={lines}>
			{text}
		</StyledTruncatedText>
	);
};

export default TruncatedText;

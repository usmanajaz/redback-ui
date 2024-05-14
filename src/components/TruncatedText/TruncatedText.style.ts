import styled from 'styled-components';

export const StyledTruncatedText = styled.span<{lines: number}>`
	display: -webkit-box; // required for line clamping to work
	-webkit-box-orient: vertical; // required for line clamping to work
	-webkit-line-clamp: ${props => props.lines};
	overflow: hidden;
	text-overflow: ellipsis;
`;

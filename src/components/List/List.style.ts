import styled from 'styled-components';

export const StyledList = styled.span<{lines: number}>`
	display: -webkit-box;
	-webkit-line-clamp: ${props => props.lines};
	-webkit-box-orient: vertical;
	overflow: hidden;
`;

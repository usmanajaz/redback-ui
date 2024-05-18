import styled from 'styled-components';

export const StyledImageSlider = styled.div<{ size: 'small' | 'large' }>`
    .slider-container {
        position: relative;
        width: 100%;
        max-width: ${props => (props.size === 'small' ? '400px' : '800px')};
        height: ${props => (props.size === 'small' ? '250px' : '500px')};
        margin: 0 auto;
        overflow: hidden;
    }

    .slider-image {
        object-fit: cover;
        width: 100%;
        height: 100%;
        aspect-ratio: 10/6;
        display: block;
        flex-shrink: 0;
        flex-grow: 0;
    }

    .slider-button {
        all: unset;
        display: block;
        position: absolute;
        top: 0;
        bottom: 0;
        padding: 0.8rem;
        cursor: pointer;
        transition: background-color 100ms ease-in-out, transform 100ms ease; /* Added transform transition */
    }

    .slider-button:hover {
        background-color: rgba(0, 0, 0, 0.09);
    }

    .slider-button > * {
        stroke: white;
        width: 2rem;
        height: 2rem;
        transform: scale(${props => (props.size === 'small' ? '0.8' : '1')}); /* Scale based on size prop */
    }

    .slider-index-button {
        all: unset;
        display: block;
        cursor: pointer;
        width: 1rem;
        height: 1rem;
        transition: scale 100ms ease-in-out;
        transform: scale(${props => (props.size === 'small' ? '0.8' : '1')}); /* Scale based on size prop */
    }

    .slider-index-button:hover {
        scale: 1.2;
    }

    .slider-index-button > * {
        stroke: white;
        height: 100%;
        width: 100%;
    }

    .turn-horizontal {
        height: ${props => (props.size === 'small' ? '250px' : '500px')};
        transition: transform 0.5s ease;
        display: flex;
    }
`;

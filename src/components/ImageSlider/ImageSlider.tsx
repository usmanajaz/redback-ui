import { FC, useState } from 'react';
import { StyledImageSlider } from './ImageSlider.style';
import { ArrowBigLeft, ArrowBigRight, Circle, CircleDot } from 'lucide-react';




type ImageSliderProps = {
	images: string[]; // Array of image URLs
	size: 'small' | 'large'; // Define the size prop
}

const ImageSlider: FC<ImageSliderProps> = ({ images, size }:ImageSliderProps ) => {
	// State to track current image index
	const [currentImageIndex, setCurrentImageIndex] = useState(0);
	// Function to navigate to previous slide
	const goToPreviousSlide = () => {
		const newIndex = (currentImageIndex - 1 + images.length) % images.length;
		setCurrentImageIndex(newIndex);
	};
	// Function to navigate to next slide
	const goToNextSlide = () => {
		const newIndex = (currentImageIndex + 1) % images.length;
		setCurrentImageIndex(newIndex);
	};

	return (
		<StyledImageSlider data-testid="ImageSlider" size={size}>
			<div className="slider-container">
				{/* Slider container div */}
				<div className="turn-horizontal" style={{
					width: `${100 * images.length}%`, // Set the width to accommodate all images side by side
					transform: `translateX(-${currentImageIndex * (100 / images.length)}%)`, // Move the container horizontally to show the current slide
				}}>
					{/* Render images */}
					{images.map((url, index) => (
						<img key={index} src={url} alt={`Slide ${index}`} className="slider-image" style={{ width: `${100 / images.length}%` }} />
					))}
				</div>
				{/* Navigation buttons */}
				<button onClick={goToPreviousSlide} className="slider-button" style={{ left: 0 }}>
					<ArrowBigLeft />
				</button>
				<button onClick={goToNextSlide} className="slider-button" style={{ right: 0 }}>
					<ArrowBigRight />
				</button>
				{/* Index buttons */}
				<div style={{ position: 'absolute', bottom: '1.5rem', left: '50%', translate: '-50%', display: 'flex', gap: '.25rem', }}>
					{images.map((_, index) => (
						<button key={index} className="slider-index-button" onClick={() => setCurrentImageIndex(index)} > {index === currentImageIndex ? <CircleDot/> : <Circle/> } </button>
					))}
				</div>
			</div>
		</StyledImageSlider>
	);
};

export default ImageSlider;

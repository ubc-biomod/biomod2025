import React from 'react';

interface FigureProps {
    image: string;
    figureNumber: number;
    description: string;
    alt?: string;
    className?: string;
}

const Figure: React.FC<FigureProps> = ({
    image,
    figureNumber,
    description,
    alt,
    className = ''
}) => {
    return (
        <figure className={`flex flex-col items-center gap-4 my-8 ${className}`}>
            <img 
                src={image} 
                alt={alt || `Figure ${figureNumber}`}
                className="max-w-full h-auto rounded-lg shadow-lg"
            />
            <figcaption className="text-center max-w-prose">
                <span className="font-semibold">Figure {figureNumber}.</span>{' '}
                {description}
            </figcaption>
        </figure>
    );
};

export default Figure;
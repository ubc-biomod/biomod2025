interface ExampleProps {
    imageSrc: string;
    text: string;
    imageClass?: string; // Optional class for image sizing
  }
  
function ExampleBetter({ imageSrc, text, imageClass = "max-w-sm" }: ExampleProps) {
    return (
        <div className="flex items-center justify-around p-8 bg-gray-100 rounded-lg mx-32">
            <img src={imageSrc} alt="Displayed image" className={`h-auto rounded-lg shadow-md ${imageClass}`} />
            <p className="text-xl font-semibold text-gray-800">{text}</p>
        </div>
    );
}

export default ExampleBetter;
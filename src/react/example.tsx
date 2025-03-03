import dogs from "../assets/images/dogs.jpg";

export default function MyComponent() {
  return (
    <div className="flex items-center justify-around p-8 bg-gray-100 rounded-lg mx-32">
      <img src={dogs.src} alt="A dog" className="max-w-sm h-auto rounded-lg shadow-md" />
      <p className="text-xl font-semibold">These are some dogs</p>
    </div>
  );
}

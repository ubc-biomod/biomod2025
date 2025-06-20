function Card({ id, title, cardClass, children }: { id?: string; title?: string; cardClass?: string; children?: React.ReactNode }) {
  // This component is a reusable card that can display a title, content, and children.
  return (
    <div
      id={id} className={`shadow-lg rounded-lg p-4 transition duration-300 ${cardClass}`}
    >
        {title && <h2 className="text-l font-semibold mb-2">{title}</h2>}
        <div className="text-gray-700 dark:text-gray-300">
            {children}
        </div>
        
    </div>
  );
}

export default Card;
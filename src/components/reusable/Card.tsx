function Card({ title, content, className, children }: { title?: string; content?: string; className?: string; children?: React.ReactNode }) {
  // This component is a reusable card that can display a title, content, and children.
  return (
    <div
      className={`bg-white dark:bg-gray-900 shadow-lg rounded-lg p-4 transition duration-300 ${className}`}
    >
        {title && <h2 className="text-xl font-semibold mb-2">{title}</h2>}
        {content && <p className="text-gray-700 dark:text-gray-300">{content}</p>}
        {children}
    </div>
  );
}

export default Card;
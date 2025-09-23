import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default function MarkdownRenderer({ filePath }: { filePath: string }) {
    const [markdown, setMarkdown] = useState<string>('');

    useEffect(() => {
        fetch(filePath)
            .then(res => res.text())
            .then(setMarkdown)
            .catch(err => console.error('Error loading markdown:', err));
    }, [filePath]);

    return (
        <div className="max-w-full">
            <ReactMarkdown remarkPlugins={[remarkGfm]}
            components={{
                    h1: ({ node, ...props }) => (
                        <h1 className="py-4 font-bold text-3xl" {...props} />
                    ),
                    h2: ({ node, ...props }) => (
                        <h2 className="py-3 font-semibold text-2xl" {...props} />
                    ),
                    h3: ({ node, ...props }) => (
                        <h3 className="py-2 font-medium text-xl" {...props} />
                    ),
                    strong: ({ node, ...props }) => (
                        <strong className="py-1 inline-block" {...props} />
                    ),
                    img: ({ node, ...props }) => (
                        <img className="my-6 w-100" {...props} />
                    ),
                    table: ({ node, ...props }) => (
                        <table className="table-auto border border-gray-400 my-6" {...props} />
                    ),
                    th: ({ node, ...props }) => (
                        <th className="border border-gray-300 px-4 py-2 bg-gray-100 text-left" {...props} />
                    ),
                    td: ({ node, ...props }) => (
                        <td className="border border-gray-300 px-4 py-2" {...props} />
                    ),
                }}>
                {markdown}
            </ReactMarkdown>
        </div>
    );
}
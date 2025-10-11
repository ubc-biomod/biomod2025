import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';

interface TableProps {
    csvPath: string;
    tableNumber: number;
    description: string;
    className?: string;
}

const Table: React.FC<TableProps> = ({
    csvPath,
    tableNumber,
    description,
    className = ''
}) => {
    const [tableData, setTableData] = useState<Array<Array<string>>>([]);
    const [headers, setHeaders] = useState<Array<string>>([]);

    useEffect(() => {
        const fetchCSV = async () => {
            try {
                const response = await fetch(csvPath);
                const csvText = await response.text();
                
                Papa.parse(csvText, {
                    complete: (results) => {
                        if (results.data.length > 0) {
                            setHeaders(results.data[0] as string[]);
                            setTableData(results.data.slice(1) as string[][]);
                        }
                    }
                });
            } catch (error) {
                console.error('Error loading CSV:', error);
            }
        };

        fetchCSV();
    }, [csvPath]);

    return (
        <figure className={`flex flex-col items-center gap-4 my-8 ${className}`}>
            <div className="shadow-lg rounded-lg p-1">
                <table className="min-w-full table-auto border-collapse">
                    <thead className="bg-gray-100">
                        <tr>
                            {headers.map((header, index) => (
                                <th key={index} className="px-6 py-3 border text-left text-sm font-semibold text-gray-700">
                                    {header}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="bg-white">
                        {tableData.map((row, rowIndex) => (
                            <tr key={rowIndex} className="hover:bg-gray-50">
                                {row.map((cell, cellIndex) => (
                                    <td key={cellIndex} className="px-6 py-4 border text-sm text-gray-500">
                                        {cell}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <figcaption className="text-center max-w-prose">
                <span className="font-semibold">Table {tableNumber}.</span>{' '}
                {description}
            </figcaption>
        </figure>
    );
};

export default Table;
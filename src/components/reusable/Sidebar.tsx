import React from "react";

interface SidebarProps {
    sections: string[];
}

const Sidebar: React.FC<SidebarProps> = ({ sections }) => {
    return (
        <div className="hidden lg:block fixed right-0 top-0 h-screen w-48 bg-transparent p-4">
            <nav className="space-y-1 mt-25">
                {sections.map((section, index) => (
                    <a
                        key={index}
                        href={`#${section.replace(/\s+/g, '-').toLowerCase()}`}
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
                    >
                        {section}
                    </a>
                ))}
            </nav>
        </div>
    );
};

export default Sidebar;

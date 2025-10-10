import Figure from "../components/reusable/Figure";
import Card from '../components/reusable/Card'
import Table from "../components/reusable/Table";
import MarkdownRenderer from "../components/reusable/MarkdownRenderer";
import Sidebar from "../components/reusable/Sidebar";

import React, { useEffect, useState } from "react";


function ELSIPage() {
    
    const sections = [
        'ELSI',
        'Researchers',
        'Manufacturers',
        'Businesses',
        'General Public',
        'Indigenous Peoples, communities, and health advocates ' 
    ];

    const [htmlSections, setHtmlSections] = useState<Record<string, string>>({});

    
    const loadHtml = (key: string, path: string) => {
        fetch(path)
            .then((res) => res.text())
            .then((html) => {
                // if heading h1 h2 or h3 matches text in sections, add attribute id to that heading with section text
                const parser = new DOMParser();
                const doc = parser.parseFromString(html, 'text/html');
                const headings = doc.querySelectorAll('h1, h2, h3');
                for (const section of sections) {
                    const targetHeading = Array.from(headings).find(
                        (el) => el.textContent === section
                    );
                    if (targetHeading) {
                        console.log(targetHeading.textContent);
                        targetHeading.setAttribute('id', section.replace(/\s+/g, '-').toLowerCase());
                    }
                }

                setHtmlSections(prev => ({
                    ...prev,
                    [key]: new XMLSerializer().serializeToString(doc)
                }));
            })
            .catch((err) => console.error(`Failed to fetch ${key} from ${path}:`, err));
    };

    useEffect(() => {
        loadHtml('design', `/writeups/ELSI_page/NOT_SPLIT_UP_ELSIWriteUp.html`);

        // the following forloop overwrites the html writeup
        // for (let i = 0; i < 6; i++) {
        //     loadHtml('design', `/writeups/ELSI_page/ELSIWriteUp${i}.html`); 
        // }
    }, []);


    return (
        <div className="flex mb-16 overflow-x-hidden px-4">
            <Sidebar sections={sections} />
            <div className="w-full lg:mx-32 flex flex-col items-center justify-center -z-10">
                <Card id="design" cardClass='w-full lg:w-3/4'>
                    <div
                        dangerouslySetInnerHTML={{ __html: htmlSections['design'] }}
                    />
                </Card>
            </div>
        </div>
    )
}

export default ELSIPage;
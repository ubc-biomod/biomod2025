import Figure from "../components/reusable/Figure";
import Card from '../components/reusable/Card'
import Table from "../components/reusable/Table";
import MarkdownRenderer from "../components/reusable/MarkdownRenderer";
import Sidebar from "../components/reusable/Sidebar";

import React, { useEffect, useState } from "react";


function Design() {
    const sections = [
        'X-DNA Formation and Plasmid Linearization',
        'P-gel Formation',
        'PDMS Mold Formation',
        'Protein Expression & Isolation',
        'Carbonic Anhydrase Activity Assay',
        'Works Cited',
        'Appendix',
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
        // MASTER
        loadHtml('Experiments', '/writeups/Experiments_page/ExperimentsCombinedWriteUp.html');
        //SPLIT
        // loadHtml('X-DNA Formation and Plasmid Linearization', '/writeups/Experiments_page/experimentsWriteups1.html');
        // loadHtml('P-gel Formation', '/writeups/Experiments_page/experimentsWriteups2.html');
        // loadHtml('PDMS Mold Formation', '/writeups/Experiments_page/experimentsWriteups3.html');
        // loadHtml('Protein Expression & Isolation', '/writeups/Experiments_page/experimentsWriteups4.html');
        // loadHtml('Carbonic Anhydrase Activity Assay', '/writeups/Experiments_page/experimentsWriteups5.html');
        // loadHtml('Works Cited', '/writeups/Experiments_page/experimentsWriteups6.html');
        // loadHtml('Appendix', '/writeups/Experiments_page/experimentsWriteups7.html');
    }, []);


    return (
        <div className="flex mb-16 overflow-x-hidden px-4">
            <Sidebar sections={sections}/>
            <div className="w-full lg:mx-32 flex flex-col items-center justify-center -z-10">
                    <div className='w-full lg:w-3/4 mb-8'>
                        <div dangerouslySetInnerHTML={{ __html: htmlSections['Experiments'] }} />
                    </div>
                {/* {Object.values(htmlSections).map((html, index) => (
                    <div key={index} className='w-full lg:w-3/4 mb-8'>
                        <div dangerouslySetInnerHTML={{ __html: html }} />
                    </div>
                ))} */}
            </div>
        </div>
    )
}

export default Design;
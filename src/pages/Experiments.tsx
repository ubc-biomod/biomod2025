import Figure from "../components/reusable/Figure";
import Card from '../components/reusable/Card'
import Table from "../components/reusable/Table";
import MarkdownRenderer from "../components/reusable/MarkdownRenderer";
import Sidebar from "../components/reusable/Sidebar";

import React, { useEffect, useState } from "react";


function Design() {
    const sections = [
        'Introduction',
        'Background', 
        'Design Components',
        'Lysate Choice',
        'Plasmid Design',
        'P-gel Monomer Design',
        'Hydrogel Dimension',
        'Supplementary information',
        'References',];

    const [htmlSections, setHtmlSections] = useState<Record<string, string>>({});

    const loadHtml = (key: string, path: string) => {
        fetch(path)
            .then((res) => res.text())
            .then((html) => {
                setHtmlSections(prev => ({
                    ...prev,
                    [key]: html
                }));
            })
            .catch((err) => console.error(`Failed to fetch ${key} from ${path}:`, err));
    };

    useEffect(() => {
        // MASTER
        // loadHtml('Experiments', '/writeups/Experiments_page/ExperimentsCombinedWriteUp.html');
        loadHtml('X-DNA Formation and Plasmid Linearization', '/writeups/Experiments_page/experimentsWriteups1.html');
        loadHtml('P-gel Formation', '/writeups/Experiments_page/experimentsWriteups2.html');
        loadHtml('PDMS Mold Formation', '/writeups/Experiments_page/experimentsWriteups3.html');
        loadHtml('Protein Expression & Isolation', '/writeups/Experiments_page/experimentsWriteups4.html');
        loadHtml('Carbonic Anhydrase Activity Assay', '/writeups/Experiments_page/experimentsWriteups5.html');
        loadHtml('Works Cited', '/writeups/Experiments_page/experimentsWriteups6.html');
        loadHtml('Appendix', '/writeups/Experiments_page/experimentsWriteups7.html');
    }, []);


    return (
        <div className="flex mb-16 overflow-x-hidden px-4">
            <Sidebar sections={Object.keys(htmlSections)}/>
            <div className="w-full lg:mx-32 flex flex-col items-center justify-center -z-10">
                {Object.values(htmlSections).map((html, index) => (
                    <div className=''>
                        <div
                            key={index}
                            dangerouslySetInnerHTML={{ __html: html }}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Design;
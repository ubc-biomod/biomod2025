import Figure from "../components/reusable/Figure";
import Card from '../components/reusable/Card'
import Table from "../components/reusable/Table";
import MarkdownRenderer from "../components/reusable/MarkdownRenderer";
import Sidebar from "../components/reusable/Sidebar";

import React, { useEffect, useState } from "react";


function Simulations() {
    const sections = [
        'Modelling Software and Evaluation Metrics',
        'Motivation', 
        'Methods',
        'Monomer Conformation',
        'P-gel arm GC + Length',
        'Diffusion',
        'Data',
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
        loadHtml('design', '/writeups/Simulations_page/SimulationsPagewriteup.html');
    }, []);


    return (
        <div className="flex mb-16 overflow-x-hidden px-4">
            <Sidebar sections={sections} />
            <div className="w-full lg:mx-32 flex flex-col items-center justify-center -z-10">
                <Card cardClass='w-full lg:w-3/4'>
                    <div
                        dangerouslySetInnerHTML={{ __html: htmlSections['design'] }}
                    />
                </Card>
            </div>
        </div>
    )
}

export default Simulations;
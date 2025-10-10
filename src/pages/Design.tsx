import Figure from "../components/reusable/Figure";
import Card from '../components/reusable/Card'
import Table from "../components/reusable/Table";
import MarkdownRenderer from "../components/reusable/MarkdownRenderer";
import Sidebar from "../components/reusable/Sidebar";

import React, { useEffect, useState } from "react";


function Design() {
    const sections = [
        'Design Components',
        'Lysate System',
        'Plasmid Design',
        'P-gel Monomer Design',
        'Hydrogel Dimension + Mold',
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
        loadHtml('design', '/writeups/Design_page/DesignPageWriteup.html');
    }, []);


    return (
        <div className="flex mb-16 overflow-x-hidden px-4">
            <Sidebar sections={sections} />
            <div className="w-full lg:mx-32 flex flex-col items-center justify-center -z-10">
                <Card id="design" cardClass='w-full lg:w-3/4'>
                    {/* <div className="">
                        <MarkdownRenderer filePath="/writeups/DesignPage/Design Page Write-up.md" />
                    </div> */}
                    <div
                        dangerouslySetInnerHTML={{ __html: htmlSections['design'] }}
                    />
                </Card>
                {/* <Card id="future" cardClass='w-full lg:w-3/4'>
                    <div className="">
                        <MarkdownRenderer filePath="/writeups/FuturePage/Cost Technoeconomic Analysis Writeup.md" />
                    </div>
                </Card> */}
                {/* <Card id="simulations" cardClass='w-full lg:w-3/4'>
                    <div className="">
                        <MarkdownRenderer filePath="/writeups/SimulationsPage/Simulations Page writeup.md" />
                    </div>
                </Card> */}
            </div>
        </div>
    )
}

export default Design;
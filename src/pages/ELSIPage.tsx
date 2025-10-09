import Carousel from "../components/CarouselComponent";

function ELSIPage() {

    return (
        <div>
            <div className="flex justify-center m-4">
                <h1 className="text-center bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent p-4 max-w-full">
                    Ethical, Legal, and Social Issues
                </h1>
            </div>

            <div className="w-3/4 m-auto mb-4">
                <p className="text-left text-gray-700 text-lg">
                    The UBC BIOMOD 2025 project entails the novel application of the DNA hydrogel-based protein synthesis system, previously developed by Park et al. (2009), in an E. coli lysate cell-free system. The system facilitates adaptable, scalable, and rapid protein expression using gene-encoded DNA hydrogels ("P-gels"). While this technology promises important advances in high-throughput protein production for therapeutic and research purposes, it also opens the door to a host of important ethical, legal, and social implications (ELSI) that must be considered at the local, national, and international levels. We recognized 5 general groups that may be affected (researchers, manufacturers, government/businesses, the general public and Indigenous peoples).
                </p>
            </div>

            <Carousel />
        </div>

        
        // <div className="flex mb-16 overflow-x-hidden px-4">
        //     <Sidebar sections={sections} />
        //     <div className="w-full lg:mx-32 flex flex-col items-center justify-center -z-10">
        //         <Card id="design" cardClass='w-full lg:w-3/4'>
        //             {/* <div className="">
        //                 <MarkdownRenderer filePath="/writeups/DesignPage/Design Page Write-up.md" />
        //             </div> */}
        //             <div
        //                 dangerouslySetInnerHTML={{ __html: htmlSections['design'] }}
        //             />
        //         </Card>
        //         {/* <Card id="future" cardClass='w-full lg:w-3/4'>
        //             <div className="">
        //                 <MarkdownRenderer filePath="/writeups/FuturePage/Cost Technoeconomic Analysis Writeup.md" />
        //             </div>
        //         </Card> */}
        //         {/* <Card id="simulations" cardClass='w-full lg:w-3/4'>
        //             <div className="">
        //                 <MarkdownRenderer filePath="/writeups/SimulationsPage/Simulations Page writeup.md" />
        //             </div>
        //         </Card> */}
        //     </div>
        // </div>
    )
}

export default ELSIPage;
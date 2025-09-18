import Figure from "../components/reusable/Figure";
import Card from '../components/reusable/Card'
import Table from "../components/reusable/Table";


interface SidebarProps {
    sections: string[];
}

const Sidebar: React.FC<SidebarProps> = ({ sections }) => {
    return (
        <div className="hidden lg:block fixed right-0 top-0 h-screen w-48 bg-transparent p-4">
            <nav className="space-y-2 mt-30">
                {sections.map((section, index) => (
                    <a
                        key={index}
                        href={`#${section.toLowerCase()}`}
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
                    >
                        {section}
                    </a>
                ))}
            </nav>
        </div>
    );
};



function LabNotebook() {
    const sections = ['Abstract', 'Wetlab', 'Computational'];

    return (
        <div className="flex mb-16">
            <Sidebar sections={sections} />
            <div className="mx-12 lg:mx-32 flex flex-col items-center justify-center -z-10">
                <h1 className="text-4xl font-bold m-16">
                    This is the Lab Notebook.
                </h1>

                <Card id="abstract" title='Abstract' cardClass='w-full lg:w-3/4'>
                    As the second most common cancer in males, prostate cancer presents significant therapeutic challenges. Leading conventional immunotherapies, such as CAR-T-cell therapies, face obstacles in tumour site infiltration due to insufficient tumoural antigen heterogeneity and concentration. To overcome these issues with current immunotherapies, we designed the AND box, a targeted DNA nanostructure engineered to enhance T-cell mediated cancer cell elimination. Our box uses an aptamer-based lock mechanism to ensure specificity to prostate cancer cells while preventing off-target T-cell activation.
                    <br />
                    <br />
                    The box requires two aptamers to bind to overexpressed receptors on prostate cancer cells — prostate-specific membrane antigens (PSMAs) — in an AND-logic mechanism to help differentiate aberrant cells from normal prostate cells. Upon binding to both PSMAs, the box unhinges to reveal an anti-CD3 antibody, which activates T-cells through the T-cell receptor (TCR)-CD3 complex. The activated T-cells then trigger an adaptive immune response.
                    <br />
                    <br />
                    The AND box was designed in Cadnano© and demonstrated high conformational stability in CanDo©. Additionally, Haddock© simulations indicated favourable docking of the anti-CD3 antibody to the box. Computationally, our design demonstrated a high binding affinity for prostate cancer when delivered intratumorally. Cryo-EM imaging and gel electrophoresis were used to validate the formation of the box. ELISA assays were used to verify the box’s binding affinity to PSMA. To finalize the design, anti-CD3 antibody docking is mediated by histidine interactions in the box cavity. We aim to advance this design toward a future immunotherapeutic, with the potential to enhance current treatment strategies.
                </Card>
                
                <Card id="wetlab" title='Wetlab' cardClass='w-full lg:w-3/4'>
                    The wetlab notebook is a record of all the experiments, protocols, and results obtained in the laboratory. 
                    It includes details such as reagents used, experimental conditions, observations, and conclusions drawn from the experiments.
                    <Figure
                        image="public\images\mitochondria.png"
                        figureNumber={1}
                        description="this is a mitochondria, it is a powers the cell i think... idk too much im in CS 😭"
                        alt="Mitochondria"
                    />
                </Card>
                <Card id="computational" title='Computational' cardClass='w-full lg:w-3/4'>
                    The computational notebook is a record of all the computational analyses, simulations, and data processing performed. 
                    It includes code snippets, algorithms used, data visualizations, and interpretations of the results obtained from computational methods.
                    <Table
                        csvPath="src\assets\images\tables\tally_cab.csv"
                        tableNumber={1}
                        description="Look at these taxi fares! I was imported as a csv btw 😎."
                    />
                    <Table
                        csvPath="src\assets\images\tables\addresses.csv"
                        tableNumber={2}
                        description="I know where you live..."
                    />
                </Card>
            </div>
        </div>
    )
}

export default LabNotebook;
import Card from '../components/reusable/Card'

function ELSIPage() {
    return (
        <div className="mx-32 flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold m-16">
                This is the ELSI page.
            </h1>
            
            <Card title='Implications of our work' cardClass='w-1/2 text-center'>
                ELSI stands for Ethical, Legal, and Social Implications. 
                It is a term used in bioethics to describe research that 
                examines the societal impact of science and technology, 
                particularly in fields like genomics and nanotechnology. 
                In Canada, ELSI is often referred to as GE3LS (Genetics, Ethical, Economic, Environmental, Legal, Social issues). 
            </Card>
        </div>
    )
}

export default ELSIPage;
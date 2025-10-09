import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type CardData = {
    name: string;
    review: string;
    moreTextPath: string;
    image: string;
};

const data: CardData[] = [
    {
        name: "Ethical Protein Production and Application",
        review: "review1",
        moreTextPath: "/writeups/ELSI_page/ELSIWriteUp.html",
        image: "/"
    },
    {
        name: "Waste Disposal and Scalability",
        review: "review2",
        moreTextPath: "/writeups/ELSI_page/ELSIWriteUp.html",
        image: "/images/garbage.png"
    },
    {
        name: "Intellectual Property Barriers in DNA Hydrogel Innovation",
        review: "review3",
        moreTextPath: "/writeups/ELSI_page/ELSIWriteUp.html",
        image: "/"
    },
    {
        name: "Unequal Access to Hydrogel-Based Treatments/ Technology",
        review: "review4",
        moreTextPath: "/writeups/ELSI_page/ELSIWriteUp.html",
        image: "/"
    },
    {
        name: "Indigenous land rights and environmental ethics",
        review: "review5",
        moreTextPath: "/writeups/ELSI_page/ELSIWriteUp.html",
        image: "/"
    },
];

export default function Carousel() {
    const [selectedTextHtml, setSelectedTextHtml] = useState<string>("");
    const [loadedHtml, setLoadedHtml] = useState<Record<string, string>>({});
    const [currentCenterIndex, setCurrentCenterIndex] = useState<number>(0);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "0px",
        afterChange: (current: number) => {
            const centerIndex = (current + Math.floor(settings.slidesToShow / 2)) % data.length;
            setCurrentCenterIndex(centerIndex);
        },
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    centerMode: true,
                    centerPadding: "0px"
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerMode: true,
                    centerPadding: "0px"
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    centerPadding: "0px"
                }
            }
        ]
    };

    // Load HTML content from file paths
    const loadHtml = (path: string) => {
        if (loadedHtml[path]) {
            return Promise.resolve(loadedHtml[path]);
        }

        return fetch(path)
            .then((res) => res.text())
            .then((html) => {
                setLoadedHtml(prev => ({
                    ...prev,
                    [path]: html
                }));
                return html;
            })
            .catch((err) => {
                console.error(`Failed to fetch from ${path}:`, err);
                return `<p>Failed to load content from ${path}</p>`;
            });
    };

    // Load all HTML files on mount
    useEffect(() => {
        data.forEach(item => {
            loadHtml(item.moreTextPath);
        });
    }, []);

    // Update selected text when center index changes
    useEffect(() => {
        const currentPath = data[currentCenterIndex].moreTextPath;
        if (loadedHtml[currentPath]) {
            setSelectedTextHtml(loadedHtml[currentPath]);
        } else {
            loadHtml(currentPath).then(html => {
                setSelectedTextHtml(html);
            });
        }
    }, [currentCenterIndex, loadedHtml]);

    return (
        <div>
            <div className="flex justify-center m-4">
                <h1 className="text-center bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent p-4 max-w-full">
                    Ethical, Legal, and Social Issues
                </h1>
            </div>

            <div className="w-3/4 m-auto">
                <div className="mt-15 mb-20">
                    <Slider {...settings}>
                        {data.map((d, cardIndex) => (
                            <div key={cardIndex} className="px-2.5">
                                <div className="bg-[#63f1a7] text-white rounded-2xl p-4 shadow-md min-h-[150px] h-auto">
                                    <div className="h-56 rounded-t-xl bg-indigo-500 flex justify-center items-center">
                                        <img src={d.image} alt="" className="h-44 w-44" />
                                    </div>
                                    <div className="flex flex-col justify-center items-center gap-2">
                                        <p className="text-xl text-center font-semibold">{d.name}</p>
                                        <p>{d.review}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>

            {selectedTextHtml && (
                <div className="w-3/4 m-auto bg-white rounded-xl shadow-md p-4 mb-8 text-gray-700">
                    <div dangerouslySetInnerHTML={{ __html: selectedTextHtml }} />
                </div>
            )}
        </div>
    );
}
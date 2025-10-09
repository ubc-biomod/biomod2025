import { useState, useEffect, useRef } from "react";
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
        moreTextPath: "/writeups/ELSI_page/Ethical2WriteUp.html",
        image: "/images/ethics.png"
    },
    {
        name: "Waste Disposal and Scalability",
        review: "review2",
        moreTextPath: "/writeups/ELSI_page/WasteWriteUp.html",
        image: "/images/garbage.png"
    },
    {
        name: "Intellectual Property Barriers in DNA Hydrogel Innovation",
        review: "review3",
        moreTextPath: "/writeups/ELSI_page/IntellectualWriteUp.html",
        image: "/images/intellectual-property.png"
    },
    {
        name: "Unequal Access to Hydrogel-Based Treatments/ Technology",
        review: "review4",
        moreTextPath: "/writeups/ELSI_page/UnequalWriteUp.html",
        image: "/images/accessibility.png"
    },
    {
        name: "Indigenous land rights and environmental ethics",
        review: "review5",
        moreTextPath: "/writeups/ELSI_page/IndigenousWriteUp.html",
        image: "/images/indigenous.png"
    },
];

export default function Carousel() {
    const [selectedTextHtml, setSelectedTextHtml] = useState<string>("");
    const [loadedHtml, setLoadedHtml] = useState<Record<string, string>>({});
    const [currentCenterIndex, setCurrentCenterIndex] = useState<number>(0);
    const sliderRef = useRef<Slider | null>(null);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "0px",
        afterChange: (current: number) => {
            const currentSlide = document.querySelector(".slick-current");
            if (currentSlide) {
                const index = Number(currentSlide.getAttribute("data-index"));
                if (!isNaN(index)) {
                    setCurrentCenterIndex(index % data.length);
                }
            }
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

    useEffect(() => {
        data.forEach(item => {
            loadHtml(item.moreTextPath);
        });
    }, []);

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

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!sliderRef.current) return;

            const activeTag = document.activeElement?.tagName;
            if (activeTag === "INPUT" || activeTag === "TEXTAREA") return;

            if (e.key === "ArrowRight") {
                sliderRef.current.slickNext();
            } else if (e.key === "ArrowLeft") {
                sliderRef.current.slickPrev();
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    const handleSidebarClick = (index: number) => {
        if (sliderRef.current) {
            sliderRef.current.slickGoTo(index);
        }
    };

    return (
        <div>
            <div className="w-3/4 m-auto">
                <div className="mt-4 mb-20">
                    <Slider ref={sliderRef} {...settings}>
                        {data.map((d, cardIndex) => (
                            <div key={cardIndex} data-index={cardIndex} className="px-2.5 pb-2.5">
                                <div className="bg-white rounded-2xl p-4 shadow-md h-[330px] flex flex-col justify-between">
                                    <div className="h-56 rounded-t-xl bg-indigo-300 flex justify-center items-center">
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

            <div className="hidden lg:block fixed right-0 top-0 h-screen w-48 bg-transparent p-4">
                <nav className="space-y-2 mt-24">
                    {data.map((item, index) => (
                        <button
                            key={index}
                            onClick={() => handleSidebarClick(index)}
                            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
                        >
                            {item.name}
                        </button>
                    ))}
                </nav>
            </div>
        </div>
    );
}
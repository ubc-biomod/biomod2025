import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Carousel() {
    const [selectedText, setSelectedText] = useState<string>(data[0].moreText);

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
            setSelectedText(data[centerIndex].moreText);
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
                                        <p className="text-xl font-semibold">{d.name}</p>
                                        <p>{d.review}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>

            {selectedText && (
                <div className="w-3/4 m-auto bg-gray-400 rounded-xl shadow-md p-4 mb-8 text-center text-gray-700">
                    {selectedText}
                </div>
            )}
        </div>
    );
}

type CardData = {
    name: string;
    review: string;
    moreText: string;
    image: string;
};

const data: CardData[] = [
    {
        name: "test1",
        review: "review1",
        moreText: "The quick brown fox jumped over the fence.",
        image: "/"
    },
    {
        name: "test2",
        review: "review",
        moreText: "I have a 500-day Duolingo streak. 🦉",
        image: "/"
    },
    {
        name: "test3",
        review: "review3",
        moreText: "I am so overworked right now. I am so sad.",
        image: "/"
    },
    {
        name: "test4",
        review: "review4",
        moreText: "CPSC310 is the bane of my existence.",
        image: "/"
    },
    {
        name: "test5",
        review: "review5",
        moreText: "Badminton go brrrr",
        image: "/"
    },
];

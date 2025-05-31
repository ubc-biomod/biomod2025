import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Carousel() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(0);
  const [selectedText, setSelectedText] = useState<string>(data[0].moreText);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const handleToggle = (index: number) => {
        if (selectedIndex === index) {
            setSelectedIndex(null);
            setSelectedText("");
        } else {
            setSelectedIndex(index);
            setSelectedText(data[index].moreText);
        }
    };

    return (
        <div>
            <div className="flex justify-center m-4">
                <h1 className="text-center bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent p-4 max-w-full break-words">
                    Ethical, Legal, and Social Issues
                </h1>
            </div>


            <div className="w-3/4 m-auto">
                <div className="mt-15 mb-20">
                    <Slider {...settings}>
                        {data.map((d, cardIndex) => (
                            <div key={cardIndex} className="bg-white text-black rounded-2xl mx-2 p-4 shadow-md min-h-[200px] h-auto">
                                <div className="h-56 rounded-t-xl bg-indigo-500 flex justify-center items-center">
                                    <img src={d.image} alt="" className="h-44 w-44"/>
                                </div>

                                <div className="flex flex-col justify-center items-center gap-4">
                                    <p className="text-xl font-semibold">{d.name}</p>
                                    <p>{d.review}</p>

                                    <button
                                        className="bg-indigo-500 text-white text-lg px-6 py-1 rounded-2xl"
                                        onClick={() => handleToggle(cardIndex)}
                                    >
                                        {selectedIndex === cardIndex ? "Show Less" : "Read More"}
                                    </button>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>

            {selectedText && (
                <div className="w-3/4 m-auto bg-white rounded-xl shadow-md p-4 text-center text-gray-700">
                    {selectedText}
                </div>
            )}
        </div>
    );
}

// Sample data

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
        image: "/pokemon/001.png"
    },
    {
        name: "test2",
        review: "review",
        moreText: "I have a 500-day Duolingo streak. 🦉",
        image: "/pokemon/002.png"
    },
    {
        name: "test3",
        review: "review3",
        moreText: "I am so overworked right now. I am so sad.",
        image: "/pokemon/003.png"
    },
];

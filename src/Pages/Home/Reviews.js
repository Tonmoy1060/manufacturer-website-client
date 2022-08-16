import React from "react";
import { FaPollH } from "react-icons/fa";
import { IconContext } from "react-icons";
import people from "../../assets/banner/banner1.jpg";
import Review from "./Review";
import { useState } from "react";
import { useEffect } from "react";

const Reviews = () => {
    // const reviews = [
    //     {
    //         "name": "Ariana",
    //         "review": "The whole things I got from here was very usefull. I am very comforable while using them",
    //         "location": "Dhaka",
    //         "img": "https://img.freepik.com/premium-photo/handsome-young-businessman-shirt-eyeglasses_85574-6228.jpg?w=740"
    //     },
    //     {
    //         "name": "Roben",
    //         "review": "The whole things I got from here was very usefull. I am very comforable while using them",
    //         "location": "Mumbay",
    //         "img": "https://img.freepik.com/premium-photo/stylist-used-comb-scissors-clipper_85574-14854.jpg?w=996"
    //     },
    //     {
    //         "name": "Jack Spiro",
    //         "review": "The whole things I got from here was very usefull. I am very comforable while using them",
    //         "location": "Daruchini",
    //         "img": "https://img.freepik.com/premium-photo/man-holds-paint-brush-his-hand_85574-14559.jpg?w=996"
    //     }
    // ]

    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch("https://nameless-dusk-38073.herokuapp.com/reviews")
        .then(res => res.json())
        .then(data => setReviews(data))
    },[]);

    return (
        <section className="my-28">
            <div className="flex justify-between">
                <div>
                    <h4 className="text-2xl font-bold text-accent">Reviews</h4>
                    <h2 className="text-3xl">People say About us</h2>
                </div>
                <IconContext.Provider value={{ style: { fontSize: "120px", color: "#a991f7" } }}>
                    <div>
                        <FaPollH />
                    </div>
                </IconContext.Provider>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    reviews.map(review => <Review
                    key={review._id}
                    review={review}
                    ></Review>)
                }
            </div>
        </section>
    );
};

export default Reviews;
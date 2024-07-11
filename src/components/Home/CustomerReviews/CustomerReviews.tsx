import React, { Fragment } from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

interface Author {
  fullName: string;
  picture: string;
  designation: string;
}

interface Testimonial {
  author: Author;
  rating: number;
  description: string;
}

interface RatingProps {
  rating: number;
  showLabel?: boolean;
  className?: string;
}

interface TestimonialItemProps {
  testimonial: Testimonial;
}

const testimonialList: Testimonial[] = [
  {
    author: {
      fullName: "Rohan Ahmed",
      picture: "https://cdn.easyfrontend.com/pictures/users/user2.jpg",
      designation: "",
    },
    rating: 3.5,
    description:
      "This is a factor in the economy of a nation, and the administration takes the major choices.This is a factor of a nation.",
  },
  {
    author: {
      fullName: "Raima Sen",
      picture: "https://cdn.easyfrontend.com/pictures/users/user3.jpg",
      designation: "Business Head",
    },
    rating: 3.8,
    description:
      "Assumenda non repellendus distinctio nihil dicta sapiente, quibusdam maiores, illum at, aliquid blanditiis qui.",
  },
  {
    author: {
      fullName: "Arjun Kapur",
      picture: "https://cdn.easyfrontend.com/pictures/users/user27.jpg",
      designation: "UI Design",
    },
    rating: 4.5,
    description:
      "When it comes to booking a holiday, we know everyone likes something different - so we've designed our getaways with you in mind.",
  },
];

const Rating: React.FC<RatingProps> = ({
  rating,
  showLabel,
  className,
  ...rest
}) => (
  <p className={`mb-6 ${className}`} {...rest}>
    <span className="flex">
      {[...Array(5)].map((_, i) => {
        const index = i + 1;
        let content = <></>;
        if (index <= Math.floor(rating))
          content = <FaStar className="text-yellow-500" />;
        else if (rating > i && rating < index + 1)
          content = <FaStarHalfAlt className="text-yellow-500" />;
        else if (index > rating)
          content = <FaStar className="text-yellow-200 dark:text-opacity-20" />;

        return <Fragment key={i}>{content}</Fragment>;
      })}
    </span>
    {showLabel && <span>{rating.toFixed(1)}</span>}
  </p>
);

const TestimonialItem: React.FC<TestimonialItemProps> = ({ testimonial }) => (
  <div className="bg-white shadow-xl  rounded-2xl transition duration-300 h-full p-6">
    <div className="mt-4">
      <div className="flex items-center">
        <div className="mr-2 py-3">
          <img
            src={testimonial.author.picture}
            alt={testimonial.author.fullName}
            className="max-w-full h-auto rounded-full border"
            width="47"
          />
        </div>
        <div className="">
          <h4 className="text-xl font-medium">{testimonial.author.fullName}</h4>
        </div>
      </div>

      <p className="opacity-50 mb-6">{testimonial.description}</p>
      <Rating rating={testimonial.rating} showLabel={false} />
    </div>
  </div>
);

const CustomerReviews: React.FC = () => {
  return (
    <section className="ezy__testimonial1 light py-14 md:py-18 bg-white  text-zinc-900 ">
      <div className="container px-14 mx-auto">
        <div className="flex justify-center md:mb-2">
          <div className="sm:max-w-lg lg:max-w-2xl text-center">
            <h2 className="font-bold text-3xl mb-2">
              WHAT OUR CUSTOMERS SAY{" "}
              <span className="text-headerText">ABOUT US!</span>
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-6 gap-6 pt-4 lg:pt-2">
          {testimonialList.map((testimonial, i) => (
            <div className="col-span-6 md:col-span-3 lg:col-span-2" key={i}>
              <TestimonialItem testimonial={testimonial} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;

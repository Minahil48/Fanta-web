import React from "react";
import { UpdateFollower } from "react-mouse-follower";

const BlogsData = [
  {
    id: 1,
    title: "Fanta Fever: Why This Fizzy Drink Rules the Summers",
    desc: "Explore how Fanta became the ultimate summer drink with its fruity flavors, refreshing fizz, and colorful vibe that makes every sip feel like a celebration.",
    link: "#",
    img: "/Blogs/1.jpg",
  },
  {
    id: 2,
    title: "Coke Zero vs. Classic Coke: Which One Wins Your Taste Buds?",
    desc: "A deep dive into the timeless debate, does Coke Zero really taste like the original? We’ll compare flavor, health benefits, and why fans are divided",
    link: "#",
    img: "/Blogs/2.jpg",
  },
  {
    id: 3,
    title: "The Magic of Coca-Cola: A History of the World’s Most Iconic Drink",
    desc: "From its secret formula to its global presence, discover how Coca-Cola went from a pharmacy tonic to the most recognized beverage in the world.",
    link: "#",
    img: "/Blogs/3.jpg",
  },
  {
    id: 4,
    title: "Fizz, Fun & Flavor: Cola Trends You Can’t Miss in 2025",
    desc: "Check out the latest cola trends, from new flavors to sustainable packaging, and how brands like Coke and Fanta are reshaping the soft drink game.",
    link: "#",
    img: "/Blogs/4.jpg",
  },
];

const Blogs = () => {
  return (
    <section className="bg-gray-50">
      <div className="container py-14">
        <h1 className="text-3xl font-bold text-center pb-8">Blogs</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {BlogsData.map((item) => (
            <UpdateFollower
              key={item.id}
              mouseOptions={{
                backgroundColor: "black",
                zIndex: 999,
                followSpeed: 1.5,
                text: "read",
                textFontSize: "3px",
                scale: 5,
              }}
            >
              <div
                className="flex flex-col items-center justify-center gap-6 p-2 md:p-5
               max-w-[300px] mx-auto shadow-lg rounded-md bg-white hover:-translate-y-2 duration-300"
              >
                <img src={item.img} alt={`Blog ${item.id}`} />
                <div className="space-y-2">
                  <h1 className="text-xl font-bold cursor-pointer hover:underline line-clamp-2">
                    {item.title}
                  </h1>
                  <p className="line-clamp-2">{item.desc}</p>
                </div>
              </div>
            </UpdateFollower>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;

import { v4 as uuidv4 } from "uuid";

// components
import { Container } from "../../../components/defaults/Container";
import { ButtonBlue } from "./buttons/ButtonBlue";
import { ButtonWhite } from "./buttons/ButtonWhite";
import { BlogCard } from "./cards/BlogCard";

// assets
import blog_1 from "../assets/blog/blog_1.png";
import blog_2 from "../assets/blog/blog_2.png";

export const Blog = () => {
  const blogs = [
    {
      img: blog_1,
      title: "8 best vacuum cleaners to clean any mess for your home in 2022",
      body: "Lorem ipsum dolor sit amet conse ctetur adip iscing elit justo quis odio sit sit ac port titor sit males.",
      date: "Jan 28, 2022",
      url: "#",
    },
    {
      img: blog_2,
      title: "How to properly disinfect your phone and other electronics",
      body: "Lorem ipsum dolor sit amet conse ctetur adip iscing elit justo quis odio sit sit ac port titor sit males.",
      date: "Feb 1, 2022",
      url: "#",
    },
  ];

  return (
    <section className="pt-[240px] mt-[200px] border-t-1 border-x-light-gray">
      <Container>
        <div>
          <div className="flex justify-between max-lg:flex-col max-lg:items-center max-lg:justify-start">
            <div className="max-lg:text-center">
              <h1 className="text-5xl font-bold text-x-black max-xl:text-3xl">
                Articles & resources
              </h1>
              <p className="text-x-gray text-[1.3rem] max-w-[464px] mt-[9px] max-xl:text-base">
                Lobortis mattis odio leo eget mauris met aliquet semper molestie
                sollicitudin congue massa mauris lectus.
              </p>
            </div>
            <div className="flex mt-6 gap-7 max-md:flex-col">
              <ButtonBlue classes="text-[1.125rem] text-nowrap" />
              <ButtonWhite classes="font-bold h-[71px] text-nowrap" />
            </div>
          </div>
          <div className="flex items-center justify-center gap-7 mt-2.5 max-lg:flex-col max-lg:mt-5 max-lg:gap-5">
            {blogs.map((blog) => (
              <a href={blog.url} key={uuidv4()}>
                <BlogCard
                  img={blog.img}
                  title={blog.title}
                  body={blog.body}
                  date={blog.date}
                />
              </a>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

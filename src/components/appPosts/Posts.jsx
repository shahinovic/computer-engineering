import { Button, Container } from "react-bootstrap";
import Select from "./Select";
import "./posts.css";
import PostCard from "./PostCard";
import postImg1 from "../../images/post-1.png";
import postImg2 from "../../images/post-2.png";
import postImg3 from "../../images/post-3.png";
import authorImg from "../../images/author.png";
import authorImg2 from "../../images/author2.png";
import authorImg3 from "../../images/author3.png";
import authorImg4 from "../../images/author4.png";
import { BsCalendar2DateFill as Date3 } from "react-icons/bs";
import { IoLocationOutline as Location3 } from "react-icons/io5";
import { BsBag as Bag4 } from "react-icons/bs";
import UserInfo from "../userInfo/UserInfo";
import { useEffect, useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { HiOutlineUserGroup } from "react-icons/hi";

const Posts = ({ show, setShow, haveAcc }) => {
  const [activeItem, setActiveItem] = useState(0);
  const [pc, setPc] = useState(window.innerWidth > 750);
  console.log(haveAcc);
  useEffect(() => {
    const handleResize = () => {
      setPc(window.innerWidth > 750);
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const posts = [
    {
      id: 1,
      category: "✍️ Article",
      image: postImg1,
      title: "What if famous brands had regular fonts?",
      content: "I’ve worked in UX for the better part of a decade. F..",
      actions: false,
      author: {
        name: "Sarthak Kamra",
        avatar: authorImg,
        views: "1.4k views",
      },
    },
    {
      id: 2,
      category: "🔬️ Education",
      image: postImg2,
      title:
        "Tax Benefits for Investment under National Pension Scheme launched by Government",
      content: "I’ve worked in UX for the better part of a decade. F..",
      actions: false,
      author: {
        name: "Sarah West",
        avatar: authorImg2,
        views: "4.8k views",
      },
    },
    {
      id: 3,
      category: "🗓️ Meetup",
      image: postImg3,
      title: "Finance & Investment Elite Social Mixer @Lujiazui",

      actions: true,
      actionsInfo: {
        dateIcon: Date3,
        locationIcon: Location3,
        date: "Fri, 12 Oct, 2018",
        location: "Ahmedabad, India",
        btnText: "Visit Website",
        btnColor: "outline-danger",
      },
      author: {
        name: "Ronal Jones",
        avatar: authorImg3,
        views: "800 views",
      },
    },
    {
      id: 4,
      category: "💼️ Job",
      title: "Software Developer - II",

      actions: true,
      actionsInfo: {
        dateIcon: Bag4,
        locationIcon: Location3,
        date: "Innovaccer Analytic...",
        location: "Noida, India",
        btnText: "Apply on Timesjobs",
        btnColor: "outline-success",
      },
      author: {
        name: "Joseph Gray",
        avatar: authorImg4,
        views: "1.7k views",
      },
    },
  ];

  const items = ["Posts(368)", "Article", "Event", "Education", "Job"];

  const handelItem = (index) => {
    setActiveItem(index);
  };

  const filterPosts = posts.filter((post) => {
    if (items[activeItem] === "Posts(368)") {
      return true;
    }
    return post.category.split(" ")[1] === items[activeItem];
  });

  const postCards = filterPosts.map((post) => (
    <PostCard key={post.id} data={post} />
  ));
  return (
    <div className="posts py-4">
      <Container>
        <div className="header p-2 border-bottom ">
          {pc ? (
            <div className="categories d-flex align-items-center">
              {items.map((item, index) => (
                <span
                  key={item}
                  onClick={() => handelItem(index)}
                  className={activeItem === index ? "item active" : "item"}
                >
                  {item}
                </span>
              ))}
            </div>
          ) : (
            <span className="item">Posts(368)</span>
          )}

          {pc ? (
            <div className="user-actions d-flex gap-2">
              <Button variant="secondary" className="d-flex align-items-center">
                Write a Post <IoMdArrowDropdown className="ms-2" />
              </Button>
              <Button
                variant={`${haveAcc ? "outline-secondary" : "primary"}`}
                onClick={() => setShow(!show)}
                className="d-flex align-items-center"
              >
                <HiOutlineUserGroup className="me-2" />{" "}
                {haveAcc ? " Leave Group" : " Join Group"}
              </Button>
            </div>
          ) : (
            <Select />
          )}
        </div>
        <div className="d-flex justify-content-between  ">
          <div className="posts-cards me-md-5">{postCards}</div>
          {pc && <UserInfo haveAcc={haveAcc} />}
        </div>
      </Container>
    </div>
  );
};

export default Posts;

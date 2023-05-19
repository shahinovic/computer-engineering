import { AiFillLike } from "react-icons/ai";
import Leisure from "../../images/Leisure.png";
import Activism from "../../images/Activism.png";
import MBA from "../../images/MBA.png";
import Philosophy from "../../images/Philosophy.png";
import { Button } from "react-bootstrap";
import { useState } from "react";

const RecommendedGroups = () => {
  const myGroups = [
    {
      id: 1,
      name: "Leisure",
      img: Leisure,
      follow: false,
    },
    {
      id: 2,
      name: "Activism",
      img: Activism,
      follow: false,
    },
    {
      id: 3,
      name: "MBA",
      img: MBA,
      follow: false,
    },
    {
      id: 4,
      name: "Philosophy",
      img: Philosophy,
      follow: false,
    },
  ];

  const [groups, setGroups] = useState(myGroups);

  const handleFollowClick = (index) => {
    const updatedGroups = [...groups];
    updatedGroups[index].follow = !updatedGroups[index].follow;
    setGroups(updatedGroups);
  };
  return (
    <div className="recommended-groups mt-3">
      <span className="h5 text-uppercase ">
        <AiFillLike /> Recommended Groups
      </span>
      <div className="recommended-groups-container">
        {groups.map((group, index) => (
          <div
            className="recommended-groups-card d-flex justify-content-between my-3"
            key={group.id}
          >
            <div className="d-flex align-items-center gap-2">
              <img src={group.img} alt="" />
              <span>{group.name}</span>
            </div>
            <Button
              onClick={() => handleFollowClick(index)}
              className={`follow ${group.follow ? "active" : ""}`}
              variant="outline-light text-dark rounded-pill"
            >
              {/* Follow */}
              {group.follow ? "followed" : "follow"}
            </Button>
          </div>
        ))}
      </div>
      <div
        style={{ width: "fit-content", marginTop: "40px", cursor: "pointer" }}
        className="text-primary ms-auto"
      >
        See More...
      </div>
    </div>
  );
};

export default RecommendedGroups;

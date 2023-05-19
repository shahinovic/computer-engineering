import userimg from "../../images/author4.png";
import { MdArrowDropDown } from "react-icons/md";

const User = () => {
  return (
    <div className="user d-flex align-items-center">
      <div className="img-container me-2">
        <img src={userimg} alt="" />
      </div>
      <div className="user-name">Siddharth Goyal</div>
      <MdArrowDropDown />
    </div>
  );
};

export default User;

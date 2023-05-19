import Location from "./Location";
import RecommendedGroups from "./RecommendedGroups";
import "./userInfo.css";

const UserInfo = ({ haveAcc }) => {
  return (
    <div className="user-info">
      <Location />
      {haveAcc && <RecommendedGroups />}
    </div>
  );
};

export default UserInfo;

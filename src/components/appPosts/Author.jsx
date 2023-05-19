import authorImg from "../../images/author.png";
const Author = ({ avatar, name, views }) => {
  return (
    <div className="author-info">
      <div className="img-container rounded-pill">
        <img src={avatar} alt="author" />
      </div>
      <div className="info">
        <h3>{name}</h3>
        <p className="text-muted">{views}</p>
      </div>
    </div>
  );
};

export default Author;

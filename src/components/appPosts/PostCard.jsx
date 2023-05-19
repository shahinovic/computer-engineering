import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { BiDotsHorizontalRounded as Dots } from "react-icons/bi";
import { BsFillShareFill as Share } from "react-icons/bs";
import Author from "./Author";

function PostCard({ data }) {
  return (
    <Card className="my-3 rounded shadow bg-body">
      <Card.Img variant="top" src={data.image} />
      <Card.Body>
        <div className="category mb-2">{data.category}</div>
        <Card.Title className="d-flex justify-content-between align-items-end ">
          <span className="">{data.title}</span>
          <Dots />
        </Card.Title>
        <Card.Text className="text-muted">{data.content}</Card.Text>
        {data.actions && (
          <div className="actions">
            <div className="actions-info d-flex flex-column ">
              <div className="date-location d-flex justify-content-between  mb-3">
                <div className="date">
                  <data.actionsInfo.dateIcon />
                  <span>{data.actionsInfo.date}</span>
                </div>
                <div className="location">
                  <data.actionsInfo.locationIcon />
                  <span>{data.actionsInfo.location}</span>
                </div>
              </div>
              <Button className="mb-4" variant={data.actionsInfo.btnColor}>
                {data.actionsInfo.btnText}
              </Button>
            </div>
          </div>
        )}
        <div className="author">
          <Author
            avatar={data.author.avatar}
            name={data.author.name}
            views={data.author.views}
          />
          <Button variant="outline-dark">
            <Share /> Share
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default PostCard;

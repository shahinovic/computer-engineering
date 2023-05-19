import { Button, Container, Row } from "react-bootstrap";
import { AiOutlineArrowLeft } from "react-icons/ai";
import "./landing.css";
import logo from "../../images/logo.png";
import { BsSearch } from "react-icons/bs";
import User from "./User";

const Landing = ({ show, setShow, haveAcc }) => {
  return (
    <div className="landing py-5">
      <header className="d-none d-md-block">
        <Container>
          <div className="img-container">
            <img src={logo} alt="" />
          </div>

          <div className="search">
            <BsSearch />
            <input
              type="text"
              placeholder="Search for your favorite groups in ATG"
            />
          </div>

          <div className="sign">
            <Button
              variant="outline-light text-dark"
              className="border-0"
              onClick={() => setShow(!show)}
            >
              {haveAcc ? (
                <User />
              ) : (
                <>
                  Create account.{" "}
                  <span className="text-primary">It’s free!</span>
                </>
              )}
            </Button>
          </div>
        </Container>
      </header>

      <div className="content d-flex flex-column justify-content-between ">
        <nav className="d-flex  align-items-center justify-content-between my-3">
          <AiOutlineArrowLeft className="text-light fs-4 d-md-none" />
          <Button
            variant="outline-light"
            className="d-md-none"
            onClick={() => setShow(!show)}
          >
            {haveAcc ? "Leave Group" : "Join Group"}
          </Button>
        </nav>
        <div className="text m-md-5">
          <h1 className="text-light">Computer Engineering</h1>
          <p className="text-white opacity-75">
            142,765 Computer Engineers follow this
          </p>
        </div>
      </div>
    </div>
  );
};

export default Landing;

import { Form, Row, Col, Button, Container, Alert } from "react-bootstrap";
import "./groupActions.css";
import { BsFacebook as Facebook } from "react-icons/bs";
import { FcGoogle as Google } from "react-icons/fc";
import { AiFillCloseCircle as Close } from "react-icons/ai";
import { useEffect, useState } from "react";
import formImg from "../../images/form-img.png";

const GroupActions = ({ show, setShow, haveAcc, setHaveAcc }) => {
  const [pc, setPc] = useState(window.innerWidth > 750);

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
  return (
    <div className={`layer ${show ? "" : "d-none"} `}>
      <div
        className={`group-actions ${
          pc ? "pc" : ""
        } position-fixed rounded-3 bottom-0 h-75 bg-light py-3 ${
          show ? "" : "hide"
        }`}
      >
        <div className="converter d-flex p-3 p-md-4 mt-md-3 ">
          {pc && (
            <Alert variant="success">
              Let's learn, share & inspire each other with our passion for
              computer engineering. Sign up now 🤘🏼
            </Alert>
          )}
          <div className="my-form">
            <div className="group-actions-header d-flex justify-content-between px-3">
              <h3>{haveAcc ? "Welcome back!" : "Create Account"}</h3>
              <Close
                className={`group-actions-close fs-3 ${
                  pc ? "position-absolute " : ""
                }`}
                onClick={() => setShow(!show)}
              />
            </div>
            <Form onSubmit={(e) => e.preventDefault()}>
              <Container>
                {!haveAcc && (
                  <Row className="">
                    <Col>
                      <Form.Group controlId="firstName">
                        <Form.Control type="text" placeholder="First Name" />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group controlId="lastName">
                        <Form.Control type="text" placeholder="Last Name" />
                      </Form.Group>
                    </Col>
                  </Row>
                )}
                <Row>
                  <Form.Group controlId="email">
                    <Form.Control type="email" placeholder="Email" />
                  </Form.Group>
                </Row>
                <Row>
                  <Form.Group
                    controlId="password"
                    className={`${haveAcc ? "mb-3" : ""}`}
                  >
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>
                </Row>
                {!haveAcc && (
                  <Row className="mb-3">
                    <Form.Group controlId="confirmpassword">
                      <Form.Control
                        type="password"
                        placeholder="Confirm Password"
                      />
                    </Form.Group>
                  </Row>
                )}

                <div className="form-actions d-flex justify-content-between mb-3">
                  <Button
                    className="action-1 w-50 rounded-pill"
                    variant="primary"
                    type="submit"
                    onClick={() => setHaveAcc(!haveAcc)}
                  >
                    {haveAcc ? "Sign In" : "Create Account"}
                  </Button>
                  <Button className="action-2" variant="bg-text-dark ">
                    {haveAcc ? "or, Create Account" : "or, Sign In"}
                  </Button>
                </div>

                <div className="other-actions mb-3">
                  <Button
                    onClick={() => setHaveAcc(!haveAcc)}
                    className="facebook-btn text-dark w-100 mb-3"
                    variant="outline-secondary "
                  >
                    <Facebook />{" "}
                    {haveAcc
                      ? "Sign in with Facebook"
                      : "Sign up with Facebook"}
                  </Button>
                  <Button
                    onClick={() => setHaveAcc(!haveAcc)}
                    className="google-btn text-dark w-100"
                    variant="outline-secondary "
                  >
                    <Google />{" "}
                    {haveAcc ? "Sign in with Google" : "Sign up with Google"}
                  </Button>
                </div>
                <p className="privacy-policy m-auto text-center ">
                  {haveAcc
                    ? "Forgot Password?"
                    : "By signing up, you agree to our Terms & conditions, Privacy policy"}
                </p>
              </Container>
            </Form>
          </div>
          {pc && (
            <div className="my-img w-50">
              <img src={formImg} className="w-100" alt="" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GroupActions;

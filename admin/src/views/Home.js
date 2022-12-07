import "../App.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../store/action/actionCreator";
import { useDispatch } from "react-redux";

export default function Home() {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const handleGoToItem = () => {
    navigate({
      pathname: "/profile",
    });
  };

  let [input, setInput] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(input));
    handleGoToItem();
  };

  return (
    <div>
      <section className="py-5 homepage-bgimage">
        <div className="containerLogin" style={{ width: "600px" }}>
          <div className="h1">Happy Pet Shop</div>
          <br></br>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                value={input.email}
                onChange={handleChange}
                name="email"
                type="email"
                placeholder="Enter email"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                value={input.password}
                onChange={handleChange}
                name="password"
                type="password"
                placeholder="Password"
              />
            </Form.Group>

            <Button
              variant="dark"
              type="submit"
              onClick={() => handleGoToItem()}
            >
              Login
            </Button>
          </Form>
        </div>
      </section>
    </div>
  );
}

import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Collapse from "react-bootstrap/Collapse";
import { Container } from "react-bootstrap";
import { IoAddOutline } from "react-icons/io5";
import NavBar from "./navbar";
import { connect } from "react-redux";
import { addHabit } from "../redux/actions/action";

const style = {
  borderRadius: "50%",
  height: "90px",
  backgroundColor: "black",
  width: "90px",
  marginLeft: "40%",
  marginTop: "-3.8%",
  position: "absolute",
  marginBottom: "10px",
};

const AddTask = ({ addData }) => {
  const [open, setOpen] = useState(false);

  const now = new Date();
  const today = now.getDay();
  const getLast = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate() - 6
  );
  const getSecond = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate() - 5
  );

  const getThird = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate() - 4
  );
  const getForth = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate() - 3
  );
  const getFifth = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate() - 2
  );
  const getSixth = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate() - 1
  );

  const dates = [
    { date: getLast.getDate(), status: "None" },
    { date: getSecond.getDate(), status: "None" },
    { date: getThird.getDate(), status: "None" },
    { date: getForth.getDate(), status: "None" },
    { date: getFifth.getDate(), status: "None" },
    { date: getSixth.getDate(), status: "None" },
    { date: now.getDate(), status: "None" },
  ];

  console.log(dates);

  const [data, setData] = useState({
    title: "",
    description: "",
    dates,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    addData(data);
    console.log(data);
    setData({
      title: "",
      description: "",
      dates,
    });
  };

  return (
    <>
      <Collapse in={open}>
        <div id="example-collapse-text">
          <Container>
            <Form onSubmit={handleSubmit}>
              <h1 style={{ textAlign: "center" }}>Add Habits</h1>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  value={data.title}
                  maxLength={50}
                  placeholder="Enter title"
                  onChange={(event) => {
                    setData({ ...data, title: event.target.value });
                  }}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  type="text"
                  value={data.description}
                  placeholder="Enter description"
                  maxLength={90}
                  onChange={(event) => {
                    setData({ ...data, description: event.target.value });
                  }}
                />
              </Form.Group>

              <Button
                variant="primary"
                type="submit"
                style={{ marginBottom: "10px", backgroundColor: "black" }}
              >
                Add Habbit
              </Button>
            </Form>
          </Container>
        </div>
      </Collapse>

      <NavBar style={{ postion: "relative" }} />
      <Container>
        <Button
          onClick={() => setOpen(!open)}
          aria-controls="example-collapse-text"
          aria-expanded={open}
          style={style}
        >
          <IoAddOutline size="2x" />
        </Button>
      </Container>
    </>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  addData: (habit) => dispatch(addHabit(habit)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddTask);

import ListGroup from "react-bootstrap/ListGroup";
import { connect } from "react-redux";
import { MdPendingActions } from "react-icons/md";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { FcCancel } from "react-icons/fc";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AddTask from "./addtask";
import { ViewSelection } from "./ViewSelection";
import { Container } from "react-bootstrap";
import { useState } from "react";
import { changeStatus } from "../redux/actions/action";

function List({ habits, change }) {
  const [status, setStatus] = useState("none");
  const now = new Date();
  const getLast = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate() - 6
  );
  if (habits.length == 0) {
    return (
      <>
        <AddTask />
        <Container style={{ marginTop: "80px" }}>
          <ViewSelection />
        </Container>
        No Data Found!!!
      </>
    );
  }

  return (
    <>
      <AddTask />
      <Container style={{ marginTop: "80px" }}>
        <ViewSelection />

        <ListGroup as="ul">
          {habits.map((habit, index) => (
            <ListGroup.Item as="li" style={{ overflow: "auto" }}>
              <Container>
                <Row>
                  <Col>
                    <h3 style={{ fontFamily: "fantasy" }}> {habit.title} </h3>
                    <h6> {habit.description} </h6>
                    <h4 style={{ color: "grey", fontFamily: "aris" }}>
                      {" "}
                      Status:{" "}
                      {
                        habit.dates[now.getDate() - getLast.getDate()].status
                      }{" "}
                    </h4>
                  </Col>

                  <Col>
                    <Row>
                      <Col></Col>
                      <Col>
                        <div>
                          <span>
                            <IoCheckmarkDoneSharp
                              size={"20%"}
                              color="green"
                              onClick={() => {
                                change({
                                  habit,
                                  stateIndex: index,
                                  index: now.getDate() - getLast.getDate(),
                                  status: "Done",
                                });
                                setStatus("DONELIST" + index);
                              }}
                            />
                          </span>
                          <span>
                            <FcCancel
                              size={"20%"}
                              onClick={() => {
                                change({
                                  habit,
                                  stateIndex: index,
                                  index: now.getDate() - getLast.getDate(),
                                  status: "None",
                                });
                                setStatus("cancelLIST" + index);
                              }}
                            />
                          </span>

                          <span>
                            <MdPendingActions
                              size={"20%"}
                              color="yellow"
                              onClick={() => {
                                change({
                                  habit,
                                  stateIndex: index,
                                  index: now.getDate() - getLast.getDate(),
                                  status: "Todo",
                                });
                                setStatus("Peninglist" + index);
                              }}
                            />
                          </span>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Container>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Container>
    </>
  );
}

const mapStateToProps = (state) => {
  console.log(state);
  return { habits: state.habitReducer };
};

const mapDispatchToProps = (dispatch) => ({
  change: (data) => dispatch(changeStatus(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(List);

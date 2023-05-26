import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import { MdPendingActions } from "react-icons/md";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { FcCancel } from "react-icons/fc";
import { Container } from "react-bootstrap";
import AddTask from "./addtask";
import { ViewSelection } from "./ViewSelection";

import { connect } from "react-redux";
import { changeStatus } from "../redux/actions/action";

const Calendar = ({ habits, change }) => {
  console.log(habits, "habbit");
  const [status, changeStatus] = useState(false);
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

  function getDay(day) {
    switch (day) {
      case 1:
        return "monday";
      case 2:
        return "tuesday";
      case 3:
        return "wednesday";
      case 4:
        return "thursday";
      case 5:
        return "friday";
      case 6:
        return "saturday";
      case 0:
        return "sunday";
    }
  }

  console.log(getDay(today) + " " + today);
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
        <Container>
          <Table striped bordered hover size="sm">
            <thead>
              <tr style={{ width: "30px" }}>
                {/* <th>{getDay((today - 6 + 7) % 7)}</th>
            <th>{getDay((today - 5 + 7) % 7)}</th>
            <th>{getDay((today - 4 + 7) % 7)}</th>
            <th>{getDay((today - 3 + 7) % 7)}</th>
            <th>{getDay((today - 2 + 7) % 7)}</th>
            <th>{getDay((today - 1 + 7) % 7)}</th>
            <th>{getDay(today)}</th> */}
                <th>{getDay(getLast.getDay())}</th>
                <th>{getDay(getSecond.getDay())}</th>
                <th>{getDay(getThird.getDay())}</th>
                <th>{getDay(getForth.getDay())}</th>
                <th>{getDay(getFifth.getDay())}</th>
                <th>{getDay(getSixth.getDay())}</th>
                <th>{getDay(today)}</th>
              </tr>
            </thead>
            <tbody>
              {habits.map((habit, index) => (
                <>
                  <tr>
                    <td colSpan={7} style={{ backgroundColor: "black" }}>
                      <h1
                        style={{
                          color: "white",
                          textAlign: "center",
                          fontFamily: "fantasy",
                        }}
                      >
                        {habit.title}
                      </h1>
                    </td>
                  </tr>

                  {/* <Table striped bordered hover size="sm">
                <thead> */}
                  <tr>
                    <th>
                      {getLast.getDate()}
                      <hr />
                      <h4 style={{ color: "gray", fontFamily: "Aris" }}>
                        status:{" "}
                        {
                          habit.dates[getLast.getDate() - getLast.getDate()]
                            .status
                        }
                      </h4>

                      <span>
                        <IoCheckmarkDoneSharp
                          size={"24%"}
                          color="green"
                          onClick={() => {
                            change({
                              habit,
                              stateIndex: index,
                              index: getLast.getDate() - getLast.getDate(),
                              status: "Done",
                            });
                            changeStatus("done 1" + index);
                          }}
                        />
                      </span>
                      <span>
                        <FcCancel
                          size={"24%"}
                          onClick={() => {
                            change({
                              habit,
                              stateIndex: index,
                              index: getLast.getDate() - getLast.getDate(),
                              status: "None",
                            });
                            changeStatus("none 1" + index);
                          }}
                        />
                      </span>

                      <span>
                        <MdPendingActions
                          size={"24%"}
                          color="#caca55"
                          onClick={() => {
                            change({
                              habit,
                              stateIndex: index,
                              index: getLast.getDate() - getLast.getDate(),
                              status: "Todo",
                            });
                            changeStatus("Todo 1" + index);
                          }}
                        />
                      </span>
                    </th>
                    <th>
                      {getSecond.getDate()}
                      <hr />
                      <h4 style={{ color: "gray", fontFamily: "Aris" }}>
                        {" "}
                        status:{" "}
                        {
                          habit.dates[getSecond.getDate() - getLast.getDate()]
                            .status
                        }
                      </h4>

                      <span>
                        <IoCheckmarkDoneSharp
                          size={"24%"}
                          color="green"
                          onClick={() => {
                            change({
                              habit,
                              stateIndex: index,
                              index: getSecond.getDate() - getLast.getDate(),
                              status: "Done",
                            });
                            changeStatus("Done 2" + index);
                          }}
                        />
                      </span>
                      <span>
                        <FcCancel
                          size={"24%"}
                          onClick={() => {
                            change({
                              habit,
                              stateIndex: index,
                              index: getSecond.getDate() - getLast.getDate(),
                              status: "None",
                            });
                            changeStatus("None 2" + index);
                          }}
                        />
                      </span>

                      <span>
                        <MdPendingActions
                          size={"24%"}
                          color="#caca55"
                          onClick={() => {
                            change({
                              habit,
                              stateIndex: index,
                              index: getSecond.getDate() - getLast.getDate(),
                              status: "Todo",
                            });
                            changeStatus("Todo 2" + index);
                          }}
                        />
                      </span>
                    </th>
                    <th>
                      {getThird.getDate()} <hr />
                      <h4 style={{ color: "gray", fontFamily: "Aris" }}>
                        {" "}
                        status:{" "}
                        {
                          habit.dates[getThird.getDate() - getLast.getDate()]
                            .status
                        }
                      </h4>
                      <span>
                        <IoCheckmarkDoneSharp
                          size={"24%"}
                          color="green"
                          onClick={() => {
                            change({
                              habit,
                              stateIndex: index,
                              index: getThird.getDate() - getLast.getDate(),
                              status: "Done",
                            });
                            changeStatus("DONE 3" + index);
                          }}
                        />
                      </span>
                      <span>
                        <FcCancel
                          size={"24%"}
                          onClick={() => {
                            change({
                              habit,
                              stateIndex: index,
                              index: getThird.getDate() - getLast.getDate(),
                              status: "None",
                            });
                            changeStatus("NONE 3" + index);
                          }}
                        />
                      </span>
                      <span>
                        <MdPendingActions
                          size={"24%"}
                          color="#caca55"
                          onClick={() => {
                            change({
                              habit,
                              stateIndex: index,
                              index: getThird.getDate() - getLast.getDate(),
                              status: "Todo",
                            });
                            changeStatus("Todo 3" + index);
                          }}
                        />
                      </span>
                    </th>
                    <th>
                      {getForth.getDate()}
                      <hr />
                      <h4 style={{ color: "gray", fontFamily: "Aris" }}>
                        {" "}
                        status:{" "}
                        {
                          habit.dates[getForth.getDate() - getLast.getDate()]
                            .status
                        }
                      </h4>

                      <span>
                        <IoCheckmarkDoneSharp
                          size={"24%"}
                          color="green"
                          onClick={() => {
                            change({
                              habit,
                              stateIndex: index,
                              index: getForth.getDate() - getLast.getDate(),
                              status: "Done",
                            });
                            changeStatus("Done 4" + index);
                          }}
                        />
                      </span>
                      <span>
                        <FcCancel
                          size={"24%"}
                          onClick={() => {
                            change({
                              habit,
                              stateIndex: index,
                              index: getForth.getDate() - getLast.getDate(),
                              status: "None",
                            });
                            changeStatus("None" + index);
                          }}
                        />
                      </span>

                      <span>
                        <MdPendingActions
                          size={"24%"}
                          color="#caca55"
                          onClick={() => {
                            change({
                              habit,
                              stateIndex: index,
                              index: getForth.getDate() - getLast.getDate(),
                              status: "Todo",
                            });
                            changeStatus("Todo 4" + index);
                          }}
                        />
                      </span>
                    </th>
                    <th>
                      {getFifth.getDate()} <hr />
                      <h4 style={{ color: "gray", fontFamily: "Aris" }}>
                        {" "}
                        status:{" "}
                        {
                          habit.dates[getFifth.getDate() - getLast.getDate()]
                            .status
                        }
                      </h4>
                      <span>
                        <IoCheckmarkDoneSharp
                          size={"24%"}
                          color="green"
                          onClick={() => {
                            change({
                              habit,
                              stateIndex: index,
                              index: getFifth.getDate() - getLast.getDate(),
                              status: "Done",
                            });
                            changeStatus("Done 5" + index);
                          }}
                        />
                      </span>
                      <span>
                        <FcCancel
                          size={"24%"}
                          onClick={() => {
                            change({
                              habit,
                              stateIndex: index,
                              index: getFifth.getDate() - getLast.getDate(),
                              status: "None",
                            });
                            changeStatus("None 5" + index);
                          }}
                        />
                      </span>
                      <span>
                        <MdPendingActions
                          size={"24%"}
                          color="#caca55"
                          onClick={() => {
                            change({
                              habit,
                              stateIndex: index,
                              index: getFifth.getDate() - getLast.getDate(),
                              status: "Todo",
                            });
                            changeStatus("Todo 5" + index);
                          }}
                        />
                      </span>
                    </th>
                    <th>
                      {getSixth.getDate()} <hr />
                      <h4 style={{ color: "gray", fontFamily: "Aris" }}>
                        {" "}
                        status:{" "}
                        {
                          habit.dates[getSixth.getDate() - getLast.getDate()]
                            .status
                        }
                      </h4>
                      <span>
                        <IoCheckmarkDoneSharp
                          size={"24%"}
                          color="green"
                          onClick={() => {
                            change({
                              habit,
                              stateIndex: index,
                              index: getSixth.getDate() - getLast.getDate(),
                              status: "Done",
                            });
                            changeStatus("Done 1" + index);
                          }}
                        />
                      </span>
                      <span>
                        <FcCancel
                          size={"24%"}
                          onClick={() => {
                            change({
                              habit,
                              stateIndex: index,
                              index: getSixth.getDate() - getLast.getDate(),
                              status: "None ",
                            });
                            changeStatus("None 6" + index);
                          }}
                        />
                      </span>
                      <span>
                        <MdPendingActions
                          size={"24%"}
                          color="#caca55"
                          onClick={() => {
                            change({
                              habit,
                              stateIndex: index,
                              index: getSixth.getDate() - getLast.getDate(),
                              status: "Todo",
                            });
                            changeStatus("Todo 6" + index);
                          }}
                        />
                      </span>
                    </th>
                    <th>
                      {now.getDate()}
                      <hr />
                      <h4 style={{ color: "gray", fontFamily: "Aris" }}>
                        {" "}
                        status:{" "}
                        {habit.dates[now.getDate() - getLast.getDate()].status}
                      </h4>

                      <span>
                        <IoCheckmarkDoneSharp
                          size={"24%"}
                          color="green"
                          onClick={() => {
                            change({
                              habit,
                              stateIndex: index,
                              index: now.getDate() - getLast.getDate(),
                              status: "Done",
                            });
                            changeStatus("done 7" + index);
                          }}
                        />
                      </span>
                      <span>
                        <FcCancel
                          size={"24%"}
                          onClick={() => {
                            change({
                              habit,
                              stateIndex: index,
                              index: now.getDate() - getLast.getDate(),
                              status: "None",
                            });
                            changeStatus("None 7" + index);
                          }}
                        />
                      </span>

                      <span>
                        <MdPendingActions
                          size={"24%"}
                          color="#caca55"
                          onClick={() => {
                            change({
                              habit,
                              stateIndex: index,
                              index: now.getDate() - getLast.getDate(),
                              status: "Todo",
                            });
                            changeStatus("pending 7" + index);
                          }}
                        />
                      </span>
                    </th>
                  </tr>

                  {/* </thead>
                <tbody>
                  <tr></tr>
                </tbody>
              </Table> */}
                </>
              ))}
              <tr></tr>
            </tbody>
          </Table>
        </Container>
      </Container>
    </>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return { habits: state.habitReducer };
};

const mapDispatchToProps = (dispatch) => ({
  change: (data) => dispatch(changeStatus(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);

import { useState } from "react";
import Calendar from "./calenderview";
import Nav from "react-bootstrap/Nav";
import List from "./displayall";
import { BsFillCalendarCheckFill } from "react-icons/bs";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { Link } from "react-router-dom";
export const ViewSelection = () => {
  // const [Calender, setView] = useState(false);

  return (
    <>
      <Nav className="justify-content-end" activeKey="/home">
        <Nav.Item>
          <Nav.Link

          // onClick={() => {
          //   setView(false);
          // }}
          >
            <Link to={"/list"}>
              <AiOutlineUnorderedList size={"30px"} color="black" />
            </Link>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link

          // onClick={() => {
          //   setView(true);
          // }}
          >
            <Link to={"/calender"}>
              <BsFillCalendarCheckFill size={"24px"} color="black" />
            </Link>
          </Nav.Link>
        </Nav.Item>
      </Nav>

      {/* {Calender && <Calendar />}
      {!Calender && <List />} */}
    </>
  );
};

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";

import AddTask from "./addtask";
import Calendar from "./calenderview";
import List from "./displayall";

import { ViewSelection } from "./ViewSelection";

function NoMatch() {
  return <h1 style={{ textAlign: "center" }}>404 PAGE NOT FOUND</h1>;
}

export function App() {
  return (
    <Router basename="/habit-list">
      {/* <AddTask /> */}
      {/* <Container style={{ marginTop: "80px" }}> */}
      {/* <ViewSelection /> */}

      <Routes>
        <Route path="/habit-list" element={<List />} />
        <Route path="/list" element={<List />} />
        <Route path="/calender" element={<Calendar />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
      {/* </Container> */}
    </Router>
  );
}

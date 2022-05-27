import React from "react";
import { Form, Button } from "react-bootstrap";

const SearchBox = ({ place, searchSample, searchBlogs, searchAnzo }) => {
  const [search, setSearch] = React.useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    if (place === "Search by category or keyword") {
      searchBlogs(search);
    } else if (
      place === "Search by ANZSCO Code or by Engineering Professions"
    ) {
      searchAnzo(search);
    } else searchSample(search);
  };
  return (
    <div >
      <Form onSubmit={submitHandler} className="mb-1">
        <div className="d-flex">
          <Form.Group className="mb-1" controlId="formBasicEmail">
            <Form.Control
              className="searchInputField"
              style={{ width: "300px", borderRadius: "6px" }}
              type="text"
              placeholder={place ? place : "Search... !"}
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
          </Form.Group>
          <Button
            type="submit"
            style={{
              padding: "0px 7px",
              height: "fit-content",
              marginTop: "5px",
              marginLeft: "-75px",
              borderRadius: "6px",
              background: "#970012",
            }}
          >
            {" "}
            search
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default SearchBox;

import React from "react";
import { Button } from "../Button/index";
import { FormGroup } from "react-bootstrap";

class Search extends React.Component {
  componentDidMount() {
    this.input.focus();
  }
  render() {
    const { onChange, value, children, onSubmit } = this.props;
    return (
      <form onSubmit={onSubmit}>
        <FormGroup>
          <h1 style={{ fontWeight: "bold" }}>{children}</h1>
          <hr style={{ border: "2px solid black", width: "300px" }} />
          <div className="input-group">
            <input
              className="form-control width100 searchForm"
              type="text"
              onChange={onChange}
              value={value}
              ref={some => (this.input = some)}
            />
            <span className="input-group-btn">
              <Button className="btn btn-primary searchBtn">Pretraži</Button>
            </span>
          </div>
        </FormGroup>
      </form>
    );
  }
}

export default Search;

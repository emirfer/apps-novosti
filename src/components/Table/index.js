import React from "react";
import { sortBy } from "lodash";
import PropTypes from "prop-types";
import { Button, Sort } from "../Button/index";

const SORTS = {
  NONE: list => list,
  TITLE: list => sortBy(list, "title"),
  AUTHOR: list => sortBy(list, "author"),
  COMMENTS: list => sortBy(list, "num_comments").reverse(),
  POINT: list => sortBy(list, "points").reverse()
};

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sortKey: "NONE",
      isSortReverse: false
    };
    this.onSort = this.onSort.bind(this);
  }
  onSort(sortKey) {
    const isSortReverse =
      this.state.sortKey === sortKey && !this.state.isSortReverse;
    this.setState({ sortKey, isSortReverse });
  }
  render() {
    const { list, removeItem } = this.props;
    const { sortKey, isSortReverse } = this.state;
    const sortedList = SORTS[sortKey](list);
    const reversSortedList = isSortReverse ? sortedList.reverse() : sortedList;
    return (
      <div className="col-sm-10 col-sm-offset-1">
        <div className="text-center">
          <p>Ponuđene opcije sortiranja</p>
        </div>
        <div className="text-center">
          <Sort
            className="btn btn-default btn-xs sortBtn"
            sortKey={"NONE"}
            onSort={this.onSort}
            activeSortKey={sortKey}
          >
            ZADANO
          </Sort>
          <Sort
            className="btn btn-default btn-xs sortBtn"
            sortKey={"TITLE"}
            onSort={this.onSort}
            activeSortKey={sortKey}
          >
            NASLOVI
          </Sort>
          <Sort
            className="btn btn-default btn-xs sortBtn"
            sortKey={"AUTHOR"}
            onSort={this.onSort}
            activeSortKey={sortKey}
          >
            AUTORI
          </Sort>
          <Sort
            className="btn btn-default btn-xs sortBtn"
            sortKey={"COMMENTS"}
            onSort={this.onSort}
            activeSortKey={sortKey}
          >
            KOMENTARI
          </Sort>
          <Sort
            className="btn btn-default btn-xs sortBtn"
            sortKey={"POINT"}
            onSort={this.onSort}
            activeSortKey={sortKey}
          >
            LAJKOVI
          </Sort>
          <hr />
        </div>
        {reversSortedList.map(item => (
          <div key={item.objectID}>
            <h1>
              <a href="{ item.url }">{item.title}</a>
            </h1>
            <h4>
              {item.author} | {item.num_comments} Komentara | {item.points}{" "}
              Lajkova
              <Button
                className="btn btn-danger btn-xs"
                type="button"
                onClick={() => removeItem(item.objectID)}
              >
                Ukloni
              </Button>
            </h4>
            <hr />
          </div>
        ))}
      </div>
    );
  }
}

// eslint-disable-next-line react/no-typos
Table.PropTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      objectID: PropTypes.string.isRequired,
      author: PropTypes.string,
      url: PropTypes.string,
      num_comments: PropTypes.number,
      points: PropTypes.number
    })
  ).isRequired,
  removeItem: PropTypes.func.isRequired
};

export default Table;

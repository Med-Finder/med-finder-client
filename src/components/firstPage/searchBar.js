import React, { useState } from "react";
import { MDBCol, MDBFormInline, MDBBtn } from "mdbreact";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { search } from "../../actions/searchBarActions";
const SearchBar = props => {
  const [searchTerm, setTerm] = useState("");
  const handleSearchBar = searchTerm => {
    setTerm(searchTerm);
  };

  const handleSearchSubmit = e => {
    e.preventDefault();
    props.search(searchTerm);
  };

  return (
    <MDBCol md="12">
      <MDBFormInline
        className="md-form mr-auto mb-4"
        style={{ marginLeft: "40%" }}
      >
        <input
          className="form-control mr-sm-2"
          type="text"
          placeholder="Search"
          aria-label="Search"
          onChange={e => {
            handleSearchBar(e.target.value);
          }}
        />
        <MDBBtn
          gradient="aqua"
          rounded
          size="sm"
          type="submit"
          className="mr-auto"
          onClick={e => {
            handleSearchSubmit(e);
          }}
        >
          Search
        </MDBBtn>
      </MDBFormInline>
    </MDBCol>
  );
};

SearchBar.propTypes = {
  search: PropTypes.func.isRequired,
  pharmacies: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  pharmacies: state.pharmacies
});

export default connect(mapStateToProps, { search })(SearchBar);

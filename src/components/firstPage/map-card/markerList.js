import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import MarkerWithInfoWindow from "./MarkerWithInformation";

function markerList(props) {
  return props.pharmacies.map((location, index) => {
    return <MarkerWithInfoWindow key={index.toString()} location={location} />;
  });
}
markerList.propTypes = {
  // search: PropTypes.func.isRequired,
  pharmacies: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  pharmacies: state.pharmacies
});

export default connect(mapStateToProps, {})(markerList);

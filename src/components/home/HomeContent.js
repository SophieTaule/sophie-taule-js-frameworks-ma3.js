import React from "react";
import PropTypes from "prop-types";

function HomeContent({ children }) {
    return <div>{children}</div>;
}

HomeContent.propTypes = {
    children: PropTypes.node.isRequired
};

export default HomeContent;

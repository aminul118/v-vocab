import PropTypes from "prop-types";

const PrivateRoute = ({ children }) => {
  return <div>{children}</div>;
};
PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};
export default PrivateRoute;

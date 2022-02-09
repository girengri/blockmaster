import { Navigate } from "react-router-dom";

const PrivateRoute = ({ isAuthenticated, children }) => {
    return isAuthenticated ? children : <Navigate to="/iniciarsesion" />;
};

export default PrivateRoute;

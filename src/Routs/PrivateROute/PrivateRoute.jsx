import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Navigate } from "react-router-dom";


const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)


    if (loading) {
        return <div className="flex items-center justify-center mt-20 mb-20">
            <div
                className="radial-progress bg-primary text-primary-content border-primary border-4"
                style={{ "--value": 96 }}
                role="progressbar">
                99%
            </div>
        </div>
    }

    if (user?.email) {
        return children;
    }


    return <Navigate to='/login' replace></Navigate>
};

export default PrivateRoute;
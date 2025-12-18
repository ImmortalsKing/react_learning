import { useContext } from "react";
import { UserContext } from "./UserContext";

const PermissionHOC = (WrappedComponent) => {
    const NewComponent = (props) => {
        const { hasPermission } = useContext(UserContext);
        return hasPermission ? <WrappedComponent {...props} /> : null;
    };
    return NewComponent;
};

export default PermissionHOC;
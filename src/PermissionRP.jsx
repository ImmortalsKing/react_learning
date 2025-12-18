import { useContext } from "react";
import { UserContext } from "./UserContext";

const PermissionRP = ({children}) => {
    const {hasPermission} = useContext(UserContext);
    return (
        <div>
            {hasPermission && children}
        </div>
    )
};

export default PermissionRP;
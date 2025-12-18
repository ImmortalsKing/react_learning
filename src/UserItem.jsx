import { useContext, useRef } from "react";
import { UserContext } from "./UserContext";
import PropTypes from 'prop-types'
import PermissionHOC from "./PermissionHOC";

const UserItem = ({ id, name, email }) => {
    const { deleteUser } = useContext(UserContext);
    return (
        <div className="relative w-65 h-45 rounded-md shadow-lg shadow-neutral-500/80 bg-neutral-50 mt-8">
            <h1 className="font-bold text-2xl mr-6 mt-5">{name}</h1>
            <p className="text-neutral-900/70 text-xs mr-6 mt-2">{email}</p>
            <button onClick={() => deleteUser(id)} className="cursor-pointer px-4 py-2.5 rounded-md bg-red-600 text-white text-xs absolute right-5 bottom-5">Delete</button>
        </div>
    )
};

export default PermissionHOC(UserItem);

UserItem.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string
};
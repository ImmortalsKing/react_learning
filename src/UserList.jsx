import { useContext } from "react";
import UserItem from "./UserItem";
import { UserContext } from './UserContext'
import { Link } from "react-router";
import PermissionRP from "./PermissionRP";

const UserList = () => {
    const { users } = useContext(UserContext)
    return (
        <div className="relative w-full h-full py-12 bg-neutral-100 shadow-lg shadow-neutral-600/70">
            <h1 className="block font-bold text-4xl mb-10 mx-4">لیست کاربران</h1>
            <PermissionRP>
                {<Link to={"add-user"} state={{ 'info': 'salam' }} className="absolute left-7 top-13 cursor-pointer px-4 py-2.5 rounded-md bg-blue-600 text-white text-xs">کاربر جدید</Link>}
            </PermissionRP>
            <div className="grid grid-cols-4 gap-x-4 gap-y-4 mx-4 border-t">
                {users.map((user) => (
                    <UserItem key={user.id} {...user} />
                ))}
            </div>
        </div>
    )
};

export default UserList;
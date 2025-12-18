import { useState } from "react";
import { createContext } from "react";

const initialUsers = [
    { id: 1, name: 'امیر سلیمانی', email: 'captainamiras@gmail.com' },
    { id: 2, name: 'علی سلیمانی', email: 'ali@soleymani.com' },
    { id: 3, name: 'جواد ملکی', email: 'javad@maleki.com' },
    { id: 4, name: 'علی رضایی', email: 'ali@rezayi.com' },
    { id: 5, name: 'حسن شیخ ربات', email: 'hasan@sheykh.com' },
    { id: 6, name: 'نیما روحانی', email: 'nima@rohani.com' },
    { id: 7, name: 'امیرحسین اردهالی', email: 'amirhosein@ardehali.com' },
    { id: 8, name: 'محسن قدمی', email: 'mohsen@ghadami.com' },
]

export const UserContext = createContext(
    {
        users: [],
        setUsers: () => { },
        addUser: () => { },
        deleteUser: () => { },
        hasPermission: false,
        setHasPermission: () => { }
    }
);

const UserContextProvider = ({ children }) => {
    const [hasPermission, setHasPermission] = useState(true);
    const [users, setUsers] = useState(initialUsers);
    const deleteUser = (id) => {
        setUsers(users.filter(user => user.id !== id))
    };
    const addUser = (user) => {
        setUsers([...users, user])
    };
    return (
        <UserContext.Provider value={{ users, setUsers, addUser, deleteUser, hasPermission, setHasPermission }}>
            {children}
        </UserContext.Provider>
    )
};

export default UserContextProvider;
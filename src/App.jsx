import { useState } from "react";
import UserList from "./UserList";
import { Route, Routes } from "react-router";
import AddUser from "./AddUser";


const App = () => {
  return (
    <div className="bg-neutral-200">
      <h1 className=" font-bold text-4xl mx-4 my-8">سامانه مدیریت کاربران</h1>
      <UserList />
      <div className="flex flex-col gap-5 w-full h-40 bg-amber-500">
        <h1 className="font-bold text-2xl mt-6">فوتر</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis provident mollitia reiciendis alias non. Facere pariatur explicabo voluptas ratione, amet neque ex dicta. Facere, porro assumenda est error id beatae.</p>
      </div>
      <Routes>
        <Route path={"/add-user"} element={<AddUser />} />
      </Routes>
    </div>
  )
};

export default App;
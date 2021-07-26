import React from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widgets from "./Widgets";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import Login from "./Login";

function App() {
  const user = useSelector(selectUser);

  return (
    <div className="app">
      <Header />

      {!user ? (
        <Login /> 
      ) : (
        <div className="app_body">
          <Sidebar />
          <Feed />
          <Widgets />
          {/*widgets*/}
        </div>
      )}
      {/*appbody*/}
    </div>
  );
}

export default App;

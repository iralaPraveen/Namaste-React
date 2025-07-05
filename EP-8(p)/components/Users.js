import { useState, useEffect } from "react";

const Users = () => {
  const [user, setUser] = useState({ name: "Dummy" });
  const fetchData = async () => {
    const data = await fetch("https://api.github.com/users/Naresh-Khatri");
    const json = await data.json();
    console.log(json);
    setUser(json);
  };
  useEffect(() => {
      fetchData();
      console.log("useEffect is rendered");
  }, []);
    // debugger;
    console.log("these is render of component");
  return (
    <>
      <h1>Hi friends from thr Users</h1>
      <h1>{user.login}</h1>
    </>
  );
};

export default Users;

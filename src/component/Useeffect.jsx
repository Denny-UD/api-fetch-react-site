import React, { useState } from "react";
import { RingLoader } from "react-spinners";

function UseEffect() {
  /*const fetchData = () => {
    return fetch("https://reqres.in/api/users")
      .then((response) => response.json())
      .then((data) => console.log(data));
  };*/

  const [users, setUser] = useState([]);
  const [load, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 900);

    const response = await fetch("https://reqres.in/api/users");
    const users = await response.json();
    setUser([]);
    setTimeout(() => {
      setUser(users.data);
    }, 1000);

    //console.log(data);
  };

  return (
    <>
      <div className="nav">
            <h1>LETSGROWMORE</h1>
      </div>
          <div class="btn">
            <button class="button" onClick={fetchData}>Send</button>
         <div class="loader">
           <div class="check">
               <span class="check-one"></span>
               <span class="check-two"></span>
           </div>
         </div>
        </div>
      <div className="card_container">
        {users?.map((curr, index) => {
          return (
            <div className="card" key={index}>
              <img src={curr.avatar} alt={curr.id} />
              <div className="content">
                <h3>{curr.id}</h3>
                <h2>
                  {curr.first_name} {curr.last_name}
                </h2>
                <p>{curr.email}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default UseEffect;

import { useState } from "react";
import { useEffect } from "react";
import User from "./user";

const GithubProfile = () => {

    const [username,setusername]=useState("sangammukherjee");
    const [userData,setuserData]=useState(null);

        async function fetchGithubuserdata(){
            const res = await fetch(`https://api.github.com/users/${username}`)
            const data = await res.json();

            console.log(data);
        }
    function handleclick(){}

    useEffect(()=>{
        fetchGithubuserdata();
    },[]);
  return <div className="Github-container">
       <h1>Github Profile Finder</h1>

       <div className="inpubox">
       <input  placeholder="enter profile name" type="text" onChange={(e)=>setusername(e.target.value)}></input>
       <button onClick={handleclick}>Search</button>
       </div>
       <User user={userData}></User>

     {
     }
       


  </div>;
};
export default GithubProfile;

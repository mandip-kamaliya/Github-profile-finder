import { useState } from "react";
import { useEffect } from "react";
import User from "./user";

const GithubProfile = () => {

    const [username,setusername]=useState("sangammukherjee");
    const [userData,setuserData]=useState(" ");
    const [loading,setloading]=useState(false);

        async function fetchGithubuserdata(){
            setloading(true);
            const res = await fetch(`https://api.github.com/users/${username}`)
            const data = await res.json();
            if(data){
                setuserData(data);
                setloading(false);
                setusername("")
            }

            console.log(data);
        }
    function handleclick(){
        fetchGithubuserdata();
    }

    useEffect(()=>{
        fetchGithubuserdata();
    },[]);
    if(loading){
        <h1>Loading ! please wait</h1>
    }
  return <div className="Github-container">
       <h1>Github Profile Finder</h1>

       <div className="inpubox">
       <input  placeholder="enter profile name" type="text" onChange={(e)=>setusername(e.target.value)} value={username}></input>
       <button onClick={handleclick}>Search</button>
       </div>
       <User user={userData}></User>

     {
     }
       


  </div>;
};
export default GithubProfile;

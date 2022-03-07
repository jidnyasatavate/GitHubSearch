import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
// import axios from "axios";
import SearchResult from "./searchresult";

const SearchComp = () => {
    const history = useHistory();
    const [username, setUserName] = useState('');
    const [userData, setUserData] = useState([]);
    const [available, setAvailable] = useState(false);
    const [repoData, setRepoData] = useState([]);
    // const handleSearch = (e) =>{
    //     e.preventDefault();
    //     // const username = e.target.value;
    //     console.log("USERNAME IS: ",username)
    //     history.push(`/${username}`);
    //     setUserName('');
    // }
    const handleInput = (e) =>{
        setUserName(e.target.value);
    }
    const handleClick = async () =>{
        console.log(username);
        setRepoData([]);
        // try{
        //     const result = await axios(`https://api.github.com/users/${username}`);
        //     setUserData(result);
        //     console.log("Call made");

        // }catch(error){
        //     console.log(error);
        // }finally{
        // history.push(`/${username}`);}
        const response = await fetch(`https://api.github.com/users/${username}`);
        console.log("without json:",response);
        if (response.status === 200){
            const jsonData = await response.json();
            setUserData(jsonData); 
            
            const resp = await fetch(`https://api.github.com/users/${username}/repos`);
            const result = await resp.json();
            setRepoData(result);

            setAvailable(true);
            history.push(`/`);
        }
        else{
            setAvailable(false);
            console.log(response.status);
            history.push(`/error`);
        }
    
    }
 
    console.log("from comp1",userData);
    console.log("available or not:",available);
    console.log("repo data:",repoData )
  
    return (     
        <div className="searchsection"> 
            <div className="row">
                <div className="col-md-7">
                    <input type="text" value = {username} onChange={handleInput}
                        className="iptext form-control " placeholder="Enter Git-hub username here"/>
                </div>
                <button onClick={handleClick} className="col-md-5 searchBtn">Search Here</button> 
            </div> 
            <div style = {{display: available ? "block": "none"}}>
                <div className="row">
                    <div className="col-md-7">
                        <table className="user-data-container">
                            <tbody>
                                <tr>
                                    <td className="text2">User Id:</td>
                                    <td className="text1">{userData.id}</td>
                                </tr>
                                <tr>
                                    <td className="text2">Login Id:</td>
                                    <td className="text1">{userData.login}</td>
                                </tr>
                                <tr>
                                    <td className="text2">Name:</td>
                                    <td className="text1">{userData.name}</td>
                                </tr>
                            </tbody>
                            
                        </table>
                    </div>
                    <div className="col-md-5" style = {{textAlign:"center"}}>
                        <img src={userData.avatar_url} alt= "avatar" style = {{height:100, width:100,marginTop:10 }}/>
                    </div>
                </div>
                <p className="text3">Click on the table header arrows to sort in Descending and Ascending order</p>
                <SearchResult uname = {repoData}></SearchResult>
            </div>  
            
        </div>
         
      );
}
 
export default SearchComp;
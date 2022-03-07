import React from "react";
// import axios from "axios";
// import { useParams } from "react-router-dom";
import SortedTable from "./SortedTable";

const SearchResult = props => {
    // console.log("Comp2",props.uname);
    // const DisplayData=props.uname.map(
    //     (info)=>{
    //         return(
    //             <tr key={info.id}>
    //                 <td className="text4 borderbox">{info.name}</td>
    //                 <td className="text4 borderbox">{info.language}</td>
    //                 <td className="text4 borderbox">{info.stargazers_count}</td>
    //             </tr>
    //         )
    //     }
    // )
    const columns = React.useMemo(
        () => [
          {
            Header: "Repository Name",
            accessor: "reponame" // accessor is the "key" in the data
          },
          {
            Header: "Language",
            accessor: "language"
          },
          {
            Header: "Rating",
            accessor: "rating"
          }
        ],
        []
      );
      const DisplayData=props.uname.map(
            ({name,language,stargazers_count})=>{
                return(
                    {
                        reponame: name,
                        language: language,
                        rating: stargazers_count
                    }
                )
            }
        )
    const data = React.useMemo(
        () => DisplayData
      );
      console.log("my new array", DisplayData);
    
    return ( 
        // <div>
        //     <table className="repotable">
        //         <thead>
        //             <tr>
        //                 <th style={{paddingLeft:15}} className="text2 borderbox">Repository Name</th>
        //                 <th className="text2 borderbox" style={{paddingLeft:15}}>Language</th>
        //                 <th className="text2 borderbox" style={{paddingLeft:15}}>Ratings</th>
        //             </tr>
                    
        //         </thead>
        //         <tbody>
        //             {DisplayData}
        //         </tbody>
        //     </table>

        // </div>
        <SortedTable columns={columns} data={data} />
     );
}
 
export default SearchResult;


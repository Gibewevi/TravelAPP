import React, { createContext, useState } from "react";

export const APIcontext = createContext();

const APIcontextProvider = (props) => {

  const fetchAPI = (StringfileName) => {
    if (isFetch==false) {
        fetch(StringfileName)
        .then(async response => {
            const API = await response.json();
            setTravelDataAPI(API);
            setIsFetch(true);
        })
        .catch((error)=>console.log('error pour charger les données'));
    }
}


  const [isFetch, setIsFetch] = useState(false);
  const [travelDataAPI, setTravelDataAPI] = useState(fetchAPI('http://192.168.1.11:8081/public/API/data.json'));
  const [travelID, setTravelID] = useState(0);
console.log(travelDataAPI)
  return (
    <APIcontext.Provider value={{travelDataAPI, travelID, setTravelID}}>

      {props.children}

    </APIcontext.Provider>
  )
}

export default APIcontextProvider;
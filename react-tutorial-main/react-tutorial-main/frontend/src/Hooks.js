import React, {useState} from "react";

function Hooks() {
    let DateTime = new Date();
    const [currentTime, setCurrentTime] = useState(DateTime.toLocaleString());

    setInterval(()=> setCurrentTime(DateTime.toLocaleString()),1000);

    return(
        <div>
            <h1>{currentTime}</h1>
        </div>
    )
} 

export default Hooks;
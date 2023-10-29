import React from "react";
import ReactDOM from 'react-dom/client';

ReactDOM.createRoot(document.getElementById('root')).render(
  <><h1>this is our first program</h1></>
)
/*Using pure Javascript*/
var h1=document.createElement('h1');
h1.innerHTML="Hi,there this rahul";
document.getElementById("root").appendChild(h1); 

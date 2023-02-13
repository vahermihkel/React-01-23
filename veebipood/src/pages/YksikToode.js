// import React from "react";
import { useParams } from "react-router-dom"

function YksikToode() {
  // React.useState();

  // useState --> react
  // useRef ---> react
  // useParams --> react-router-dom
  // object destructuring
  // const params = useParams();
  const { index } = useParams(); // 4
  const tooted = JSON.parse(localStorage.getItem("tooted")) || [];
  const leitudToode = tooted[index];
  // "Tesla" = ["BMW", "Nobe", "Tesla", "Audi"][2]

  return (
    <div>
      {leitudToode !== undefined && <div>
        <div>{leitudToode.nimi}</div>
        <div>{leitudToode.pilt}</div>
        <div>{leitudToode.hind}</div>
        <div>{leitudToode.aktiivne}</div>
      </div>}
      {leitudToode === undefined && <div>Toodet ei leitud!</div>}
    </div>
  )
}

export default YksikToode


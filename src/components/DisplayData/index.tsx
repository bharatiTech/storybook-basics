import { useEffect, useState } from "react";
import { fetchData } from '../FetchData';

export const DisplayData = (props: any) =>{
  const [people, setPeople] = useState([props]);
  
  useEffect(()=>{
    fetchData().then((response: any)=>{
      setPeople(response);
    })
  },[]);
  
  console.log('Peoples fetched : ',people);
  
  return(
    <div>
      <h1>Peoples Fetched</h1>
      {people?.map((value:any, index:any)=>{
        return(
          <div key={index}>
            <h2>{value?.name}</h2>
            <p>
              Height: {value.height}  &nbsp;&nbsp;
              Hair Color: &nbsp;
              <i style={{color: `${value.hair_color}`}}>
                {value.hair_color}
              </i>
            </p>
          </div>
        )
      })}
    </div>
  )
}
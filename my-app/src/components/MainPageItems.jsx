// import React, { useEffect, useState } from 'react'
// import styles from '../styles.module.css';

// const MainPageItems = () => {

//     const [data, setData] = useState(null);

//     useEffect(() => {
//     const fetchData = async () => {
//        try {
//         const response = await fetch("./data.json", {
//             method: "GET",
//             headers: {
//                 "Content-Type": "application/json"
//             }
//         });
//         if(!response.ok){
//             throw new Error("response was not ok");
//         }
//         const result = await response.json();
//         setData(result);
//        } catch (error) {
//         console.log(error)
//        } 
//     };
//         fetchData();
//     }, []);
//     console.log(data)
//     if(!data || data.length === 0) return <p>Loading...</p>;
//   return (
//     <div>
//         {data.map(({id, image, title, secondary_title, size, price}) =>{ 
//     <div key={id}>
//         <b>{id}</b>
//         <img src={image} alt="img" />
//         <h3>{title}</h3>
//         <h4>{secondary_title}</h4>
//         <p>{size}</p>
//         <p>{price}</p>
//     </div>})}
//     </div>
//   )
// }

// export default MainPageItems
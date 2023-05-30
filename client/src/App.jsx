import MainComponents from "./components/MainComponents/MainComponents";
import {BrowserRouter, Routes, Route} from 'react-router-dom'



function App() {
 
  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainComponents />}/>
          {/* <Route path="/test/:12" element={9} /> */}
          {/* <Route path="/login" element={'jjsjdsjd'} /> */}
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

{/* <Link to={`/van/${van.id}`}> test </Link> */}
// useParams
// React.useEffect(() => {
  // axios.get(`/api/vans/${params.id}`).then(res => res.json().then(data => console.log(data)). [params.id])
// })
{/* <Link to="/"> test </Link> */}





// Следует <Outlet>использовать в родительских элементах маршрута для отображения их дочерних элементов маршрута. Это позволяет отображать вложенный пользовательский интерфейс при отображении дочерних маршрутов. Если родительский маршрут точно соответствует, он будет отображать дочерний индексный маршрут или ничего, если индексного маршрута нет.




// import React from "react"
// import { useParams } from "react-router-dom"

// export default function VanDetail() {
//     const params = useParams()
//     const [van, setVan] = React.useState(null)

//     React.useEffect(() => {
//         fetch(`/api/vans/${params.id}`)
//             .then(res => res.json())
//             .then(data => setVan(data.vans))
//     }, [params.id])

//     return (
//         <div className="van-detail-container">
//             {van ? (
//                 <div className="van-detail">
//                     <img src={van.imageUrl} />
//                     <i className={`van-type ${van.type} selected`}>
//                         {van.type}
//                     </i>
//                     <h2>{van.name}</h2>
//                     <p className="van-price"><span>${van.price}</span>/day</p>
//                     <p>{van.description}</p>
//                     <button className="link-button">Rent this van</button>
//                 </div>
//             ) : <h2>Loading...</h2>}
//         </div>
//     )
// }
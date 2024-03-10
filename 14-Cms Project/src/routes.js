import Home from "./Components/Pages/Home/Home"
import NewUser from "./Components/Pages/NewUser/NewUser"
import UserList from "./Components/Pages/UserList/UserList"
import Products from "./Components/Pages/Products/Products"
import Product from "./Components/Pages/Product/Product"


let routers = [
  {path: "/home" , element: <Home/>},
  {path:"/userlist" , element: <UserList/>},
  {path:"/newuser" , element: <NewUser/>},
  {path:"/products" ,element: <Products/>},
  {path:"/product/:productId" ,element: <Product/>},
]

export default routers;
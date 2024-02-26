import axios from "axios"
import { UserContext } from "../../context/User"
import { useContext, useState, useEffect} from "react"
import { baseURL } from "../../config/serverConfig";
import OrderItem from "../MiniComponents/OrderItem/OrderItem";

function Orders() {
  const {user, headers} = useContext(UserContext);
  const [orders, setOrders] = useState([]);

  const getOrders = async(userID)  =>{
    try {
      const res = await axios.get(`${baseURL}/orders`, {id: userID}, {headers});
      setOrders(res.data);
      console.log("Orders:" ,res.data);
    } catch (error) {
      console.log("Failed to get orders");
      console.log(error);
    }
  }
  useEffect(() =>{
    getOrders(user.id);
  }, [])

  return (
    <div>
      <h1>My Orders</h1>
      {orders.map((order, index)=>(
        <OrderItem order={order} key={index}/>
      ))}
    </div>
  )
}

export default Orders

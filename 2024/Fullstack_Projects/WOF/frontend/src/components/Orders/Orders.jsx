import axios from "axios"
import { UserContext } from "../../context/User"
import { useContext, useState} from "react"
import { baseURL } from "../../config/serverConfig";

function Orders() {
  const {user, headers} = useContext(UserContext);
  const [orders, setOrders] = useState([]);

  const getOrders = async(userID)  =>{
    try {
      const res = await axios.get(`${baseURL}/users`, {id: userID}, {headers});
      setOrders(res);
    } catch (error) {
      console.log("Failed to get orders");
    }
  }
  getOrders(user.id);

  return (
    <div>
      <h1>My Orders</h1>
      {orders.map((order, index)=>(
        <h1>{order.id}</h1>
      ))}
    </div>
  )
}

export default Orders

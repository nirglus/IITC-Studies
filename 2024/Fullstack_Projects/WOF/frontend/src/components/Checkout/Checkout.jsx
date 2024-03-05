import {useState, useContext} from 'react'
import { CartContext } from '../../context/Cart';
import CheckoutForm from '../MiniComponents/CheckoutForm/CheckoutForm';
import axios from 'axios';
import { baseURL } from '../../config/serverConfig';
import PaymentForm from '../MiniComponents/PaymentForm/PaymentForm';

function Checkout() {
    const [isCancel, setIsCancel] = useState(false);
    const [isPayment, setIsPayment] = useState(false);
    const [address, setAddress] = useState({
        street: '',
        city: '',
        state: '',
        country: ''
    });
    const {userCart} = useContext(CartContext);

    const handleAddressChange = (e) => {
        setAddress({
            ...address,
            [e.target.name]: e.target.value
        });
    };
    const handleAddressSubmit = (e) =>{
        e.preventDefault();
    }

    const moveToPayment = () =>{
        setIsPayment(!isPayment);
        console.log({address});
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`${baseURL}/orders`, {
                userID: userCart.userID,
                address: address,
                cartID: userCart.id,
                items: userCart.items,
                totalPrice: userCart.totalPrice
            });
            console.log(res.data.message);
        } catch (error) {
            console.log(`Could'nt create order`, error);
        }
    };

  return (
    <>
    <CheckoutForm handleChange={handleAddressChange} handleSubmit={handleAddressSubmit} moveToPayment={moveToPayment}/>
    {isPayment && <PaymentForm /> }
    
    </>

      

  )
}

export default Checkout

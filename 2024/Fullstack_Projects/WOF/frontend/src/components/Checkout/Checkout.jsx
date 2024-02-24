import {useState} from 'react'
import CheckoutForm from '../MiniComponents/CheckoutForm/CheckoutForm'

function Checkout() {
    const [address, setAddress] = useState({
        street: '',
        city: '',
        state: '',
        country: ''
    });

    const handleChange = (e) => {
        setAddress({
            ...address,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    };
  return (
    <div>
      <CheckoutForm handleChange={handleChange} handleSubmit={handleSubmit} />
    </div>
  )
}

export default Checkout

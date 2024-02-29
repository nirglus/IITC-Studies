function CheckoutForm({handleChange, handleSubmit}) {

    return (
        <>
        <h1>Address for shipment</h1>
        <hr />
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="street">Street:</label>
                <input
                    type="text"
                    id="street"
                    name="street"
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="city">City:</label>
                <input
                    type="text"
                    id="city"
                    name="city"
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="state">State:</label>
                <input
                    type="text"
                    id="state"
                    name="state"
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="country">Country:</label>
                <input
                    type="text"
                    id="country"
                    name="country"
                    onChange={handleChange}
                    required
                />
            </div>
            <button type="submit">Proceed to Checkout</button>
        </form>
        
        </>
    );
}

export default CheckoutForm

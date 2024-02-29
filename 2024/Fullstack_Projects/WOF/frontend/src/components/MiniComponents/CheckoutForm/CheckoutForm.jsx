import "./CheckoutForm.scss";
function CheckoutForm({handleChange, handleSubmit}) {

    return (
        <>
        <div className="headings">
            <h1><i class="bi bi-truck"></i> Address for shipment</h1>
            <hr />
        </div>
        <form className="checkOutForm" onSubmit={handleSubmit}>
            <div className="checkoutInput">
                <label htmlFor="street">Street:</label>
                <input
                    type="text"
                    id="street"
                    name="street"
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="checkoutInput">
                <label htmlFor="city">City:</label>
                <input
                    type="text"
                    id="city"
                    name="city"
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="checkoutInput">
                <label htmlFor="state">State:</label>
                <input
                    type="text"
                    id="state"
                    name="state"
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="checkoutInput">
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

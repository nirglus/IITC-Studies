import { forwardRef, useRef, useImperativeHandle } from "react";
import { createPortal } from "react-dom"
import "./AddToCartModal.scss";

const AddToCartModal = forwardRef(function AddToCartModal({}, ref){
    const dialog = useRef();

    useImperativeHandle(ref, () =>{
        return{
            open() {
                dialog.current.showModal();
            }
        }
      })

      return createPortal(
        <dialog ref={dialog} className="addItemModal">
            <div className="modalContent">
                <h2><i className="bi bi-check2-circle"></i> Item added to cart!</h2>
                <form method="dialog">
                    <button className='addToCartBtn'>Continue shopping</button>
                </form>
            </div>
        </dialog>, document.getElementById('modals')
      )
})

export default AddToCartModal;
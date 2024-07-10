import { forwardRef, useRef, useImperativeHandle } from "react";
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

      return (
        <dialog ref={dialog} className="addItemModal">
            <div className="modalContent">
                <h2><i class="bi bi-check2-circle"></i> Item added to cart!</h2>
                <form method="dialog">
                    <button className='addToCartBtn'>Continue shopping</button>
                </form>
            </div>
        </dialog>
      )
})

export default AddToCartModal;
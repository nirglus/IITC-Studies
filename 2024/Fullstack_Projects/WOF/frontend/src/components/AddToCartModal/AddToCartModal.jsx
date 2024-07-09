import { forwardRef, useRef, useImperativeHandle } from "react";

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
        <dialog ref={dialog}>
            <h2><i class="bi bi-bookmark-check-fill"></i> Item added to cart!</h2>
            <form method="dialog">
                <button>Close</button>
            </form>
        </dialog>
      )
})

export default AddToCartModal;
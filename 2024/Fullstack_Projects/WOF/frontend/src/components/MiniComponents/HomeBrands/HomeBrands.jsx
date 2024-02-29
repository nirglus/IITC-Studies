import { brandImages } from "../../../helpers/images"

function HomeBrands() {
  return (
    <div className="brands">
    <h1></h1>
    <div className="brandsImg">
      {brandImages.map((image, index) => (
        <img src={image} alt="brand" key={index} width={200}/>
      ))}
    </div>
</div>
  )
}

export default HomeBrands

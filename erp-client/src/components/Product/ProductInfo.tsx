
function ProductInfo({ title, description, price }:any) {
  return (
    <div className=" font-primary">
      <h1 className="leading-relaxed font-extrabold text-3xl text-palette-primary py-2 sm:py-4">
        {title}
      </h1>
      <p className="font-medium text-lg">
        {description}
      </p>
      <div className="text-xl text-palette-primary font-medium py-4 px-1">
        {"$"}<span className={"text-2xl"}>{price}</span>
      </div>
    </div>
  )
}

export default ProductInfo

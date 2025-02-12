/* eslint-disable react/prop-types */

const ProductPromo = ({productPromo}) => {
    const {img , OldPrix , NewPrix , Rating} = productPromo
    return (
     <div className="w-[30%] h-[300px] bg-white p-2  shadow-md   flex flex-col   cursor-pointer hover:scale-105 transition duration-300 ease-in-out">
            <img src={img} alt="Product 1" className="h-[70%]" />
            <p className="text-xl font-bold text-gray-800"> {NewPrix} </p>
            <p className="text-sm text-gray-400 line-through"> {OldPrix} </p>
            <p className=" text-md font-bold mt-2">  ⭐  {Rating} </p>
    </div>
    )
  }
  
  export default ProductPromo
  
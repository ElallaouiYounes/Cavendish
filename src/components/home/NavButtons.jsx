// import React, { useState, useEffect } from "react";
// import Badge from "@mui/material/Badge";
// import { styled } from "@mui/material/styles";
// import IconButton from "@mui/material/IconButton";
// import { HiOutlineShoppingCart } from "react-icons/hi";
// import { FaRegUser } from "react-icons/fa";
// import { GoHeart } from "react-icons/go";
// import { IoMdCloseCircle } from "react-icons/io";
// import { HiSquares2X2 } from "react-icons/hi2";
// import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
// import { Link } from "react-router-dom";
// import User from "./User";
// import { useDispatch } from "react-redux";
// import { toggleCart } from "../../redux/slices/actionSlice";

// const StyledBadge = styled(Badge)(({ theme }) => ({
//   "& .MuiBadge-badge": {
//     right: -3,
//     top: 13,
//     border: `2px solid ${theme.palette.background.paper}`,
//     padding: "0 4px",
//   },
// }));

// const NewTooltip = styled(({ className, ...props }) => (
//   <Tooltip {...props} arrow classes={{ popper: className }} />
// ))(({ theme }) => ({
//   [`& .${tooltipClasses.arrow}`]: {
//     color: theme.palette.common.black,
//   },
//   [`& .${tooltipClasses.tooltip}`]: {
//     backgroundColor: theme.palette.common.black,
//   },
// }));

// const NavButtons = () => {

//   const [drop, setDrop] = useState(false);

//   const dispatch = useDispatch();

//   const action = () => {
//       setDrop(!drop);
//   };
//   const [number, setNumber] = useState(0);
//   const items = 17;

//   useEffect(() => {
//     setNumber(items < 10 ? items : "9+");
//   }, [items]);

//   return (
//     <div className="flex items-center space-x-2 max-sm:space-x-1">
//       <Link to="/wishlist" className="bg-black/5 rounded-full">
//         <NewTooltip title="Wishlist">
//           <IconButton aria-label="wishlist">
//             <GoHeart size={25} color="black" />
//           </IconButton>
//         </NewTooltip>
//       </Link>
//       {/* ------------------- */}
//       <div className="bg-black/5 rounded-full" onClick={() => dispatch(toggleCart())}>
//         <NewTooltip title="Cart">
//           <IconButton aria-label="cart">
//             <StyledBadge badgeContent={number} color="info">
//               <HiOutlineShoppingCart size={25} color="black" />
//             </StyledBadge>
//           </IconButton>
//         </NewTooltip>
//       </div>
//       {/* ------------------- */}
//       <div className="bg-black/5 rounded-full" onClick={action}>
//         {!drop && (
//           <NewTooltip title="User">
//             <IconButton aria-label="user">
//               <FaRegUser size={25} color="black" />
//             </IconButton>
//           </NewTooltip>
//         )}
//         {drop && (
//           <NewTooltip title="">
//             <IconButton aria-label="user" onClick={action}>
//               <IoMdCloseCircle size={25} color="black" />
//             </IconButton>
//           </NewTooltip>
//         )}
//         {drop && <User />}
//       </div>
//       {/* ------------------- */}
//       <div className="bg-black/5 rounded-full lg:hidden md:flex sm:flex max-sm:flex">
//         <NewTooltip title="Menu">
//           <IconButton aria-label="menu">
//             <HiSquares2X2 size={25} color="black" />
//           </IconButton>
//         </NewTooltip>
//       </div>
//     </div>
//   );
// };

// export default NavButtons;
import React, { useState, useEffect } from "react";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { FaRegUser } from "react-icons/fa";
import { GoHeart } from "react-icons/go";
import { IoMdCloseCircle } from "react-icons/io";
import { HiSquares2X2 } from "react-icons/hi2";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { Link } from "react-router-dom";
import User from "./User";
import { useDispatch, useSelector } from "react-redux";
import { toggleCart } from "../../redux/slices/actionSlice";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

const NewTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.common.black,
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.black,
  },
}));

const NavButtons = () => {
  const [drop, setDrop] = useState(false);
  const dispatch = useDispatch();

  const toggleDropdown = () => setDrop(!drop);
  const products = useSelector((state) => state.data.products);
  const number = products.length < 10 ? products.length : "9+";

  return (
    <div className="flex items-center space-x-2 max-sm:space-x-1">
      {/* Wishlist Button */}
      <Link to="/wishlist" className="bg-black/5 rounded-full">
        <NewTooltip title="Wishlist">
          <IconButton aria-label="wishlist">
            <GoHeart size={25} color="black" />
          </IconButton>
        </NewTooltip>
      </Link>

      {/* Cart Button */}
      <div className="bg-black/5 rounded-full" onClick={() => dispatch(toggleCart())}>
        <NewTooltip title="View Cart">
          <IconButton aria-label="View cart">
            <StyledBadge badgeContent={number} color="info">
              <HiOutlineShoppingCart size={25} color="black" />
            </StyledBadge>
          </IconButton>
        </NewTooltip>
      </div>

      {/* User Dropdown */}
      <div className="bg-black/5 rounded-full" onClick={toggleDropdown}>
        <NewTooltip title={drop ? "" : "User"}>
          <IconButton aria-label="User">
            {drop ? <IoMdCloseCircle size={25} color="black" /> : <FaRegUser size={25} color="black" />}
          </IconButton>
        </NewTooltip>
        {drop && <User />}
      </div>

      {/* Mobile Menu Button */}
      <div className="bg-black/5 rounded-full lg:hidden md:flex sm:flex max-sm:flex">
        <NewTooltip title="Menu">
          <IconButton aria-label="menu">
            <HiSquares2X2 size={25} color="black" />
          </IconButton>
        </NewTooltip>
      </div>
    </div>
  );
};

export default NavButtons;

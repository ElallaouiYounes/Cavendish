import { useSelector, useDispatch } from "react-redux";
import { removeWishList, incrementQuantity, decrementQuantity } from "../redux/slices/wishlistSlice";
import Navbar from "../components/home/Navbar";
import Footer from "../components/home/Footer";
import { Link } from "react-router-dom";
import { Tooltip, Dialog, DialogActions, DialogContent, DialogTitle, Button } from "@mui/material";
import CartSlider from "../components/home/CartSlider";
import CatSlider from "../components/home/CatSlider";
import { useState } from "react";

const WishList = () => {
  const openCart = useSelector((state) => state.Actions.openCart);
  const openCategorie = useSelector((state) => state.Actions.openCategories);
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist.wishlist);

  // Dialog state for confirmation
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState(null);

  // Calculate total price dynamically
  const totalPrice = wishlist.reduce((total, item) => total + item.price * item.AmountQuantity, 0);

  // Handlers for opening and closing the dialog
  const handleClickOpenDialog = (itemId) => {
    setSelectedItemId(itemId);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedItemId(null);
  };

  const handleConfirmDelete = () => {
    dispatch(removeWishList(selectedItemId));
    handleCloseDialog();
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      {openCart && <CartSlider />}
      {openCategorie && <CatSlider />}

      <div className="container mx-auto py-10 px-4">
        <div className="bg-white p-6 shadow-md rounded-lg overflow-x-auto">
          {wishlist.length > 0 ? (
            <>
              <table className="w-full border-collapse min-w-[600px]">
                <thead>
                  <tr className="border-b text-left text-gray-600 text-sm">
                    <th className="px-2 py-2"></th>
                    <th className="px-2 py-2">Product</th>
                    <th className="px-2 py-2">Added on</th>
                    <th className="px-2 py-2">Price</th>
                    <th className="px-2 py-2">Stock</th>
                    <th className="px-2 py-2">Quantity</th>
                    <th className="px-2 py-2">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {wishlist.map((item) => (
                    <tr key={item.id} className="border-b">
                      <td className="px-2 py-4 text-center">
                        <Tooltip title="delete" placement="top">
                          <button
                            onClick={() => handleClickOpenDialog(item.id)} // Open confirmation dialog
                            className="text-red-500 text-xl font-bold hover:text-red-700"
                          >
                            ×
                          </button>
                        </Tooltip>
                      </td>
                      <td className="px-2 py-4 flex items-center gap-4">
                        <Link to={`/product/${item.id}`}>
                          <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                        </Link>
                        <span className="font-medium">{item.name}</span>
                      </td>
                      <td className="px-2 py-4">{item.addedOn}</td>
                      <td className="px-2 py-4">{item.price}DH</td>
                      <td className="px-2 py-4">
                        <span className={`text-sm font-semibold ${item.quantity > 0 ? "text-green-600" : "text-red-600"}`}>
                          {item.quantity > 0 ? `In Stock (${item.quantity})` : "Out of Stock"}
                        </span>
                      </td>
                      <td className="px-2 py-4 flex items-center gap-2">
                        <button
                          className="px-3 py-1 border rounded bg-gray-200 hover:bg-gray-300"
                          onClick={() => dispatch(decrementQuantity(item.id))}
                          disabled={item.quantity <= 1}
                        >
                          -
                        </button>
                        <span className="text-lg">{item.AmountQuantity}</span>
                        <button
                          className="px-3 py-1 border rounded bg-gray-200 hover:bg-gray-300"
                          onClick={() => dispatch(incrementQuantity(item.id))}
                        >
                          +
                        </button>
                      </td>
                      <td className="px-2 py-4">
                        <button className="bg-black text-white px-4 py-2 rounded">Add to Cart</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="flex flex-col sm:flex-row justify-between items-center mt-6 p-4 border-t">
                <div className="flex space-x-4">
                  <select className="border px-4 py-2">
                    <option>Add to Cart</option>
                    <option>Move to Another List</option>
                  </select>
                  <button className="bg-blue-500 text-white px-4 py-2 rounded">Apply</button>
                </div>
                <h2 className="text-xl font-semibold">Total Price: <span className="font-bold text-green-600">{totalPrice.toFixed(2)}DH</span></h2>
                <button className="bg-gray-700 text-white px-6 py-2 rounded">Add All to Cart</button>
              </div>
            </>
          ) : (
            <p className="text-center text-gray-600 h-[40vh]">Your wishlist is empty.</p>
          )}
        </div>
      </div>

      {/* Confirmation Dialog */}
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Confirm Deletion</DialogTitle>
        <DialogContent>
          <p>Are you sure you want to delete this item from your wishlist?</p>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Cancel
          </Button>
          <Button onClick={handleConfirmDelete} color="secondary">
            Confirm
          </Button>
        </DialogActions>
      </Dialog>

      <Footer />
    </div>
  );
};

export default WishList;

import { useSelector } from "react-redux";

function OrderSummary() {
  const products = useSelector((state) => state.cart.cartProduct);

  const total = products.reduce(
    (sum, product) => sum + (product.price || 0) * (product.quantity || 1),
    0
  );

  return (
    <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-lg sticky top-28 border border-gray-200">
      <h3 className="text-2xl font-semibold mb-4 text-gray-900 border-b border-gray-300 pb-3 text-center">
        Order Summary
      </h3>

      <div className="max-h-96 overflow-y-auto mb-4 scrollbar-thin scrollbar-thumb-gray-300">
        {products.map((p) => (
          <div
            key={p.id}
            className="py-4 border-b border-gray-200 flex items-center gap-4"
          >
            <img
              src={p.image}
              alt={p.name}
              className="w-16 h-16 object-cover rounded-md"
            />
            <div className="flex-1">
              <p className="font-medium text-gray-900">{p.name}</p>
              <p className="text-sm text-gray-600">Quantity: {p.quantity}</p>
            </div>
            <p className="font-semibold text-gray-800">{p.price}</p>
          </div>
        ))}
      </div>

      <div className="space-y-3 pt-3 border-t border-gray-300">
        <div className="flex justify-between font-semibold text-gray-900 text-xl pt-3">
          <span>Total</span>
          <span>{total.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
}

export default OrderSummary;

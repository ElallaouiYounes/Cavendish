import { useForm } from "react-hook-form";

function CheckoutForm({ onSubmit }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form className="p-6 lg:p-8 w-full" onSubmit={handleSubmit(onSubmit)}>
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
        Checkout Details
      </h2>

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-4 pb-2 border-b border-gray-200">
          Personal Information
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              First Name *
            </label>
            <input
              {...register("firstName", {
                required: "First Name is required",
                pattern: {
                  value: /^[A-Za-z\s]+$/,
                  message: "Please enter valid characters",
                },
                minLength: {
                  value: 2,
                  message: "First name must be at least 2 characters",
                },
              })}
              type="text"
              className={`w-full py-3 px-4 border ${
                errors.firstName ? "border-red-500" : "border-gray-300"
              } rounded-md`}
            />
            <p className="text-red-500 text-sm mt-2">
              {errors.firstName?.message}
            </p>
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Last Name *
            </label>
            <input
              {...register("lastName", {
                required: "Last Name is required",
                pattern: {
                  value: /^[A-Za-z\s]+$/,
                  message: "Please enter valid characters",
                },
                minLength: {
                  value: 2,
                  message: "Last name must be at least 2 characters",
                },
              })}
              type="text"
              className={`w-full py-3 px-4 border ${
                errors.lastName ? "border-red-500" : "border-gray-300"
              } rounded-md`}
            />
            <p className="text-red-500 text-sm mt-2">
              {errors.lastName?.message}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Email *
            </label>
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Please enter a valid email address",
                },
              })}
              type="email"
              className={`w-full py-3 px-4 border ${
                errors.email ? "border-red-500" : "border-gray-300"
              } rounded-md`}
            />
            <p className="text-red-500 text-sm mt-2">{errors.email?.message}</p>
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Phone Number *
            </label>
            <input
              {...register("phone", {
                required: "Phone Number is required",
                pattern: {
                  value: /^[+]?([0-9][\s-]?){8,14}[0-9]$/,
                  message: "Please enter a valid phone number",
                },
              })}
              type="tel"
              inputMode="numeric"
              className={`w-full py-3 px-4 border ${
                errors.phone ? "border-red-500" : "border-gray-300"
              } rounded-md`}
            />
            <p className="text-red-500 text-sm mt-2">{errors.phone?.message}</p>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-4 pb-2 border-b border-gray-200">
          Shipping Address
        </h3>
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">
            Address *
          </label>
          <textarea
            {...register("address", {
              required: "Address is required",
              minLength: {
                value: 10,
                message: "Please enter a complete address",
              },
            })}
            className={`w-full py-3 px-4 border ${
              errors.address ? "border-red-500" : "border-gray-300"
            } rounded-md resize-none`}
            rows={2}
          />
          <p className="text-red-500 text-sm mt-2">{errors.address?.message}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              City *
            </label>
            <input
              {...register("city", {
                required: "City is required",
                pattern: {
                  value: /^[A-Za-z\s]+$/,
                  message: "Please enter a valid city name",
                },
              })}
              type="text"
              className={`w-full py-3 px-4 border ${
                errors.city ? "border-red-500" : "border-gray-300"
              } rounded-md`}
            />
            <p className="text-red-500 text-sm mt-2">{errors.city?.message}</p>
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Postal Code *
            </label>
            <input
              {...register("postalCode", {
                required: "Postal Code is required",
                pattern: {
                  value: /^[0-9]{5,6}$/,
                  message: "Please enter a valid postal code",
                },
              })}
              type="text"
              inputMode="numeric"
              maxLength={6}
              className={`w-full py-3 px-4 border ${
                errors.postalCode ? "border-red-500" : "border-gray-300"
              } rounded-md`}
            />
            <p className="text-red-500 text-sm mt-2">
              {errors.postalCode?.message}
            </p>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-4 pb-2 border-b border-gray-200">
          Payment Information
        </h3>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Card Number *
          </label>
          <input
            {...register("cardNumber", {
              required: "Card Number is required",
              pattern: {
                value: /^[\d\s]{8,19}$/,
                message: "Please enter a valid card number",
              },
              validate: (value) => {
                const numberOnly = value.replace(/\s/g, "");
                return (
                  (numberOnly.length >= 8 && numberOnly.length <= 19) ||
                  "Card number must be between 8 and 19 digits"
                );
              },
            })}
            type="text"
            inputMode="numeric"
            maxLength={23}
            className={`w-full py-3 px-4 border ${
              errors.cardNumber ? "border-red-500" : "border-gray-300"
            } rounded-md`}
            placeholder="1234 5678 9012 3456"
          />
          <p className="text-red-500 text-sm mt-2">
            {errors.cardNumber?.message}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Expiry Date *
            </label>
            <input
              {...register("expiryDate", {
                required: "Expiry Date is required",
                pattern: {
                  value: /^(0[1-9]|1[0-2])\/([0-9]{2})$/,
                  message: "Please enter a valid date (MM/YY)",
                },
              })}
              type="text"
              maxLength={5}
              className={`w-full py-3 px-4 border ${
                errors.expiryDate ? "border-red-500" : "border-gray-300"
              } rounded-md`}
              placeholder="MM/YY"
            />
            <p className="text-red-500 text-sm mt-2">
              {errors.expiryDate?.message}
            </p>
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Security Code (CVV) *
            </label>
            <input
              {...register("cvv", {
                required: "CVV is required",
                pattern: {
                  value: /^[0-9]{3,4}$/,
                  message: "Please enter a valid CVV",
                },
              })}
              type="text"
              inputMode="numeric"
              maxLength={4}
              className={`w-full py-3 px-4 border ${
                errors.cvv ? "border-red-500" : "border-gray-300"
              } rounded-md`}
              placeholder="123"
            />
            <p className="text-red-500 text-sm mt-2">{errors.cvv?.message}</p>
          </div>
        </div>
      </div>

      <button className="w-full bg-blue-600 hover:bg-blue-700 py-3 text-white rounded-md font-medium shadow-md transition duration-200">
        Complete Order
      </button>
    </form>
  );
}

export default CheckoutForm;

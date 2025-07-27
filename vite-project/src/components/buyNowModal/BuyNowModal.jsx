/* eslint-disable react/prop-types */
import { useState } from "react";
import React from "react";

const BuyNowModal = ({ addressInfo, setAddressInfo, buyNowFunction }) => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(!open);

    return (
        <>
            {/* Buy Now Button */}
            <button
                type="button"
                onClick={handleOpen}
                className="w-full px-4 py-3 text-center text-gray-100 bg-pink-600 border border-transparent dark:border-gray-700 hover:border-pink-500 hover:text-pink-700 hover:bg-pink-100 rounded-xl"
            >
                Buy now
            </button>

            {/* Modal (Dialog) */}
            {open && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50 transition-all">
                    {/* Dialog Body */}
                    <div className="bg-pink-50 p-6 rounded-lg w-[90%] max-w-md shadow-lg">
                        {/* Name Field */}
                        <div className="mb-3">
                            <input
                                type="text"
                                name="name"
                                value={addressInfo.name}
                                onChange={(e) =>
                                    setAddressInfo({
                                        ...addressInfo,
                                        name: e.target.value,
                                    })
                                }
                                placeholder="Enter your name"
                                className="bg-pink-50 border border-pink-200 px-2 py-2 w-full rounded-md outline-none text-pink-600 placeholder-pink-300"
                            />
                        </div>

                        {/* Address Field */}
                        <div className="mb-3">
                            <input
                                type="text"
                                name="address"
                                value={addressInfo.address}
                                onChange={(e) =>
                                    setAddressInfo({
                                        ...addressInfo,
                                        address: e.target.value,
                                    })
                                }
                                placeholder="Enter your address"
                                className="bg-pink-50 border border-pink-200 px-2 py-2 w-full rounded-md outline-none text-pink-600 placeholder-pink-300"
                            />
                        </div>

                        {/* Pincode Field */}
                        <div className="mb-3">
                            <input
                                type="number"
                                name="pincode"
                                value={addressInfo.pincode}
                                onChange={(e) =>
                                    setAddressInfo({
                                        ...addressInfo,
                                        pincode: e.target.value,
                                    })
                                }
                                placeholder="Enter your pincode"
                                className="bg-pink-50 border border-pink-200 px-2 py-2 w-full rounded-md outline-none text-pink-600 placeholder-pink-300"
                            />
                        </div>

                        {/* Mobile Number Field */}
                        <div className="mb-3">
                            <input
                                type="text"
                                name="mobileNumber"
                                value={addressInfo.mobileNumber}
                                onChange={(e) =>
                                    setAddressInfo({
                                        ...addressInfo,
                                        mobileNumber: e.target.value,
                                    })
                                }
                                placeholder="Enter your mobile number"
                                className="bg-pink-50 border border-pink-200 px-2 py-2 w-full rounded-md outline-none text-pink-600 placeholder-pink-300"
                            />
                        </div>

                        {/* Submit Button */}
                        <div>
                            <button
                                type="button"
                                onClick={() => {
                                    handleOpen();
                                    buyNowFunction();
                                }}
                                className="w-full px-4 py-3 text-center text-gray-100 bg-pink-600 border border-transparent dark:border-gray-700 rounded-lg"
                            >
                                Buy now
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default BuyNowModal;

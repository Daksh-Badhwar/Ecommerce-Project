import { useContext } from "react";
import myContext from "../../context/myContext";
import React from "react";

const OrderDetail = () => {
    const context = useContext(myContext);
    const { getAllOrder, deleteProduct } = context;
    // console.log(getAllOrder)
    return (
        <div>
            <div>
                <div className="py-5">
                    {/* text  */}
                    <h1 className=" text-xl text-pink-300 font-bold">All Order</h1>
                </div>

                {/* table  */}
                <div className="w-full overflow-x-auto">
                    <table className="w-full text-left border border-collapse sm:border-separate border-pink-100 text-pink-400" >
                        <tbody>
                            <tr>
                                <th scope="col" className="h-12 px-6 text-md border-l first:border-l-0 border-pink-100  text-pink-400 bg-pink-100 font-bold fontPara">
                                    S.No.
                                </th>

                                <th scope="col"
                                    className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-pink-100  text-pink-400 bg-pink-100">
                                    Order Id
                                </th>

                                <th scope="col"
                                    className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-pink-100  text-pink-400 bg-pink-100">
                                    Image
                                </th>

                                <th scope="col"
                                    className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-pink-100  text-pink-400 bg-pink-100">
                                    Title
                                </th>

                                <th scope="col"
                                    className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-pink-100  text-pink-400 bg-pink-100">
                                    Category
                                </th>

                                <th scope="col"
                                    className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-pink-100 text-pink-400 bg-pink-100">
                                    Price
                                </th>

                                <th scope="col"
                                    className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-pink-100 text-pink-400 bg-pink-100">
                                    Quantity
                                </th>

                                <th scope="col"
                                    className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-pink-100 text-pink-400 bg-pink-100">
                                    Total Price
                                </th>

                                <th scope="col"
                                    className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-pink-100 text-pink-400 bg-pink-100">
                                    Status
                                </th>

                                <th scope="col"
                                    className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-pink-100 text-pink-400 bg-pink-100">
                                    Name
                                </th>

                                <th scope="col"
                                    className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-pink-100 text-pink-400 bg-pink-100">
                                    Address
                                </th>

                                <th scope="col"
                                    className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-pink-100 text-pink-400 bg-pink-100">
                                    Pincode
                                </th>

                                <th scope="col"
                                    className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-pink-100 text-pink-400 bg-pink-100">
                                    Phone Number
                                </th>

                                <th scope="col"
                                    className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-pink-100 text-pink-400 bg-pink-100">
                                    Email
                                </th>

                                <th scope="col"
                                    className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-pink-100 text-pink-400 bg-pink-100">
                                    Date
                                </th>

                                <th scope="col"
                                    className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-pink-100 text-pink-400 bg-pink-100">
                                    Action
                                </th>


                            </tr>
                            {getAllOrder.map((order) => {
                                console.log(order)
                                return (
                                    <>
                                        {order.cartItems.map((item, index) => {
                                            const { id, productImageUrl, title, category, price, quantity } = item
                                            return (
                                                <tr key={index} className="text-pink-300">
                                                    <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500  text-pink-400 ">
                                                        {index + 1}
                                                    </td>

                                                    <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500  text-pink-400 ">
                                                        {id}
                                                    </td>

                                                    <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500  text-pink-400 first-letter:uppercase ">
                                                        <img src={productImageUrl} alt="img" />
                                                    </td>

                                                    <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500  text-pink-400 first-letter:uppercase ">
                                                        {title}
                                                    </td>

                                                    <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500  text-pink-400 first-letter:uppercase ">
                                                        {category}
                                                    </td>

                                                    <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500  text-pink-400 first-letter:uppercase ">
                                                        ₹{price}
                                                    </td>

                                                    <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500  text-pink-400 first-letter:uppercase ">
                                                        {quantity}
                                                    </td>

                                                    <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500  text-pink-400 first-letter:uppercase ">
                                                        ₹{price * quantity}
                                                    </td>

                                                    <td className="h-12 px-6 text-md transition duration-300 border-t border-l text-green-600  first:border-l-0 border-pink-100 stroke-slate-500  first-letter:uppercase ">
                                                        {order.status}
                                                    </td>

                                                    <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-pink-400  first-letter:uppercase ">
                                                        {order.addressInfo.name}
                                                    </td>

                                                    <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-pink-400  first-letter:uppercase ">
                                                        {order.addressInfo.address}
                                                    </td>

                                                    <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-pink-400  first-letter:uppercase ">
                                                        {order.addressInfo.pincode}
                                                    </td>

                                                    <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-pink-400  first-letter:uppercase ">
                                                        {order.addressInfo.mobileNumber}
                                                    </td>

                                                    <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-pink-400  ">
                                                        {order.email}
                                                    </td>

                                                    <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-pink-400  first-letter:uppercase ">
                                                        {order.date}
                                                    </td>

                                                    <td onClick={()=> deleteProduct(order.id)} className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500  text-pink-400  text-red-500 cursor-pointer ">
                                                        Delete
                                                    </td>
                                                </tr>
                                            )
                                        })}
                                    </>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default OrderDetail;
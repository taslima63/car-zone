
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const OrderModal = ({ singlePart, user, refetch }) => {
    const [date, setDate] = useState(new Date());
    const { name, _id, price, MOQ, available } = singlePart;
    const [totalAmount, setTotalAmount] = useState(MOQ * price)
    let Qerror = "";
    let quantity;

    const calcTotalAmount = (event) => {
        quantity = event.target.quantity.value;
        console.log(quantity);
        if (quantity >= MOQ && quantity <= available) {
            setTotalAmount(price * quantity);
        } else {
            if (quantity < MOQ) {
                Qerror = "order quantity must be grater than or equal Minimum Order quantity";
            } else if (quantity > available) {
                Qerror = "order quantity must be less than or equal Available product quantity";
            } else {
                Qerror = "";
            }
        }
    }

    // const getInputValue = (event) => {
    //     // show the user input value to console
    //     quantity = event.target.value;
    // };

    const handleOrder = (event) => {
        event.preventDefault();
        const order = {
            item: _id,
            name: name,
            date: date,
            unit_price: price,
            order_quantity: parseInt(event.target.quantity.value),
            totalAmount: totalAmount,
            user: user?.email || '',
            userName: user?.displayName || '',
            phone: event.target.phone.value
        }
        fetch('http://localhost:5000/order', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast(`order is placed for ,${name}`);
                }
                else {
                    toast.error(`Check all the info is correctly provide`);
                }
                event.target.reset();
                refetch();

            });
    }
    return (
        <div>
            <input type="checkbox" id="order-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="order-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold  text-lg">Order For: <span className='text-secondary'>{name}</span></h3>
                    <form action="" onSubmit={handleOrder} className='mt-10 grid cols-span-1 gap-3 justify-items-center'>
                        {/* */}
                        <span className=''>Date: <div className='inline'><DatePicker className='text-secondary mx-auto inline' dateFormat="Pp" selected={date} showTimeSelect onChange={(date) => setDate(date)} /></div></span>

                        <input type="text" name="name" value={singlePart.name} className="input input-bordered w-full max-w-xs" readOnly />
                        <input type="number" name="price" value={totalAmount} className="input input-bordered w-full max-w-xs" />
                        <input type="text" name="phone" placeholder='Your Phone Number' className="input input-bordered w-full max-w-xs" required />
                        <input type="number" name="quantity" placeholder='Enter Order Quantity' className="input input-bordered w-full max-w-xs" min={MOQ} max={available} required />
                        {
                            Qerror && <small className='text-red-500'>{Qerror}</small>
                        }
                        <input type="submit" value="Order" className="btn btn-secondary w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </div >
    );
};

export default OrderModal;
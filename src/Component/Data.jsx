import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { POST_PRODUCT_PROGRESS } from "../Redux-saga/Admin/action/action";

export const Data = () => {
    const product = useSelector((state) => state.productReducer);

    console.log(product, "product from data");
    const dispatch = useDispatch();
    const Priceproduct = useRef();
    const price = useRef();

    const Adddata = () => {
        const data = {
            Priceproduct: Priceproduct.current.value,
            price: price.current.value,
        }
        console.log(Data);
        dispatch({ type: POST_PRODUCT_PROGRESS, payload: data })
    }

    return (
        <div>

            <input type="text" name="product" placeholder="Enter a product name" ref={Priceproduct}></input>
            <input type="number" name="price" placeholder="Enter a price" ref={price}></input>
            <button onClick={Adddata}>Add</button>

            {product.product?.map((val) => {
                return (
                    <>
                        <h1>{val.card}</h1>
                        <h1>{val.prodyctr}</h1>

                    </>
                );
            })}
        </div>
    );
};

// export default Data;

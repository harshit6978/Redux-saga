import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DELETE_PRODUCT_PROGRESS, POST_PRODUCT_PROGRESS, PUT_PRODUCT_PROGRESS } from "../Redux-saga/Admin/action/action";

export const Data = () => {
    const product = useSelector((state) => state.productReducer);

    console.log(product, "product from data");
    const dispatch = useDispatch();
    const Priceproduct = useRef();
    const price = useRef();

    const [update, setupdate] = useState([])

    const Adddata = () => {
        const data = {
            Priceproduct: Priceproduct.current.value,
            price: price.current.value,
        }
        console.log(Data);
        dispatch({ type: POST_PRODUCT_PROGRESS, payload: data })

        Priceproduct.current.value = "";
        price.current.value = "";

    }

    const DeleteApi = (val) => {
        dispatch({ type: DELETE_PRODUCT_PROGRESS, payload: val });
    }

    const updateapi = (val) => {
        dispatch({ type: PUT_PRODUCT_PROGRESS, payload: val })
    }

    const updateValue = (e) => {
        setupdate((update) => ({ ...update, [e.target.name]: e.target.value }))
    }

    return (
        <div>

            <input type="text" name="product" placeholder="Enter a product name" ref={Priceproduct} onChange={updateValue}></input>
            <input type="number" name="price" placeholder="Enter a price" ref={price} onChange={updateValue}></input>
            <button onClick={Adddata}>Add</button><br />

            <input type="text" name="product" placeholder="Enter update a product name"></input>
            <input type="number" name="price" placeholder="Enter update a price"></input>
            <button onClick={updateapi}>update</button>

            {product.product?.map((val) => {
                return (
                    <>
                        <h1>{val.Priceproduct}</h1>
                        <h1>{val.price}</h1>
                        <button onClick={() => DeleteApi(val)}>delete</button>
                        <button onClick={() => setupdate(val)}>Update</button>
                    </>
                );
            })}
        </div>
    );
};

// export default Data;

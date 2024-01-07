import { call, put } from "redux-saga/effects";
// import { GET_PRODUCT_ERROR, GET_PRODUCT_SUCCESS } from "../../Admin/action/action";4\

import { GET_PRODUCT_SUCCESS, GET_PRODUCT_ERROR, POST_PRODUCT_SUCCESS, POST_PRODUCT_ERROR } from "../../Admin/action/action";
import { get_product, post_product } from "../../Admin/Api/api";

// GET Product data
export function* handle_Get_product_api(action) {
    try {
        const res = yield call(get_product, action);
        console.log(res, "from manageProduct");
        const status = res.status;
        const data = res.data;

        if (status === 200) {
            yield put({ type: GET_PRODUCT_SUCCESS, data });
        } else {
            yield put({ type: GET_PRODUCT_ERROR, data });
        }
    } catch (e) {
        yield put({ type: GET_PRODUCT_ERROR, e });
    }
}


// POST PRODUCT DATA
export function* handle_post_product_api(action) {
    try {
        const res = yield call(post_product, action);
        console.log(res, "from manageProduct");
        const status = res.status;
        const data = res.data;

        if (status === 200) {
            yield put({ type: POST_PRODUCT_SUCCESS, data });
        } else {
            yield put({ type: POST_PRODUCT_ERROR });
        }
    } catch (e) {
        yield put({ type: POST_PRODUCT_ERROR, e });
    }
}

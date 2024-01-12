import { apply, call, put } from "redux-saga/effects";
// import { GET_PRODUCT_ERROR, GET_PRODUCT_SUCCESS } from "../../Admin/action/action";4\

import { GET_PRODUCT_SUCCESS, GET_PRODUCT_ERROR, POST_PRODUCT_SUCCESS, POST_PRODUCT_ERROR, DELETE_PRODUCT_SUCCESS, DELETE_PRODUCT_ERROR, PUT_PRODUCT_SUCCESS, PUT_PRODUCT_ERROR } from "../../Admin/action/action";
import { delete_api, get_product, post_product, update_api } from "../../Admin/Api/api";
import { applyMiddleware } from "redux";

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

        if (status === 200 || status === 201) {
            yield put({ type: POST_PRODUCT_SUCCESS, data });
        } else {
            yield put({ type: POST_PRODUCT_ERROR });
        }
    } catch (e) {
        yield put({ type: POST_PRODUCT_ERROR, e });
    }
}


// delete product api

export function* handle_delete_api(action) {
    try {
        const res = yield call(delete_api, action);
        const status = res.status;
        const data = res.data;

        if (status === 200 || status === 201) {
            yield put({ type: DELETE_PRODUCT_SUCCESS, data })
        }
        else {
            yield put({ type: DELETE_PRODUCT_ERROR });
        }
    }
    catch (err) {
        yield put({ type: DELETE_PRODUCT_ERROR, err });
    }
}


// update product api 

export function* handle_update_api(action) {
    try {
        const res = yield call(update_api, action);
        const status = res.status;
        const data = res.data;

        if (status === 200 || status === 201) {
            yield put({ type: PUT_PRODUCT_SUCCESS, data })
        }
        else {
            yield put({ type: PUT_PRODUCT_ERROR, data })
        }
    }
    catch (err) {
        yield put({ type: PUT_PRODUCT_ERROR, err })

    }
}
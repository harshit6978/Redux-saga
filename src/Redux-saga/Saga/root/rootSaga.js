import { takeLatest } from "@redux-saga/core/effects";
// import { handle_Get_product_api } from "../admin/manageProduct";
import { handle_Get_product_api, handle_delete_api, handle_post_product_api, handle_update_api } from "../admin/managaeProduct";
import { DELETE_PRODUCT_PROGRESS, GET_PRODUCT_PROGRESS, POST_PRODUCT_PROGRESS, PUT_PRODUCT_PROGRESS } from "../../Admin/action/action";




// GET - product saga
export function* get_product_saga() {
    yield takeLatest(GET_PRODUCT_PROGRESS, handle_Get_product_api);
}


// post - product saga
export function* post_product_saga() {
    yield takeLatest(POST_PRODUCT_PROGRESS, handle_post_product_api);
}

export function* delete_product_saga() {
    yield takeLatest(DELETE_PRODUCT_PROGRESS, handle_delete_api);
}
export function* update_product_saga() {
    yield takeLatest(PUT_PRODUCT_PROGRESS, handle_update_api)
}
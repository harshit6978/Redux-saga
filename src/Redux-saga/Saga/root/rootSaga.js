import { takeLatest } from "@redux-saga/core/effects";
// import { handle_Get_product_api } from "../admin/manageProduct";
import { handle_Get_product_api, handle_post_product_api } from "../admin/managaeProduct";
import { GET_PRODUCT_PROGRESS, POST_PRODUCT_PROGRESS } from "../../Admin/action/action";




// GET - product saga
export function* get_product_saga() {
    yield takeLatest(GET_PRODUCT_PROGRESS, handle_Get_product_api);
}


// post - product saga
export function* post_product_saga() {
    yield takeLatest(POST_PRODUCT_PROGRESS, handle_post_product_api);
}


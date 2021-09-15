import {ActionTypes} from "../Constants/action-types";
{/*}
    Actions for three actions created in the actiontypes.js;
    SET_PRODUCTS, SELECTED_PRODUCT, REMOVE_SELECTED_PRODUCT
{*/}



export const setProducts = (products) => {
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products,
    };
};

export const selectedProduct = (product) => {
    return {
        type: ActionTypes.SELECTED_PRODUCT,
        payload: product,
    };
};

export const removeSelectedProduct = () => {
    return {
        type: ActionTypes.REMOVE_SELECTED_PRODUCT,
    };
};


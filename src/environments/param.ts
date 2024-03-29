//export const URL_ROOT = "http://192.168.0.100:8080";
export const URL_ROOT = "http://localhost:8080";
export const PARAM = {
  //received
  GET_LIST_RECEIVED:"cart/getListCart",
  UPDATE_RECEIVED:"cart/updateStatus",
  GET_DETAIL:"shipping",
  GET_RECEIVED_BY_ID:"cart/getCart",
  //product
  GET_ALL_PRODUCT:"product/all",
  UPDATE_PRODUCT:"product/update",
  GET_PRODUCT_BY_ID:"product/getProdbyId",
  ADD_PRODUCT:"product/add",
  DELETE_PRODUCT:"product/delete",
  SEARCH_PRODUCT:"product/search",
  //stock
  GET_STOCK_PRODUCT:"stock/stockProduct",

  //discount
  GET_ALL_DISCOUNT:"discount/getAllDiscount",
  UPDATE_DISCOUNT:"discount/updateDiscount",
  ADD_DISCOUNT:"discount/addDiscount",
  DELETE_DISCOUNT:"discount/deleteDiscount",
  SEARCH_DISCOUNT:"discount/searchDiscount",
  //auth
  LOGIN:"auth/login",

  //cart
  GET_REPORT:"cart/getReport",

  //brand
  GET_ALL_BRAND:"brand/all",

  //report
  GET_REPORT_ALL:"report/statistical",


}

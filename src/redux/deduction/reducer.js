import {
  DEDUCTION_GET_LIST,
  DEDUCTION_GET_LIST_SUCCESS,
  DEDUCTION_GET_LIST_ERROR,
  DEDUCTION_ADD_ITEM,
  DEDUCTION_ADD_ITEM_SUCCESS,
  DEDUCTION_ADD_ITEM_ERROR,
  DEDUCTION_DELETE_ITEM,
  DEDUCTION_DELETE_SUCCESS,
  DEDUCTION_DELETE_ITEM_ERROR,
  DEDUCTION_UPDATE_ITEM,
  DEDUCTION_UPDATE_ITEM_SUCCESS,
  DEDUCTION_UPDATE_ITEM_ERROR,
  DEDUCTION_DELETE_CHECK,
} from "../actions";

const INIT_STATE = {
  deductionItems: null,
  deductionerror: "",
  deductionloading: false,
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case DEDUCTION_GET_LIST:
      return { ...state, deductionloading: false };

    case DEDUCTION_GET_LIST_SUCCESS:
      return {
        ...state,
        deductionloading: true,
        deductionItems: action.payload,
      };

    case DEDUCTION_GET_LIST_ERROR:
      return { ...state, deductionloading: true, deductionerror: action.payload };

    case DEDUCTION_ADD_ITEM:
      return { ...state, deductionloading: false };
    case DEDUCTION_ADD_ITEM_SUCCESS:
      let items = state.deductionItems;
      let item = [];
      item.id = action.payload.id;
      item.deduction_desc_eng = action.payload.deduction_desc_eng;
      item.deduction_desc_arab = action.payload.deduction_desc_arab;
      items.splice(0, 0, item);
      return {
        ...state,
        deductionloading: true,
        deductionItems: items,
      };

    case DEDUCTION_ADD_ITEM_ERROR:
      return { ...state, deductionloading: true, deductionerror: action.payload };

    case DEDUCTION_DELETE_ITEM:
      return {
        ...state,
        deductionloading: false,
      };
    case DEDUCTION_DELETE_CHECK:
      return {
        ...state,
        deductionloading: true,
      };

    case DEDUCTION_DELETE_SUCCESS:
      const data = state.deductionItems.filter(
        (x) => x.id !== action.payload.payload
      );
      return {
        ...state,
        deductionloading: true,
        deductionItems: data,
      };

    case DEDUCTION_DELETE_ITEM_ERROR:
      return { ...state, deductionloading: true, deductionerror: action.payload };

    case DEDUCTION_UPDATE_ITEM:
      return {
        ...state,
        deductionloading: false,
      };
    case DEDUCTION_UPDATE_ITEM_SUCCESS:
      const con = state.deductionItems.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            deduction_desc_arab: action.payload.deduction_desc_arab,
            deduction_desc_eng: action.payload.deduction_desc_eng,
            
          };
        }
        return item;
      });
      return {
        ...state,
        deductionloading: true,
        deductionItems: con,
      };
    case DEDUCTION_UPDATE_ITEM_ERROR:
      return { ...state, deductionloading: true, deductionerror: action.payload };

    default:
      return { ...state };
  }
};

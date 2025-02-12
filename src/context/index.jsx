import { createContext, useReducer } from "react";
import { data } from "react-router-dom";

let ProductContext = createContext({});

const ProductContextProvider = ({ children }) => {
  let initialState = {
    data: JSON.parse(localStorage.getItem("data")) || [],
  };
  let reducer = (state, action) => {
    switch (action.type) {
      case "add":
        if (state.data?.find((value) => value.id === action.product.id)) {
          let newData = state.data.map((value) =>
            value.id == action.product.id
              ? { ...value, counter: value.counter + 1 }
              : value
          );
          localStorage.setItem("data", JSON.stringify(newData));

          return { ...state, data: newData };
        }
        let newData = {
          ...state,
          data: [...state.data, { ...action.product, counter: 1 }],
        };

        localStorage.setItem("data", JSON.stringify(newData));
        return newData;
      case "delete":
        let { id } = action.payload;
        let newDeletedData = state.data.filter((value) => value.id != id);
        console.log(newDeletedData);

        localStorage.setItem("data", JSON.stringify(newDeletedData));
        return { ...state, data: newDeletedData };
      case "increment":
        let plus = state.data.map((value) =>
          value.id == action.payload.plusId
            ? { ...value, counter: value.counter + 1 }
            : value
        );
        localStorage.setItem("data", JSON.stringify(plus));
        return { ...state, data: plus };
      case "decrement":
        let minus = state.data.map((value) =>
          value.id == action.payload.minusId
            ? { ...value, counter: value.counter > 1 ? value.counter - 1 : 1 }
            : value
        );
        localStorage.setItem("data", JSON.stringify(minus));
        return { ...state, data: minus };
    }
  };

  let [state, dispatch] = useReducer(reducer, initialState);
  return (
    <ProductContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};
export { ProductContextProvider, ProductContext };

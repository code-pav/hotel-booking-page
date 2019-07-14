import { UPDATE_BOOK_ICON } from "./actions";

const initialState = {
    cartIcon: ""
};

export const headerReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_BOOK_ICON: {
            return {
                ...state,
                cartIcon: action.payload
            };
        }
        default: {
            return { ...state };
        }
    }
};

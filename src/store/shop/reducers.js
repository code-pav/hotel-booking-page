import { UPDATE_ROOMS, CHANGE_FILTER } from "./actions";

const initialState = {
    rooms: [],
    filter: {
        bedsFilter: "",
        priceFilter: 1400,
        petFilter: false,
        foodFilter: false
    }
};

export const storeReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_ROOMS: {
            return {
                ...state,
                rooms: Object.values(action.payload)
            };
        }
        case CHANGE_FILTER: {
            let { ...filter } = state.filter;
            filter[action.name] = action.payload;
            return {
                ...state,
                filter
            };
        }
        default:
            return state;
    }
};

import {
    UPDATE_ROOMS,
    UPDATE_FILTERED_ROOMS,
    CHANGE_FILTER,
    SET_ROOM_INFO_PREVIEW,
    SET_RESERVED_ROOM
} from "./actions";

const initialState = {
    rooms: [],
    filteredRooms: [],
    activeRoom: null,
    reservedRoom: null,
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
        case UPDATE_FILTERED_ROOMS: {
            return {
                ...state,
                filteredRooms: action.payload
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
        case SET_ROOM_INFO_PREVIEW: {
            return { ...state, activeRoom: action.payload };
        }

        case SET_RESERVED_ROOM: {
            return { ...state, reservedRoom: action.payload };
        }
        default:
            return { ...state };
    }
};

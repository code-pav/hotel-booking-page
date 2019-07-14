export const UPDATE_ROOMS = "UPDATE_ROOMS";
export const UPDATE_FILTERED_ROOMS = "UPDATE_FILTERED_ROOMS";
export const CHANGE_FILTER = "CHANGE_FILTER";
export const SET_ROOM_INFO_PREVIEW = "SET_ROOM_INFO_PREVIEW";
export const SET_RESERVED_ROOM = "SET_RESERVED_ROOM";

export const updateRooms = rooms => {
    return {
        type: UPDATE_ROOMS,
        payload: rooms
    };
};

export const changeFilter = (name, prop) => {
    return {
        type: CHANGE_FILTER,
        name: name,
        payload: prop
    };
};

export const setRoomInfoPreview = room => {
    return {
        type: SET_ROOM_INFO_PREVIEW,
        payload: room
    };
};

export const setReservedRoom = room => {
    return {
        type: SET_RESERVED_ROOM,
        payload: room
    };
};

export const updateFilteredRooms = rooms => {
    return {
        type: UPDATE_FILTERED_ROOMS,
        payload: rooms
    };
};

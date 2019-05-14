export const UPDATE_ROOMS = "UPDATE_ROOMS";
export const CHANGE_FILTER = "CHANGE_FILTER";

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

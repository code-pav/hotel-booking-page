export const UPDATE_BOOK_ICON = "UPDATE_BOOK_ICON";

export const updateBookIcon = icon => {
    return {
        type: UPDATE_BOOK_ICON,
        payload: icon
    };
};

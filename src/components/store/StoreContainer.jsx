import React from "react";
import Store from "./Store";
import { connect } from "react-redux";
import {
    updateRooms,
    changeFilter,
    setRoomInfoPreview,
    setReservedRoom,
    updateFilteredRooms
} from "../../store/shop/actions";
import { updateBookIcon } from "../../store/header/actions";

class StoreContainer extends React.Component {
    render() {
        return (
            <Store
                rooms={this.props.rooms}
                updateRooms={this.props.updateRooms}
                filteredRooms={this.props.filteredRooms}
                updateFilteredRooms={this.props.updateFilteredRooms}
                filter={this.props.filter}
                changeFilter={this.props.changeFilter}
                activeRoom={this.props.activeRoom}
                setRoomInfoPreview={this.props.setRoomInfoPreview}
                reservedRoom={this.props.reservedRoom}
                setReservedRoom={this.props.setReservedRoom}
                updateBookIcon={this.props.updateBookIcon}
            />
        );
    }
}

const putStateToProps = state => {
    return {
        rooms: state.storeReducer.rooms,
        filteredRooms: state.storeReducer.filteredRooms,
        activeRoom: state.storeReducer.activeRoom,
        reservedRoom: state.storeReducer.reservedRoom,
        filter: state.storeReducer.filter
    };
};
// prettier-ignore
const putActionToProps = { 
    updateRooms,
    changeFilter,
    setRoomInfoPreview,
    setReservedRoom,
    updateFilteredRooms,
    updateBookIcon
};

export default connect(
    putStateToProps,
    putActionToProps
)(StoreContainer);

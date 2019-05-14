import React from "react";
import Store from "./Store";
import { connect } from "react-redux";
import { updateRooms, changeFilter } from "../../store/shop/actions";
class StoreContainer extends React.Component {
    render() {
        return (
            <Store
                rooms={this.props.rooms}
                updateRooms={this.props.updateRooms}
                filter={this.props.filter}
                changeFilter={this.props.changeFilter}
            />
        );
    }
}

const putStateToProps = state => {
    return {
        rooms: state.storeReducer.rooms,
        filter: state.storeReducer.filter
    };
};
// prettier-ignore
const putActionToProps = { 
    updateRooms,
    changeFilter
};

export default connect(
    putStateToProps,
    putActionToProps
)(StoreContainer);

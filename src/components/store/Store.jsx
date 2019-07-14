import React from "react";
import StoreFilter from "./StoreFilter";
import Rooms from "./Rooms";

import setBackground from "../../api/setBackground";

class Store extends React.Component {
    componentDidMount() {
        setBackground(
            "body",
            "http://static.asiawebdirect.com/m/phuket/portals/kosamui-com/homepage/hotels/top10-beach-resorts/pagePropertiesImage/best-beach-resorts-samui.jpg.jpg"
        );
    }
    render() {
        return (
            <div className="store">
                <StoreFilter
                    rooms={this.props.rooms}
                    updateRooms={this.props.updateRooms}
                    updateFilteredRooms={this.props.updateFilteredRooms}
                    filter={this.props.filter}
                    changeFilter={this.props.changeFilter}
                />
                <Rooms
                    filteredRooms={this.props.filteredRooms}
                    activeRoom={this.props.activeRoom}
                    setRoomInfoPreview={this.props.setRoomInfoPreview}
                    reservedRoom={this.props.reservedRoom}
                    setReservedRoom={this.props.setReservedRoom}
                    updateBookIcon={this.props.updateBookIcon}
                />
            </div>
        );
    }
}

export default Store;

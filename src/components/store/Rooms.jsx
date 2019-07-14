import React from "react";
class Rooms extends React.Component {
    constructor(props) {
        super(props);

        this.handleInfoButtonClick = this.handleInfoButtonClick.bind(this);
        this.handleRoomReservation = this.handleRoomReservation.bind(this);
    }
    componentDidMount() {
        // SetTimeout maybe? Because may be troubles, but we'll see.
        requestAnimationFrame(() => {
            let reserved = window.localStorage.getItem("reserved");
            if (reserved) {
                let target = [].find.call(
                    document.querySelectorAll(".room"),
                    room => room.id === reserved
                );
                this.setReservedRoom(target);
                this.props.updateBookIcon("item-in-shop");
            }
        });
    }

    arePetsAllowed(permission) {
        return permission ? "Allowed" : "Not allowed";
    }

    areFoodService(food) {
        return food ? "Yes" : "No";
    }

    handleInfoButtonClick(e) {
        if (this.props.activeRoom) {
            this.props.activeRoom.classList.remove("show-info");
            this.props.activeRoom.querySelector(".info-button").innerHTML =
                "Info";
        }
        if (e.target.parentElement === this.props.activeRoom) {
            this.props.setRoomInfoPreview(null);
        } else {
            this.props.setRoomInfoPreview(e.target.parentElement);
        }
    }

    showRoomInfo() {
        if (this.props.activeRoom) {
            this.props.activeRoom.classList.add("show-info");
            this.props.activeRoom.querySelector(".info-button").innerHTML =
                "Hide";
        }
    }
    handleRoomReservation(e) {
        if (this.props.reservedRoom) {
            window.localStorage.removeItem("reserved");
            this.setReservedRoom(null);
            this.props.updateBookIcon("");
            if (!e.target.parentElement.classList.contains("reserved")) {
                this.setReservedRoom(e.target.parentElement);
                this.props.updateBookIcon("item-in-shop");
            }
        } else {
            window.localStorage.setItem("reserved", e.target.parentElement.id);
            this.setReservedRoom(e.target.parentElement);
            this.props.updateBookIcon("item-in-shop");
        }
    }
    setReservedRoom(target) {
        this.props.setReservedRoom(target);
    }
    showReservedRoom() {
        if (this.props.reservedRoom) {
            this.props.reservedRoom.classList.add("reserved");
            this.props.reservedRoom.querySelector(".reserve-button").innerHTML =
                "Cancel booking";
        }
    }

    reservationStylingOnLoad(id) {
        if (this.props.reservedRoom) {
            if (parseInt(this.props.reservedRoom.id) === id) {
                return true;
            }
        }
        return false;
    }

    render() {
        this.showRoomInfo();
        this.showReservedRoom();
        return (
            <div className="rooms">
                <div className="rooms-container">
                    {this.props.filteredRooms.map((room, index) => {
                        const reserved = this.reservationStylingOnLoad(room.id);
                        return (
                            <div
                                className={
                                    "room" + (reserved ? " reserved" : "")
                                }
                                style={{
                                    backgroundImage: "url(" + room.bg + ")",
                                    backgroundSize: "100% 100%",
                                    backgroundPosition: "center center",
                                    backgroundRepeat: "no-repeat"
                                }}
                                id={room.id}
                                key={index + room.price}
                            >
                                <p className="room-beds">
                                    Amount of beds: {room.beds}
                                </p>
                                <p className="room-price">
                                    Price: {room.price}$
                                </p>
                                <p className="room-pets">
                                    Pets: {this.arePetsAllowed(room.pets)}
                                </p>
                                <p className="room-food">
                                    Breakfast: {this.areFoodService(room.food)}
                                </p>
                                <div className="decription">
                                    {room.description}
                                </div>
                                <button
                                    className="reserve-button"
                                    onClick={this.handleRoomReservation}
                                >
                                    {reserved ? "Cancel booking" : "Book"}
                                </button>
                                <button
                                    className="info-button"
                                    onClick={this.handleInfoButtonClick}
                                >
                                    Info
                                </button>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default Rooms;

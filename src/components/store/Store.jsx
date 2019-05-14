import React from "react";

class Store extends React.Component {
    constructor(props) {
        super(props);

        this.handleFilterUpdate = this.handleFilterUpdate.bind(this);
    }

    handleFilterUpdate(e) {
        switch (e.target.classList.value) {
            case "beds-input":
                this.props.changeFilter("bedsFilter", e.target.value);
                break;
            case "price-input":
            case "price-input-range":
                this.props.changeFilter("priceFilter", e.target.value);
                break;
            case "pet-input":
                this.props.changeFilter("petFilter", e.target.checked);
                break;
            case "food-input":
                this.props.changeFilter("foodFilter", e.target.checked);
                break;
            default:
                break;
        }
    }
    filterRooms(arr) {
        //TODO: Rework
        let array = [...arr];

        if (this.props.filter.bedsFilter) {
            array = array.filter(el => el.beds >= this.props.filter.bedsFilter);
        }
        if (this.props.filter.priceFilter) {
            array = array.filter(
                el => el.price <= this.props.filter.priceFilter
            );
        }
        if (this.props.filter.petFilter) {
            array = array.filter(el => this.props.filter.petFilter === el.pets);
        }
        if (this.props.filter.foodFilter) {
            array = array.filter(
                el => this.props.filter.foodFilter === el.food
            );
        }
        console.log(array, " the array");
        return array;
    }
    componentDidMount() {
        this.props.updateRooms(require("../../data/rooms.json"));
    }
    render() {
        // prettier-ignore
        return (
            <div className="store">
                <div className="filter">
                    <label>
                        
                    </label>
                    <label>
                        Beds
                        <input value={this.props.filter.bedsFilter} onChange={this.handleFilterUpdate} className="beds-input" type="text"/>
                    </label>
                    <label>
                        Price
                        <input value={this.props.filter.priceFilter} onChange={this.handleFilterUpdate} className="price-input" type="text"/>
                        <input value={this.props.filter.priceFilter} onChange={this.handleFilterUpdate} step="25" className="price-input-range" type="range" min="150" max="1500"/>
                    </label>
                    <label>
                        Pets
                        <input checked={this.props.filter.petFilter} onChange={this.handleFilterUpdate} className="pet-input" type="checkbox"/>
                    </label>
                    <label>
                        Food
                        <input checked={this.props.filter.foodFilter} onChange={this.handleFilterUpdate} className="food-input" type="checkbox"/>
                    </label>
                </div>
                <div className="rooms">
                    {this.filterRooms(this.props.rooms).map((room, index) => {
                        return (
                            <div className="room" key={index + room.price}>
                                {room.price}
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default Store;

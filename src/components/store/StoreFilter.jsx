import React from "react";
class StoreFilter extends React.Component {
    constructor(props) {
        super(props);

        this.handleFilterUpdate = this.handleFilterUpdate.bind(this);
        this.filterRooms = this.filterRooms.bind(this);
    }

    componentDidMount() {
        let rooms = require("../../data/rooms.json");
        this.props.updateRooms(rooms);
        this.props.updateFilteredRooms(Object.values(rooms));
    }

    filterRooms() {
        // Move to StoreFilter, add global filtered rooms object
        let array = [...this.props.rooms];

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
        this.props.updateFilteredRooms(array);
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
        this.filterRooms();
    }

    render() {
        return (
            <div className="filter">
                <label htmlFor="beds-filter">Beds</label>
                <input
                    value={this.props.filter.bedsFilter}
                    onChange={this.handleFilterUpdate}
                    className="beds-input"
                    type="text"
                    id="beds-filter"
                />
                <label htmlFor="price-filter">Price</label>
                <input
                    value={this.props.filter.priceFilter}
                    onChange={this.handleFilterUpdate}
                    className="price-input"
                    type="text"
                    id="price-filter"
                />
                <input
                    value={this.props.filter.priceFilter}
                    onChange={this.handleFilterUpdate}
                    step="25"
                    className="price-input-range"
                    type="range"
                    min="150"
                    max="1500"
                />
                <input
                    checked={this.props.filter.petFilter}
                    onChange={this.handleFilterUpdate}
                    className="pet-input"
                    type="checkbox"
                    id="pets-filter"
                />
                <label htmlFor="pets-filter">Pets</label>
                <input
                    checked={this.props.filter.foodFilter}
                    onChange={this.handleFilterUpdate}
                    className="food-input"
                    type="checkbox"
                    id="food-filter"
                />
                <label htmlFor="food-filter">Food</label>
            </div>
        );
    }
}

export default StoreFilter;

import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
class HeaderContainer extends React.Component {
    render() {
        return <Header cartIcon={this.props.cartIcon} />;
    }
}

const putStateToProps = state => {
    return {
        // icon: state.he.rooms
        cartIcon: state.headerReducer.cartIcon
    };
};
// prettier-ignore
const putActionToProps = {
};

export default connect(
    putStateToProps,
    putActionToProps
)(HeaderContainer);

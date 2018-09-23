import React, {Component} from 'react'
import {connect} from 'react-redux'
import NavigationStack from './navigationStack';

class Navigation extends Component {
    render() {
        console.log(this.props);
        const {navigationState, dispatch} = this.props;
        return (
            <NavigationStack
                navigation={{
                    dispatch,
                    state: navigationState
                }}
            />
        );
    }
}

const mapStateToProps = state => ({
    navigationState: state.nav
});

export default connect(mapStateToProps)(Navigation);
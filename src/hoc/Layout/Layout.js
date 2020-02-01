import React, { Component } from 'react';
import Aux from '../Auxx/Auxx';
import classes from './Layout.module.css'
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showSideDwawer: false
    }

    sideDrowerClosedHandler = () => {
        this.setState({showSideDwawer: false})
    }

    sideDrowerToggleHandler = () => {
        this.setState((prevState) => {
            return {showSideDwawer: !prevState.showSideDwawer};
        })
    }

    drawerToggleClicked

    render () {
        return (
            <Aux>
                <Toolbar drawerToggleClicked={this.sideDrowerToggleHandler}/>
                <SideDrawer open={this.state.showSideDwawer} closed={this.sideDrowerClosedHandler}/>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        )
    }
}

export default Layout; 
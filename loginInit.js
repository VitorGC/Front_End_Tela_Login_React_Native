import React, { Component } from 'react';

import {
    Text,
    View,
    AppRegistry,
    StyleSheet,
    Navigator,

} from 'react-native';

import Login from  './tabs/LoginScreen';

export default class loginInit extends React.Component{

    render(){
        return (

            <Navigator initialRoute = {{id: 'Login'}}
            renderScene = {this.navigatorRenderScene} />

        );
    }

    navigatorRenderScene(route, navigator) {
        _navigator = navigator;
        switch (route.id){
            case 'Login':
                return ( <Login navigator = {navigator} />);
        }
    }
}

AppRegistry.registerComponent('loginInit', () => loginInit)
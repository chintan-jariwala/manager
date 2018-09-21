import * as Expo from "expo";
import React, {Component} from "react";
import {StyleProvider} from "native-base";
import getTheme from '../../native-base-theme/components';
import variables from '../../native-base-theme/variables/commonColor';
import App from '../App';
import {Platform, StatusBar, StyleSheet, View} from 'react-native';

export default class Setup extends Component {
    constructor() {
        super();
        this.state = {
            isReady: false
        };
    }

    componentWillMount() {
        this.loadFonts();
    }

    async loadFonts() {
        await Expo.Font.loadAsync({
            Roboto: require("native-base/Fonts/Roboto.ttf"),
            Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
            Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")
        });
        this.setState({isReady: true});
    }

    render() {
        if (!this.state.isReady) {
            return <Expo.AppLoading/>;
        }
        return (
            <StyleProvider style={getTheme(variables)}>
                <View style={styles.container}>
                    <App/>
                </View>
            </StyleProvider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        ...Platform.select({
            android: {
                marginTop: StatusBar.currentHeight
            }
        })
    }

});
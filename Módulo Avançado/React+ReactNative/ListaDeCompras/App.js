import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import FormScreen from "./src/Views/FormScreen";
import ListScreen from "./src/Views/ListScreen";
import HomeScreen from "./src/Views/HomeScreen";

//=============================================================================================================
//                                               STACK OPTIONS
//=============================================================================================================

const RootStack = createStackNavigator(
    {
        Home: HomeScreen,
        Form: FormScreen,
        List: ListScreen
    },
    {
        initialRouteName: "Home",
        /* The header config from HomeScreen is now here */
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: "#345beb"
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
                fontWeight: "bold",
                alignItems: "center",
                justifyContent: "center"
            }
        }
    }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
    render() {
        return <AppContainer />;
    }
}

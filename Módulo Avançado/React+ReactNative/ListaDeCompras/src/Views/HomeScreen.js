import React from "react";
import {
    View,
    Button,
    Text,
    Alert,
    Image,
    TouchableHighlight
} from "react-native";
import style from "../../app_style";

//=============================================================================================================
//                                                 HOME SCREEN
//=============================================================================================================
export default class HomeScreen extends React.Component {
    static navigationOptions = {
        title: "Listinha"
    };

    render() {
        return (
            <View
                style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center"
                }}>
                <Image
                    style={{ width: 280, height: 280, marginBottom: 30 }}
                    source={{ uri: "https://i.ibb.co/RjkcjLq/logo.png" }}
                />

                <TouchableHighlight
                    onPress={() => this.props.navigation.navigate("Form")}>
                    <Text style={style.homebutton}>Cadastrar itens</Text>
                </TouchableHighlight>

                <TouchableHighlight
                    onPress={() => this.props.navigation.navigate("List")}>
                    <Text style={style.homebutton}>Ver minha lista</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

import React from "react";
import {
    View,
    Text,
    TextInput,
    Button,
    Alert,
    Image,
    TouchableHighlight
} from "react-native";
import cadastrarItem from "../services/cadastrarService";
import style from "../../app_style";

//=============================================================================================================
//                                                 FORM SCREEN
//=============================================================================================================
export default class FormScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nome: "",
            quantidade: ""
        };
    }
    static navigationOptions = ({ navigation, navigationOptions }) => {
        return {
            title: navigation.getParam("otherParam", "Adicionar a lista"),
            headerStyle: {
                backgroundColor: navigationOptions.headerTintColor
            },
            headerTintColor: navigationOptions.headerStyle.backgroundColor
        };
    };

    render() {
        /*importando variáveis do navigation */
        const { navigation } = this.props;

        return (
            <View
                style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center"
                }}>
                <Image
                    style={{ width: 230, height: 230, marginTop: 50 }}
                    source={{ uri: "https://i.ibb.co/wY0DFL1/cadastro.png" }}
                />

                {/* Botão para o home, colocar no cabeçalho no futuro */}
                <TouchableHighlight
                    title="Home"
                    onPress={() => this.props.navigation.navigate("Home")}>
                    <Text style={style.backhome}>&larr; Home</Text>
                </TouchableHighlight>

                <View>
                    <TextInput
                        style={style.forminput}
                        type="text"
                        placeholder="nome do item"
                        value={this.state.nome}
                        onChangeText={y => {
                            this.setState({ nome: y });
                        }}
                    />
                    <TextInput
                        style={style.forminput}
                        type="text"
                        placeholder="quantidade"
                        value={this.state.quantidade}
                        onChangeText={t => {
                            this.setState({ quantidade: t });
                        }}
                    />

                    {/* Chama a função cadastrar do component pai (HomeScreen) */}
                    <TouchableHighlight
                        onPress={() => {
                            const value = {
                                nome: this.state.nome,
                                quantidade: this.state.quantidade
                            };
                            cadastrarItem(value);
                            this.props.navigation.navigate("List");
                        }}>
                        <Text style={style.cadastrar}>Cadastrar &#10003;</Text>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }

    //let item = {nome: this.state.nome, quantidade: this.state.quantidade}
}

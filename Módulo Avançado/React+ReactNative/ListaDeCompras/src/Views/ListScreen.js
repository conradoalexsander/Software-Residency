import React from "react";
import {
    View,
    Button,
    Text,
    FlatList,
    TouchableHighlight,
    Image
} from "react-native";
import itensApi from "../api/itensApi";
import deletarItem from "../services/deletarService";
import style from "../../app_style";

//=============================================================================================================
//                                                 LIST SCREEN
//=============================================================================================================
export default class ListScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            produtos: []
        };
    }
    static navigationOptions = ({ navigation, navigationOptions }) => {
        console.log(navigationOptions);
        return {
            title: navigation.getParam("otherParam", "Sua lista de compras"),
            headerStyle: {
                backgroundColor: navigationOptions.headerTintColor
            },
            headerTintColor: navigationOptions.headerStyle.backgroundColor
        };
    };

    componentDidMount() {
        if (this.state.produtos.length === 0) {
            itensApi
                .get("api/Produtos")
                .then(res => {
                    if (res.status === 200) {
                        this.setState({ produtos: res.data });
                        console.log(res.data);
                    } else {
                        console.log(res.status);
                        console.log(res.data);
                    }
                })
                .catch(erro => console.log(erro));
        }
    }

    render() {
        /* 2. Get the param, provide a fallback value if not available */
        let { navigation } = this.props;

        return (
            <View
                style={{
                    flex: 0.5,
                    alignItems: "center",
                    justifyContent: "center"
                }}>
                <Image
                    style={{ width: 200, height: 200, marginTop: 300 }}
                    source={{
                        uri: "https://i.ibb.co/wMr3hgq/minha-listinha.png"
                    }}
                />

                <TouchableHighlight
                    title="Home"
                    onPress={() => this.props.navigation.navigate("Home")}>
                    <Text style={style.listahome}>&larr; Home</Text>
                </TouchableHighlight>

                <View>
                    <FlatList
                        data={this.state.produtos}
                        renderItem={({ item, index }) => {
                            return (
                                <View
                                    style={{
                                        flex: 1,
                                        justifyContent: "space-around",
                                        flexDirection: "row",
                                        width: 380,
                                        justifyContent: "center",
                                        alignItems: "center",
                                        marginTop: 30,
                                        backgroundColor: "#f0f0f5"
                                    }}>
                                    <Text style={style.nomeitem}>
                                        {item.nome}
                                    </Text>

                                    <Text style={style.qtditem}>
                                        {" "}
                                        Quantidade: {item.quantidade}
                                    </Text>

                                    <TouchableHighlight
                                        title="Apagar"
                                        onPress={() => {
                                            deletarItem(index);

                                            if (
                                                this.state.produtos.length === 0
                                            ) {
                                                itensApi
                                                    .get("api/Produtos")
                                                    .then(res => {
                                                        if (
                                                            res.status === 200
                                                        ) {
                                                            this.setState({
                                                                produtos:
                                                                    res.data
                                                            });
                                                            console.log(
                                                                res.data
                                                            );
                                                        } else {
                                                            console.log(
                                                                res.status
                                                            );
                                                            console.log(
                                                                res.data
                                                            );
                                                        }
                                                    })
                                                    .catch(erro =>
                                                        console.log(erro)
                                                    );
                                            }

                                            console.log(this.state);
                                        }}>
                                        <Text style={style.apagar}>&#215;</Text>
                                    </TouchableHighlight>
                                </View>
                            );
                        }}
                    />
                </View>
            </View>
        );
    }
}

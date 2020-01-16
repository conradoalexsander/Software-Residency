import React, { Component } from "react";
import { Text, FlatList, View } from "react-native";

export default class ListaComStyle extends Component {
    render() {
        return (
            <FlatList
                data={this.props.dados}
                renderItem={({ item }) => {
                    return (
                        <View>
                            <Text>{JSON.stringify(item)}</Text>
                            <Button
                                transparent
                                title="Apagar"
                                onPress={() => {
                                    (this.setState = {
                                        produtos: this.props.navigation.getParam(
                                            "remover"
                                        )(item)
                                    }),
                                        (this.setState = {
                                            produtos: this.props.navigation.getParam(
                                                "itens"
                                            )
                                        }),
                                        this.props.navigation.navigate("List"),
                                        console.log(
                                            this.props.navigation.getParam(
                                                "remover"
                                            )(item)
                                        ),
                                        console.log(this.state);
                                }}
                            />
                        </View>
                    );
                }}
            />
        );
    }
}

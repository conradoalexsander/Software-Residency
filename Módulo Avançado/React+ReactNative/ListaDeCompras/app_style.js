import {StyleSheet} from "react-native";

const style = StyleSheet.create({
    homebutton: {
        fontSize: 18,
        backgroundColor: "#1389EB",
        color: "white",
        padding: 6,
        fontFamily: "Trebuchet MS",
        width: 150,
        textAlign: "center",
        borderWidth: 1,
        borderColor: "white",
    },
    forminput: {
        fontSize: 16,
        borderWidth: 0.5,
        borderColor: "grey",
        margin: 5,
        padding: 6,
        paddingRight: 40,
        width: 280,
        fontFamily: "Trebuchet MS"
    },
    backhome: {
        fontSize: 16,
        color: "#1389EB",
        padding: 2,
        margin: 5,
        marginBottom: 25,
        fontFamily: "Trebuchet MS",
        width: 80,
        textAlign: "center",
        marginRight: 200
    },
    cadastrar: {
        fontSize: 18,
        color: "white",
        backgroundColor: "#01C98A",
        borderRadius: 3,
        textAlign: "center",
        padding: 5,
        width: 120,
        alignSelf: "center",
        marginTop: 30,
        fontFamily: "Trebuchet MS"
    },
    nomeitem: {
        fontSize: 18,
        textAlign: "left",
        fontFamily: "Trebuchet MS",
        fontWeight: "bold",
        width: 100,
        margin: 5,
        paddingBottom:20,
        paddingTop:20,
        paddingLeft:5,
    },
    qtditem: {
        fontSize: 18,
        textAlign: "left",
        fontFamily: "Trebuchet MS",
        width: 100,
        flex: 1,
        flexDirection: "row",
        margin: 5,
    },
    apagar: {
        color: "#FE0034",
        fontWeight: "bold",
        padding: 20,
        textAlign: "center",
        fontSize: 28,
        fontFamily: "Trebuchet MS",
        marginRight:5,
    },
    listahome: {
        fontSize: 16,
        color: "#1389EB",
        padding: 2,
        margin: 5,
        fontFamily: "Trebuchet MS",
        width: 80,
        marginRight: 260
    },
});

export default style;
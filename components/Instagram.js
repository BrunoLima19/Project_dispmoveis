import { SafeAreaView, StatusBar, TouchableOpacity, View, Image, StyleSheet } from "react-native";
import {Feather} from "@expo/vector-icons"
import Constants from "expo-constants"

const instagram_logo = "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png"

export default function Instagram() {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="dark"/>
            <View style={styles.header}>
                <TouchableOpacity>
                    <Feather name="camera" size={24}/>
                </TouchableOpacity>
                <Image source={{uri:instagram_logo}} style={styles.logo}/>
                <TouchableOpacity>
                    <Feather name="send" size={24}/>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    logo: {
        flex: 1,
        height: 30,
        resizeMode: "contain"
    },
    header: {
        borderBottomWidth: 1,
        borderBottomColor: "#dbdbdb",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItens: "center",
        paddingHorizontal: 16,
        height: 44

    },
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight
    }
})
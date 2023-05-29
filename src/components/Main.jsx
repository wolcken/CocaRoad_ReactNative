import React from "react";
import { Text, View } from "react-native";
import RegionsList from "./RegionsList";

const Main = () => {
    return (
        <View style={{ flexGrow: 1 }}>
            <RegionsList/>
        </View>
    )
}

export default Main;
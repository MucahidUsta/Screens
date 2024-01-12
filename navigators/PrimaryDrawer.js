import { createDrawerNavigator } from "@react-navigation/drawer"
import HomeScreen from "../screens/HomeScreen"
import AboutScreen from "../screens/AboutScreen"
import ContactScreen from "../screens/ContactScreen"
import AboutTopTabs from "./AboutTopTabs"

const Drawer = createDrawerNavigator()
const PrimaryDrawer = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="About" component={AboutTopTabs} options={{ drawerLabel: "Hakkımızda",headerTitle:"Hakkımızda Ekranı" }} />
            <Drawer.Screen name="Contact" component={ContactScreen} />
        </Drawer.Navigator>
    )
}

export default PrimaryDrawer;
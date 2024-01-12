import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Goals, Mission, Vision } from "../screens/AboutScreen";

const Tab = createMaterialTopTabNavigator()

const AboutTopTabs = () => {
    return (
        <Tab.Navigator  screenOptions={{
            tabBarLabelStyle: { fontSize: 16 },
            tabBarIndicatorStyle:{ backgroundColor: 'red' },
          }} >
            <Tab.Screen name="Vision" component={Vision} />
            <Tab.Screen name="Mission" component={Mission} />
            <Tab.Screen name="Goals" component={Goals} />
        </Tab.Navigator>
    )
}

export default AboutTopTabs;

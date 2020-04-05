import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer, createSwitchNavigator, } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from "react-navigation-drawer";
import { createBottomTabNavigator } from 'react-navigation-tabs';

//Components
import MyDrawer from './components/MyDrawer';
import MyHeader from './components/MyHeader';

//Container
import Home from './container/Home';
import Login from './container/Login';
import Settings from './container/Settings';
import MyAccount from './container/MyAccount';
import Profile from './container/Profile';
import Tab1 from './container/Tab1';
import Register from './container/Register';



const TabBar = createBottomTabNavigator({
	Home : {
		screen : Home,
	},
	Settings : {
		screen : Settings,
	},
	Tab1 : {
		screen : Tab1,
	}  
});

const StackNavigator = createStackNavigator(
	{
		TabBar : {
			screen : TabBar
		},
		MyAccount : {
			screen : MyAccount
		},
		Profile : {
			screen : Profile
		}
	},
	{
		defaultNavigationOptions: {
				header: (navigation)=> <MyHeader navigation={navigation} />
			},

	}
);


const DrawerNavigator = createDrawerNavigator(
	{
		Home : {
			screen : StackNavigator
		}
	},
	{
		contentComponent: MyDrawer,
	}


);

const LoginStack = createStackNavigator (
	{
		Login : {
			screen : Login
		},
		Register : {
			screen : Register,
		}
	},
	{
		headerMode:'none'
	}
);

const PrimarySwitchNavigator = createSwitchNavigator(
	{
		LoginStack : {
			screen : LoginStack
		},
		Home : {
			screen : DrawerNavigator,
		}
	},
	{
		headerMode:'none'
	}
);


export default createAppContainer(PrimarySwitchNavigator);
import React from 'react';
import { createAppContainer, createSwitchNavigator, } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from "react-navigation-drawer";
import { createBottomTabNavigator } from 'react-navigation-tabs';

//Components
import { MyDrawer } from './components';

//Container
import Home from './container/Home';
import Login from './container/Login';
import Settings from './container/Settings';
import MyAccount from './container/MyAccount';
import Profile from './container/Profile';
import Library from './container/Library';
import Tab1 from './container/Tab1';
import Register from './container/Register';
import {CustomTabNav} from './components/CustomTabNav';



const TabBar = createBottomTabNavigator({
	Home: {
		screen: Home,
	},
	Library:{
		screen:Library
	},
	Profile: {
		screen: Profile
	}
	// Tab1: {
	// 	screen: Tab1,
	// }
},{tabBarComponent: CustomTabNav}, );

const StackNavigator = createStackNavigator(
	{
		TabBar: {
			screen: TabBar
		},
		MyAccount: {
			screen: MyAccount
		},
		Tab1: {
			screen: Tab1
		},
		Settings: {
			screen: Settings,
		},
	},
	{
		defaultNavigationOptions: {
			// header: (navigation) => <MyHeader  navigation={navigation} />
			header : null,
		},

	}
);


const DrawerNavigator = createDrawerNavigator(
	{
		Home: {
			screen: StackNavigator
		}
	},
	{
		contentComponent: MyDrawer,
	}


);

const LoginStack = createStackNavigator(
	{
		Login: {
			screen: Login
		},
		Register: {
			screen: Register,
		}
	},
	{
		headerMode: 'none'
	}
);

const PrimarySwitchNavigator = createSwitchNavigator(
	{
		LoginStack: {
			screen: LoginStack
		},
		Home: {
			screen: DrawerNavigator,
		}
	},
	{
		headerMode: 'none'
	}
);


export default createAppContainer(PrimarySwitchNavigator);
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
import Search from './container/Search';
import Notification from './container/Notification';
import MyAccount from './container/MyAccount';
import Profile from './container/Profile';
import Library from './container/Library';
import Tab1 from './container/Tab1';
import Register from './container/Register';
import {CustomTabNav} from './components/CustomTabNav';
import Categories from './container/Categories';
import Books from './container/Books';



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
		Search: {
			screen: Search,
		},
		Notification: {
			screen: Notification,
		},
		Categories:{
			screen:Categories
		},
		Books:{
			screen:Books
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
		// LoginStack: {
		// 	screen: Categories
		// },
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
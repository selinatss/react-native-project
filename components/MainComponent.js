import React, {Component} from 'react';
import Menu from './MenuComponent';
import Home from './HomeComponent';
import Dishdetail from './DishdetailComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import { View, Platform } from 'react-native';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

const MenuNavigator = createStackNavigator({
    Menu : {screen: Menu,
         navigationOptions: ({navigation}) => ({
           headerLeft: <Icon name='menu' size={24}
                 color='white'
                 onPress={() => navigation.toggleDrawer()}
                 />
         }) 
    },
    Dishdetail : {screen: Dishdetail},
    Contact : {screen: Contact},
    About : {screen: About}
}, {
    initialRouteName: 'Menu',
    navigationOptions: {
        headerStyle: {
            backgroundColor: '#512DA8'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            color: '#fff'
        }
    }
});

const  HomeNavigator = createStackNavigator({
    Home : {screen: Home,
      navigationOptions: ({navigation}) => ({
      headerLeft: <Icon name='menu' size={24}
            color='white'
            onPress={() => navigation.toggleDrawer()}
            />
    }) }
}, {
    navigationOptions: {
        headerStyle: {
            backgroundColor: '#512DA8'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            color: '#fff'
        }
    }
});

const  ContactNavigator = createStackNavigator({
  Contact : {screen: Contact},
}, {
  navigationOptions: {
      headerStyle: {
          backgroundColor: '#512DA8'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
          color: '#fff'
      }
  }
});

const  AboutNavigator = createStackNavigator({
  About : {screen: About}
}, {
  navigationOptions: {
      headerStyle: {
          backgroundColor: '#512DA8'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
          color: '#fff'
      }
  }
});

const MainNavigator = createDrawerNavigator({
    Home: 
      { screen: HomeNavigator,
        navigationOptions: {
          title: 'Home',
          drawerLabel: 'Home'
        }
      },
      About: 
      { screen: AboutNavigator,
        navigationOptions: {
          title: 'About',
          drawerLabel: 'About Us'
        } 
      },  
    Menu: 
      { screen: MenuNavigator,
        navigationOptions: {
          title: 'Menu',
          drawerLabel: 'Menu'
        } 
      },
    Contact: 
      { screen: ContactNavigator,
        navigationOptions: {
          title: 'Contact',
          drawerLabel: 'Contact Us'
        } 
      }
}, {
  drawerBackgroundColor: '#D1C4E9',
});

class Main extends Component{
    render() {
        return(
            <View style={{ flex:1, paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight}}>
              <MainNavigator/>
            </View>
        );
    }
}

export default Main;
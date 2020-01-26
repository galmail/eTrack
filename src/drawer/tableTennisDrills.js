import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { Icon } from 'react-native-elements';

import TableTennisDrills from '../views/tableTennisDrills';

import config from '../config/stack';

const TableTennisDrillsDrawerItem = createStackNavigator({
  TableTennisDrills: {
    screen: TableTennisDrills,
    navigationOptions: ({ navigation }) => ({
      title: 'Exercises',
      headerLeft: (
        <Icon
          name="menu"
          size={30}
          type="entypo"
          iconStyle={{ paddingLeft: 10 }}
          onPress={navigation.toggleDrawer}
        />
      ),
    }),
  },
}, config);

TableTennisDrillsDrawerItem.navigationOptions = {
  drawerLabel: 'Table Tennis Drills',
  drawerIcon: ({ tintColor }) => (
    <Icon
      name="rowing"
      size={30}
      iconStyle={{
        width: 30,
        height: 30,
      }}
      type="material"
      color={tintColor}
    />
  ),
};

export default TableTennisDrillsDrawerItem;

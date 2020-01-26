import React, { Component } from 'react';
import { ScrollView, View, StyleSheet, Platform } from 'react-native';
import colors from '../config/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  Tile,
  Card,
} from 'react-native-elements';

import { PricingCard, Text } from 'react-native-elements';

class TableTennisDrills extends Component {
  render() {
    return (
      <ScrollView style={{ backgroundColor: 'white' }}>
        <Card
          containerStyle={{ marginTop: 15, marginBottom: 15 }}
          title="BASICS"
        >

          <View style={styles.viewContainer}>
            <Tile
              imageSrc={require('../images/drills/basics/fh.png')}
              imageProps={{
                resizeMode: "contain"
              }}
              title="Forehand Drill"
              // titleStyle={{ fontSize: 20 }}
              // activeOpacity={1}
              // featured
              // caption="aaaa"
              // width={350}
              // height={200}
              // contentContainerStyle={{ height: 70 }}
            />
          </View>
        </Card>

        
        <PricingCard
          color={colors.secondary}
          title="Starter"
          price="$19"
          info={['10 Users', 'Basic Support', 'All Core Features']}
          button={{ title: 'GET STARTED', icon: 'flight-takeoff' }}
        />
        <PricingCard
          color={colors.secondary2}
          title="Enterprise"
          price="$49"
          info={['100 Users', 'One on One Support', 'All Core Features']}
          button={{ title: 'GET STARTED', icon: 'flight-takeoff' }}
        />
      </ScrollView>
    );
  }
}

TableTennisDrills.navigationOptions = {
  title: 'My Table Tennis Drills',
};

const styles = StyleSheet.create({
  viewContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default TableTennisDrills;

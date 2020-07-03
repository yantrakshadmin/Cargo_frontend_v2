import React from 'react';
import { Text, View} from 'react-native';
import { dashboardStyle } from '../styles/advanceStyles';

export const DashboardMenuComponent =({ first, second, third, fourth })=>{
  return (
    <View style={dashboardStyle.topMenuContainer}>
      <View style={dashboardStyle.row}>
        <View style={[dashboardStyle.topCardBody('#63c2de'), dashboardStyle.row]}>
          <Text style={[dashboardStyle.topCardText, { flex: 5 }]}>{first.title}</Text>
          <Text style={[dashboardStyle.topCardText, { flex: 1 }]}>{first.value}</Text>
        </View>
        <View style={[dashboardStyle.topCardBody('#f86b6a'), dashboardStyle.row]}>
          <Text style={[dashboardStyle.topCardText, { flex: 5 }]}>{second.title}</Text>
          <Text style={[dashboardStyle.topCardText, { flex: 1 }]}>{second.value}</Text>
        </View>
      </View>
      <View style={dashboardStyle.row}>
        <View style={[dashboardStyle.topCardBody('#ffc23d'), dashboardStyle.row]}>
          <Text style={[dashboardStyle.topCardText, { flex: 5 }]}>{third.title}</Text>
          <Text style={[dashboardStyle.topCardText, { flex: 1 }]}>{third.value}</Text>
        </View>
        <View style={[dashboardStyle.topCardBody('#20a8d8'), dashboardStyle.row]}>
          <Text style={[dashboardStyle.topCardText, { flex: 5 }]}>{fourth.title}</Text>
          <Text style={[dashboardStyle.topCardText, { flex: 1 }]}>{fourth.value}</Text>
        </View>
      </View>
    </View>
  );
}



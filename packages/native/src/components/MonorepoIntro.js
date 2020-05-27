import React from 'react';
import { SafeAreaView, ScrollView, View, Text, StatusBar } from 'react-native';

import { styles } from 'styles/default';
import { HelloButton } from './HelloButton';

export const MonorepoIntro = () => (
  <>
    <StatusBar barStyle='dark-content' />
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior='automatic' style={styles.scrollView}>
        <View style={styles.body}>
          <View style={{ ...styles.sectionContainer, alignItems: 'center', flex: 1 }}>
            <Text style={styles.sectionTitle}>Monorepo Introduction</Text>
          </View>
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>React</Text>
            <Text style={styles.sectionDescription}>
              Different guides are available in master branches. Visit
              https://github.com/Faisal-Manzer/react-and-react-native-monorepo
            </Text>
          </View>
          <HelloButton />
        </View>
      </ScrollView>
    </SafeAreaView>
  </>
);

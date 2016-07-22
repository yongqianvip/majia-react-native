'use strict';

import React from 'react';
import {Provider} from 'react-redux';
import configureStore from './Store/configure-store';
import {
  View,
  Navigator,
  StyleSheet,
} from 'react-native'
import App from './Containers/app';
import CheckUpdate from './Common/CheckUpdate.js'

const store = configureStore();

class Root extends React.Component {
	_renderScene(route, navigator) {
		let Component = route.component;
		console.log('route.id is ___ ', route.id);
		return <Component {...route.params} navigator={navigator} />
	}
	_configureScene(route) {
		return Navigator.SceneConfigs.FloatFromRight;
	}

	render() {
		return (
			<Provider store={store}>
				<View style={styles.mainView}>
				    <Navigator
				        initialRoute={{ name: 'App', component: App}}
				        configureScene={ this._configureScene }
				        renderScene={this._renderScene} />
				</View>
      		</Provider>
		)
	}
}


const styles = StyleSheet.create({
  mainView: {
          flex: 1,
          justifyContent: 'flex-start',
          alignItems: 'stretch',
          backgroundColor:  'lightgray' ,
        }
});

export default Root;

				
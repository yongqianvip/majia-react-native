
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {
	View,
	Text,
	TouchableOpacity,
	StyleSheet,
} from 'react-native'

class Tabbar extends React.Component {
	render() {
		console.log("tabs ",this.props.tabs);
		return (
			<View style={styles.tabbar}>
				{this.props.tabs.map((tab,i)=>{
					return  <TouchableOpacity key={tab} onPress={() => this.props.goToPage(i)} style={styles.tab}>
						<View style={styles.tabItem}>

							<Text style={{backgroundColor: 'white'}}>
								{this.props.tabNames[i]}
							</Text>
						</View>
					</TouchableOpacity>
				})}
			</View>
		)
	}
}

const styles = StyleSheet.create({
	tabbar: {
		paddingBottom: 0,
		marginBottom:0,
		height: 49,
		backgroundColor: 'orange',
		flexDirection: 'row'
	},
	tab: {
		flex:1,
		backgroundColor: 'white',
		alignItems: 'center',
		justifyContent: 'center',
	},
	tabItem: {
		width: 30,
		height: 30,
	}
})


Tabbar.propTypes = {
	goToPage: React.PropTypes.func,
	activeTab: React.PropTypes.number,
	tabNames: React.PropTypes.array.isRequired,
	tabIconsName: React.PropTypes.array.isRequired,
}
export default Tabbar;

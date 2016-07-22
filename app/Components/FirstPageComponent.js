'use strict';

import React from 'react';
import {
	AppRegistry,
	Image,
	ListView,
	StyleSheet,
	Text,
	View,
	Navigator,
	TouchableHighlight,
	TouchableOpacity
} from 'react-native';
import Tabbar from '../Common/Tabbar.js'
import ScrollableTabView from 'react-native-scrollable-tab-view'
import SecondPageComponent from './SecondPageComponent'

var REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json' 

export default class FirstPageComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			dataSource: new ListView.DataSource({
				rowHasChanged: (row1, row2) => row1 !== row2,
			}),
			loaded: false,
            tabNames:['tab1','ta2','tab3','tab4'],
            tabIconsName: ['ios-paper','ios-albums','ios-paper-plane','ios-person-add'],
		};
	}
    componentDidMount() {
    	this.fetchData();
    }

    fetchData() {
    	fetch(REQUEST_URL)
    		.then((response) => response.json())
    		.then((responseData) => {
    			this.setState({
    				dataSource: this.state.dataSource.cloneWithRows(responseData.movies),
    				loaded: true,
    			});
    		})
    		.done();
    }
    _pressButton(rowID) {
        const { navigator } = this.props;
        //为什么这里可以取得 props.navigator?请看上文:
        //<Component {...route.params} navigator={navigator} />
        //这里传递了navigator作为props
        if(navigator) {
            navigator.push({
                name: 'SecondPageComponent',
                component: SecondPageComponent,
                params: {
                    id: rowID
                }
            })
        }
    }
    goToPage(){
        console.log("gogogogoogogogo");
    }
    render() {
    	if (!this.state.loaded) {
    		return this.renderLoadingView();
    	}
        return (

            
            <ScrollableTabView
                renderTabBar={()=> <Tabbar goToPage={this.goToPage} tabs={['2','3','4','5']} tabNames={this.state.tabNames} tabIconsName={this.state.tabIconsName} />} tabBarPosition='bottom'>
                
            </ScrollableTabView>

        );
    }
    renderSectionHeaderFunc(sectionData, sectionID) {
    	console.log('---++--',sectionID);
    	return (
    		<View style={styles.sectionHeader}>
    			<Text>分段哦哦哦{ sectionID }</Text>
    		</View>
    		)
    }
    renderLoadingView() {
		return (
			<TouchableOpacity onPress={ this._pressButton.bind(this) }>
				<View style={styles.container}>
					<Text>
						加载中。。。。。。
					</Text>
				</View>
			</TouchableOpacity>
		);
    }

    renderItem(rowData, sectionID, rowID, highlightRow) {
		return (
			<TouchableOpacity onPress={ this._pressButton.bind(this, rowID) }>
				<View style={styles.container}>
                    <View style={styles.leftPart}>
                        <Text style={styles.leftText}>左左</Text>
                    </View>
					<View style={styles.rightContainer}>
						<Text style={styles.rowId}>{ 1 + parseInt(rowID)}</Text>
						<Text style={styles.title}>{rowData.title}</Text>
					</View>
				</View>
			</TouchableOpacity>
		);
    }



}
const styles = StyleSheet.create({
    all: {
        flex: 1,

    },
    header:{
        height: 64,
        backgroundColor: '#3edc90'
    },
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start', // 水平靠左
    alignItems: 'center', // 垂直居中
    // backgroundColor: '#F5cCF5',
  },
  thumbnail:{
    paddingTop: 20,
    paddingBottom: 20,
    width: 53,
    height: 81
  },
  leftPart:{
    width: 100
  },
  leftText:{
    flex:1,
    backgroundColor: 'yellow'
  },
  rightcontainer:{
    flex: 1,
    backgroundColor: 'green',
  },
  title: {
    // marginBottom: 20,
    flex: 1,
    marginTop: 0,
    height: 44,
    // backgroundColor: 'yellow',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  year:{
    fontSize:16,
  },
  listView: {
    backgroundColor: '#F5FCFF',
  },
  sectionHeader:{
  	height: 40,
  	backgroundColor: 'green'
  }
});

// const styles = {
// 	title: {
// 		flex: 1,
// 		backgroundColor: 'yellow',
// 	},
// 	listView: {
// 		paddingTop: 20,
// 		backgroundColor: '#95FCFF',
// 	},
// }
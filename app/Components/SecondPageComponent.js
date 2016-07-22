// import React from 'react';
// import {
//     View,
//     Navigator,
//     Text,
//     TouchableOpacity
// } from 'react-native';

// import FirstPageComponent from './FirstPageComponent';

// export default class SecondPageComponent extends React.Component {

// 	constructor(props) {
//         super(props);
//         this.state = {
//             id: null
//         }
//     }
//     componentDidMount() {
//         //这里获取从FirstPageComponent传递过来的参数: id
//         this.setState({
//             id: this.props.id
//         });
//     }
//     _pressButton() {
//         const { navigator } = this.props;
//         if(navigator) {
//             //很熟悉吧，入栈出栈~ 把当前的页面pop掉，这里就返回到了上一个页面:FirstPageComponent了
//             navigator.pop();
//         }
//     }

//     render() {
// 		return (
// 			<View style={styles.mainView}>
// 				<TouchableOpacity onPress={this._pressButton.bind(this)}>
// 					<Text>点我跳回去 { this.state.id }</Text>
// 				</TouchableOpacity>
// 			</View>
// 	    );
//     }
// }
// const styles = StyleSheet.create({
//   mainView: {
//           flex: 1,
//           justifyContent: 'flex-start',
//           alignItems: 'stretch',
//           backgroundColor:  'lightgray' ,
//         }
// });

'use strict';

import React from 'react';
import {
    View,
    Navigator,
    Text,
    TouchableOpacity,
    StyleSheet,
    NativeModules,
    Platform
} from 'react-native';

import FirstPageComponent from './FirstPageComponent';

export default class SecondPageComponent extends React.Component {

	constructor(props) {
        super(props);
        this.state = {
            id: null
        }
    }
    componentDidMount() {
        //这里获取从FirstPageComponent传递过来的参数: id
        this.setState({
            id: this.props.id
        });
    }
    _pressButton() {
        const date = new Date();
        console.log("date date = ",date.getTime());
        let now = date.getTime();

        NativeModules.CalendarManager.addEvent('Birthday Party', '4 Privet Drive, Surrey', now, (error, result) => {
            if (error) {
                console.error(error);
            } else {
                console.log("%%%%%%%%%%%%% ",result);
              // this.setState({events: events});
            }
        }); // 把日期以unix时间戳形式传递    

        // const { navigator } = this.props;
        // if(navigator) {
        //     //很熟悉吧，入栈出栈~ 把当前的页面pop掉，这里就返回到了上一个页面:FirstPageComponent了
        //     navigator.pop();
        // }
    }

    render() {
		return (
            <View style={styles.all}>
                <View style={styles.header}>
                    <View style={styles.titleView}>
                        <Text style={styles.navTitle}>{ parseInt(this.props.id) + 1 }</Text>
                    </View>
                </View>
                <View style={styles.naviBar}>
                    <Text style={styles.naviBarTitle}>标题页</Text>
                </View>

                <View style={styles.backView}>
                    <TouchableOpacity onPress={this._pressButton.bind(this)}>
                        <Text style={styles.mainText}>返回上一页面 { this.state.id }</Text>
                    </TouchableOpacity>
                </View>
                
			</View>
	    );
    }
}
const styles = StyleSheet.create({
    all: {
        flex: 1,
        backgroundColor: 'white'
    },
    header:{
        paddingTop: 35,
        height: 64,
        backgroundColor: '#3edc90',

    },
    titleView: {
        marginLeft : 44,
        marginRight: 44,
        // backgroundColor: 'yellow',
        alignItems: 'center',
    },
    navTitle: {
        flex:1,
        // backgroundColor: 'lightgray',
        fontSize: 18,
        alignItems: 'center',
        color: 'black',
    },

    naviBar: {
        height: 64,

    },
    naviBarTitle: {
        flex: 1,
        fontSize: 18,
        backgroundColor: 'gray'
    },
    backView:{
        backgroundColor: 'yellow'
    }

});


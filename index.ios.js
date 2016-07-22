
import Root from './app/root.js'
import {
  AppRegistry
} from 'react-native'


AppRegistry.registerComponent('majia', () => Root);

// import NavigationBar from 'react-native-navbar'
// import Root from './app/root.js'
// import React from 'react';
// 
// import {
//   AppRegistry,
//   View,
//   Navigator,
//   StyleSheet,
//   Text,
// } from 'react-native'
// import FirstPageComponent from './app/Components/FirstPageComponent.js';

// class majia extends React.Component {
//     _renderScene(route, navigator) {
//         let Component = route.component;
//         console.log('route.id is ___ ', route.id);
//         return <Component {...route.params} navigator={navigator} />
//     }
//     _configureScene(route) {
//       return Navigator.SceneConfigs.FloatFromRight;
//     }
//     render() {
//         let defaultName = 'FirstPageComponent';
//         let defaultComponent = FirstPageComponent;
      
//         const rightButtonConfig = {
//           title: 'Next',
//           handler: () => alert('hello!'),
//         }
//         return (
//           <View style={styles.mainView}>
//               <Navigator
//                 initialRoute={{ name: defaultName, component: defaultComponent}}
//                 configureScene={ this._configureScene }
//                 renderScene={this._renderScene} />
//           </View>
//         );
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
// 
// AppRegistry.registerComponent('majia', () => majia);

// <NavigationBar
//               title={{ title:  '首页' , tintColor: 'black', }}
//               leftButton={{ title: '', }}
//               rightButton={rightButtonConfig}
//               style={{ backgroundColor: "white", }}
//               statusBar={{ tintColor: "white", }}/>

// // import React, {
// //   Component,
// // } from 'react';

// // import {
// //   AppRegistry,
// //   Image,
// //   ListView,
// //   StyleSheet,
// //   Text,
// //   View,
// // } from 'react-native';

// // var API_KEY = '7waqfqbprs7pajbz28mqf6vz';
// // var API_URL = 'http://api.rottentomatoes.com/api/public/v1.0/lists/movies/in_theaters.json';
// // var PAGE_SIZE = 25;
// // var PARAMS = '?apikey=' + API_KEY + '&page_limit=' + PAGE_SIZE;
// // var REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json' //API_URL + PARAMS;

// // class majia extends Component {
// //   constructor(props) {
// //     super(props);
// //     this.state = {
// //       dataSource: new ListView.DataSource({
// //         rowHasChanged: (row1, row2) => row1 !== row2,
// //       }),
// //       loaded: false,
// //     };
// //   }

// //   componentDidMount() {
// //     this.fetchData();
// //   }

// //   fetchData() {
// //     fetch(REQUEST_URL)
// //       .then((response) => response.json())
// //       .then((responseData) => {
// //         this.setState({
// //           dataSource: this.state.dataSource.cloneWithRows(responseData.movies),
// //           loaded: true,
// //         });
// //       })
// //       .done();
// //   }

// //   render() {
// //     if (!this.state.loaded) {
// //       return this.renderLoadingView();
// //     }

// //     return (
// //       <ListView
// //         dataSource={this.state.dataSource}
// //         renderRow={this.renderMovie}
// //         style={styles.listView}/>
// //     );
// //   }

// //   renderLoadingView() {
// //     return (
// //       <View style={styles.container}>
// //         <Text>
// //           Loading movies...
// //         </Text>
// //       </View>
// //     );
// //   }

// //   renderMovie(rowData, sectionID, rowID, highlightRow) {
// //     return (
// //       <View style={styles.container}>
// //         <Image
// //           source={{uri: rowData.posters.thumbnail}}
// //           style={styles.thumbnail}
// //         />
// //         <View style={styles.rightContainer}>
// //           <Text style={styles.title}>{rowData.title}</Text>
// //           <Text style={styles.year}>{rowData.year}</Text>
// //           <Text style={styles.rowId}>{ 1 + parseInt(rowID)}</Text>
// //         </View>
// //       </View>
// //     );
// //   }
// // };

// // var styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     flexDirection: 'row',
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     backgroundColor: '#F5FCFF',
// //   },
// //   rightContainer: {
// //     flex: 1,
// //   },
// //   title: {
// //     fontSize: 20,
// //     marginBottom: 8,
// //     textAlign: 'center',
// //   },
// //   year: {
// //     textAlign: 'center',
// //   },
// //   rowId: {
// //     textAlign: 'left',
// //   },
// //   thumbnail: {
// //     width: 53,
// //     height: 81,
// //   },
// //   listView: {
// //     paddingTop: 20,
// //     backgroundColor: '#F5FCFF',
// //   },
// // });

// // AppRegistry.registerComponent('majia', () => majia);
// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  * @flow
//  */

// // import React, { Component } from 'react';
// // import Root from './app/root';

// // import { AppRegistry } from 'react-native';

// // AppRegistry.registerComponent('majia', () => majia);

// import React from 'react';
// import {
//   AppRegistry,
//   StyleSheet,
//   Text,
//   View,
//   ListView,
//   Image,
//   Navigator
// } from 'react-native';

// import FirstPageComponent from './FirstPageComponent';

// // var MOCKED_MOVIES_DATA = [
// //   {title: '标题', year: '2015', posters: {thumbnail: 'http://i.imgur.com/UePbdph.jpg'}},
// // ];
// /**
//  * 为了避免骚扰，我们用了一个样例数据来替代Rotten Tomatoes的API
//  * 请求，这个样例数据放在React Native的Github库中。
//  */
// var REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';

// class majia extends React.Component {

//   constructor(props) {
//     super(props);   //这一句不能省略，照抄即可
//     this.state = {
//       dataSource: new ListView.DataSource({
//         rowHasChanged: (row1, row2) => row1 !== row2,
//       }),
//       loaded: false,
//       movies: null //这里放你自己定义的state变量及初始值
//     };
//   }

//   componentDidMount() {
//     this.fetchData();
//   }
  
//   fetchData() {
//       fetch(REQUEST_URL)
//         .then((response) => response.json())
//         .then((responseData) => {
//           this.setState({
//             dataSource: this.state.dataSource.cloneWithRows(responseData.movies),
//             loaded: true,
//           });
//         })
//         .done();
//     }

//   render() {
//     let defaultName = 'FirstPageComponent';
//     let defaultComponent = FirstPageComponent;
//     return (
//       <Navigator
//         initialRoute={{ name: defaultName, component: defaultComponent }}
//         configureScene={(route) => {
//           return Navigator.SceneConfigs.VerticalDownSwipeJump;
//         }}
//         renderScene={(route, navigator) => {
//           let Component = route.component;
//           return <Component {...route.params} navigator={navigator} />
//         }} />
//     );

//     // if (!this.state.loaded) {
//     //   return (
//     //     <View style={styles.container}>
//     //       <Text>加载中。。</Text>
//     //     </View>
//     //   );
//     // };
//     // return (
//     //   <ListView
//     //     dataSource={this.state.dataSource}
//     //     renderRow={this.renderMovie}
//     //     style={styles.listView} 
//     //     stickyHeaderIndices={[0,5,10]} />
//     // )
//   }

//   renderMovie(movie) {
//     return (
//       <View style={styles.container}>
//         <Image
//           source={{uri: movie.posters.thumbnail}}
//           style={styles.thumbnail}/>
//         <View style={styles.rightContainer}>
//           <Text style={styles.title}>{movie.title}</Text>
//           <Text style={styles.year}>{movie.year}</Text>
//         </View>
//       </View>
//     );
//   }

// }


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: 'row',
//     justifyContent: 'flex-start', // 水平靠左
//     alignItems: 'center', // 垂直居中
//     backgroundColor: '#F5cCF5',
//   },
//   thumbnail:{
//     paddingTop: 20,
//     paddingBottom: 20,
//     width: 53,
//     height: 81
//   },
//   rightcontainer:{
//     flex: 1,
//     backgroundColor: 'green',
//   },
//   title: {
//     marginBottom: 0,
//     fontSize: 20,
//     textAlign: 'center',
//   },
//   year:{
//     fontSize:16,
//     textAlign: 'center',
//   },
//   listView: {
//     paddingTop: 20,
//     backgroundColor: '#F5FCFF',
//   }
// });
// AppRegistry.registerComponent('majia', () => majia);

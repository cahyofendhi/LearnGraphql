import React, { Component } from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';

import { connect } from 'react-redux';
import { getArtist } from '../store/actions/index';

class Main extends Component {
  componentDidMount() {
    this.props.onGetArtist('Pink Floyd');
  }

  render() {
    let contentView = null;
    if (this.props.movie !== null) {
      contentView = (
          <FlatList
              data={this.props.artist}
              renderItem={({item, index}) =>
                    <View style={styles.content}>
                      <Image 
                        style={styles.image}
                        source={{uri: item.image}} 
                        resizeMode='cover'/>
                      <Text style={styles.title}>{item.name}</Text> 
                    </View>
                  }
              keyExtractor={(item, index) => index.toString()}
              showsVerticalScrollIndicator={false}/>
      );
    }

    return <View style={styles.container}>{contentView}</View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30
  },
  content: {
    flex: 1, 
    flexDirection: 'column',
    padding: 10
  },
  image: {
    width: '100%',
    height: 100,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  title: {
    fontSize: 14,
    padding: 5
  }
});

const mapStateToProps = state => {
  return {
    artist: state.dataConfigure.artist
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onGetArtist: name => dispatch(getArtist(name))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);

import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { connect } from 'react-redux';
import { getArtist } from '../store/actions/index';

class Main extends Component {
  componentDidMount() {
    this.props.onGetArtist('Pink Floyd');
  }

  render() {
    // let contentView = <Text>loading...</Text>;
    let contentView = null;
    if (this.props.movie !== null) {
      contentView = (
        <View>
          <Text>{this.props.artist.map(({ name }) => name).join(', ')} </Text>
        </View>
      );
    }

    return <View style={styles.container}>{contentView}</View>;
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 100
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

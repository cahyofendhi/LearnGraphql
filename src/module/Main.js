import React, { Component } from 'react';
import { View, Text, TextInput, Button, Image, FlatList, StyleSheet } from 'react-native';
import { ProgressDialog } from 'react-native-simple-dialogs';
import { connect } from 'react-redux';
import { getArtist } from '../store/actions/index';

class Main extends Component {

  state = {
    name: 'Nella',
  };

  componentDidMount() {
    this.props.onGetArtist(this.state.name);
  }

  handlingSearch = () => {
    this.props.onGetArtist(this.state.name);
  }


  render() {
    let contentView = (<Text>Data is Empty</Text>);
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

    let { name } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.inputContent}>

           <TextInput
              style={styles.inputText}
              onChangeText={(name) => this.setState({name})}
              value={name}
            />

          <Button
            style={styles.button}
            title="Search"
            onPress={this.handlingSearch}
          />

        </View>
        {contentView}
        <ProgressDialog
            visible={this.props.isLoading}
            title="Progress"
            message="Please, wait..."
        />
    </View>);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  inputContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 30,
    padding: 10
  },
  inputText: {
    flex: 1,
    marginLeft: 10,
    paddingLeft: 10,
    paddingRight: 10,
    height: 40,
    borderRadius:10,
    backgroundColor: '#F4F6F8',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  button: {
    marginRight: 10,
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center'
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
    artist: state.dataConfigure.artist,
    isLoading: state.dataConfigure.isLoading
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

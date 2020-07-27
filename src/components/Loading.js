import React, { Component } from 'react';
import { StyleSheet, Modal, View, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';

class Loading extends Component {

    render() {
        const { color = 'red', idLoading } = this.props;
        console.log('idLoading', idLoading)
        if (idLoading.loading)
            return (
                <Modal
                    animationType="none"
                    transparent
                    visible={true}
                >
                    <View
                        style={[
                            styles.viewLoading
                        ]}
                    >
                        <ActivityIndicator size='small' color={color} />
                    </View>
                </Modal>
            );
        else return null
    }
}

const styles = StyleSheet.create({
    viewLoading: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        justifyContent: 'center',
        alignItems: 'center'
    },
});

const mapStateToProps = (state) => {
    return {
        idLoading: state.loadingReducer
    };
};
export default connect(mapStateToProps, null)(Loading);

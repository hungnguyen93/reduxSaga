import React from 'react';
import {
    TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import *  as Actions from '../../modules/user/actions'
import {
    View, Text
} from 'react-native';

const Home = (props) => {

    const click = () => {
        props.getUser()
    }

    console.log(props.userReducer)
    return (
        <View style={{ flex: 1 }}>
            <Text>Home</Text>
            <TouchableOpacity
                onPress={click}
                style={{ padding: 20, backgroundColor: 'red' }}>
                <Text>123</Text>
            </TouchableOpacity>
        </View>
    )
}

const mapStateToProp = (state) => {
    return {
        userReducer: state.userReducer
    };
};
const mapDispathToProps = (dispatch) => {
    return {
        getUser: () => {
            dispatch(Actions.fetchUse())
        }
    }

}
export default connect(mapStateToProp, mapDispathToProps)(Home)
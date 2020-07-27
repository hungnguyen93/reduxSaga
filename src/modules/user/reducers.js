// import { fromJS } from 'immutable';
import { produce } from 'immer';
import * as Actions from './constants';

const initState = ({
    data: [],
    loading: false,
});

export default function userReducer(state = initState, action = {}) {
    return produce(state, draft => {
        switch (action.type) {
            case Actions.GET_USER_LOADING:
                draft.loading = true;
                break;
            case Actions.GET_USER_SUCCESS: {
                draft.data = action.payload;
                draft.loading = false;
                break;
            }
            case Actions.GET_USER_ERROR: {
                draft.data = [];
                draft.loading = false;
                break;
            }
        };
    });
}

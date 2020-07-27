// import { fromJS } from 'immutable';
import { produce } from 'immer';
import * as Actions from './constants';

const initState = ({
    loading: false,
});

export default function loadingReducer(state = initState, action = {}) {
    return produce(state, draft => {
        switch (action.type) {
            case Actions.IS_LAODING:
                draft.loading = true;
                break;
            case Actions.NO_LAODING: {
                draft.loading = false;
                break;
            }
        };
    });
}

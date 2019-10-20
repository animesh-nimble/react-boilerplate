import _ from 'lodash';
import ACTIONS from './action';

const defaultState = {
  items: [],
};

const todoReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ACTIONS.Types.CREATE_ITEM: {
      console.log(action);

      const item = action.payload;
      const newItem = { id: state.items.length + 1, description: item };
      const newState = _.cloneDeep(state);
      newState.items.push(newItem);
      return newState;
    }

    case ACTIONS.Types.DELETE_ITEM: {
      const newState = _.cloneDeep(state);
      const index = _.findIndex(newState.items, { id: action.payload });
      newState.items.splice(index, 1);
      return newState;
    }

    default:
      return state;
  }
};

export default todoReducer;

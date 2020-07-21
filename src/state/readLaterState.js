import renderer from '../services/renderer/renderer';

const state = {
  state: [],

  setState: (data) => {
    if (data.length > 0) {
      state.state = [...state.state, ...data];
    }
  },

  removeItem: (id) => {
    state.state = state.state.filter(
      (itemFromState) => itemFromState.id !== id,
    );

    renderer.renderReadLater(state.state);
  },

  clearState: () => (state.state = []),
};

export default state;

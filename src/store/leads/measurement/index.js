export const state = () => ({
  ruleMeasurement: {},
});


export const actions = {
  updateMeasurement({commit, state}, e) {
    const ruleMeasurement = {measurement: e.target.value};
    commit('UPDATE_MEASUREMENT', ruleMeasurement)
  }
};


export const mutations = {
  UPDATE_MEASUREMENT: (state, ruleMeasurement) => state.ruleMeasurement = ruleMeasurement,
};


export const getters = {
  ruleMeasurement: state => state.ruleMeasurement
};

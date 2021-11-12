export const state = () => ({
  ruleMeasurementName: {},
  ruleMeasurementPhone: {},
  ruleMeasurementAddress: {},
  ruleMeasurementTime: {},
  ruleMeasurementComment: {},
});


export const actions = {
  updateMeasurementName({commit, state}, e) {
    const ruleMeasurementName = {measurementName: e.target.value};
    commit('UPDATE_MEASUREMENT_NAME', ruleMeasurementName)
  },
  updateMeasurementPhone({commit, state}, e) {
    const ruleMeasurementPhone = {measurementPhone: e.target.value};
    commit('UPDATE_MEASUREMENT_PHONE', ruleMeasurementPhone)
  },
  updateMeasurementAddress({commit, state}, e) {
    const ruleMeasurementAddress = {measurementAddress: e.target.value};
    commit('UPDATE_MEASUREMENT_ADDRESS', ruleMeasurementAddress)
  },
  updateMeasurementTime({commit, state}, e) {
    const ruleMeasurementTime = {measurementTime: e.target.value};
    commit('UPDATE_MEASUREMENT_TIME', ruleMeasurementTime)
  },
  updateMeasurementComment({commit, state}, e) {
    const ruleMeasurementComment = {measurementComment: e.target.value};
    commit('UPDATE_MEASUREMENT_COMMENT', ruleMeasurementComment)
  }
};


export const mutations = {
  UPDATE_MEASUREMENT_NAME: (state, ruleMeasurementName) => state.ruleMeasurementName = ruleMeasurementName,
  UPDATE_MEASUREMENT_PHONE: (state, ruleMeasurementPhone) => state.ruleMeasurementPhone = ruleMeasurementPhone,
  UPDATE_MEASUREMENT_ADDRESS: (state, ruleMeasurementAddress) => state.ruleMeasurementAddress = ruleMeasurementAddress,
  UPDATE_MEASUREMENT_TIME: (state, ruleMeasurementTime) => state.ruleMeasurementTime = ruleMeasurementTime,
  UPDATE_MEASUREMENT_COMMENT: (state, ruleMeasurementComment) => state.ruleMeasurementComment = ruleMeasurementComment,
};


export const getters = {
  ruleMeasurementName: state => state.ruleMeasurementName,
  ruleMeasurementPhone: state => state.ruleMeasurementPhone,
  ruleMeasurementAddress: state => state.ruleMeasurementAddress,
  ruleMeasurementTime: state => state.ruleMeasurementTime,
  ruleMeasurementComment: state => state.ruleMeasurementComment
};

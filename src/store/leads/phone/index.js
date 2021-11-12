export const state = () => ({
  rulePhone: {},
});


export const actions = {
  updatePhone({commit, state}, e) {
    const rulePhone = {phone: e.target.value};
    commit('UPDATE_PHONE', rulePhone)
  }
};


export const mutations = {
  UPDATE_PHONE: (state, rulePhone) => state.rulePhone = rulePhone,
};


export const getters = {
  rulePhone: state => state.rulePhone
};

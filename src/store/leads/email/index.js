export const state = () => ({
  ruleForm: {},
});

export const actions = {
  updatePhone({commit, state}, e) {
    const rulePhone = {phone: e.target.value};
    commit('UPDATE_PHONE', rulePhone)
  }
};

export const mutations = {
  UPDATE_PHONE: (state, rulePhone) => state.ruleForm = rulePhone,
};


export const getters = {
  ruleForm: state => state.ruleForm
};

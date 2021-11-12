export const state = () => ({
  ruleEmail: {},
});


export const actions = {
  updateEmail({commit, state}, e) {
    const ruleEmail = {email: e.target.value};
    commit('UPDATE_EMAIL', ruleEmail)
  }
};


export const mutations = {
  UPDATE_EMAIL: (state, ruleEmail) => state.ruleEmail = ruleEmail,
};


export const getters = {
  ruleEmail: state => state.ruleEmail
};

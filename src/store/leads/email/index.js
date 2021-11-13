export const state = () => ({
  ruleEmail: {},
  apiMail: {
    baseURL: process.env.API_MAIL
  },
});


export const actions = {
  updateEmail({commit, state}, e) {
    const ruleEmail = {email: e.target.value};
    commit('UPDATE_EMAIL', ruleEmail)
  },
  async sendEmail({state, commit}){
    const data = {email: state.ruleEmail.email} ;
    await this.$axios.$post('/sendEmail', data, state.apiMail);
  }
};


export const mutations = {
  UPDATE_EMAIL: (state, ruleEmail) => state.ruleEmail = ruleEmail,
};


export const getters = {
  ruleEmail: state => state.ruleEmail
};

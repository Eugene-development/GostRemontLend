export const state = () => ({
  rulePhone: {},

  apiMail: {
    baseURL: process.env.API_MAIL
  },

});


export const actions = {
  updatePhone({commit, state}, e) {
    const rulePhone = {phone: e.target.value};
    commit('UPDATE_PHONE', rulePhone)
  },



  async sendPhone({state, commit}){
    const data = {phone: state.rulePhone.phone} ;
    console.log(data)
    await this.$axios.$post('/sendPhone', data, state.apiMail);
  }
};


export const mutations = {
  UPDATE_PHONE: (state, rulePhone) => state.rulePhone = rulePhone,
};


export const getters = {
  rulePhone: state => state.rulePhone
};

export default function ({ $axios, store, $auth }) {
  $axios.onRequest((config) => {
    $axios.setToken('3', 'Bearer')
  })
}

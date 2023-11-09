import {boot} from 'quasar/wrappers'
import {useUserStore} from 'stores/user';

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async ({router}) => {
  // something to do
  router.beforeEach(to => {
    if (!useUserStore().isLoggedIn && to.name != 'login') {
      return {name: 'login'}
    }
    return true
  })
})

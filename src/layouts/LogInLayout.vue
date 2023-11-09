<script lang="ts" setup>
import {computed, ref} from 'vue';
import {auth} from 'boot/firebase';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth';
import {useUserStore} from 'stores/user';
import {useRouter} from 'vue-router';
import PasswordValidator from 'password-validator';
import {QField} from 'quasar';

const userState = useUserStore()
const router = useRouter()

const email = ref('')
const emailRef = ref<QField>()
const password = ref('')
const passwordRef = ref<QField>()
const confirmPassword = ref('')
const confirmPasswordRef = ref<QField>()

const passwordSchema = new PasswordValidator()
    .is().min(8)
    .has().digits()
    .has().symbols()
    .has().not().spaces()
const isValidPasswordOrErrors = computed(() => passwordSchema.validate(password.value, {details: true}))
const isSignInButton = ref(true)

async function createUser() {
  try {
    emailRef.value?.validate()
    passwordRef.value?.validate()
    if (emailRef.value?.hasError || passwordRef.value?.validate() || confirmPasswordRef.value?.validate())
      return

    const userCredential = await createUserWithEmailAndPassword(auth, email.value, password.value)
    userState.user = userCredential.user
  } catch (e) {
    console.log(e)
  }
}

async function loginUser() {
  try {
    emailRef.value?.validate()
    passwordRef.value?.validate()
    if (emailRef.value?.hasError || passwordRef.value?.hasError)
      return

    const userCredential = await signInWithEmailAndPassword(auth, email.value, password.value)
    userState.user = userCredential.user
    if (userState.isLoggedIn)
      await router.push('/')
  } catch (e) {
    console.log(e)
  }
}


</script>

<template>
  <q-layout>
    <q-page-container>
      <q-page class="q-pa-md row flex-center">
        <div class="col-lg-3 col-md-4 col-sm-8 col-12 ">

          <q-card>
            <q-card-section>
              <div class="text-h5">SWCF Team</div>

            </q-card-section>
            <q-card-section>
              <q-form class="q-gutter-none">
                <q-input ref="emailRef" v-model="email" :rules="['email']" dense
                         hint="nathan.huynh@fisherpaykel.com" label="email" lazy-rules
                         outlined
                         placeholder="nathan.huynh@fisherpaykel.com"
                         type="email"/>
                <q-input ref="passwordRef" v-model="password" :error="isValidPasswordOrErrors === true" dense
                         label="password" lazy-rules
                         outlined type="password">
                  <template v-slot:error>
                    <div v-for="(error, index) in isValidPasswordOrErrors" :key="index"> {{ error }}</div>
                  </template>
                </q-input>
                <q-input v-if="!isSignInButton" ref="confirmPasswordRef" v-model="confirmPassword" dense
                         label="password"
                         outlined type="password"/>
              </q-form>
            </q-card-section>

            <q-card-section>
              <div v-if="isSignInButton">
                <q-btn class="full-width" label="Login" outline size="md" @click="loginUser"/>
                <span class="text-grey-7">
              Not a user?
              <router-link to @click="isSignInButton=false">Sign up</router-link>
                  <!--                  or continue as <router-link to="/">Guest</router-link>-->
            </span>
              </div>
              <div v-else>
                <q-btn class="full-width" label="Sign up" outline size="md" @click="createUser"/>
                <span class="text-grey-7">
              Already signed up?&nbsp;
            <router-link to @click="isSignInButton=true">Sign in</router-link>
            </span>
              </div>

            </q-card-section>
          </q-card>

        </div>

      </q-page>
    </q-page-container>
  </q-layout>
</template>

<style scoped>

</style>

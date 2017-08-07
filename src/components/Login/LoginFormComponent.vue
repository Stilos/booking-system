<template>
  <div id="login-form">
    <transition
    name="custom-classes-transition"
    enter-active-class="animated flipInX"
    leave-active-class="animated flipOutX">
      <form v-if="formState == 0">
        <input type="text" name="login" placeholder="Login" v-model="formObject.login">
        <input type="password" name="password" placeholder="Hasło" v-model="formObject.password">
        <button type="submit">Zaloguj</button>
        <p>
          <span @click="changeFormState(1)">Przypomnij Hasło</span>
          <span @click="changeFormState(2)">Zarejestruj się!</span>
        </p>
      </form>

      <form class="remind-password" v-if="formState == 1">
        <input type="text" name="email" placeholder="Login \ e-mail" value="" v-model="formObject.remind">
        <p>
          <span @click="changeFormState(0)">< Powrót</span>
          <button type="submit">Przypomnij</button>
        </p>
      </form>

      <form class="register" v-if="formState == 2">
        <input type="text" name="name" placeholder="Imię" value="" v-model="formObject.name">
        <input type="text" name="surname" placeholder="Nazwisko" value="" v-model="formObject.surname">
        <input type="date" name="birthdate" placeholder="Data Urodzenia" value="" v-model="formObject.birthdate">
        <input type="text" name="email" placeholder="E-Mail" value="" v-model="formObject.email">
        <input type="password" name="password" placeholder="Hasło" value="" v-model="formObject.password">
        <input type="password" name="password2" placeholder="Powtórz Hasło" value="" v-model="formObject.password2">
        <input type="text" name="keycode" placeholder="Kod Rejestracyjny" value="" v-model="formObject.keycode">
        <p>
          <span @click="changeFormState(0)">< Powrót</span>
          <button type="submit">Zarejestruj</button>
        </p>
      </form>
    </transition>
  </div>
</template>
<script>

export default {
  name: 'LoginFormComponent',
  data() {
    return {
      formState: 0,
      formObject: {
        login: '',
        password: '',
        email: '',
        name: '',
        surname: '',
        birthdate: '',
        password2: '',
        keycode: '',
        remind: '',
      },
    };
  },
  methods: {
    changeFormState(state) {
      this.formState = state;
      Object.keys(this.formObject).forEach((key) => {
        this.formObject[key] = '';
      });
    },
  },
};
</script>

<style lang="scss">
@import './static/styles.scss';

  #login-form{
    display: flex;
    align-self: center;
    flex-direction: column;
    align-items: center;
    background: $white;
    padding: 50px;
    box-shadow: 0px 0px 15px 5px $light-gray;

    form{
      width: 200px;
      height: 200px;
      display: inherit;
      justify-content: space-around;
      align-content: center;
      flex-direction: column;
      transition: all 1s ease;

      &.remind-password{
        height: 100px;
      }

      &.register{
        height: 300px;
      }

      input{
        border: none;
        border-bottom: 1px solid $light-gray;
        font-size: 20px;

        &:focus{    
          outline: none;
          border-bottom: 1px solid $orange;
        }

        &:focus::-webkit-input-placeholder{
          color: $orange;
        }
      }

      button{
        margin-top: 10px;
        background: $orange;
        font-size: 20px;
        color: $white;
        border: none;
        height: 40px;
        align-self: flex-end;
        transition: all .5s;

        &:hover{

          color: $dark-blue;
          cursor: pointer;
          box-shadow: 0px 0px 10px 1px $light-gray;
        }
      }

      p{
        justify-content: space-between;
        align-items: center;
        span{
          text-decoration: none;
          color: $light-gray;
          font-size: 12px;
          cursor: pointer;
          
          &:hover{
            text-decoration: underline;
          }
        }
      }
    }
  }
</style>
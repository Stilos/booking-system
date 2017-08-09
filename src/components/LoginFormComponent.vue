<template>
  <div id="login-form">
    <transition
    name="custom-classes-transition"
    enter-active-class="animated flipInX"
    leave-active-class="animated flipOutX">
      <form v-if="formState == 'login'">
        <input type="text" name="login" placeholder="Login" v-model="formObject.login">
        <input type="password" name="password" placeholder="Hasło" v-model="formObject.password">
        <button type="submit">Zaloguj</button>
        <p>
          <span @click="changeFormState('remind')">Przypomnij Hasło</span>
          <span @click="changeFormState('register')">Zarejestruj się!</span>
        </p>
      </form>

      <form class="remind-password" v-if="formState == 'remind'">
        <input type="text" name="email" placeholder="Login \ e-mail" value="" v-model="formObject.remind">
        <p>
          <span @click="changeFormState('login')">< Powrót</span>
          <button type="submit">Przypomnij</button>
        </p>
      </form>

      <form class="register" v-if="formState == 'register'">
        <div><input name="name" placeholder="Imię"type="text" value="" v-model="formObject.name" required><span></span></div>
        <div><input  name="surname" placeholder="Nazwisko" type="text" value="" v-model="formObject.surname" required><span></span></div>
        <div><input name="birthdate" placeholder="Data Urodzenia" type="date" value="" v-model="formObject.birthdate" required><span></span></div>
        <div><input name="email" placeholder="E-Mail"type="email" value="" v-model="formObject.email" required><span></span></div>
        <div><input name="password" placeholder="Hasło" type="password"  value="" v-model="formObject.password" required><span></span></div>
        <div><input name="password2" placeholder="Powtórz Hasło" type="password" value="" v-model="formObject.password2" required><span></span></div>
        <div><input name="keycode" placeholder="Kod Rejestracyjny" type="text"  value="" v-model="formObject.keycode" required><span></span></div>
        <p>
          <span @click="changeFormState('login')">< Powrót</span>
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
      formState: 'login',
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

input:invalid+span::after {
  content: 'X';
  width: 10px;
  height: 10px;
  position: absolute;
}

input:valid+span::after {
  content: 'V';
  width: 10px;
  height: 10px;
  position: absolute;
}

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
        width: 100%;

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
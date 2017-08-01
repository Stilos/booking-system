<template>
  <div id="login-form">
    <form>
      <input type="text" name="login-field" placeholder="Login">

      <input type="password" name="password-field" placeholder="Hasło">

      <button type="submit">Zaloguj</button>

      <p><a href="#">Przypomnij Hasło</a><a href="#">Zarejestruj się!</a></p>
    </form>
  </div>
</template>

<script>
export default {
  name: 'LoginFormComponent',
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
    box-shadow: 0px 0px 15px 5px #848484;

    form{
      width: 200px;
      height: 200px;
      display: inherit;
      justify-content: space-around;
      align-content: center;
      flex-direction: column;

      input{
        border: none;
        border-bottom: 1px solid #a5a5a5;

        &:focus{    
          outline: none;
          border-bottom: 1px solid $orange;
        }

        &:focus::-webkit-input-placeholder{
          color: $orange;
        }
      }

      button{
        background: $orange;
        color: $white;
        border: none;
        width: 80px;
        height: 40px;
        align-self: flex-end;
      }
    }
  }
</style>
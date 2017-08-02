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
    box-shadow: 0px 0px 15px 5px $light-gray;

    form{
      width: 200px;
      height: 200px;
      display: inherit;
      justify-content: space-around;
      align-content: center;
      flex-direction: column;

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
        width: 80px;
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
        a{
          text-decoration: none;
          color: $light-gray;
          font-size: 12px;
          
          &:hover{
            text-decoration: underline;
          }
        }
      }
    }
  }
</style>
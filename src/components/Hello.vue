<template>
  <div class="hello">
    <form>
      <label for="login">Login</label>
      <input type="text" name="login">

      <label for="password">Password</label>
      <input type="password">

      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>

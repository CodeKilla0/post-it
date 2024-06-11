<template>
  <header id="head">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-1 col-md-8 col-8 first_part">
          <nav>
            <router-link to="/" class="text-black fs-5"> POST IT</router-link>
          </nav>
        </div>
        <div class="col-1 add_post">
          <router-link :to="{ name: 'CreatePost' }">
            <font-awesome-icon icon="fa-solid fa-circle-plus" />
          </router-link>
        </div>
      </div>
    </div>
  </header>

  <div class="body clearfix">
    <router-view />
  </div>

  <footer>
    <div class="footer">Powered by @AzK47</div>
  </footer>
</template>

<script>
export default {
  data() {},

  methods() {},

  mounted() {},
};
</script>

<style lang="scss">
body {
  background-image: url("@/assets/page_back-01-01.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding: 30px;
}

#head {
  position: fixed;
  width: 96%;
}

.body {
  margin-top: 120px;
  margin-bottom: 150px;
}

footer {
  display: flex;
  justify-content: center;
}

.footer {
  background-color: rgb(255, 255, 255);
  width: 95%;
  text-align: center;
  border-radius: 10px;
  position: fixed;
  top: 90%;
  padding: 13px;

  box-shadow: 0px 2px 14px 0px rgba(0, 0, 0, 0.14);
  -webkit-box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.14);
  -moz-box-shadow: 0px 2px 14px 0px rgba(0, 0, 0, 0.14);
}

header {
  position: sticky;
}

.add_post {
  padding: 10px;
  border-radius: 40px;
  text-align: center;
  background-color: rgb(255, 255, 255);
  width: 60px !important;
  height: 60px;
  margin-left: 20px;

  box-shadow: 0px 2px 14px 0px rgba(0, 0, 0, 0.14);
  -webkit-box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.14);
  -moz-box-shadow: 0px 2px 14px 0px rgba(0, 0, 0, 0.14);

  a {
    font-size: 27px;
  }
}

nav {
  padding: 15px;
  border-radius: 10px;
  background-color: rgb(255, 255, 255);
  width: 130px;

  box-shadow: 0px 2px 14px 0px rgba(0, 0, 0, 0.14);
  -webkit-box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.14);
  -moz-box-shadow: 0px 2px 14px 0px rgba(0, 0, 0, 0.14);

  a {
    font-weight: bold;
    text-decoration: none;
    padding: 10px;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

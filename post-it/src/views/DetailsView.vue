<template>
  <div class="action">
    <div class="edelete1">
      <form>
        <router-link
          :to="{ name: 'EditPost', paramas: { id: this.id } }"
          class="btn btn-primary"
        >
          <font-awesome-icon icon="fa-solid fa-pen-to-square" />
        </router-link>
      </form>

      <br />
      <form @submit.prevent="deletePost">
        <button class="btn btn-danger">
          <font-awesome-icon class="text-white" icon="fa-solid fa-trash" />
        </button>
      </form>
    </div>
    <div class="edelete2">
      <div class="row">
        <div class="col-6">
          <form>
            <router-link
              :to="{ name: 'EditPost', paramas: { id: this.id } }"
              class="btn btn-primary"
            >
              <font-awesome-icon icon="fa-solid fa-pen-to-square" />
            </router-link>
          </form>
        </div>
        <div class="col-6">
          <form @submit.prevent="deletePost">
            <button class="btn btn-danger">
              <font-awesome-icon class="text-white" icon="fa-solid fa-trash" />
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
  <div class="about">
    <!-- <h1>This is an details page</h1> -->
    <div class="container space-left2">
      <div class="row justify-content-center">
        <div class="col-lg-9">
          <div class="postItDe bg-warning-subtle">
            <div class="title">
              <h3>{{ post.title }}</h3>
            </div>
            <div class="describe">
              <p>
                {{ post.content }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailsView",
  components: {},
  data() {
    return {
      post: "",
      id: "",
      url: "",
    };
  },

  created() {
    this.id = this.$route.params.id;
    this.url = "http://62.72.5.95:1999/notes/";

    // console.log(this.url + this.id);

    fetch(this.url + this.id)
      .then((response) => response.json())
      .then((data) => {
        this.post = data;
        // console.log(this.post)
      })
      .catch(function (error) {
        console.log(error);
      });
  },

  methods: {
    deletePost() {
      fetch(this.url + this.id, {
        method: "DELETE",
      })
        .then((response) => {
          response.json();
          this.$router.push("/");
        })
        .then((data) => console.log(data))
        .catch(function (error) {
          console.log(error);
        });
    },
  },
};
</script>

<style>
/* .action{
      position: fixed;
  } */
.action {
  padding: 20px;
}
.edelete1 {
  background-color: white;
  position: fixed;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 2px 19px 0px rgba(0, 0, 0, 0.14);
  -webkit-box-shadow: 0px 4px 19px 0px rgba(0, 0, 0, 0.14);
  -moz-box-shadow: 0px 2px 19px 0px rgba(0, 0, 0, 0.14);
}
.edelete2 {
  justify-content: center;
  background-color: white;
  position: fixed;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 2px 19px 0px rgba(0, 0, 0, 0.14);
  -webkit-box-shadow: 0px 4px 19px 0px rgba(0, 0, 0, 0.14);
  -moz-box-shadow: 0px 2px 19px 0px rgba(0, 0, 0, 0.14);
  top: 80%;
  left: 35%;
}

.postItDe {
  padding: 20px;
  margin-bottom: 100px;
}

@media screen and (min-width: 992px) {
  .edelete2 {
    display: none;
  }
}

@media screen and (max-width: 992px) {
  .edelete1 {
    display: none;
  }
}
</style>

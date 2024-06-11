<template>
  <div class="form">
    <div class="container">
      <div class="row mt-5">
        <div class="col-12">
          <form @submit.prevent="onUpdatePost()">
            <div class="form-group mb-3">
              <label for="title" class="fs-5">Tile</label>
              <input
                type="text"
                class="form-control"
                id="title"
                v-model="post.title"
                @input="validateTile()"
              />
              <span v-if="this.post.titleError">{{ post.titleError }}</span>
            </div>
            <div class="form-group mb-3">
              <label for="content" class="fs-5">Description</label>
              <textarea
                id="content"
                rows="10"
                class="form-control"
                v-model="post.content[0]"
                @input="validateContent()"
              ></textarea>
              <span v-if="this.post.contentError">{{ post.contentError }}</span>
            </div>
            <div class="form-group pt-2">
              <button type="submit" class="btn btn-primary btn-lg">
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EditPost",
  components: {},
  data() {
    return {
      post: {
        title: "",
        content: "",
        titleError: "",
        contentError: "",
      },
      id: "",
      url: "",
    };
  },

  created() {
    this.id = this.$route.params.id;
    this.url = "https://post-it.epi-bluelock.bj/notes/";

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
    validateTile() {
      const titleRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ0-9\s.]*$/;
      if (!this.post.title.trim()) {
        this.post.titleError = "Le champs titre ne doit pas être vide.";
      } else if (!titleRegex.test(this.post.title.trim())) {
        this.post.titleError =
          "Le titre ne doit contenir que des lettres, des chiffres et des espaces.";
      } else {
        this.post.titleError = "";
      }
    },

    validateContent() {
      let texte;
      texte = this.post.content[0];
      console.log(texte);
      if (!this.post.content[0].trim()) {
        this.post.contentError = "Le champs content ne doit pas être vide.";
        return false;
      } else {
        this.post.contentError = "";
        return true;
      }
    },

    onUpdatePost() {
      this.validateTile();
      this.validateContent();

      if (!this.post.titleError && !this.post.contentError) {
        fetch(this.url + this.id, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: this.post.title,
            content: this.post.content,
          }),
        })
          .then((response) => {
            response.json();
            this.$router.push("/");
          })
          .then((data) => console.log(data))
          .catch(function (error) {
            console.log(error);
          });
      }
    },
  },
};
</script>

<style>
form span {
  color: red;
  font-size: 14px;
}
</style>

<template>
  <div class="form">
    <div class="container">
      <div class="row mt-5">
        <div class="col-12">
          <form @submit.prevent="onCreatedPost()">
            <div class="form-group mb-3">
              <label for="title">Tile</label>
              <input
                type="text"
                class="form-control"
                id="title"
                v-model="title"
                @input="validateTile()"
              />
              <span v-if="this.titleError">{{ titleError }}</span>
            </div>
            <div class="form-group mb-3">
              <label for="content">Description</label>
              <textarea
                id="content"
                rows="10"
                class="form-control"
                v-model="content"
                @input="validateContent()"
              ></textarea>
              <span v-if="this.contentError">{{ contentError }}</span>
            </div>
            <div class="form-group">
              <button type="submit" class="btn btn-primary btn-lg">
                Create
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
  data() {
    return {
      title: "",
      content: [],
      titleError: "",
      contentError: "",
    };
  },

  methods: {
    validateTile() {
      const titleRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ0-9\s.]+$/;
      if (!this.title.trim()) {
        this.titleError = "Le champs titre ne doit pas être vide.";
      } else if (!titleRegex.test(this.title.trim())) {
        this.titleError =
          "Le titre ne doit contenir que des lettres, des chiffres et des espaces.";
      } else {
        this.titleError = "";
      }
    },

    validateContent() {
      if (
        this.content == null ||
        this.content == "" ||
        this.content.trim() == ""
      ) {
        this.contentError = "Le champs content ne doit pas etre vide.";
      } else {
        this.contentError = "";
      }
    },

    onCreatedPost() {
      this.validateContent();
      this.validateTile();
      if (!this.titleError && !this.contentError) {
        fetch("http://62.72.5.95:1999/notes", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: this.title,
            content: [this.content],
          }),
        })
          .then((response) => {
            response.json();
            this.$router.push("/");
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
  },
};
</script>

<style scoped>
form span {
  color: red;
  font-size: 14px;
}
.login-form {
  padding: 2em;
  border: 1px solid #a8a8a8;
  border-radius: 0.5em;
  max-width: 500px;
  box-sizing: border-box;
}
.form-title {
  margin-top: 0;
}
.login-form::v-deep .formulate-input .formulate-input-element {
  max-width: none;
}
@media (min-width: 420px) {
  .double-wide {
    display: flex;
  }
  .double-wide .formulate-input {
    flex-grow: 1;
    width: calc(50% - 0.5em);
  }
  .double-wide .formulate-input:first-child {
    margin-right: 0.5em;
  }
  .double-wide .formulate-input:last-child {
    margin-left: 0.5em;
  }
}
</style>

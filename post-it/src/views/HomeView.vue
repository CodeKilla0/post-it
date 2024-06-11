<template>
  <div class="home">
    <div class="container">
      <div class="row">
        <div
          v-for="item in paginatedPost"
          :key="item._id"
          class="col-lg-3 mb-4"
        >
          <div class="postIt bg-gradient bg-warning-subtle">
            <div class="title">
              <h4 class="text-wrap">{{ TilteLimit(item.title) }}</h4>
            </div>
            <div class="describe">
              <p>
                {{ ContentLimit(item.content.join()) }}
              </p>
            </div>
            <div class="show d-flex justify-content-end">
              <router-link :to="{ name: 'details', params: { id: item._id } }">
                <font-awesome-icon icon="fa-solid fa-plus" />
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Pagination
          :totalPosts="posts.length"
          :postsPerPage="postsPerPage"
          v-model:currentPage="currentPage"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Pagination from "../components/PaginationPost.vue";

export default {
  name: "HomePage",
  components: {
    Pagination,
  },
  data() {
    return {
      posts: [],
      currentPage: 1,
      postsPerPage: 8,
    };
  },

  computed: {
    paginatedPost() {
      const start = (this.currentPage - 1) * this.postsPerPage;
      const end = start + this.postsPerPage;
      return this.posts.slice(start, end);
    },
  },

  methods: {
    TilteLimit(e) {
      return e.length > 15 ? e.slice(0, 15) + "..." : e;
    },

    ContentLimit(e) {
      return e.length > 100 ? e.slice(0, 100) + "..." : e;
    },
  },

  created() {
    fetch("https://post-it.epi-bluelock.bj/notes")
      .then((response) => response.json())
      .then((data) => {
        this.posts = data.notes;
      })
      .catch(function (error) {
        console.log(error);
      });
  },

  mounted() {},
};
</script>

<style lang="scss">
.pagination {
  display: flex;
  list-style: none;
}

.pagination li {
  margin: 0 5px;
}

.pagination li a {
  cursor: pointer;
}

.postIt {
  padding: 20px;
  height: 250px;
  /* background-color: #F5C463; */
  box-shadow: 0px 2px 19px 0px rgba(0, 0, 0, 0.181);
  -webkit-box-shadow: 0px 2px 19px 0px rgba(0, 0, 0, 0.181);
  -moz-box-shadow: 0px 2px 19px 0px rgba(0, 0, 0, 0.181);
}

.show {
  a {
    padding: 10px 15px 10px 15px;
    background-color: #ffffff;
    border-radius: 25px;
    cursor: pointer;
  }
}
</style>

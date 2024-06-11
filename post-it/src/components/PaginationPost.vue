<template>
  <div class="pagination">
    <button
      class="btn btn-outline-success"
      @click="previousPage"
      :disabled="currentPage === 1"
    >
      précédents
    </button>

    <button
      class="btn btn-primary"
      v-for="page in totalPages"
      :key="page"
      @click="changePage(page)"
      :class="{ active: currentPage === page }"
    >
      {{ page }}
    </button>

    <button
      class="btn btn-outline-success"
      @click="nextPage"
      :disabled="currentPage === totalPages"
    >
      Suivant
    </button>
  </div>
</template>

<script>
export default {
  props: {
    totalPosts: {
      type: Number,
      required: true,
    },
    postsPerPage: {
      type: Number,
      default: 10,
    },
    currentPage: {
      type: Number,
      default: 1,
    },
  },
  computed: {
    totalPages() {
      return Math.ceil(this.totalPosts / this.postsPerPage);
    },
  },
  methods: {
    previousPage() {
      if (this.currentPage > 1) {
        this.$emit("update:currentPage", this.currentPage - 1);
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.$emit("update:currentPage", this.currentPage + 1);
      }
    },
    changePage(page) {
      this.$emit("update:currentPage", page);
    },
  },
};
</script>

<style scoped>
.pagination {
  display: flex;
  gap: 10px;
  padding-top: 6px;
}
button.active {
  font-weight: bold;
}
button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>

<template>
  <div class="pagination">
    Блок пагинации страница {{ numberPage }}
    <!-- <span v-for="n in lengtPayLis" :key="n">{{ n }} </span> -->
    <hr />
    <!-- <div v-for="(page, idx) in arrPageList" :key="idx">
      Массив данных {{ idx }}{{ page }}
      <hr />
      <hr />
    </div>
    <br /> -->

    <div v-for="(item, idx) in pageList" :key="idx">
      {{ item }}
      <hr />
    </div>
    <hr />
    <div>Getters <br />{{ pageList }}</div>
  </div>
</template>

<script>
export default {
  name: "PaginationComponent",
  data() {
    return {
      numberPage: "1",
      testPage: "",
    };
  },

  props: {
    lengtPayLis: {
      type: Number,
      default: 0,
    },
    arrPageList: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    arrPageListMethods() {
      this.testPage = this.arrPageList;
      console.log(this.testPage);
    },
    gettersPageList() {
      console.log(this.pageList);
      this.pageList = this.testPage;
      console.log(this.testPage);
    },
  },
  watch: {},
  computed: {
    pageList() {
      return this.$store.getters.getPageList;
    },
  },

  created() {
    this.arrPageListMethods();
    this.gettersPageList();
  },
};
</script>
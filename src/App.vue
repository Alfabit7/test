<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" style="width: 50px" />
    <HelloWorld msg="Приложения учет доходов" />
    <FormCost @addCostInTable="addCostInTable" />
    <TableCost :itemCost="getPaymentsList"></TableCost>
    <h2>Итого {{ getFullPaymentValue }}</h2>
    <PaginationComponent
      :lengtPayLis="addLengthPaymentsListstate"
      :arrPageList="getPageList"
    />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import TableCost from "./components/TableCost.vue";
import FormCost from "./components/FormCost.vue";
import { mapMutations, mapGetters } from "vuex";
import PaginationComponent from "./components/PaginationComponent.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    TableCost,
    FormCost,
    PaginationComponent,
  },
  // data() {
  //   //  return PaymentsList: [] };
  // },
  computed: {
    ...mapGetters([
      "getFullPaymentValue",
      "getPaymentsList",
      "addLengthPaymentsListstate",
      "getPageList",
    ]),

    // getFullPaymentValue() {
    //   return this.$store.getters.getFullPaymentValue;
    // },
  },

  methods: {
    ...mapMutations(["setPaymentsListData", "pushPaymentsList"]),

    // getData() {
    //   return [
    //     {
    //       numberId: "27.04.2022",
    //       date: "28.04.2022",
    //       category: "sport",
    //       amount: 3000,
    //     },
    //     {
    //       numberId: "",
    //       date: "28.04.2022",
    //       category: "transport",
    //       amount: 5000,
    //     },
    //     {
    //       numberId: "29.04.2022",
    //       date: "24.04.2022",
    //       category: "leiser",
    //       amount: 2000,
    //     },
    //   ];
    // },

    addCostInTable(data) {
      // this.PaymentsList = [...this.PaymentsList, data];
      this.PaymentsList.push(data);
      // console.log(data);
    },
  },
  async created() {
    // this.PaymentsList = this.getData();
    // this.$store.commit("setPaymentsListData", this.getData());
    // this.setPaymentsListData(this.getData());
    // console.log(this.PaymentsList);
    // console.log(this.$store);
    await this.$store.dispatch("getData");
    await this.$store.dispatch("pageListfetchData");

    // this.$store.dispatch("loadCategories");
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>


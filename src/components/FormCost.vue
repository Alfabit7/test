<template>
  <div class="formCostWrp">
    <button class="btnAddNewCost" @click="visible = !visible">
      Add new cost
    </button>
    <div class="formCost" v-show="visible">
      <input type="text" placeholder="Date" v-model="date" />
      <!-- <input type="text" placeholder="Category" v-model="category" /> -->

      <select v-model="category" v-if="CategoryList">
        <option v-for="(value, idx) in CategoryList" :key="idx">
          {{ value }}
        </option>
      </select>

      <input type="text" placeholder="Amount" v-model.number="amount" />
      <div class="btnSave">
        <button @click="addCostInTable">Save</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FormCost",
  data() {
    return {
      numberId: "",
      date: "",
      category: "",
      amount: "",
      visible: false,
      dateIntl: "",
    };
  },
  computed: {
    // getCurrenDate() {
    //   let today = new Date();
    //   let d = today.getDate();
    //   let m = today.getMonth() + 1;
    //   let y = today.getFullYear();
    //   return `${d}.${m}.${y}`;
    // },
    CategoryList() {
      return this.$store.getters.getCategotylist;
    },
  },

  methods: {
    addCostInTable() {
      // const data = {
      //   numberId: +this.numberId++,
      //   date: this.date || this.getCurrenDate,
      //   category: this.category,
      //   amount: +this.amount,
      // };
      const data = {
        numberId: +this.numberId++,
        date: this.dateIntl,
        category: this.category,
        amount: +this.amount,
      };

      // console.log(data);
      this.$emit("addCostInTable", data);
      this.$store.commit("pushPaymentsList", data);
    },
  },
  async created() {
    this.dateIntl = new Intl.DateTimeFormat("ru").format(new Date());
    // console.log(`${this.dateIntl} это dateIntl`);
    await this.$store.dispatch("loadCategories");
  },
};
</script>



<style>
.formCost {
  margin: 20px 0 0 0;
}
input {
  height: 30px;
  margin: 20px 0 0 20px;
}
.btnSave {
  margin: 20px 0 0 0;
}
.btnAddNewCost {
  text-transform: uppercase;
  height: 40px;
  background-color: mediumseagreen;
}

</style>
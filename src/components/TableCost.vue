<template>
  <div class="TableCost">
    <table>
      <tr>
        <td>№</td>
        <td>Date</td>
        <td>Category</td>
        <td>Amount</td>
      </tr>
    </table>

    <div class="TableCostItem" v-for="(item, index) in itemCost" :key="index">
      <table>
        <tr>
          <td>{{ (item.numberId = index + 1) }}</td>
          <td>{{ item.date }}</td>
          <td>{{ item.category }}</td>
          <td>{{ item.amount }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "TableCost",
  props: {
    itemCost: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style scoped>
.TableCost {
  margin: 20px auto;
}
table {
  border-collapse: collapse;
  width: 700px;
}
td {
  border: 1px solid black;
  width: 100px;
}
</style>
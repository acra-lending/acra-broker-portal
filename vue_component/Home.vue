<template>
  <div class="container noselect">
    <h2 class="text-center text-uppercase p-3 mb-5" style="font-weight: 600;"> Seller's Guide </h2>
    <div class="row">
      <div class="col-3">
        <select class="form-select mb-3" v-model="searchQuery" aria-label="Default select example">
          <option value="">{{ selected }}</option>
          <option value="General Understanding">General Understanding</option>
          <option value="Credit">Credit</option>
          <option value="Income / Employment">Income / Employment</option>
          <option value="Debts and Liabilities">Debts and Liabilities</option>
          <option value="Debt-To-Income">Debt-To-Income</option>
          <option value="Assets / Funds">Assets / Funds</option>
          <option value="Property Eligibility">Property Eligibility</option>
          <option value="Property Descriptions">Property Descriptions</option>
          <option value="General Property Requirements">General Property Requirements</option>
          <option value="Appraiser Requirements">Appraiser Requirements</option>
          <option value="Appraisal Review Requirements">Appraisal Review Requirements</option>
          <option value="Appraisal Reports">Appraisal Reports</option>
          <option value="Subject Property">Subject Property</option>
          <option value="Site">Site</option>
          <option value="Improvements">Improvements</option>
          <option value="Cost Approach">Cost Approach</option>
          <option value="Sales Comparison Analysis">Sales Comparison Analysis</option>
          <option value="Income Approach">Income Approach</option>
          <option value="Appraiser's Comments">Appraiser's Comments</option>
          <option value="Reconciliation Of Value">Reconciliation Of Value</option>
        </select>
        <button class="btn-custom-btn" @click="reset"> Reset </button>
      </div>
      <div class="col-9">
        <search-results :searchQuery='searchQuery'/>
        <h5 class="text-center border mt-5 p-3">Senior Management at Acra Lending maintains discretion for interpretation or definition of any item or situation that is not explicitly addressed in the guidelines.</h5>

      </div>
    </div>

    
    
  </div>
</template>

<script>
import { ref } from 'vue'
import SearchResults from './SearchResults.vue'

export default {
  components: {
    SearchResults
  },
  setup() {
    const searchQuery = ref('')

    const reset = () => {
      searchQuery.value = ''
    }

    return {
      reset,
      searchQuery,
      selected: "Browse by category..."
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

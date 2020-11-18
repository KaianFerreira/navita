<template>
  <section>
    <header>Veículos</header>
    <Brands v-model="selectedBrand"/>
    <Models :brand="selectedBrand" v-if="selectedBrand"/>
  </section>
</template>

<script>
import Brands from './Brands'
import Models from './Models'
export default {
  components: {
    Brands,
    Models
  },
  data () {
    return {
      selectedBrand: null
    }
  }
}
</script>

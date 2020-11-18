<template>
  <section class="card">
    <div class="header">Marcas</div>
    <transition appear name="fade" mode="out-in">
      <Loading v-if="loading"/>
      <div v-else class="content">
        <table>
          <thead>
            <th colspan="2">Marca</th>
          </thead>
          <tbody>
            <tr v-for="brand in brands" :key="brand.codigo">
              <td>{{ brand.nome }}</td>
              <td class="action"> <button @click="$emit('change', brand)">Ver modelos</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </transition>
  </section>
</template>

<script>
import { getAll } from '../../api/brands'
export default {
  model: {
    prop: 'selected',
    event: 'change'
  },
  data () {
    return {
      brands: [],
      loading: true
    }
  },
  async mounted () {
    this.brands = await getAll()
    this.loading = false
  }
}
</script>

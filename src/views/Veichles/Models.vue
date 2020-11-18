<template>
  <section class="card">
    <div class="header">Modelos</div>
    <transition appear name="fade" mode="out-in">
      <Loading v-if="loading"/>
      <div v-else class="content">
        <table>
          <thead>
            <th>Modelos</th>
          </thead>
          <tbody>
            <tr v-for="model in models.modelos" :key="model.codigo">
              <td>{{ model.nome }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </transition>
  </section>
</template>

<script>
import { getAll } from '../../api/models'
export default {
  props: ['brand'],
  data () {
    return {
      loading: true,
      models: []
    }
  },
  watch: {
    async brand () {
      this.loading = true
      this.models = await getAll(this.brand.codigo)
      this.loading = false
    }
  },
  async mounted () {
    this.models = await getAll(this.brand.codigo)
    this.loading = false
  }
}
</script>

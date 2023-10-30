<template>
  <div class="home">
    <ul v-if="hasMemos">
      <li v-for="memo in memos" :key="memo.id">
        <router-link :to="{ name : 'edit', params : { id : memo.id } }">
          {{ memo.title }}
        </router-link>
      </li>
    </ul>
    <div v-else>メモがありません</div>
  </div>
</template>

<style scoped>
ul {
  list-style: none;
  padding: 0;
}
li {
  padding: 10px;
  border-bottom: 1px solid #ccc;
}
li a {
  color: #42b983;
  text-decoration: none;
  width: 100%;
  display: block;
}
</style>

<script>
export default {
  name: 'HomeView',
  // 計算を使ってメモの有無を判定する
  computed: {
    hasMemos(){
      return this.$store.getters.getCount
    },
    memos(){
      return this.$store.getters.getAll
    }
  }
}
</script>
<template>
  <MemoForm v-if="memo" :memo="memo"/>
  <div v-else>メモがありません</div>
</template>

<script>
import MemoForm from '@/components/MemoForm.vue'
export default {
  name: 'EditView',
  components: {
    MemoForm
  },
  computed: {
    memo(){
      const id = parseInt(this.$route.params.id)
      return this.$store.getters.getMemoById(id)
    }
  }
}
</script>
<template>
  <div><input type="text" v-model="title"></div>
  <div><textarea v-model="content"></textarea></div>
  <div class="center">
    <button @click="save">保存</button>
    <button @click="remove" v-if="memo.id">削除</button>
  </div>
</template>
<script>
export default {
  name: 'MemoForm',
  props: [
    "memo"
  ],
  // 型定義をする
  data(){
    return {
      title:this.memo ? this.memo.title : '',
      content:this.memo ? this.memo.content : ''
    }
  },
  methods:{
    save(){
      let memo = {
        title:this.title,
        content:this.content
      }

      if(this.memo){
        memo.id = this.memo.id
      }

// mutationを呼び出す
      this.$store.commit('save', memo)
// メモ一覧画面に戻る
      this.$router.push('/')
    },
    remove(){
        this.$store.commit('delete', this.memo.id)
// メモ一覧画面に戻る
        this.$router.push('/')
    }
  }
}
</script>

<style scoped>
div {
  margin-bottom: 10px;
}
input {
  width: 100%;
  height: 2em;
}
textarea {
  width: 100%;
  height: 30em;
}
button {
  width: 5em;
  margin:3px;
}
.center {
  text-align: center;
}
</style>

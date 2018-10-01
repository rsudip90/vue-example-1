<template>
  <div id="posts-container" v-if="dataLoaded">
    <Post
      v-for="post in postList"
      :key="post.id"
      :post="post"
      :user="postUser(post.userId)"
      :comments="[]"
      :detailedView="false"
    />
  </div>
</template>

<script>
import Post from '@/components/Post.vue'
import apis from '@/apis'

export default {
  name: 'PostList',
  data: function() {
    return {
      postList: [],
      userList: [],
      dataLoaded: false,
    }
  },
  components: {
    Post
  },
  methods: {
    postUser: function(userId) {
      return this.userList.find(function(item) {
        return item.id === userId;
      }) || {};
    }
  },
  mounted() {
    var vm = this;

    Promise
      .all([apis.users(), apis.posts()])
      .then((values) => {
        vm.userList = values[0].users;
        vm.postList = values[1].posts;
        vm.dataLoaded = true;
      })
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
.post-info {
  border: 1px #DDD solid;
  border-radius: 8px;
  margin: 10px;
  background-color: #F8F8F8;
}
</style>

<template>
  <Post
    v-if="postLoaded"
    :post="post"
    :user="user"
    :comments="comments"
    :detailedView="true" />
</template>

<script>
import Post from '@/components/Post.vue'
import apis from '@/apis'

export default {
  name: 'PostContainer',
  data: function() {
    return {
      id: 0,
      post: {},
      user: {},
      postLoaded: false,
      comments: [],
    }
  },
  components: {
    Post,
  },
  mounted() {
    var vm = this;
    vm.id = vm.$route.params.id;

    // fetch post details
    apis.posts(vm.id)
      .then((data) => {
        vm.post = data.post;

        Promise
          .all([apis.users(vm.post.userId), apis.postComments(vm.post.id)])
          .then((values) => {
            vm.user = values[0].user;
            vm.comments = values[1].comments;
            vm.postLoaded = true;
          })
      })
  }
}
</script>


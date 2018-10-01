<template>
  <div class="post">
      <template v-if="detailedView">
        <div class="post-info">
          <h3 class="title">{{ post.title | capitalize }}</h3>
          <p class="body">{{ post.body }}</p>
          <div class="user">
            <router-link :to="{name: 'user-info-container', params: {id: user.id}}">
              @{{ user.username }} ({{ user.name }})
            </router-link>
          </div>
          <div style="clear: both;"></div>
        </div>
        <ul class="comments" v-if="comments.length > 0">
          <li
            v-for="comment in comments"
            :key="comment.id"
          >
            <p>{{comment.body}}</p>
          </li>
        </ul>
      </template>
      <template v-else>
        <div class="post-info">
          <router-link :to="{name: 'post-container', params: {id: post.id}}">
            <h3 class="title">{{ post.title | capitalize }}</h3>
          </router-link>
          <p class="body">{{ post.body | truncate(100) }}</p>
          <div class="user">
            <router-link :to="{name: 'user-info-container', params: {id: user.id}}">
              @{{ user.username }} ({{ user.name }})
            </router-link>
          </div>
          <div style="clear: both;"></div>
        </div>
      </template>
  </div>
</template>

<script>
export default {
  name: "Post",
  props: ["post", "user", "comments", "detailedView"]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.post{
  margin: 20px 60px;
  padding: 14px 8px;
  background-color: #FEFEFE;
  border: 0;
  border-radius: 10px;
  box-shadow: 0px 0px 12px 2px rgba(0,0,0,0.15);

  .post-info{

    .title {
      font-size: 22pt;
      margin-bottom: 20px;
    }
    .body {
      padding: 20px 120px;
      color: rgba(0, 0, 0, 0.8);
    }
  }

  .user{
    color: blue;
    float: right;
  }

  ul.comments{
    list-style-type: none;
    border-top: 1px #CCC solid;
    margin: 10px 80px;
    padding: 0;

    li {
      border-bottom: 1px #E6E6E6 solid;
      text-align: left;
      padding: 0 10px;
    }
  }
}
</style>

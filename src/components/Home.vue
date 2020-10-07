<template>
  <div class="home_container">
    <div class="content">
      <img class="avatar" src="../assets/zzl4_03.png" />
      <div class="title">
        <span>Hey , 我是周振亮</span>
      </div>
      <div class="des">
        <p>
          2020年开始自学前端，从结构层->样式层->行为层开始，接着是前后端交互,再到前端框架，怀揣着对前端的热爱与热情，不断学习成长进步...
        </p>
      </div>
      <div class="des_link">
        <router-link to="/resume">
          <span class="resume_icon"></span>
          <span>简历</span>
        </router-link>
        <a class="blog" href="https://www.cnblogs.com/Izzl/">
          <span class="blog_icon"></span>
          <span>博客</span>
        </a>
        <a class="github" href="https://github.com/user-zzl" alt="github">
          <span class="github_icon"></span>
          <span>GitHub</span>
        </a>
      </div>
    </div>
    <footer>
      <p v-for="(item, i) in footer" v-text="item" :key="i"></p>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 版权
      footer: [
        'All Rights Reserved',
        `Copyright © 2020-${new Date().getFullYear()} ZZL`
      ]
    }
  },
  methods: {}
}
</script>

<style lang="less" scoped>
.home_container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-image: linear-gradient(to bottom right, #6ceddf, #ebcefd);
  .content {
    position: relative;
    width: 800px;
    height: 100%;
    // background-color: pink;
    //头像
    .avatar {
      width: 100px;
      border-radius: 50%;
      border: 2px solid #fff;
      margin: 150px 349px 30px;
    }
    //标题
    .title {
      font-size: 30px;
      font-weight: 600;
      text-align: center;
      line-height: 42px;
      margin-bottom: 30px;
    }
    //介绍
    .des {
      font-size: 14px;
      text-indent: 2em;
      margin-bottom: 30px;
    }
    //标签
    .des_link {
      font-size: 14px;
      text-align: center;
      margin-bottom: 20px;
      // router-link的样式
      a,
      .github {
        display: inline-block;
        margin: 0 20px;
        color: #666;
        .resume_icon,
        .blog_icon,
        .github_icon {
          display: block;
          font-family: 'icomoon';
          font-size: 35px;
          margin-bottom: 5px;
        }
      }
    }
  }
  footer {
    position: fixed;
    bottom: 0;
    width: 800px;
    border-top: 1px solid #c0b6b2;
    padding: 10px 0;
    color: #c0b6b2;
    font-size: 12px;
    line-height: 18px;
    text-align: center;
  }
}
</style>
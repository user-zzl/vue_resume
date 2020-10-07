<template>
  <div>
    <full-page :options="options" id="fullpage" ref="fullpage">
      <div class="section">
        <div class="overview">
          <div class="intro">
            <div class="avatar"></div>
            <ul class="intro-list">
              <li
                class="intro-item"
                v-for="(item, i) in overview.infoList"
                v-text="item"
                :key="i"
              ></li>
            </ul>
          </div>
          <div class="des">
            <p class="quote" v-text="overview.quote"></p>
            <div class="des-list">
              <p
                v-for="(item, i) in overview.desList"
                v-text="item"
                :key="i"
              ></p>
            </div>
          </div>
        </div>
      </div>
      <div class="section">
        <h3>能力</h3>
        <div class="skill">
          <div class="circle">
            <ul class="inner">
              <li
                class="item"
                v-text="item.name"
                :style="item.bg"
                v-for="(item, i) in skill.innerCircleList"
                :key="i"
              ></li>
            </ul>
            <ul class="out">
              <li
                class="item"
                v-text="item.name"
                :style="item.bg"
                v-for="(item, i) in skill.outCircleList"
                :key="i"
              ></li>
            </ul>
          </div>
          <div class="des">
            <p class="-list" v-for="(item, i) in skill.desList" v-text="item" :key="i"></p>
          </div>
        </div>
      </div>
      <div class="section">
        <h3>经历</h3>
        <div class="experience" ref="refExperience">
          <el-carousel
            indicator-position="outside"
            :autoplay="false"
            :interval="8000"
            arrow="never"
            @change="switchCarousel"
          >
            <el-carousel-item
              class="carousel"
              v-for="item in 2"
              :key="item"
              ref="refCarousel"
            >
              <!-- <h3>{{ item }}</h3> -->
              <div class="left">
                <div class="img" :style="expSelected.img"></div>
                <h4 v-text="expSelected.title"></h4>
                <p class="-post" v-text="expSelected.post"></p>
              </div>
              <div class="right">
                <p class="-time" v-text="expSelected.time"></p>
                <ul class="-item">
                  <li
                    v-for="(list, i) in expSelected.contentList"
                    :key="i"
                    v-text="list"
                  ></li>
                </ul>
              </div>
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
      <div class="section">
        <h3>作品</h3>
        <div class="works">
          <div class="cols">
            <div class="col" v-for="(item, i) in works.front" :key="i">
              <div class="front" :style="item.bg">
                <div class="inner">
                  <span class="-title" v-text="item.title"></span>
                  <!-- <p class="-des" v-text="item.des"></p> -->
                </div>
              </div>
              <div class="back">
                <div class="inner">
                  <p class="-des" v-text="item.des"></p>
                  <a class="github" :href="item.url"></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="section">
        <h3>联系我</h3>
        <div class="contact">
          <div class="words">
            <span
              v-for="(item, i) in contact.words"
              :key="i"
              v-text="item.text"
              class="-list"
              :style="item.color"
            ></span>
          </div>
          <div class="idea">
            <p
              class="-list"
              v-for="(item, i) in contact.idea"
              :key="i"
              v-text="item"
            ></p>
          </div>
          <div class="way">
            <a
              v-for="(item, i) in contact.way"
              :href="item.url"
              v-text="item.icon"
              :key="i"
              class="-list"
            ></a>
          </div>
        </div>
      </div>
    </full-page>
    <footer v-if="this.pageIndex == 4">
      <p v-for="(item, i) in footer" v-text="item" :key="i"></p>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // fullpage插件配置
      options: {
        licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
        // 每一页幻灯片的内容是否垂直居中
        verticalCentered: false,
        // 字体是否随着窗口缩放而缩放
        resize: true,
        // 设置每个section顶部的padding，当我们要设置一个固定在顶部的菜单、导航、元素等时使用
        paddingTop: '10px',
        // 是否显示导航，设为true会显示小圆点作为导航
        navigation: true,
        // 在离开一个section时，会触发一次此回调函数，接收index、nextIndex和direction3个参数
        onLeave: this.onLeave,
        sectionsColor: ['#87B0A9', '#4d5e8f', '#945c4c', '#4b85a0', '#a29971']
        // anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', 'lastPage']
      },
      // 简介信息
      overview: {
        infoList: ['22岁', '专科', '深圳', '求职'],
        quote: '自律即自由',
        desList: ['我叫周振亮，前端开发者', 'zhenliang.zhou@foxmail.com']
      },
      // 能力信息
      skill: {
        innerCircleList: [
          {
            bg: {
              backgroundColor: 'rgba(127, 255, 212, 0.7)'
            },
            name: 'HTML'
          },
          {
            bg: {
              backgroundColor: 'rgba(100, 149, 237,0.7)'
            },
            name: 'CSS'
          },
          {
            bg: {
              backgroundColor: 'rgba(0, 255, 255,0.7)'
            },
            name: 'JavaScript'
          }
        ],
        outCircleList: [
          {
            bg: {
              backgroundColor: 'rgba(210, 105, 30,0.7)'
            },
            name: 'jQuery'
          },
          {
            bg: {
              backgroundColor: 'rgba(255, 127, 80,0.7)'
            },
            name: 'Vue'
          },
          {
            bg: {
              backgroundColor: 'rgba(222, 184, 135,0.7)'
            },
            name: 'Bootstrap'
          },
          {
            bg: {
              backgroundColor: 'rgba(95, 158, 160,0.7)'
            },
            name: 'Webpack'
          },
          {
            bg: {
              backgroundColor: 'rgba(189, 183, 107,0.7)'
            },
            name: 'Git'
          },
          {
            bg: {
              backgroundColor: 'rgba(147, 112, 216,0.7)'
            },
            name: 'Ajax'
          }
        ],
        desList: [
          '熟练掌握 HTML和CSS,熟悉H5新特性和CSS3新增属性',
          '有扎实的JavaScript基本功，掌握ES6语法',
          '掌握jQuery库、Bootstrap、Vue框架',
          '掌握Ajax交互',
          '了解Webpack、Git等工具'
        ]
      },
      // 经历信息
      exp: {
        expList: [
          {
            title: '广州海格通信集团股份有限公司',
            time: '2019年7月~2020年2月',
            post: '"辅助设计实习"',
            img: {
              backgroundImage: 'url(' + require('../assets/HGlogo_1.png') + ')'
            },
            contentList: ['参与编写FPGA芯片驱动', '辅助调试通讯设备']
          },
          {
            title: '轨道交通信号控制系统设计与应用赛项',
            time: '2019年3月',
            post: '',
            img: {
              backgroundImage: 'url(' + require('../assets/bisai.jpg') + ')',
              width: '400px',
              height: '200px'
            },
            contentList: [
              '代表学院参与该比赛，三人一队，我主要负责线路连接设计'
            ]
          }
        ]
      },
      // 经历页面，当前轮播的内容
      expSelected: {},
      // 当前轮播索引
      expIndex: '0',
      // 作品信息
      works: {
        front: [
          {
            title: '仿京东页面',
            des: 'div+css布局，原生JS实现轮播图、电梯导航、放大镜',
            bg: {
              backgroundImage: 'url(' + require('../assets/pyg_index.png') + ')'
            },
            url: 'https://github.com/user-zzl/pingyougou'
          },
          {
            title: '阿里百秀响应式页面',
            des: 'bootstrap框架，实现大中小屏幕页面布局',
            bg: {
              backgroundImage:
                'url(' + require('../assets/albx_index.png') + ')'
            },
            url: 'https://github.com/user-zzl/alibaixiu'
          },
          {
            title: 'vue后台管理系统',
            des: 'vue框架，element-ui组件库,实现数据的增删改查',
            bg: {
              backgroundImage: 'url(' + require('../assets/vue_shop1.png') + ')'
            },
            url: 'https://github.com/user-zzl/vue_shop'
          },
          {
            title: '个人简历',
            des: 'vue框架，fullpage插件，实现个人情况的展示',
            bg: {
              backgroundImage: 'url(' + require('../assets/resume.png') + ')'
            },
            url: 'https://github.com/user-zzl/vue_resume'
          }
        ]
      },
      contact: {
        words: [
          {
            text: '灵感',
            color: {
              color: '#4EFEB3'
            }
          },
          {
            text: '代码',
            color: {
              color: '#53FF53'
            }
          },
          {
            text: '梦想',
            color: {
              color: '#00E3E3'
            }
          },
          {
            text: '未来',
            color: {
              color: '#0000E3'
            }
          }
        ],
        idea: [
          '注重细节，一丝不苟还原',
          '不断尝试，寻求新的突破',
          '前端之路，学无止境',
          '行有良伴，胜似捷径',
          '带上我吧，一起探索前端世界'
        ],
        way: [
          {
            url: 'https://github.com/user-zzl',
            icon: ''
          },
          {
            url: 'https://www.cnblogs.com/Izzl/',
            icon: ''
          },
          {
            url: 'mailto:zhenliang.zhou@foxmail.com',
            icon: ''
          }
        ]
      },
      // 当前section页码数
      pageIndex: 0,
      // 版权
      footer: [
        'All Rights Reserved',
        `Copyright © 2020-${new Date().getFullYear()} ZZL`
      ]
    }
  },
  created() {
    this.transitionEndHandler()
  },
  methods: {
    switchCarousel(event) {
      this.expIndex = event
      this.transitionEndHandler()
    },
    transitionEndHandler() {
      this.expSelected = this.exp.expList[this.expIndex]
    },
    afterLoad(x) {
      // console.log(x, x.index)
    },
    onLeave(index, nextIndex, direction) {
      // index是离开的页面的序号，从1开始计算；
      // nextIndex是滚动到的目的页面的序号，从1开始计算；
      // direction判断是网上滚动还是往下滚动，值是up或down。
      this.pageIndex = nextIndex.index
    }
    // mousemoveHandle() {
    // const carousel = this.$refs.refCarousel[this.pageIndex].$el
    // const experience = this.$refs.refExperience
    // const relX = (event.offsetX + 1) / carousel.offsetWidth
    // const relY = (event.offsetY + 1) / carousel.offsetHeight
    // const rotX = `rotateX( ${(relY - 0.5) * -60} deg )`
    // const rotY = `rotateY( ${(relX - 0.5) * 60} deg )`
    // experience.style.webkitTransform =
    // // console.log(rotX, rotY)
    // const PageX = event.pageX
    // const PageY = event.pageY
    // const ownWidth = carousel.offsetWidth
    // const ownHeight = carousel.offsetHeight
    // const offsetTop = experience.offsetTop
    // const offsetLeft = experience.offsetLeft
    // const x = PageX - offsetLeft - ownWidth / 2
    // const y = -(PageY - offsetTop - ownHeight / 2)
    // carousel.style.webkitTransform =
    //   'rotateY(' + x / 20 + 'deg) rotateX(' + y / 5 + 'deg)'
    // },
    // mouseoutHandle() {
    // const carousel = this.$refs.refCarousel[this.pageIndex].$el
    // carousel.style.transform = 'rotateY(0) rotateX(0)'
    // carousel.style.webkitTransform = ' rotateY(0) rotateX(0)'
    // }
  }
}
</script>

<style lang="less" >
.section {
  position: relative;
  text-align: center;
  h3 {
    color: #fff;
    font-size: 21px;
    letter-spacing: 10px;
    margin-top: 50px;
  }
  .fp-slides {
    position: relative;
    width: 100%;
    .fp-slidesContainer {
      display: flex;
      .slide {
        position: relative;
      }
    }
  }
  .fp-controlArrow {
    position: absolute;
    border-style: solid;
    top: 50%;
    transform: translateY(-50%);
    width: 0;
    opacity: 0.4;
    cursor: pointer;
  }
  .fp-controlArrow.fp-prev {
    left: 50px;
    border-width: 38.5px 34px 38.5px 0;
    border-color: transparent #fff transparent transparent;
    // z-index: 1;
  }
  .fp-controlArrow.fp-next {
    right: 50px;
    border-width: 38.5px 0 38.5px 34px;
    border-color: transparent transparent transparent #fff;
  }
}
#fp-nav.fp-right {
  position: fixed;
  top: 50%;
  right: 25px;
  margin: 0 !important;
  ul {
    transform: translateY(-50%);
    -webkit-transform: translate3d(0, -50%, 0);
    li {
      display: block;
      list-style: none;
      margin: 10px 0;
      a {
        display: block;
        width: 15px;
        height: 15px;
        border-radius: 50%;
        background-color: rgba(0, 0, 0, 0.1);
        .fp-sr-only {
          font-size: 0;
        }
      }
      .active {
        background-color: rgba(0, 0, 0, 0.5);
      }
    }
  }
}
// 简介
.overview {
  position: absolute;
  top: 80px;
  right: 80px;
  left: 80px;
  .intro {
    position: relative;
    margin-top: 50px;
    transition: all 1s;
    // 头像
    .avatar {
      width: 120px;
      height: 120px;
      border-radius: 50%;
      margin: 0 auto;
      background: url('../assets/zzl4_03.png') no-repeat center center;
      background-size: cover;
      animation: backInUp 2s;
    }
    // 小圆圈
    .intro-list {
      position: absolute;
      left: 50%;
      top: 50%;
      width: 50px;
      height: 50px;
      transform: translate(-50%, -50%);
      animation: zoomIn 2s;
      .intro-item {
        position: absolute;
        width: 45px;
        height: 45px;
        border-radius: 50%;
        box-shadow: 0 0 12px 5px rgba(255, 255, 255, 0.6) inset;
        text-align: center;
        font-size: 14px;
        line-height: 45px;
        animation: blink 2s infinite linear;
        @keyframes blink {
          0% {
            transform: scaleX(1);
          }

          50% {
            transform: scale3d(1.1, 1.1, 1.1);
          }

          to {
            transform: scaleX(1);
          }
        }
        color: #fff;
        &:nth-child(1) {
          top: 59px;
          left: -95px;
        }
        &:nth-child(2) {
          top: -79px;
          left: -53px;
        }
        &:nth-child(3) {
          top: 56px;
          left: 100px;
        }
        &:nth-child(4) {
          top: -66px;
          left: 85px;
        }
      }
    }
  }
  // 格言
  .des {
    text-align: center;
    padding-top: 50px;
    color: #fff;
    animation: backInUp 4s;
    .quote {
      position: relative;
      font-size: 22px;
      margin: 22px 0;
      line-height: 40px;
      padding: 5px 0;
      &::after {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        height: 1px;
        background-color: #fff;
        opacity: 0.4;
      }
    }
    .des-list {
      font-size: 18px;
      margin-top: 50px;
      line-height: 40px;
    }
  }
}
// 能力
.skill {
  position: absolute;
  top: 120px;
  bottom: 120px;
  right: 80px;
  left: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  color: #fff;
  .circle {
    // background-color: green;
    position: relative;
    font-size: 13px;
    text-align: center;
    line-height: 55px;
    // less语法，定义一个带参数的动画函数
    .animation(@type1, @delay1, @type2, @delay2) {
      animation: @type1 8s ease-in-out @delay1 infinite alternate,
        @type2 8s ease-in-out @delay2 infinite alternate;
      @keyframes outX {
        0% {
          left: -30px;
        }
        100% {
          left: 270px;
        }
      }
      @keyframes outY {
        0% {
          top: -30px;
        }
        100% {
          top: 270px;
        }
      }
      @keyframes innerX {
        0% {
          left: -28px;
        }
        100% {
          left: 122px;
        }
      }
      @keyframes innerY {
        0% {
          top: 122px;
        }
        100% {
          top: -28px;
        }
      }
    }
    .inner {
      // background-color: blue;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 150px;
      height: 150px;
      border-radius: 50%;
      border: 4px dashed #999;
      .item {
        position: absolute;
        width: 55px;
        height: 55px;
        border-radius: 50%;
        &:nth-child(1) {
          .animation(innerX, -4s, innerY, 0s);
        }
        &:nth-child(2) {
          .animation(innerX, -9.1s, innerY, -5.1s);
        }
        &:nth-child(3) {
          .animation(innerX, -14.2s, innerY, -10.2s);
        }
      }
    }
    .out {
      // background-color: red;
      position: relative;
      width: 300px;
      height: 300px;
      border: 4px dashed #999;
      border-radius: 50%;
      .item {
        position: absolute;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        &:nth-child(1) {
          .animation(outX, -4s, outY, 0s);
        }
        &:nth-child(2) {
          .animation(outX, -6.6s, outY, -2.6s);
        }
        &:nth-child(3) {
          .animation(outX, -9.2s, outY, -5.2s);
        }
        &:nth-child(4) {
          .animation(outX, -11.8s, outY, -7.8s);
        }
        &:nth-child(5) {
          .animation(outX, -14.4s, outY, -10.4s);
        }
        &:nth-child(6) {
          .animation(outX, -17s, outY, -13s);
        }
      }
    }
  }
  .des {
    text-align: center;
    margin: 30px 100px;
    font-size: 18px;
    .-list {
      margin-bottom: 5px;
    }
  }
}
// 经历
.experience {
  position: relative;
  width: 750px;
  height: 350px;
  margin: 120px auto;
  transition: transform 0.1s linear;
  .el-carousel__container {
    position: relative;
    .el-carousel__item {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #fff;
      border-radius: 10px;
      transition: transform 0.3s linear;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.5) inset;
      .left {
        .img {
          background: center center no-repeat;
          background-size: contain;
          width: 150px;
          height: 150px;
          margin: 0 auto 5px;
        }
        h4 {
          color: #d9822b;
          font-size: 20px;
          margin: 0 auto 5px;
        }
        .-post {
          color: #d9822b;
          font-size: 18px;
        }
      }
      .right {
        margin-left: 100px;
        width: 300px;
        .-time {
          color: #d9822b;
          font-size: 20px;
          margin: 25px auto;
        }
        .-item {
          text-align: left;
          li {
            padding: 5px 10px;
            position: relative;
            &::before {
              content: '';
              position: absolute;
              top: 50%;
              left: -25px;
              transform: translateY(-50%);
              width: 10px;
              height: 10px;
              border-radius: 50%;
              background-color: #d9822b;
            }
          }
        }
      }
    }
  }
}
// 作品
.works {
  // background-color: pink;
  margin-top: 100px;
  .cols {
    display: flex;
    perspective: 5000px;
    transform-style: preserve-3d;
    justify-content: center;
    transition: transform 1s cubic-bezier(0.4, 0.2, 0.2, 1);
    .col {
      position: relative;
      width: 25%-4px;
      height: 400px;
      margin: 10px;
      border-radius: 10px;
      transform-style: preserve-3d;
      -webkit-transform-style: preserve-3d;
      &:hover {
        .front {
          transform: rotateY(-180deg);
        }
        .back {
          transform: rotateY(0deg);
        }
        .front,
        .back {
          transform-style: preserve-3d;
          -webkit-transform-style: preserve-3d;
          transition: transform 1s cubic-bezier(0.4, 0.2, 0.2, 1);
          -webkit-transition: transform 1s cubic-bezier(0.4, 0.2, 0.2, 1);
          -o-transition: transform 1s cubic-bezier(0.4, 0.2, 0.2, 1);
        }
      }
      .front,
      .back {
        width: 100%;
        height: 100%;
        background-size: 100% 100%;
        border-radius: 10px;
        backface-visibility: hidden;
        -webkit-backface-visibility: hidden;
        transform-style: preserve-3d;
        -webkit-transform-style: preserve-3d;
        transition: transform 1s cubic-bezier(0.4, 0.2, 0.2, 1);
        -webkit-transition: transform 1s cubic-bezier(0.4, 0.2, 0.2, 1);
        -o-transition: transform 1s cubic-bezier(0.4, 0.2, 0.2, 1);
      }
      .inner {
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%) translateZ(60px) scale(0.94);
        -webkit-transform: translateY(-50%) translateZ(60px) scale(0.94);
        width: 100%;
        color: #fff;
      }
      .front {
        transform: rotateY(0deg);
        .inner {
          .-title {
            position: relative;
            display: block;
            font-size: 23px;
            font-weight: 700;
            margin-bottom: 20px;
            &::after {
              content: '';
              display: block;
              position: absolute;
              bottom: -8px;
              left: 0;
              right: 0;
              width: 35%;
              height: 2px;
              margin: 0 auto;
              background-color: #fff;
            }
          }
        }
        &::after {
          content: '';
          width: 100%;
          height: 100%;
          display: block;
          background-color: #000;
          border-radius: 10px;
          opacity: 0.6;
        }
      }
      .back {
        position: absolute;
        top: 0;
        left: 0;
        background: #cedce7;
        background: -webkit-linear-gradient(45deg, #cedce7 0%, #596a72 100%);
        background: -o-linear-gradient(45deg, #cedce7 0%, #596a72 100%);
        background: linear-gradient(45deg, #cedce7 0%, #596a72 100%);
        transform: rotateY(180deg);
        .inner {
          .-des {
            font-size: 18px;
            padding: 0 15px;
            cursor: text;
          }
          .github {
            position: relative;
            &::after {
              content: '\eab0';
              font-family: 'icomoon';
              position: absolute;
              left: 50%;
              transform: translateX(-50%);
              font-size: 30px;
              color: #000;
              background-color: #fff;
              border-radius: 50%;
              cursor: pointer;
            }
          }
        }
      }
    }
  }
}
// 联系我
.contact {
  width: 600px;
  height: auto;
  margin: 80px auto 0;
  .words {
    font-size: 23px;
    margin-bottom: 50px;
    .-list {
      margin: 0 40px;
    }
  }
  .idea {
    color: #fff;
    font-size: 18px;
    line-height: 30px;
    margin-bottom: 50px;
    .-list {
      margin-bottom: 10px;
    }
  }
  .way {
    .-list {
      font-family: 'icomoon';
      font-size: 32px;
      color: #000;
      margin: 0 25px;
    }
  }
}
footer {
  z-index: 10;
  position: fixed;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  width: 800px;
  border-top: 1px solid #c0b6b2;
  padding: 10px 0;
  color: #c0b6b2;
  font-size: 12px;
  line-height: 18px;
  text-align: center;
}
</style>
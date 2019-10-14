<template>
  <header class="header">
    <div class="logo">&lt;Pudge/&gt;</div>
    <!-- 导航列表 -->
    <nav>
      <li v-for="(item, index) in navList" :key="index" :class="item.className">
        <div class="borderTop"></div>
        <div class="li-main">
          <span class="iconfont" :class="item.iconName"></span>
          <p class="title">{{ item.title }}</p>
        </div>
      </li>
    </nav>
    <!-- 右侧搜索框 -->
    <div class="search">
      <div class="search-inset" :class="{focusInBox: inputFocus}">
        <div class="left">
          <input
            type="text"
            placeholder="全局标签搜索，如 css"
            @focus="inputFocus = true"
            @blur="inputFocus = false"
          >
        </div>
        <div class="right">
          <span class="iconfont icon-fangdajing"></span>
        </div>
      </div>
    </div>
    <!-- 中等尺寸时的搜索按钮 -->
    <div class="search-button" @click="outSearchShow = !outSearchShow">
      <span class="iconfont icon-fangdajing" v-if="!outSearchShow"></span>
      <span class="iconfont icon-guanbi" v-else></span>
    </div>
    <!-- 小尺寸时的搜索按钮 -->
    <div class="button-grounp">
      <div class="g-left" @click="outSearchShow = !outSearchShow">
        <span class="iconfont icon-fangdajing" v-if="!outSearchShow"></span>
        <span class="iconfont icon-guanbi" v-else></span>
      </div>
      <div class="g-right" :class="{rightActive: outListShow}" @click="outListShow = !outListShow">
        <span class="iconfont icon-liebiao" v-if="!outListShow"></span>
        <span class="iconfont icon-guanbi" v-else></span>
      </div>
    </div>
    <!-- 中等尺寸和小尺寸时的隐藏搜索框 -->
    <transition name="slide-fade">
      <div class="out-search" v-if="outSearchShow">
        <div class="inset-search" :class="{focusInBox: inputFocus}">
          <div class="left">
            <input
              type="text"
              placeholder="e.g. float"
              @focus="inputFocus = true"
              @blur="inputFocus = false"
            >
          </div>
          <div class="right">
            <span class="iconfont icon-fangdajing"></span>
          </div>
        </div>
      </div>
    </transition>
  </header>
</template>

<script>
export default {
  data () {
    return {
      navList: [
        {
          className: 'li1',
          iconName: 'icon-html5',
          title: 'HTML、CSS'
        },
        {
          className: 'li2',
          iconName: 'icon-js-square',
          title: 'JavaScript'
        },
        {
          className: 'li3',
          iconName: 'icon-vuejs',
          title: 'VUE'
        },
        {
          className: 'li4',
          iconName: 'icon-react',
          title: 'React'
        },
        {
          className: 'li5',
          iconName: 'icon-node',
          title: 'node、其他'
        },
        {
          className: 'li6',
          iconName: 'icon-shiti-tianchong',
          title: '面试'
        }
      ],
      inputFocus: false,
      outSearchShow: false,
      outListShow: false
    }
  }
}
</script>

<style lang="less" scoped>
@import "../assets/css/var.less";
header {
  height: 130px;
  border-bottom: 1px solid @hover-color;
  display: flex;
  align-items: center;
  position: relative;
  z-index: 19;
  background: #100e17;
  .logo {
    width: 323px;
    height: 100%;
    text-align: center;
    line-height: 130px;
    font-size: 40px;
    letter-spacing: 4px;
    font-weight: 900;
    color: transparent;
    background: linear-gradient(
      45deg,
      @gradient-left-color 0%,
      @gradient-right-color 100%
    );
    background-clip: text;
    cursor: pointer;
  }
  nav {
    flex: 3;
    height: 100%;
    display: flex;
    cursor: pointer;
    li {
      flex: 1;
      border-left: 1px solid @hover-color;
      display: flex;
      flex-direction: column;
      .borderTop {
        width: 100%;
        height: 5px;
        background: transparent;
      }
      .li-main {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        .iconfont {
          font-size: 50px;
        }
        .title {
          font-size: 14px;
          margin-top: 12px;
        }
      }
      &:hover {
        background: @hover-color;
      }
    }
    .hover {
      background: @hover-color;
      .borderTop {
        width: 100%;
        height: 5px;
        background-image: linear-gradient(
          to right,
          @gradient-left-color,
          @gradient-right-color
        );
      }
      .active1 {
        color: @html5-stage-color;
      }
      .active2 {
        color: @js-stage-color;
      }
      .active3 {
        color: @vue-stage-color;
      }
      .active4 {
        color: @react-stage-color;
      }
      .active5 {
        color: @node-stage-color;
      }
      .active6 {
        color: @shiti-stage-color;
      }
    }
    .li1 {
      &:hover {
        .icon-html5 {
          color: @html5-stage-color;
        }
      }
    }
    .li2 {
      &:hover {
        .icon-js-square {
          color: @js-stage-color;
        }
      }
    }
    .li3 {
      &:hover {
        .icon-vuejs {
          color: @vue-stage-color;
        }
      }
    }
    .li4 {
      &:hover {
        .icon-react {
          color: @react-stage-color;
        }
      }
    }
    .li5 {
      &:hover {
        .icon-node {
          color: @node-stage-color;
        }
      }
    }
    .li6 {
      &:hover {
        .icon-shiti-tianchong {
          color: @shiti-stage-color;
        }
      }
    }
  }
  .search {
    flex: 2;
    height: 100%;
    display: flex;
    border-left: 1px solid @hover-color;
    .search-inset {
      width: calc(100% - 80px);
      height: 60px;
      margin: auto;
      border: 2px solid #fff;
      border-radius: 30px;
      display: flex;
      overflow: hidden;
      .left {
        width: calc(100% - 66px);
        height: 100%;
        display: flex;
        input {
          width: calc(100% - 50px);
          height: 22px;
          margin: auto;
          border: none;
          outline: none;
          background: transparent;
          color: #fff;
          font-size: 16px;
        }
      }
      .right {
        width: 66px;
        height: 100%;
        background-image: linear-gradient(
          to right,
          @gradient-left-color,
          @gradient-right-color
        );
        display: flex;
        cursor: pointer;
        .iconfont {
          margin: auto;
          font-size: 24px;
          font-weight: 900;
          margin-left: 17px;
        }
      }
    }
    .focusInBox {
      border-color: rgb(255, 76, 76);
    }
  }
  .search-button {
    height: 100%;
    border-left: 1px solid @hover-color;
    display: none;
    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px;
    cursor: pointer;
    position: relative;
    .iconfont {
      font-size: 30px;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }
  .button-grounp {
    width: 150px;
    height: 100%;
    display: none;
    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px;
    border-left: 1px solid @hover-color;
    cursor: pointer;
    overflow: hidden;
    .g-left {
      width: 50%;
      height: 100%;
      float: left;
      display: flex;
    }
    .g-right {
      width: 50%;
      height: 100%;
      float: left;
      display: flex;
      border-left: 1px solid @hover-color;
    }
    .rightActive {
      background-image: linear-gradient(
        to right,
        @gradient-left-color,
        @gradient-right-color
      );
    }
    .iconfont {
      margin: auto;
      font-size: 26px;
      font-weight: 900;
    }
  }
  .out-search {
    width: 100%;
    height: 80px;
    position: absolute;
    top: 100%;
    left: 0;
    background: #000;
    display: none;
    z-index: 10;
    .inset-search {
      width: calc(100% - 40px);
      height: 44px;
      .center();
      border: 2px solid #fff;
      border-radius: 22px;
      display: flex;
      overflow: hidden;
      .left {
        width: calc(100% - 66px);
        height: 100%;
        display: flex;
        input {
          width: calc(100% - 50px);
          height: 22px;
          margin: auto;
          border: none;
          outline: none;
          background: transparent;
          color: #fff;
          font-size: 16px;
        }
      }
      .right {
        width: 66px;
        height: 100%;
        background-image: linear-gradient(
          to right,
          @gradient-left-color,
          @gradient-right-color
        );
        display: flex;
        cursor: pointer;
        .iconfont {
          margin: auto;
          font-size: 24px;
          font-weight: 900;
          margin-left: 20px;
        }
      }
    }
    .focusInBox {
      border-color: rgb(255, 76, 76);
    }
  }
  .slide-fade-enter-active,
  .slide-fade-leave-active {
    transition: all 0.2s ease;
  }
  .slide-fade-enter,
  .slide-fade-leave-to {
    transform: translateX(100%);
    opacity: 0;
  }
}
@media screen and (max-width: 1200px) {
  header {
    height: 100px;
    .logo {
      line-height: 100px;
      width: 242px;
      font-size: 34px;
    }
    nav {
      flex: 5;
      li {
        .li-main {
          .iconfont {
            font-size: 40px;
          }
          .title {
            font-size: 12px;
            margin-top: 10px;
          }
        }
      }
    }
    .search {
      display: none;
    }
    .search-button {
      display: block;
      flex: 1;
    }
    .out-search {
      display: block;
    }
  }
}
@media screen and (max-width: 800px) {
  header {
    height: 60px;
    justify-content: space-between;
    .logo {
      line-height: 60px;
      width: 176px;
      font-size: 28px;
    }
    nav {
      display: none;
    }
    .search-button {
      display: none;
    }
    .button-grounp {
      display: block;
    }
  }
}
</style>
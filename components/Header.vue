<template>
  <header class="header">
    <div class="logo">&lt;wang/&gt;</div>
    <nav>
      <li v-for="(item, index) in navList" :key="index" :class="item.className">
        <div class="borderTop"></div>
        <div class="li-main">
          <span class="iconfont" :class="item.iconName"></span>
          <p class="title">{{ item.title }}</p>
        </div>
      </li>
    </nav>
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
          iconName: 'icon-html5',
          title: 'ES6、TS'
        },
        {
          className: 'li4',
          iconName: 'icon-node',
          title: 'node、框架'
        },
        {
          className: 'li5',
          iconName: 'icon-shiti-tianchong',
          title: '面试'
        }
      ]
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
          font-size: 16px;
          margin-top: 12px;
        }
        .li3-es {
          width: 47px;
          height: 47px;
          background:#fff;
          margin:1.5px;
          border-radius: 4px;
          padding: 4px;
          display: flex;
          justify-content: flex-end;
          align-items: flex-end;
          color: @bg-color;
          font-size: 20px;
          font-weight: 600;
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
        color: @one-stage-color;
      }
      .active2 {
        color: @two-stage-color;
      }
      .active3 {
        background: rgb(250,225,31)!important;
      }
      .active4 {
        color: @three-stage-color;
      }
      .active5 {
        color: #fbca71;
      }
    }
    .li1 {
      &:hover {
        .icon-html5 {
          color: @one-stage-color;
        }
      }
    }
    .li2 {
      &:hover {
        .icon-js-square {
          color: @two-stage-color;
        }
      }
    }
    .li3 {
      &:hover {
        .li3-es {
          background: rgb(250,225,31)
        }
      }
    }
    .li4 {
      &:hover {
        .icon-node {
          color: @three-stage-color;
        }
      }
    }
    .li5 {
      &:hover {
        .icon-shiti-tianchong {
          color: #fbca71;
        }
      }
    }
  }
}
</style>
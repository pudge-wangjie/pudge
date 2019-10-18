<template>
  <header>
    <div class="part1"></div>
    <div class="part2"></div>
    <div class="part3"></div>
    <div class="main">
      <h2>111111</h2>
      <p>
        html和css够简单和熟悉不过了吧,
        <br>可是你真的会了吗？
      </p>
      <div class="search-box">
        <div class="search-main">
          <div class="search-main-left">
            <el-select v-model="value" clearable placeholder="页面内标签选择" @change="selectChange">
              <el-option v-for="item in optionsTag"
                :key="item"
                :label="item"
                :value="item">
              </el-option>
            </el-select>
            <span>88篇文章</span>
          </div>
        </div>
        <div class="search-top-right"></div>
        <div class="search-top-small"></div>
        <div class="border"></div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "StageTop",
  props: {},
  data() {
    return {
      value: '',
      optionsTag: []
    };
  },
  computed: {},
  methods: {
    selectChange(val) {
      console.log(value);
    }
  }
}
</script>

<style lang="less" scoped>
@import "../../assets/css/var.less";
header {
  position: relative;
  overflow: hidden;
  padding-bottom: 60px;
  .part1 {
    width: 380px;
    height: 260px;
    background-image: linear-gradient(
      to bottom right,
      @gradient-left-color,
      @gradient-right-color
    );
    border-top-left-radius: 140px;
    border-bottom-left-radius: 140px;
    position: absolute;
    z-index: 9;
    right: 0;
    top: -100px;
    @media (max-width: 800px) {
      display: none;
    }
  }
  .part2 {
    width: 140px;
    height: 140px;
    border-radius: 50%;
    background: rgb(33, 28, 44);
    position: absolute;
    right: 350px;
    top: -30px;
    @media (max-width: 800px) {
      display: none;
    }
  }
  .part3 {
    width: 250px;
    height: 250px;
    border-radius: 50%;
    background-image: linear-gradient(
      to bottom right,
      @gradient-left-color,
      @gradient-right-color
    );
    position: absolute;
    z-index: 9;
    left: -125px;
    bottom: 0;
    @media (max-width: 1300px) {
      display: none;
    }
  }
  .main {
    margin: 0 auto;
    max-width: 1100px;
    height: 100%;
    padding: 40px 40px 0 40px;
    h2 {
      font-size: 40px;
      font-weight: 500;
    }
    p {
      font-size: 20px;
      margin-top: 14px;
      line-height: 30px;
      color: #c2c2c2;
    }
    .search-box {
      width: 100%;
      height: 100px;
      margin-top: 30px;
      position: relative;
      border-radius: 50px;
      background-image: linear-gradient(
        to right,
        @gradient-right-color,
        @gradient-left-color
      );
      display: flex;
      @media (max-width: 800px) {
        height: 80px;
      }
      .search-main {
        width: calc(100% - 8px);
        height: calc(100% - 8px);
        background: @bg-color;
        margin: auto;
        border-radius: 46px;
        .search-main-left {
          width: 50%;
          height: 100%;
          display: flex;
          justify-content: space-around;
          align-items: center;
          @media (max-width: 800px) {
            width: 100%;
          }
        }
        
      }
      .search-top-right {
        position: absolute;
        width: 50%;
        height: 50%;
        right: 0;
        top: 0;
        background: @bg-color;
        @media (max-width: 800px) {
          display: none;
        }
      }
      .search-top-small {
        position: absolute;
        width: 70%;
        height: 4px;
        left: 15%;
        top: 0;
        background: @bg-color;
        display: none;
        @media (max-width: 800px) {
          display: block;
        }
      }
      .border {
        position: absolute;
        width: 4px;
        height: 90px;
        right: 0;
        top: -40px;
        background: @gradient-left-color;
        @media (max-width: 800px) {
          display: none;
        }
      }
    }
  }
}
</style>
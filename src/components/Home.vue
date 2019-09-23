<template>
    <div class="home" v-if="show">
        <el-card>
            <h2 class="title"><i class="el-icon-brush"></i>FilterLib Example</h2>
            <hr>

            <el-row :gutter="20">
                <el-col :span="12" class="">
                    <el-card>
                        <a @click="handleFilterClick"><img id="BlurFilter" class="handlerImage" :src="require('../assets/blur.jpg')" alt="blurFilter"></a>
                        <h3 class="handlerSubText">Blur Filter</h3>
                    </el-card>
                </el-col>
                <!--<el-col :span="6">asdf</el-col>-->
                <!--<el-col :span="6">asdf</el-col>-->
                <!--<el-col :span="6"><div class="grid-content bg-purple"></div></el-col>-->
            </el-row>

        </el-card>
    </div>
</template>

<script>

    import EventBus from '../eventBus.js';

  export default {
    name: "Home",
    data() {
      return {
        show: true
      }
    },
    methods: {
      handleFilterClick(e) {
        e.preventDefault();
        const filterType = e.target.getAttribute('id');
        console.log(filterType);
        this.goToComponent(filterType);
      },

      hide() {
        this.show = false;
      },

      goToComponent(component) {
        this.hide();
        EventBus.$emit(`show${component}`);
      }
    },

    mounted() {
      EventBus.$on('showHome', () => {
        this.show = true;
      });
    }
  };
</script>

<style>
    .home {
        display: flex;
        width: 100%;
        height: calc(98vh);
        margin: 0;

        justify-content: center;
        align-items: center;
    }

    .home .el-card {
        min-width: 600px;
        max-height: 800px;
        min-height: 600px;
    }

    .home .title {
        font-family: 'Rubik', sans-serif;
    }

    .home .title i {
        padding-right: 10px;
    }

    .home .el-upload-dragger {
        width: 100%;
    }

    .home .el-upload {
        width: 100%;
    }

    .home .handlerImage {
        max-width: 100%;
    }

    .home .handlerSubText {
        font-family: 'Rubik', sans-serif;
        margin-bottom: 10px;
    }
</style>
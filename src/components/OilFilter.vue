<template>
    <div v-if="show" class="home oilFilter">
        <el-card v-loading="loading">
            <el-page-header @back="goBack" content="Oil Filter">
            </el-page-header>

            <el-upload
                    class="upload-demo"
                    drag
                    action="http://127.0.0.1:8081/oilFilter"
                    ref="oilUpload"
                    :auto-upload="false"
                    :file-list="fileList"
                    :data="{radius: oilOptions.radius, sigma: oilOptions.sigma }"
                    :on-success="handleSuccess"
                    multiple>
                <i class="el-icon-upload"></i>
                <div class="el-upload__text">Drop file here or <em>click to upload</em></div>
                <div class="el-upload__tip" slot="tip">jpg/png files with a size less than 500kb</div>
            </el-upload>

            <hr>

            <div class="filterOptions">
                <div class="block">
                    <span class="demonstration">Oil Radius</span>
                    <el-slider v-model="oilOptions.radius"></el-slider>
                </div>
                <div class="block">
                    <span class="demonstration">Oil Sigma</span>
                    <el-slider v-model="oilOptions.sigma"></el-slider>
                </div>
            </div>

            <button @click="submitUpload">Go</button>
        </el-card>
    </div>
</template>

<script>
  import EventBus from '../eventBus.js';

  export default {
    name: "OilFilter",
    data() {
      return {
        show: false,
        fileList: [],
        loading: false,

        oilOptions: {
          radius: 0,
          sigma: 0
        }
      }
    },

    methods: {
      goBack() {
        this.show = false;
        EventBus.$emit('showHome');
      },

      submitUpload() {
        this.$refs.oilUpload.submit();
        this.doLoad();
      },

      handleSuccess(fileUrl) {
        this.unLoad();
        this.showImageModal(fileUrl);
      },

      doLoad() {
        this.loading = true;
      },

      unLoad() {
        this.loading = false;
      },

      showImageModal(imageUrl) {

        this.$alert(`<img src="${imageUrl}" style="width:100%;"/>`, 'Resulting Image', {
          confirmButtonText: 'OK',
          dangerouslyUseHTMLString: true
        });

      }
    },

    mounted() {
      EventBus.$on('showOilFilter', () => {
        this.show = true;

        EventBus.$emit('hideBlurFilter');
      });

      EventBus.$on('hideOilFilter', () => {
        this.show = false;
      });
    }
  };
</script>

<style>
    .el-page-header__title {
        display: none;
    }

    .oilFilter .upload-demo {
        margin-top: 20px;
    }

    .filterOptions {
        padding: 20px;
    }
</style>
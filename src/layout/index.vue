<template>
  <div
    :class="classObj"
    class="app-wrapper"
    :style="{ '--current-color': theme }"
  >
    <div
      v-if="device === 'mobile' && sidebar.opened"
      class="drawer-bg"
      @click="handleClickOutside"
    />
    <div :class="{ 'fixed-header': fixedHeader }">
      <navbar />
    </div>
    <div class="bottom_wrap" :key="sidebar.opened">
      <div class="mainSide">
        <sidebar class="sidebar-container" />
        <div @click="toggleSideBar" class="control">
          <i
            :class="
              sidebar.opened ? 'el-icon-arrow-left' : 'el-icon-arrow-right'
            "
          ></i>
        </div>
      </div>

      <div :class="{ hasTagsView: needTagsView }" class="main-container">
        <app-main />
      </div>
    </div>
  </div>
</template>

<script>
import { AppMain, Navbar, Sidebar } from './components'
import ResizeMixin from './mixin/ResizeHandler'
import { mapState, mapGetters } from 'vuex'
import variables from '@/assets/styles/variables.scss'

export default {
  name: 'Layout',
  components: {
    AppMain,
    Navbar,
    Sidebar,
  },
  mixins: [ResizeMixin],
  computed: {
    ...mapState({
      theme: (state) => state.settings.theme,
      sideTheme: (state) => state.settings.sideTheme,
      device: (state) => state.app.device,
      needTagsView: (state) => state.settings.tagsView,
      fixedHeader: (state) => state.settings.fixedHeader,
    }),
    ...mapGetters(['sidebar']),
    classObj() {
      return {
        hideSidebar: !this.sidebar.opened,
        openSidebar: this.sidebar.opened,
        withoutAnimation: this.sidebar.withoutAnimation,
        // mobile: this.device === 'mobile',
      }
    },
    variables() {
      return variables
    },
  },
  methods: {
    handleClickOutside() {
      this.$store.dispatch('app/closeSideBar', { withoutAnimation: false })
    },
    toggleSideBar() {
      this.$store.dispatch('app/toggleSideBar')
      // this.$router.go(0)
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~@/assets/styles/mixin.scss';
@import '~@/assets/styles/variables.scss';

.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;
  background: #f6f8f9;

  &.mobile.openSidebar {
    position: fixed;
    top: 0;
  }
}

.drawer-bg {
  background: #000;
  opacity: 0.3;
  width: 100%;
  top: 0;
  height: 100%;
  position: absolute;
  z-index: 999;
}

.fixed-header {
  // position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  width: 100%;
  transition: width 0.28s;
}

.bottom_wrap {
  display: flex;
  height: calc(100% - 80px);
  width: 100%;
  .mainSide {
    position: relative;
    .control {
      position: absolute;
      height: 55px;
      width: 12px;
      top: 40%;
      background: #fff;
      z-index: 98;
      right: -12px;
      border-radius: 0 12px 12px 0;
      // display: flex;
      // justify-content: center;
      // align-content: center;
      line-height: 55px;
      color: #ccc;
      padding-right: 5px;
      cursor: pointer;
    }
  }
  .main-container {
    flex-grow: 1 !important;
  }
}
.hideSidebar .fixed-header {
  // width: 100%;
}

.mobile .fixed-header {
  width: 100%;
}
</style>

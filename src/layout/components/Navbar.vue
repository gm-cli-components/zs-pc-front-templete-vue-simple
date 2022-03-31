<template>
  <div class="navbar">
    <!-- <hamburger id="hamburger-container"
               :is-active="sidebar.opened"
               class="hamburger-container left-menu"
               @toggleClick="toggleSideBar" /> -->
    <div class="center-menu">
      <!-- <img class="titleLogo" src="@/assets/logo/titleLogo.png" />
      河南省一体化疫情防控管理平台 <span class="line"> | </span>
      <span class="fs-26 m-l-10"> 核酸检测管理系统 </span> -->
      <img class="titleLogo" src="@/assets/logo/titleLogo.png" />
      这里是主系统标题 <span class="line"> | </span>
      <span class="fs-26 m-l-10"> 这里是子系统标题 </span>
    </div>
    <div class="right-menu m-r-20">
      <!-- <template v-if="device !== 'mobile'">

        <screenfull id="screenfull"
                    class="right-menu-item hover-effect" />

        <el-tooltip content="布局大小"
                    effect="dark"
                    placement="bottom">
          <size-select id="size-select"
                       class="right-menu-item hover-effect" />
        </el-tooltip>
      </template> -->

      <el-dropdown
        class="avatar-container right-menu-item hover-effect"
        trigger="click"
      >
        <div class="avatar-wrapper">
          <i class="el-icon-s-custom" />
          欢迎，{{ user.name }}
          <i class="el-icon-caret-bottom" />
        </div>
        <el-dropdown-menu slot="dropdown">
          <router-link to="/user/profile">
            <el-dropdown-item>个人中心</el-dropdown-item>
          </router-link>
          <!-- <el-dropdown-item @click.native="setting = true">
            <span>布局设置</span>
          </el-dropdown-item> -->
          <el-dropdown-item divided @click.native="logout">
            <span>退出登录</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <!-- <div class="right-menu">
      <template v-if="device !== 'mobile'">

        <screenfull id="screenfull"
                    class="right-menu-item hover-effect" />

        <el-tooltip content="布局大小"
                    effect="dark"
                    placement="bottom">
          <size-select id="size-select"
                       class="right-menu-item hover-effect" />
        </el-tooltip>
      </template>

      <el-dropdown class="avatar-container right-menu-item hover-effect"
                   trigger="click">
        <div class="avatar-wrapper">
          <img :src="avatar"
               class="user-avatar" />
          <i class="el-icon-caret-bottom" />
        </div>
        <el-dropdown-menu slot="dropdown">
          <router-link to="/user/profile">
            <el-dropdown-item>个人中心</el-dropdown-item>
          </router-link>
          <el-dropdown-item @click.native="setting = true">
            <span>布局设置</span>
          </el-dropdown-item>
          <el-dropdown-item divided
                            @click.native="logout">
            <span>退出登录</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div> -->
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
import Breadcrumb from '@/components/Breadcrumb'
import TopNav from '@/components/TopNav'
import Hamburger from '@/components/Hamburger'
import Screenfull from '@/components/Screenfull'
import SizeSelect from '@/components/SizeSelect'
import Search from '@/components/HeaderSearch'

export default {
  components: {
    Breadcrumb,
    TopNav,
    Hamburger,
    Screenfull,
    SizeSelect,
    Search,
  },
  computed: {
    ...mapState(['user']),
    ...mapGetters(['sidebar', 'avatar', 'device']),
    setting: {
      get() {
        return this.$store.state.settings.showSettings
      },
      set(val) {
        this.$store.dispatch('settings/changeSetting', {
          key: 'showSettings',
          value: val,
        })
      },
    },
    topNav: {
      get() {
        return this.$store.state.settings.topNav
      },
    },
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch('app/toggleSideBar')
    },
    async logout() {
      this.$confirm('确定注销并退出系统吗？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      })
        .then(() => {
          this.$store.dispatch('LogOut').then(() => {
            location.href = '/index'
          })
        })
        .catch(() => {})
    },
  },
}
</script>

<style lang="scss" scoped>
.navbar {
  height: 80px;
  overflow: hidden;
  background: #1d63cc;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .center-menu {
    font-size: 30px;
    font-family: Source Han Sans CN;
    font-weight: 500;
    color: #f6f5ff;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    .line {
      font-weight: 200;
      margin-left: 16px;
    }
    .titleLogo {
      width: 34px;
      margin: -10px 20px 0;
      // height: 34px;
    }
    .fs-30 {
      font-weight: normal;
    }
  }

  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background 0.3s;
    -webkit-tap-highlight-color: transparent;

    &:hover {
      background: rgba(0, 0, 0, 0.025);
    }
  }

  .breadcrumb-container {
    float: left;
  }

  .topmenu-container {
    position: absolute;
    left: 50px;
  }

  .errLog-container {
    display: inline-block;
    vertical-align: top;
  }

  .right-menu {
    height: 100%;
    line-height: 50px;
    display: flex;
    justify-content: right;
    align-items: center;

    &:focus {
      outline: none;
    }
    .right-menu-item {
      font-size: 16px;
      color: #fff;
      cursor: pointer;
    }
    // .right-menu-item {
    //   display: inline-block;
    //   // padding: 0 8px;
    //   height: 100%;
    //   font-size: 18px;
    //   color: #fff;
    //   // vertical-align: text-bottom;

    //   &.hover-effect {
    //     cursor: pointer;
    //     transition: background 0.3s;

    //     &:hover {
    //       background: rgba(0, 0, 0, 0.025);
    //     }
    //   }
    // }

    // .avatar-container {
    //   margin-right: 30px;

    //   .avatar-wrapper {
    //     margin-top: 5px;
    //     position: relative;

    //     .user-avatar {
    //       cursor: pointer;
    //       width: 40px;
    //       height: 40px;
    //       border-radius: 10px;
    //     }

    //     .el-icon-caret-bottom {
    //       cursor: pointer;
    //       position: absolute;
    //       right: -20px;
    //       top: 25px;
    //       font-size: 12px;
    //     }
    //   }
    // }
  }
}
</style>

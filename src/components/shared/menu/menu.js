import Menu from 'ant-design-vue/es/menu'
import Icon from 'ant-design-vue/es/icon/'
import { nav } from '@/_nav'

const {Item, SubMenu} = Menu

const iconArr = ['dashboard', 'user', 'form', 'setting', 'message', 'safety', 'bell', 'delete', 'code-o', 'poweroff', 'eye-o', 'hourglass']

export default {
  name: 'IMenu',
  props: {
    menuData: {
      type: Array,
      required: true
    },
    theme: {
      type: String,
      required: false,
      default: 'dark'
    },
    mode: {
      type: String,
      required: false,
      default: 'inline'
    },
    collapsed: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data () {
    return {
      openKeys: [],
      selectedKeys: [],
      cachedOpenKeys: []
    }
  },
  computed: {
    rootSubmenuKeys: (vm) => {
      let keys = []
      vm.menuData.forEach(item => {
        keys.push(item.path)
      })
      return keys
    }
  },
  created () {
    this.updateMenu()
  },
  watch: {
    collapsed (val) {
      if (val) {
        this.openKeys = []
      }
    },
    '$route': function () {
      this.updateMenu()
    }
  },
  methods: {
    renderIcon: function (h, icon) {
      return icon === 'none' ? null
        : h(
          Icon,
          {
            props: {type: icon !== undefined ? icon : iconArr[Math.floor((Math.random() * iconArr.length))]}
          })
    },
    renderMenuItem: function (h, menu, pIndex, index) {
      return h(
        Item,
        {
          key: menu.path ? menu.path : "item_" + pIndex + "_" + index
        },
        [
          h("router-link", { props: { to: menu.path } }, [
            this.renderIcon(h, menu.icon),
            h("span", [menu.name])
          ])
        ]
      );
    },
    renderSubMenu: function (h, menu, pIndex, index) {
      var this2_ = this
      var subItem = [h('span',
        {slot: 'title'},
        [
          this.renderIcon(h, menu.icon),
          h('span', [menu.name])
        ]
      )]
      var itemArr = []
      var pIndex_ = pIndex + '_' + index
      menu.children.forEach(function (item, i) {
        itemArr.push(this2_.renderItem(h, item, pIndex_, i))
      })
      return h(
        SubMenu,
        {key: menu.path ? menu.path : 'submenu_' + pIndex + '_' + index},
        subItem.concat(itemArr)
      )
    },
    renderItem: function (h, menu, pIndex, index) {
      if (!menu.invisible) {
        return menu.children ? this.renderSubMenu(h, menu, pIndex, index) : this.renderMenuItem(h, menu, pIndex, index)
      }
    },
    renderMenu: function (h, menuTree) {
      var this2_ = this
      var menuArr = []
      menuTree.forEach(function (menu, i) {
        menuArr.push(this2_.renderItem(h, menu, '0', i))
      })
      return menuArr
    },
    onOpenChange (openKeys) {
      const latestOpenKey = openKeys.find(key => this.openKeys.indexOf(key) === -1)
      if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
        this.openKeys = openKeys
      } else {
        this.openKeys = latestOpenKey ? [latestOpenKey] : []
      }
    },
    updateMenu () {
      let routes = this.$route.matched.concat()
      this.selectedKeys = [routes.pop().path]
      const listNav = nav.map(item => item.path);
      let openKeys = []
      this.selectedKeys.forEach(item => {
        listNav.forEach(itemNav => {
          if (item.startsWith(itemNav)) {
            openKeys.push(itemNav);
            return;
          }
        })
      })
      if (!(this.collapsed || this.mode === "horizontal")) {
        this.openKeys = openKeys;
      }
    }
  },
  render (h) {
    return h(
      Menu,
      {
        props: {
          theme: this.$props.theme,
          mode: this.$props.mode,
          openKeys: this.openKeys,
          selectedKeys: this.selectedKeys
        },
        on: {
          openChange: this.onOpenChange,
          select: (obj) => {
            this.selectedKeys = obj.selectedKeys
            this.$emit('select', obj)
          }
        }
      }, this.renderMenu(h, this.menuData)
    )
  }
}

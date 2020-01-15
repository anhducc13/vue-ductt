const getters = {
  sidebar: state => state.app.sidebar,
  size: state => state.app.size,
  device: state => state.app.device,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  introduction: state => state.user.introduction,
  admin: state => state.user.admin,
  isMobile: state => state.app.isMobile,
  theme: state => state.app.theme,
  layout: state => state.app.layout,
  systemName: state => state.app.systemName,
  copyright: state => state.app.copyright,
  footerLinks: state => state.app.footerLinks,
  multipage: state => state.app.multipage,
  extraData: state => state.extra.extraData
};
export default getters;

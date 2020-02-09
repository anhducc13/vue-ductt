<template>
  <footer id="footer">
    <!-- FOOTER-MIDDLE-AREA START-->
    <div class="footer-middle-area">
      <div class="container">
        <div class="row multi-columns-row">
          <div class="col-xs-12 col-sm-12 col-lg-3 col-md-3">
            <div class="footer-mid-contact">
              <h2>
                <router-link class="logo" to="/">
                  <img alt="Alpha Books" src="assets/images/logo_footer.png" />
                </router-link>
              </h2>
              <ul style="margin-top: 30px;">
                <li>
                  <i style="color:#fff;" class="fa fa-map-marker"></i>
                  <span>176 Thái Hà, Đống Đa, Hà Nội</span>
                </li>
                <li>
                  <i style="color:#fff;" class="fa fa-mobile"></i>
                  <span>1900 2647</span>
                </li>
                <li>
                  <i style="color:#fff;" class="fa fa-envelope-o"></i>
                  <span>
                    <a href="mailto:info@alphabooks.vn">info@alphabooks.vn</a>
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-xs-12 col-sm-6 col-lg-2 col-md-2">
            <div class="footer-mid-menu">
              <h3>
                <span>Thông tin</span>
              </h3>
              <ul>
                <li>
                  <a href="gioi-thieu.html">Giới thiệu</a>
                </li>

                <li>
                  <a href="he-thong-nha-sach.html">Hệ thống nhà sách</a>
                </li>

                <li>
                  <a href="he-thong-phat-hanh-mien-bac.html">Hệ thống phát hành</a>
                </li>

                <li>
                  <a href="tuyen-dung.html">Tuyển dụng</a>
                </li>

                <li>
                  <a href="lien-he.html">Liên hệ</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-xs-12 col-sm-6 col-lg-2 col-md-2">
            <div class="footer-mid-menu">
              <h3>
                <span>Chính sách</span>
              </h3>
              <ul>
                <li>
                  <a href="chinh-sach-thanh-toan.html">Chính sách thanh toán</a>
                </li>

                <li>
                  <a href="chinh-sach-van-chuyen.html">Chính sách vận chuyển</a>
                </li>

                <li>
                  <a href="chinh-sach-bao-mat.html">Chính sách bảo mật</a>
                </li>

                <li>
                  <a href="chinh-sach-doi-tra-hoan-tien.html">Chính sách đổi trả hoàn tiền</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-xs-12 col-sm-6 col-lg-2 col-md-2">
            <div class="footer-mid-menu">
              <h3>
                <span>Điều khoản</span>
              </h3>
              <ul>
                <li>
                  <a href="dieu-khoan.html">Điều khoản sử dụng</a>
                </li>

                <li>
                  <a href="dieu-khoan.html">Điều khoản giao dịch</a>
                </li>

                <li>
                  <a href="dieu-khoan.html">Dịch vụ tiện ích</a>
                </li>

                <li>
                  <a href="dieu-khoan.html">Quyền sở hữu trí tuệ</a>
                </li>
              </ul>
            </div>
            <div class="bct">
              <a href="http://online.gov.vn/CustomWebsiteDisplay.aspx?DocId=45937" target="_blank">
                <img
                  src="/assets/images/bo_cong_thuong.png"
                  alt="Alpha Books"
                  style="max-width:120px;"
                />
              </a>
            </div>
          </div>
          <div class="col-xs-12 col-sm-6 col-lg-3 col-md-3">
            <div class="footer-mid-menu">
              <h3>
                <span>Facebook</span>
              </h3>
              <div class="footer-face">
                <div id="fb-root"></div>
                <div
                  class="fb-page"
                  data-href="https://www.facebook.com/alphabooks/"
                  data-small-header="false"
                  data-adapt-container-width="true"
                  data-hide-cover="false"
                  data-show-facepile="true"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- FOOTER-MIDDLE-AREA END-->
    <!-- FOOTER-BOTTUM-AREA START-->
    <div class="footer-bottum-area">
      <div class="container">
        <div class="row">
          <div class="col-md-4 col-sm-12 col-xs-12">
            <form action="#" method="post" id="newsletter">
              <p class="tt_new">Đăng kí nhận bản tin</p>
              <div class="input-group" id="mail-box">
                <input
                  id="email"
                  class="input_newsletter input-text required-entry validate-email"
                  name="EMAIL"
                  type="email"
                  value
                  placeholder="Nhập địa chỉ email của bạn"
                />
                <button type="submit" class="subcribe">
                  <span>Gửi</span>
                </button>
              </div>
            </form>
          </div>
          <div class="col-sm-6 col-xs-12 col-md-5 col-lg-4">
            <div class="copyright-info">
              © Bản quyền thuộc về Alpha Books | Cung cấp bởi
              <a
                href="https://www.sapo.vn/?utm_source=site-khach-hang&amp;utm_campaign=referral_bizweb&amp;utm_medium=footer&amp;utm_content=cung-cap-boi-bizweb"
                target="_blank"
                title="Sapo"
              >Sapo</a>
            </div>
          </div>
          <div id="social_block" class="col-xs-12 col-sm-6 col-md-3 col-lg-4">
            <ul>
              <li class="facebook">
                <a class="_blank" href="https://www.facebook.com/alphabooks/" target="_blank">
                  <span>Facebook</span>
                </a>
              </li>

              <li class="youtube">
                <a
                  class="_blank"
                  href="https://www.youtube.com/channel/UCmuOSp9xaveJrSTQkytoGFA"
                  target="_blank"
                >
                  <span>Youtube</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- FOOTER-BOTTUM-AREA END-->
  </footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style>
</style>
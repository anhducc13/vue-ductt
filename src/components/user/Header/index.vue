<template>
  <header class="header-inner clearfix" id="main_menu_index">
    <div class="container">
      <div class="clearfix main_menu_listing">
        <div class="top_header">
          <div
            style="cursor: pointer"
            class="m-toggle-menu navbar-toggler d-md-none"
            type="button"
            data-toggle="collapse"
            data-target="#navbar1"
            aria-controls="navbar1"
            aria-expanded="true"
          >
            <!-- <span class="navbar-toggle-icon"></span> -->
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </div>

          <div class="right_menu collapse navbar-collapse" id="navbar1">
            <div class="text-center shopcart-acc-icon">
              <a href="../../indexb4b8.html?com=shopcart&amp;act=view" class="a-shopcart-acc-icon">
                <i class="fa fa-shopping-cart"></i> Giỏ hàng
              </a>
              <a href="../../index08f0.html?com=user&amp;act=profile" class="a-shopcart-acc-icon">
                <i class="fa fa-user"></i> Tài khoản
              </a>
              <ul class="ul-navbar clearfix"></ul>
            </div>
          </div>
        </div>
        <div class="header_right">
          <form
            id="searchform"
            method="POST"
            action="http://anybooks.vn/?com=book&amp;act=first_search"
            class="hi_search_form"
          >
            <div class="search_form clearfix">
              <div class="clearfix keyword_div">
                <div class="search_icon d-none d-lg-inline">Bạn muốn tìm sách gì?</div>
                <div id="suggest" class="suggest_search">
                  <input
                    id="q"
                    name="q"
                    autocomplete="off"
                    type="text"
                    placeholder="( Nhập tên sách, tác giả, thể loại….)"
                    class="hm_search_key"
                  />

                  <div style="display: none;" id="suggestions" class="suggestionsBox">
                    <div id="suggestionsList" class="suggestionList">
                      <ul>
                        <li onclick="fill('Trăng lạnh');">Trăng lạnh</li>
                        <li onclick="fill('Trăng mật rực nắng');">Trăng mật rực nắng</li>
                        <li onclick="fill('Trận đấu mùa đông');">Trận đấu mùa đông</li>
                        <li onclick="fill('Trần Thế ');">Trần Thế</li>
                        <li onclick="fill('Trăng Non');">Trăng Non</li>
                        <li onclick="fill('Trăng xanh ');">Trăng xanh</li>
                        <li onclick="fill('Trăng Du Đãng');">Trăng Du Đãng</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <button onclick class="bt_search">
                <span class="d-none d-lg-inline">Tìm kiếm</span>
                <i class="fa fa-search d-lg-none"></i>
              </button>
              <!-- <input type="submit" value="Tìm kiếm" class="bt_search" onClick="" />-->
            </div>
          </form>
        </div>
        <div class="header_mid d-none d-md-inline">
          <div class="main_menu" id="top_menu_category">
            <div class="title_danhmuc clearfix">
              <div class="title_danhmuc_left">
                <span class="icon-line-menu"></span>
                <span class="icon-line-menu"></span>
                <span class="icon-line-menu"></span>
              </div>
              <div class="title_danhmuc_right">Danh mục sách</div>
            </div>
            <div class="div_main_menu_down">
              <div class="line_main_menu_down"></div>
              <ul class="none_tag hm_down_all">
                <li class="li_sub_menu">
                  <a href="page_1.html" class="a_sub_menu">Sách văn học</a>
                  <ul class="ul_sub_sub_menu">
                    <li class="li_sub_sub_menu">
                      <a
                        href="../Tieu_thuyet_viet_nam/page_1.html"
                        class="a_sub_sub_menu"
                      >Tiểu thuyết Việt Nam</a>
                    </li>
                    <li class="li_sub_sub_menu">
                      <a
                        href="../Tieu_thuyet_nuoc_ngoai/page_1.html"
                        class="a_sub_sub_menu"
                      >Tiểu thuyết nước ngoài</a>
                    </li>
                    <li class="li_sub_sub_menu">
                      <a
                        href="../Truyen_ngan/page_1.html"
                        class="a_sub_sub_menu"
                      >Truyện ngắn, tản văn</a>
                    </li>
                    <li class="li_sub_sub_menu">
                      <a
                        href="../Phong_su_tuy_but/page_1.html"
                        class="a_sub_sub_menu"
                      >Phóng sự, tùy bút, hồi ký</a>
                    </li>
                    <li class="li_sub_sub_menu">
                      <a
                        href="../Truyen_thieu_nhi/page_1.html"
                        class="a_sub_sub_menu"
                      >Truyện Thiếu Nhi</a>
                    </li>
                    <li class="li_sub_sub_menu">
                      <a href="../Tho/page_1.html" class="a_sub_sub_menu">Thơ</a>
                    </li>
                    <li class="li_sub_sub_menu">
                      <a
                        href="../Truyen_lich_su_vn/page_1.html"
                        class="a_sub_sub_menu"
                      >Truyện lịch sử</a>
                    </li>
                    <li class="li_sub_sub_menu">
                      <a
                        href="../Truyen_vien_tuong/page_1.html"
                        class="a_sub_sub_menu"
                      >Viễn tưởng, kinh dị, trinh thám</a>
                    </li>
                    <li class="li_sub_sub_menu">
                      <a
                        href="../Van_hoc_co_dien/page_1.html"
                        class="a_sub_sub_menu"
                      >Văn học kinh điển</a>
                    </li>
                    <li class="li_sub_sub_menu">
                      <a
                        href="../Truyen_trinh_tham_nn/page_1.html"
                        class="a_sub_sub_menu"
                      >Thể loại khác</a>
                    </li>
                  </ul>
                </li>
                <li class="li_sub_menu">
                  <a
                    href="../Van_hoc_nuoc_ngoai/page_1.html"
                    class="a_sub_menu"
                  >Văn học theo quốc gia</a>
                  <ul class="ul_sub_sub_menu">
                    <li class="li_sub_sub_menu">
                      <a href="../tu_1975_nay/page_1.html" class="a_sub_sub_menu">Văn học Việt Nam</a>
                    </li>
                    <li class="li_sub_sub_menu">
                      <a
                        href="../Van_hoc_Trung_Quoc/page_1.html"
                        class="a_sub_sub_menu"
                      >Văn học Trung Quốc</a>
                    </li>
                    <li class="li_sub_sub_menu">
                      <a href="../Van_hoc_my/page_1.html" class="a_sub_sub_menu">Văn học Mỹ</a>
                    </li>
                    <li class="li_sub_sub_menu">
                      <a href="../Van_hoc_Anh/page_1.html" class="a_sub_sub_menu">Văn học Anh</a>
                    </li>
                    <li class="li_sub_sub_menu">
                      <a href="../Van_hoc_Phap/page_1.html" class="a_sub_sub_menu">Văn học Pháp</a>
                    </li>
                    <li class="li_sub_sub_menu">
                      <a href="../Van_hoc_Nhat/page_1.html" class="a_sub_sub_menu">Văn học Nhật</a>
                    </li>
                    <li class="li_sub_sub_menu">
                      <a
                        href="../Van_hoc_cac_nuoc_khac/page_1.html"
                        class="a_sub_sub_menu"
                      >Văn học các nước khác</a>
                    </li>
                  </ul>
                </li>
                <li class="li_sub_menu">
                  <a href="../sach_kinh_te/page_1.html" class="a_sub_menu">Sách Kinh tế</a>
                  <ul class="ul_sub_sub_menu">
                    <li class="li_sub_sub_menu">
                      <a
                        href="../Bi_quyet_thanh_cong/page_1.html"
                        class="a_sub_sub_menu"
                      >Bí quyết thành công</a>
                    </li>
                    <li class="li_sub_sub_menu">
                      <a
                        href="../Kinh_nghiem_doanh_nhan/page_1.html"
                        class="a_sub_sub_menu"
                      >Kinh nghiệm doanh nhân</a>
                    </li>
                    <li class="li_sub_sub_menu">
                      <a
                        href="../Quan_tri_kinh_doanh/page_1.html"
                        class="a_sub_sub_menu"
                      >Quản trị kinh doanh</a>
                    </li>
                    <li class="li_sub_sub_menu">
                      <a
                        href="../Ky_nang_mem/page_1.html"
                        class="a_sub_sub_menu"
                      >Kỹ năng mềm - Khởi nghiệp</a>
                    </li>
                    <li class="li_sub_sub_menu">
                      <a
                        href="../Lanh_dao_quan_ly/page_1.html"
                        class="a_sub_sub_menu"
                      >Lãnh đạo quản lý</a>
                    </li>
                    <li class="li_sub_sub_menu">
                      <a href="../Marketing/page_1.html" class="a_sub_sub_menu">Marketing - Bán hàng</a>
                    </li>
                    <li class="li_sub_sub_menu">
                      <a
                        href="../Phan_tich_thi_truong/page_1.html"
                        class="a_sub_sub_menu"
                      >Phân tích thị trường</a>
                    </li>
                    <li class="li_sub_sub_menu">
                      <a
                        href="../Sach_khoi_nghiep/page_1.html"
                        class="a_sub_sub_menu"
                      >Sách khởi nghiệp</a>
                    </li>
                    <li class="li_sub_sub_menu">
                      <a
                        href="../Tiep_thi_ban_hang/page_1.html"
                        class="a_sub_sub_menu"
                      >Thể loại khác</a>
                    </li>
                    <li class="li_sub_sub_menu">
                      <a
                        href="../Chung_khoan_dau_tu/page_1.html"
                        class="a_sub_sub_menu"
                      >Chứng khoán, đầu tư</a>
                    </li>
                  </ul>
                </li>
                <li class="li_sub_menu">
                  <a href="../Sach_chuyen_nganh/page_1.html" class="a_sub_menu">Sách khác</a>
                  <ul class="ul_sub_sub_menu">
                    <li class="li_sub_sub_menu">
                      <a href="../Nuoi_day_con/page_1.html" class="a_sub_sub_menu">Nuôi dạy con</a>
                    </li>
                    <li class="li_sub_sub_menu">
                      <a
                        href="../sach_ky_nang/page_1.html"
                        class="a_sub_sub_menu"
                      >Kỹ năng - sống đẹp</a>
                    </li>
                    <li class="li_sub_sub_menu">
                      <a href="../Sach_tam_ly/page_1.html" class="a_sub_sub_menu">Tuổi teen</a>
                    </li>
                    <li class="li_sub_sub_menu">
                      <a
                        href="../Giao_trinh/page_1.html"
                        class="a_sub_sub_menu"
                      >Học ngoại ngữ - Từ điển</a>
                    </li>
                    <li class="li_sub_sub_menu">
                      <a
                        href="../Cham_soc_suc_khoe/page_1.html"
                        class="a_sub_sub_menu"
                      >Chăm sóc gia đình - Nấu ăn</a>
                    </li>
                    <li class="li_sub_sub_menu">
                      <a href="../Ky_thuat/page_1.html" class="a_sub_sub_menu">Thể loại khác</a>
                    </li>
                    <li class="li_sub_sub_menu">
                      <a href="../Sach_ngoai_van/page_1.html" class="a_sub_sub_menu">Sách ngoại văn</a>
                    </li>
                    <li class="li_sub_sub_menu">
                      <a href="../sach_cho_bo_me_tre/page_1.html" class="a_sub_sub_menu">Làm Cha Mẹ</a>
                    </li>
                    <li class="li_sub_sub_menu">
                      <a
                        href="../cham_soc_suc_khoe/page_1-2.html"
                        class="a_sub_sub_menu"
                      >Chăm Sóc Sức Khỏe</a>
                    </li>
                    <li class="li_sub_sub_menu">
                      <a
                        href="../sach_hoc_sinh_tham_khao/page_1.html"
                        class="a_sub_sub_menu"
                      >Sách học sinh tham khảo</a>
                    </li>
                  </ul>
                </li>
                <li class="li_sub_menu">
                  <a href="../tu-sach-chon-loc/page_1.html" class="a_sub_menu">Sách đáng chú ý</a>
                  <ul class="ul_sub_sub_menu">
                    <li class="li_sub_sub_menu">
                      <a href="../Sach_ban_chay/page_1.html" class="a_sub_sub_menu">Sách bán chạy</a>
                    </li>
                    <li class="li_sub_sub_menu">
                      <a
                        href="../sach_to_mau_coloring_book_/page_1.html"
                        class="a_sub_sub_menu"
                      >Sách tô màu (Coloring book)</a>
                    </li>
                    <li class="li_sub_sub_menu">
                      <a
                        href="../atlazbooks_khuyen_doc/page_1.html"
                        class="a_sub_sub_menu"
                      >Sách hay nên đọc</a>
                    </li>
                    <li class="li_sub_sub_menu">
                      <a
                        href="../Sach_cho_ba_bau/page_1.html"
                        class="a_sub_sub_menu"
                      >Sách cho bà bầu</a>
                    </li>
                    <li class="li_sub_sub_menu">
                      <a href="../Sach_doat_giai/page_1.html" class="a_sub_sub_menu">Sách đoạt giải</a>
                    </li>
                    <li class="li_sub_sub_menu">
                      <a
                        href="../sach_ban_chay_2016/page_1.html"
                        class="a_sub_sub_menu"
                      >Sách Bán Chạy 2016</a>
                    </li>
                    <li class="li_sub_sub_menu">
                      <a
                        href="../combo_sach_kinh_te_hay/page_1.html"
                        class="a_sub_sub_menu"
                      >Combo Sách Kinh Tế Hay</a>
                    </li>
                    <li class="li_sub_sub_menu">
                      <a
                        href="../sach_hay_danh_cho_phu_nu/page_1.html"
                        class="a_sub_sub_menu"
                      >Sách Hay Cho Phụ Nữ</a>
                    </li>
                    <li class="li_sub_sub_menu">
                      <a
                        href="../Sach_hay_cho_ngay_20_10/page_1.html"
                        class="a_sub_sub_menu"
                      >Sách hay cho ngày 20/11</a>
                    </li>
                  </ul>
                </li>
                <li class="li_sub_menu">
                  <a
                    href="../sach_danh_tang_cho_thieu_nhi/page_1.html"
                    class="a_sub_menu"
                  >Sách thiếu nhi</a>
                  <ul class="ul_sub_sub_menu">
                    <li class="li_sub_sub_menu">
                      <a
                        href="../kien_thuc_ky_nang/page_1.html"
                        class="a_sub_sub_menu"
                      >Kiến Thức - Kỹ Năng</a>
                    </li>
                    <li class="li_sub_sub_menu">
                      <a href="../truyen_tranh/page_1.html" class="a_sub_sub_menu">Truyện Tranh</a>
                    </li>
                    <li class="li_sub_sub_menu">
                      <a
                        href="../danh_cho_be_tu_2_4_tuoi/page_1.html"
                        class="a_sub_sub_menu"
                      >Nhà trẻ - Mẫu giáo (0-6 tuổi)</a>
                    </li>
                    <li class="li_sub_sub_menu">
                      <a
                        href="../danh_cho_be_tu_7_10_tuoi/page_1.html"
                        class="a_sub_sub_menu"
                      >Nhi đồng (6-11 tuổi)</a>
                    </li>
                    <li class="li_sub_sub_menu">
                      <a
                        href="../thieu_nien_11_15_tuoi_/page_1.html"
                        class="a_sub_sub_menu"
                      >Thiếu niên (11-15 tuổi)</a>
                    </li>
                    <li class="li_sub_sub_menu">
                      <a href="../ehon_nhat_ban/page_1.html" class="a_sub_sub_menu">Ehon Nhật Bản</a>
                    </li>
                    <li class="li_sub_sub_menu">
                      <a
                        href="../hat_giong_tam_hon/page_1.html"
                        class="a_sub_sub_menu"
                      >Hạt Giống Tâm Hồn</a>
                    </li>
                  </ul>
                </li>
                <li class="li_sub_menu">
                  <a href="../sach_chuyen_nganh/page_1-2.html" class="a_sub_menu">Sách chuyên ngành</a>
                  <ul class="ul_sub_sub_menu">
                    <li class="li_sub_sub_menu">
                      <a
                        href="../Phong_thuy_nha_cua/page_1.html"
                        class="a_sub_sub_menu"
                      >Phong thủy - nhà cửa</a>
                    </li>
                    <li class="li_sub_sub_menu">
                      <a
                        href="../chinh_tri_triet_hoc/page_1.html"
                        class="a_sub_sub_menu"
                      >Chính trị - Triết học</a>
                    </li>
                    <li class="li_sub_sub_menu">
                      <a
                        href="../ky_thuat_khoa_hoc_tu_nhien/page_1.html"
                        class="a_sub_sub_menu"
                      >Kỹ thuật - Khoa học tự nhiên</a>
                    </li>
                    <li class="li_sub_sub_menu">
                      <a href="../phap_luat/page_1.html" class="a_sub_sub_menu">Pháp luật</a>
                    </li>
                    <li class="li_sub_sub_menu">
                      <a
                        href="../lich_su_dia_ly/page_1.html"
                        class="a_sub_sub_menu"
                      >Lịch sử - Địa lý</a>
                    </li>
                    <li class="li_sub_sub_menu">
                      <a href="../y_hoc/page_1.html" class="a_sub_sub_menu">Y học</a>
                    </li>
                    <li class="li_sub_sub_menu">
                      <a href="../linh_vuc_khac/page_1.html" class="a_sub_sub_menu">Lĩnh vực khác</a>
                    </li>
                  </ul>
                </li>
                <li class="li_sub_menu">
                  <a
                    href="../Van_hoa_Nghe_thuat/page_1.html"
                    class="a_sub_menu"
                  >Văn hóa - Nghệ thuật</a>
                  <ul class="ul_sub_sub_menu">
                    <li class="li_sub_sub_menu">
                      <a
                        href="../Du_lich_Van_hoa/page_1.html"
                        class="a_sub_sub_menu"
                      >Du lịch - Văn hóa</a>
                    </li>
                    <li class="li_sub_sub_menu">
                      <a href="../Nghe_thuat/page_1.html" class="a_sub_sub_menu">Nghệ thuật</a>
                    </li>
                    <li class="li_sub_sub_menu">
                      <a href="../Tam_linh/page_1.html" class="a_sub_sub_menu">Tâm linh</a>
                    </li>
                    <li class="li_sub_sub_menu">
                      <a
                        href="../danh_nhan_nguoi_noi_tieng/page_1.html"
                        class="a_sub_sub_menu"
                      >Danh nhân - Người nổi tiếng</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style>
.navbar-toggler-icon {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255,255,255, 1)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E");
}
</style>
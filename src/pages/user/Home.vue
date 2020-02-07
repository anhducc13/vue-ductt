<template>
  <div class="section">
    <Header />
    <book-list
      title="Sách bán chạy"
      :list="[
        {
          id: 1,
          salePercent: 10,
          images: ['http://anybooks.vn/images/book/image/cho_toi_xin_mot_ve_di_tuoi_tho_tai_ban_2015_.jpg'],
          name: 'Cho tôi xin một vé đi tuổi thơ (Tái bản 2015)',
          authorName: 'Nguyễn Nhật Ánh',
          url: 'cho-toi-xin'
        },
        {
          id: 2,
          salePercent: 10,
          images: ['http://anybooks.vn/images/book/image/cho_toi_xin_mot_ve_di_tuoi_tho_tai_ban_2015_.jpg'],
          name: 'Cho tôi xin một vé đi tuổi thơ (Tái bản 2015)',
          authorName: 'Nguyễn Nhật Ánh',
          url: 'cho-toi-xin'
        },
        {
          id: 3,
          salePercent: 10,
          images: ['http://anybooks.vn/images/book/image/cho_toi_xin_mot_ve_di_tuoi_tho_tai_ban_2015_.jpg'],
          name: 'Cho tôi xin một vé đi tuổi thơ (Tái bản 2015)',
          authorName: 'Nguyễn Nhật Ánh',
          url: 'cho-toi-xin'
        },
        {
          id: 4,
          salePercent: 10,
          images: ['http://anybooks.vn/images/book/image/cho_toi_xin_mot_ve_di_tuoi_tho_tai_ban_2015_.jpg'],
          name: 'Cho tôi xin một vé đi tuổi thơ (Tái bản 2015)',
          authorName: 'Nguyễn Nhật Ánh',
          url: 'cho-toi-xin'
        },
        {
          id: 5,
          salePercent: 10,
          images: ['http://anybooks.vn/images/book/image/cho_toi_xin_mot_ve_di_tuoi_tho_tai_ban_2015_.jpg'],
          name: 'Cho tôi xin một vé đi tuổi thơ (Tái bản 2015)',
          authorName: 'Nguyễn Nhật Ánh',
          url: 'cho-toi-xin'
        },
        {
          id: 6,
          salePercent: 10,
          images: ['http://anybooks.vn/images/book/image/cho_toi_xin_mot_ve_di_tuoi_tho_tai_ban_2015_.jpg'],
          name: 'Cho tôi xin một vé đi tuổi thơ (Tái bản 2015)',
          authorName: 'Nguyễn Nhật Ánh',
          url: 'cho-toi-xin'
        },
        {
          id: 7,
          salePercent: 10,
          images: ['http://anybooks.vn/images/book/image/cho_toi_xin_mot_ve_di_tuoi_tho_tai_ban_2015_.jpg'],
          name: 'Cho tôi xin một vé đi tuổi thơ (Tái bản 2015)',
          authorName: 'Nguyễn Nhật Ánh',
          url: 'cho-toi-xin'
        },
        {
          id: 8,
          salePercent: 10,
          images: ['http://anybooks.vn/images/book/image/cho_toi_xin_mot_ve_di_tuoi_tho_tai_ban_2015_.jpg'],
          name: 'Cho tôi xin một vé đi tuổi thơ (Tái bản 2015)',
          authorName: 'Nguyễn Nhật Ánh',
          url: 'cho-toi-xin'
        },
        {
          id: 9,
          salePercent: 10,
          images: ['http://anybooks.vn/images/book/image/cho_toi_xin_mot_ve_di_tuoi_tho_tai_ban_2015_.jpg'],
          name: 'Cho tôi xin một vé đi tuổi thơ (Tái bản 2015)',
          authorName: 'Nguyễn Nhật Ánh',
          url: 'cho-toi-xin'
        },
        {
          id: 10,
          salePercent: 10,
          images: ['http://anybooks.vn/images/book/image/cho_toi_xin_mot_ve_di_tuoi_tho_tai_ban_2015_.jpg'],
          name: 'Cho tôi xin một vé đi tuổi thơ (Tái bản 2015)',
          authorName: 'Nguyễn Nhật Ánh',
          url: 'cho-toi-xin'
        }
      ]"
    />
  </div>
</template>

<script>
import BookList from "@/components/user/BookList";
import Header from "@/components/user/Header";
export default {
  components: { BookList, Header },
  data() {
    return {};
  },
  created() {}
};
</script>
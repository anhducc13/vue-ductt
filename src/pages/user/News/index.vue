<template>
  <div class="fvc mt-5" style="width:100%;">
    <section class="columns-container">
      <item-list :list="listArticle" />
    </section>
  </div>
</template>

<script>
import uuid from "uuid";
import ItemList from "@/components/user/ItemList";
export default {
  components: {
    ItemList
  },
  data() {
    return {
      listArticle: []
    };
  },
  mounted() {
    const listArticle = [];
    for (let i = 0; i < 20; i++) {
      if (i === 1 || i === 3 || i === 4) {
        listArticle.push({
          id: uuid.v4(),
          name: "100 CUỐN SÁCH QUẢN TRỊ KINH DOANH HAY NHẤT CỦA ALPHA BOOKS",
          short_description: `Vào ngày 9/8 vừa qua, Alpha Books đã cùng UAN – cộng đồng truyền thông và marketing ký kết hợp tác chiến lược để cùng thực thi chiến dịch  BETTER BOOKS FOR MARKETERS - SÁCH TỐT HƠN CHO NGƯỜI LÀM MARKETING. Với mong muốn đem lại cho độc giả những đầu sách hay với chất lượng tốt nhất, Alpha Books luôn nỗ lực tìm kiếm những...`,
          url: "",
          images: [
            "https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg"
          ],
          user: {
            fullname: "Công ty Cổ phần sách Alpha"
          }
        });
      } else {
        listArticle.push({
          id: uuid.v4(),
          name:
            "Những thách thức của nhà lãnh đạo: Cẩm nang thực nghiệm trong hành trình lãnh đạo của bạn",
          short_description: `Những thách thức của nhà lãnh đạo” của hai tác giả James M. Kouzes và Barry Z. Posner là cẩm nang thực nghiệm giúp bạn vừa nghiên cứu và vừa thực hành trong hành trình lãnh đạo của mình. Đây là một cuốn sách gối đầu giường giúp bạn tham vấn khi cần lời khuyên, tư vấn cách tạo nên những thành quả vượt trội trong tổ chức. Làm thế nào để trở thành nhà lãnh đạo khiến mọi người đều muốn đi theo? Làm thế nào để khiến những người khác sẵn sàng cùng nhau theo đuổi...`,
          url: "",
          images: [
            "http://bizweb.dktcdn.net/100/197/269/articles/nhung-thach-thuc-cua-nha-lanh-dao.png?v=1568428345487"
          ],
          user: {
            fullname: "Công ty Cổ phần sách Alpha"
          }
        });
      }
    }
    this.listArticle = listArticle;
  }
};
</script>

<style>
</style>
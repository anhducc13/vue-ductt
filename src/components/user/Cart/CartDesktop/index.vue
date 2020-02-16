<template>
  <div class="row">
    <div class="col-md-8 col-sm-12 col-xs-12">
      <div class="bg-scroll">
        <div class="cart-thead">
          <div style="width: 18%">Ảnh sản phẩm</div>
          <div style="width: 31%">
            <span class="nobr">Tên sản phẩm</span>
          </div>
          <div style="width: 13%" class="a-right">
            <span class="nobr">Giá bán lẻ</span>
          </div>
          <div style="width: 14%" class="a-center">Số lượng</div>
          <div style="width: 15%" class="a-center">Tạm tính</div>
          <div style="width: 9%">Xóa</div>
        </div>
        <div class="cart-tbody">
          <div v-for="item in products_of_cart" :key="item.id" class="item-cart">
            <div style="width: 18%" class="image">
              <product-image :alt="name(item.name)" :src="item.images[0]" :url="item.url" />
            </div>
            <div style="width: 31%" class="a-left">
              <product-name :name="name(item.name)" :url="item.url" />
            </div>
            <div style="width: 15%" class="a-right">
              <span class="item-price">
                <span class="price">{{price(item.sale_price)}}₫</span>
              </span>
            </div>
            <div style="width: 14%" class="a-center">
              <product-quantity :item="item" />
            </div>
            <div style="width: 15%" class="a-center">
              <span class="cart-price">
                <span class="price">{{price(item.total_price)}}₫</span>
              </span>
            </div>
            <div style="width: 7%">
              <icon-remove :pId="item.id" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="cart-collaterals col-md-4 col-sm-12 col-xs-12" style="position: static;">
      <div class="totals">
        <h3>Tổng cộng</h3>
        <div class="inner">
          <table class="table shopping-cart-table-total">
            <colgroup>
              <col />
              <col />
            </colgroup>
            <tfoot>
              <tr>
                <td colspan="1" class="a-left">
                  <strong>Tổng tiền</strong>
                </td>
                <td class="a-right">
                  <strong>
                    <span class="price">{{price(sub_total)}}₫</span>
                  </strong>
                </td>
              </tr>
            </tfoot>
          </table>
          <ul class="checkout">
            <li>
              <button
                class="button btn-proceed-checkout"
                title="Tiến hành đặt hàng"
                type="button"
                @click="toCheckout"
              >
                <span>Tiến hành đặt hàng</span>
              </button>
            </li>
            <li>
              <button
                class="button btn-continue"
                title="Tiếp tục mua hàng"
                type="button"
                @click="() => $router.push({ path: '/' })"
              >
                <span>
                  <span>Tiếp tục mua hàng</span>
                </span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { numberWithDots, shortText } from "@/utils/display";
import { message } from "ant-design-vue";
import ProductName from "../ProductName";
import ProductImage from "../ProductImage";
import ProductQuantity from "../ProductQuantity";
import IconRemove from "../IconRemove";
export default {
  components: { ProductName, ProductImage, ProductQuantity, IconRemove },
  computed: {
    ...mapState("cart", ["products_of_cart", "sub_total"]),
    price() {
      return p => `${numberWithDots(p)}`;
    },
    name() {
      return n => (n === shortText(n) ? n : `${shortText(n)} ...`);
    }
  },
  methods: {
    toCheckout() {
      if (this.products_of_cart.length) {
        this.$router.push({ path: "/thanh-toan" });
      } else {
        message.warning("Không có sản phẩm nào trong giỏ hàng để thanh toán");
      }
    }
  }
};
</script>

<style>
</style>
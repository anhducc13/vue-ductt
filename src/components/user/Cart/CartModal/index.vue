<template>
  <div class="modal-dialog cart-desktop__bg">
    <div class="modal-header">
      <button class="button cart-desktop__close" data-dismiss="modal" aria-label="Close">X</button>
      <p class="cart-desktop__title">
        <a href="/cart">
          <i class="fa fa-shopping-cart" aria-hidden="true"></i> Giỏ hàng của bạn (
          <span class="cart-popup-count">1</span> sản phẩm)
        </a>
      </p>
      <p class="cart-desktop__status">
        <i class="fa fa-check" aria-hidden="true"></i> Bạn vừa thêm
        <a
          href="/doi-pho-voi-nhung-ten-khon-tai-ba-19-bi-kip-hoa-giai-chieu-tro-ha-dang-noi-cong-so"
          class="cart-desktop__status_item"
        >Đối phó với những tên khốn tài ba: 19 bí kíp hóa giải chiêu trò hạ đẳng nơi công sở</a> vào giỏ hàng
      </p>
    </div>
    <div class="modal-body">
      <div class="cart-desktop__thead">
        <div class="cart-desktop__col-1">Sản phẩm</div>
        <div class="cart-desktop__col-2">Đơn giá</div>
        <div class="cart-desktop__col-3">Số lượng</div>
        <div class="cart-desktop__col-4">Thành tiền</div>
      </div>
      <div class="cart-desktop__tbody"></div>
      <div class="cart-desktop__tfooter">
        <div class="cart-desktop__tfooter-info clearfix">
          <p class="cart-desktop__tfooter-hotline">
            <i class="fa fa-phone" aria-hidden="true"></i> Hotline:
            <a href="tel:1900 2647">1900 2647</a>
          </p>
          <p class="cart-desktop__tfooter-total">
            Tổng tiền:
            <span class="total-price">87.200₫</span>
          </p>
        </div>
        <div class="cart-desktop__tfooter-action clearfix">
          <a
            class="button cart-desktop__tfooter-continue"
            title="Tiếp tục mua hàng"
            data-dismiss="modal"
          >
            <i class="fa fa-arrow-circle-left" aria-hidden="true"></i> Tiếp tục mua hàng
          </a>
          <a
            class="button cart-desktop__tfooter-checkout"
            title="Tiến hành đặt hàng"
            href="/checkout"
          >
            <i class="fa fa-money" aria-hidden="true"></i> Tiến hành đặt hàng
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
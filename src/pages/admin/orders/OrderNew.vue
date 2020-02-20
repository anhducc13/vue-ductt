<template>
  <div>
    <div class="d-flex justify-content-between">
      <h3>Tạo mới đơn hàng</h3>
      <a-button type="primary">Lưu</a-button>
    </div>
    <a-row :gutter="12">
      <a-col :lg="{ span: 12 }">
        <a-card class="mb-3" :title="null" size="small">
          <h5>Thông tin đơn hàng</h5>
          <a-col>
            <a-input-search
              class="my-2"
              placeholder="Tìm kiếm sản phẩm để thêm"
              @keypress="dontDoAnything"
            >
              <a-button type="dashed" slot="enterButton">Xem</a-button>
            </a-input-search>
            <a-modal
              title="Chọn sản phẩm"
              v-model="openModalSearch"
              :okButtonProps="{ props: {disabled: !pickedItem.length}}"
              @ok="handlePickProductSuccess"
              :maskClosable="false"
            >
              <span slot="okText">Thêm</span>
              <a-form-item>
                <a-input-search v-model="textSearch" placeholder="Tìm kiếm" />
              </a-form-item>
              <a-list :dataSource="listProductSearch">
                <div
                  v-if="showButtonNextPage"
                  slot="loadMore"
                  :style="{ textAlign: 'center', marginTop: '12px', height: '32px', lineHeight: '32px' }"
                >
                  <a-spin v-if="loadingFetchProducts" />
                  <a-button v-else @click="() => handleNextPage()">Xem tiếp</a-button>
                </div>

                <a-list-item slot="renderItem" slot-scope="item">
                  <span slot="actions" style="cursor: text">
                    Kho:&nbsp;
                    {{item.quantity_in_stock}}
                  </span>
                  <span slot="actions" style="cursor: text">
                    {{item.sale_price}}
                    <u>đ</u>
                  </span>
                  <a-checkbox
                    :checked="isChecked(item.id)"
                    :value="item.id"
                    @change="handlePickProduct"
                  >
                    <a-avatar class="mr-2" shape="square" :src="item.images[0].url" />
                    {{item.short_name}}
                  </a-checkbox>
                </a-list-item>
              </a-list>
            </a-modal>
          </a-col>
          <a-col class="my-2">
            <a-list itemLayout="horizontal" :dataSource="productsInOrder">
              <a-list-item slot="renderItem" slot-scope="item">
                <span slot="actions" style="cursor: text">
                  {{item.sale_price}}
                  <u>đ</u> &nbsp;x&nbsp;
                  <a-input-number :min="1" v-model="item.buyNumber" :max="item.quantity_in_stock" />
                </span>
                <span slot="actions" style="cursor: text">
                  {{multi(item.buyNumber, item.sale_price)}}
                  <u>đ</u>
                </span>
                <strong
                  @click="() => removeItemInOrder(item.id)"
                  class="text-danger"
                  style="font-size: 18px"
                  slot="actions"
                >x</strong>
                <a-list-item-meta>
                  <span slot="title">{{item.name}}</span>
                  <a-avatar slot="avatar" shape="square" size="large" :src="item.image" />
                </a-list-item-meta>
              </a-list-item>
            </a-list>
            <a-divider />
          </a-col>
          <div class="my-2" style="font-weight: bold">
            <a-col class="text-right my-1" :span="12">Tạm tính</a-col>
            <a-col class="text-right my-1" :span="12">
              {{totalPrice}}
              <u>đ</u>
            </a-col>
            <a-col class="text-right my-1" :span="12">Phí ship</a-col>
            <a-col class="text-right my-1" :span="12">
              {{"0"}}
              <u>đ</u>
            </a-col>
            <a-col class="text-right my-1" :span="12">Tổng tiền</a-col>
            <a-col class="text-right my-1" :span="12">
              {{"0"}}
              <u>đ</u>
            </a-col>
          </div>
          <a-col>
            <a-form-item label="Ghi chú">
              <a-textarea placeholder="Add a note" :rows="3" />
            </a-form-item>
          </a-col>
        </a-card>
      </a-col>
      <a-col :lg="{ span: 12 }">
        <a-col>
          <a-card class="mb-3" :title="null" size="small">
            <div class="d-flex justify-content-between">
              <h5>Thông tin đặt hàng</h5>
              <a-button
                type="link"
                @click.prevent="openModalBuyerInfo = true"
              >{{buyerInfo ? "Sửa" : "Thêm"}}</a-button>
            </div>
            <div class="my-2" style="font-weight: bold" v-if="buyerInfo">
              <a-col class="my-1" :span="12">Email</a-col>
              <a-col class="my-1" :span="12">{{buyerInfo.email}}</a-col>
              <a-col class="my-1" :span="12">Họ tên</a-col>
              <a-col class="my-1" :span="12">{{buyerInfo.name}}</a-col>
              <a-col class="my-1" :span="12">SĐT</a-col>
              <a-col class="my-1" :span="12">{{buyerInfo.phoneNumber}}</a-col>
              <a-col class="my-1" :span="12">Địa chỉ</a-col>
              <a-col class="my-1" :span="12">a</a-col>
            </div>
            <div class="my-2" v-else>Không có thông tin</div>
            <a-checkbox class="mt-2" v-model="isOtherReceived">Nhận hàng địa chỉ khác</a-checkbox>
            <a-button
              class="float-right"
              v-if="buyerInfo"
              type="link"
              @click.prevent="handleDeleteBuyerInfo"
            >Xóa</a-button>
          </a-card>
          <validation-observer v-slot="{ handleSubmit, invalid }">
            <a-modal
              title="Thông tin người đặt hàng"
              v-model="openModalBuyerInfo"
              :okButtonProps="{ props: {disabled: invalid}}"
              :maskClosable="false"
              @ok="handleSubmit(handleSaveBuyerInfo)"
            >
              <a-form layout="vertical" :style="{ textAlign: 'center'}">
                <validation-provider rules="email" v-slot="{ errors }">
                  <a-form-item
                    label="Email"
                    :help="errors[0]"
                    :validate-status="errors[0] ? 'error': ''"
                  >
                    <a-input placeholder="Nhập email" v-model="pseudoBuyerInfo.email" />
                  </a-form-item>
                </validation-provider>
                <validation-provider name="Họ tên" rules="required" v-slot="{ errors }">
                  <a-form-item
                    label="Họ và tên"
                    :help="errors[0]"
                    :validate-status="errors[0] ? 'error': ''"
                  >
                    <a-input placeholder="Nhập họ và tên" v-model="pseudoBuyerInfo.name" />
                  </a-form-item>
                </validation-provider>
                <validation-provider name="SĐT" rules="required|phoneNumber" v-slot="{ errors }">
                  <a-form-item
                    label="Số điện thoại"
                    :help="errors[0]"
                    :validate-status="errors[0] ? 'error': ''"
                  >
                    <a-input placeholder="Nhập SĐT" v-model="pseudoBuyerInfo.phoneNumber" />
                  </a-form-item>
                </validation-provider>
                <validation-provider name="Tỉnh / Thành phố" rules v-slot="{ errors }">
                  <a-form-item
                    label="Tỉnh / Thành phố"
                    name="Họ tên"
                    :help="errors[0]"
                    :validate-status="errors[0] ? 'error': ''"
                  >
                    <a-select
                      v-model="pseudoBuyerInfo.city_id"
                      showSearch
                      placeholder="Chọn Tỉnh / Thành phố"
                      optionFilterProp="children"
                    >
                      <a-select-option
                        v-for="item in pseudoBuyerInfo.cities"
                        :key="item.id"
                        :value="item.id"
                      >{{item.name}}</a-select-option>
                    </a-select>
                  </a-form-item>
                </validation-provider>
                <validation-provider name="Quận / Huyện" rules v-slot="{ errors }">
                  <a-form-item
                    label="Quận / Huyện"
                    :help="errors[0]"
                    :validate-status="errors[0] ? 'error': ''"
                  >
                    <a-select placeholder="Chọn Quận / Huyện" v-model="pseudoBuyerInfo.district_id">
                      <a-select-option
                        v-for="item in pseudoBuyerInfo.districts"
                        :key="item.id"
                        :value="item.id"
                      >{{item.name}}</a-select-option>
                    </a-select>
                  </a-form-item>
                </validation-provider>
                <validation-provider name="Phường / Xã" rules v-slot="{ errors }">
                  <a-form-item
                    label="Phường / Xã"
                    :help="errors[0]"
                    :validate-status="errors[0] ? 'error': ''"
                  >
                    <a-select placeholder="Chọn phường / xã" v-model="pseudoBuyerInfo.ward_id">
                      <a-select-option
                        v-for="item in pseudoBuyerInfo.wards"
                        :key="item.id"
                        :value="item.id"
                      >{{item.name}}</a-select-option>
                    </a-select>
                  </a-form-item>
                </validation-provider>
                <a-form-item label="Địa chỉ chi tiết">
                  <a-input placeholder="Nhập địa chỉ" v-model="pseudoBuyerInfo.address" />
                </a-form-item>
              </a-form>
            </a-modal>
          </validation-observer>
        </a-col>
        <a-col v-if="isOtherReceived">
          <a-card class="mb-3" :title="null" size="small">
            <div class="d-flex justify-content-between">
              <h5>Thông tin nhận hàng</h5>
              <a-button type="link">Thêm</a-button>
            </div>
            <p>Không có thông tin</p>
          </a-card>
          <a-modal
            title="Thông tin người nhận hàng"
            v-model="openModalReceivedInfo"
            :okButtonProps="{ props: {disabled: true}}"
            :maskClosable="false"
          >abc</a-modal>
        </a-col>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import orderMixin from "@/mixins/orderAdmin";

export default {
  data() {
    return {
      buyerInfo: null,
      productsInOrder: [],
      isOtherReceived: false
    };
  },
  mixins: [orderMixin],
  beforeMount() {
    this.handleFetchFirstTime();
    this.fetchAllCities();
  },
  computed: {
    multi() {
      return (a, b) => parseInt(a * b);
    },
    totalPrice() {
      return this.productsInOrder.reduce(
        (prev, curr) => parseInt(prev + curr.buyNumber * curr.sale_price),
        0
      );
    }
  },
  methods: {
    dontDoAnything(e) {
      this.openModalSearch = true;
      e.preventDefault();
    },
    handlePickProductSuccess() {
      this.productsInOrder = this.pickedItem.map(p => {
        return {
          id: p.id,
          image: p.images[0].url,
          name: p.short_name,
          sale_price: p.sale_price,
          quantity_in_stock: p.quantity_in_stock,
          buyNumber: 1
        };
      });
      this.openModalSearch = false;
    },
    removeItemInOrder(id) {
      this.productsInOrder = this.productsInOrder.filter(x => x.id !== id);
    },
    handleSaveBuyerInfo() {
      this.buyerInfo = this.pseudoBuyerInfo;
      this.openModalBuyerInfo = false;
    },
    handleDeleteBuyerInfo() {
      this.buyerInfo = null;
      this.pseudoBuyerInfo = {
        cities: [],
        districts: [],
        wards: [],
        email: "",
        name: "",
        phoneNumber: "",
        city_id: undefined,
        district_id: undefined,
        ward_id: undefined,
        address: "",
        note: ""
      };
    }
  }
};
</script>

<style scoped>
</style>
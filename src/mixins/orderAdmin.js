import { fetchBooksList } from "@/api/books";
import { fetchCities, fetchDistricts, fetchWards } from "@/api/places";

export default {
  data() {
    return {
      openModalSearch: false,
      textSearch: "",
      pageSearch: 1,
      listProductSearch: [],
      loadingFetchProducts: false,
      showButtonNextPage: false,
      pickedItem: [],

      openModalBuyerInfo: false,
      pseudoBuyerInfo: {
        cities: [],
        districts: [],
        wards: [],
        email: "",
        name: "",
        phoneNumber: "",
        city_id: undefined,
        district_id: undefined,
        ward_id: undefined,
        address: ""
      },
      
      openModalReceivedInfo: false,
      pseudoReceiverInfo: {
        cities: [],
        districts: [],
        wards: [],
        email: "",
        name: "",
        phoneNumber: "",
        city_id: undefined,
        district_id: undefined,
        ward_id: undefined,
        address: ""
      }
    };
  },
  computed: {
    isChecked() {
      const ids = this.pickedItem.map(x => x.id);
      return val => ids.includes(val);
    }
  },
  methods: {
    async fetchAllCities() {
      const { results } = await fetchCities();
      this.pseudoBuyerInfo.cities = results;
      this.pseudoReceiverInfo.cities = results;
    },
    async fetchAllDistricts(src) {
      const { results } = await fetchDistricts({
        city_id: this[src].city_id.key
      });
      this[src].districts = results;
    },
    async fetchAllWards(src) {
      const { results } = await fetchWards({
        district_id: this[src].district_id.key
      });
      this[src].wards = results;
    },
    async handleFetchFirstTime() {
      this.listProductSearch = [];
      this.pageSearch = 1;
      this.showButtonNextPage = false;
      this.handleSearchProducts();
    },
    async handleSearchProducts() {
      const prevList = this.listProductSearch;
      const { data } = await fetchBooksList({
        q: this.textSearch,
        page: this.pageSearch,
        page_size: 5
      });
      this.listProductSearch = prevList.concat(data.results);
      if (data.page_size * data.page < data.total_items) {
        this.showButtonNextPage = true;
      } else {
        this.showButtonNextPage = false;
      }
    },
    async handleNextPage() {
      this.pageSearch = this.pageSearch + 1;
      await this.handleSearchProducts();
    },
    handlePickProduct(e) {
      if (e.target.checked) {
        const newItem = this.listProductSearch.find(
          x => x.id === e.target.value
        );
        this.pickedItem.push(newItem);
      } else {
        this.pickedItem = this.pickedItem.filter(x => x.id !== e.target.value);
      }
    }
  },
  watch: {
    textSearch() {
      this.handleFetchFirstTime();
    },
    "pseudoBuyerInfo.city_id": {
      async handler(newData) {
        if (newData) {
          await this.fetchAllDistricts("pseudoBuyerInfo");
        }
      },
      deep: true
    },
    "pseudoBuyerInfo.district_id": {
      async handler(newData) {
        if (newData) {
          await this.fetchAllWards("pseudoBuyerInfo");
        }
      },
      deep: true
    },
    "pseudoReceiverInfo.city_id": {
      async handler(newData) {
        if (newData) {
          await this.fetchAllDistricts("pseudoReceiverInfo");
        }
      },
      deep: true
    },
    "pseudoReceiverInfo.district_id": {
      async handler(newData) {
        if (newData) {
          await this.fetchAllWards("pseudoReceiverInfo");
        }
      },
      deep: true
    }
  }
};

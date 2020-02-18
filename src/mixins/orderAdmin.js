import { fetchBooksList } from "@/api/books";

export default {
  data() {
    return {
      textSearch: "",
      pageSearch: 1,
      listProductSearch: [],
      showButtonNextPage: false,
    }
  },
  computed: {

  },
  methods: {
    async handleSearchProducts() {
      const { data } = await fetchBooksList({ q: this.textSearch, page: this.pageSearch });
      this.listProductSearch = data.results;
      if (data.page_size * data.page < data.total_items) {
        this.showButtonNextPage = true;
      }
    },
    async handleNextPage() {
      this.pageSearch = this.pageSearch + 1;
      await this.handleSearchProducts();
    }
  },
  watch: {
    textSearch() {
      this.pageSearch = 1;
      this.showButtonNextPage = false;
      this.handleSearchProducts();
    }
  }
};

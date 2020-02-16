import firebase from "firebase";
import { message } from "ant-design-vue";
import { generateName } from "@/utils/common";

export default {
  data() {
    return {
      loadingUploadImage: false
    };
  },
  methods: {
    handleImageAdded: function(file, Editor, cursorLocation, resetUploader) {
      if (this.allowUploadImage(file)) {
        console.log(generateName(file));
        const storageRef = firebase
          .storage()
          .ref(`images/${generateName(file)}`)
          .put(file);
        this.loadingUploadImage = true;
        storageRef.on(
          `state_changed`,
          () => {},
          () => {
            message.error("Có lỗi xảy ra");
            this.loadingUploadImage = false;
          },
          () => {
            storageRef.snapshot.ref.getDownloadURL()
              .then(url => {
                Editor.insertEmbed(cursorLocation, "image", url);
                resetUploader();
              })
              .catch(() => {
                message.error("Có lỗi xảy ra");
              })
              .finally(() => this.loadingUploadImage = false);
          }
        );
      }
    },
    allowUploadImage(file) {
      const isJpgOrPng =
        file.type === "image/jpeg" || file.type === "image/png";
      const isLt1M = file.size / 1024 / 1024 < 1;
      if (!isJpgOrPng) {
        message.error("Ảnh phải ở định dạng jpg/png!");
        return false;
      } else if (!isLt1M) {
        message.error("Ảnh phải có kích thước nhỏ hơn 1MB!");
        return false;
      } else {
        return true;
      }
    }
  }
};

import axios from "axios";
const server_host = "http://localhost:8000";
const api = {
  getQR: async () => {
    try {
      const res = await axios.get(`${server_host}/api/qr`);
      if (res.status == 200) {
        return res.data;
      }
    } catch (err) {
      throw new Error("Axios communication err");
    }
  },
  postQR: () => {},
};
export default api;

import axios from "axios";
export default {
    getBaseEmployeeList: function() {
        return axios.get("https://randomuser.me/api?results=500&nat=us");
    }
};
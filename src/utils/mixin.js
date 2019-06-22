export const balanceMixin = {
    data() {
        return {
            balance: 0
        }
    },
    mounted() {
        this.getbalance()
    },
    methods: {
        getbalance() {
            let postData = {
                users_id: JSON.parse(window.localStorage.getItem("userinfo")).users_id,
            };
            this.axios.post("api/Buy_Order/GetPayData", postData)
                .then(res => {
                    console.log(res.data, "balance");
                    let resdata = res.data;
                    if (resdata.code == 200) {
                        this.balance = resdata.data.users_balance;
                    } else {
                        Toast(resdata.message);
                    }
                })
                .catch(error => {
                    Toast('网络出错')
                });
        }
    }
}
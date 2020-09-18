<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">
                        Create youur profile
                    </div>

                    <div class="card-body">{{ userData.bio }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
    data() {
        return {
            user: null,
            user_id: "",
            loading: false,
            initiated: false,
            req: axios.create({
                baseUrl: "{{ URL::to(" / ") }}"
            }),
            userData: ""
        };
    },
    mounted() {
        axios.get("/auth/init").then(res => {
            this.user = res.data.user;
            this.getUserProfileData(this.user.id);
            this.user_id = this.user.id;
        });
        // axios.get(`/profile/${this.user_id}`).then(res => {
        //     console.log(res);
        // });
    },
    methods: {
        getUserProfileData(userId) {
            axios.get("/profile/" + userId).then(res => {
                this.userData = res.data.user;
                console.log(this.userData);
            });
        }
    }
};
</script>
<style scoped>
.container {
    margin-top: 7rem;
}
</style>

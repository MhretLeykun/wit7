<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">
                        Create youur profile
                    </div>

                    <div class="card-body">{{ this.user_id }}</div>
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
            user_id: "{{ auth()->user()->id }}",
            loading: false,
            initiated: false,
            req: axios.create({
                baseUrl: "{{ URL::to(" / ") }}"
            })
        };
    },
    mounted() {
        axios.get("/auth/init").then(res => {
            this.user = res.data.user;
        });
        axios.get(`/profile/${this.user_id}`).then(res => {
            console.log(res);
        });
    },
    methods: {}
};
</script>
<style scoped>
.container {
    margin-top: 7rem;
}
</style>

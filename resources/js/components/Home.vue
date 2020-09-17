<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">
                        Dash board or blog ...what ever
                    </div>

                    <div class="card-body">Home</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    mounted() {
        axios.get("/create").then(res => {
            console.log(res.data);
        });
    }
};
</script>
<style scoped>
.container {
    margin-top: 7rem;
}
</style>

<template>
    <div class="container">
        <div class="profile">
            <div class="profile__upper">
                <div class="profile__image">
                    <img
                        src="https://p16-tiktok-va-h2.ibyteimg.com/img/musically-maliva-obj/1657369265111046~c5_720x720.jpeg"
                        class="jsx-778670798 avatar-wrapper jsx-1310709517 jsx-2737267357 round"
                        alt="DAVID DOBRIK TikTok"
                    />
                </div>
                <div class="profile__detail">
                    <h3>{{ user.name }}</h3>
                    <h4>{{ user.name }}</h4>
                    <button>Follow</button>
                </div>
            </div>
            <div class="profile__counts">
                <p><strong>77</strong> Following</p>
                <p><strong>20.5M</strong> Followers</p>
                <p><strong>691.7M </strong> Likes</p>
            </div>
            <div class="profile__bio">
                <p>{{ userData.bio }}</p>
            </div>

            <div class="tags">
                <span># {{ userData.tag_1 }}</span>
                <span># {{ userData.tag_2 }}</span>
                <span># {{ userData.tag_3 }}</span>
            </div>
            <div class="profile__posts">
                <div class="box">
                    <img
                        src="https://images.pexels.com/photos/2177013/pexels-photo-2177013.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                        alt=""
                    />
                </div>
                <div class="box">
                    <img
                        src="https://images.pexels.com/photos/3020043/pexels-photo-3020043.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                        alt=""
                    />
                </div>
                <div class="box">
                    <img
                        src="https://images.pexels.com/photos/4849116/pexels-photo-4849116.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                        alt=""
                    />
                </div>
                <div class="box">
                    <img
                        src="https://images.pexels.com/photos/3673523/pexels-photo-3673523.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                        alt=""
                    />
                </div>
                <div class="box">
                    <img
                        src="https://images.pexels.com/photos/4679168/pexels-photo-4679168.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                        alt=""
                    />
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
<style scoped lang="scss">
body {
    background: white;
}
.container {
    margin-top: 7rem;
}
.profile {
    display: flex;
    // align-items: center;
    justify-content: center;

    flex-direction: column;
    margin-left: 2rem;
    margin-top: 6rem;

    .profile__upper {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1rem;
        img {
            width: 120px;
            height: 120px;
            border-radius: 50%;
            // flex: 0 0 120px;
        }
    }
    .profile__detail {
        // margin-left: 2rem;
        display: flex;
        // padding: 2rem;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        width: 100%;
        margin-left: 2.5rem;
        h3 {
            font-size: 1.8rem;
            font-weight: 600;
        }
        h4 {
            font-size: 1.2rem;
            margin: 0;
            font-weight: 500;
        }
        button {
            padding: 10px 30px;
            background: white;
            color: black;
            border: 1px solid black;
        }
    }
    .profile__counts {
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        margin: 1rem 0.7rem;
        margin-left: 2rem;

        p {
            margin-right: 1.6rem;

            strong {
                font-weight: 600;
            }
        }
    }
    .proifle__bio {
        padding: 2rem;
    }
}

.profile__posts {
    margin: 5px auto;
    columns: 2;
    column-gap: 0px;
    .box {
        width: 100%;
        margin: 0 0 6px;
        padding: 0px 5px;
        overflow: hidden;
        background: white;
        break-inside: avoid;
        padding-top: 0;
        img {
            max-width: 100%;
        }
    }
}
.tags {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    span {
        margin: 0.2rem 1rem;
        margin-bottom: 0.7rem;
        background: grey;
        color: white;
        padding: 0.7rem 0.6rem;
        border-radius: 999px;
    }
}
button {
    margin: 0.8rem 0;
}
</style>

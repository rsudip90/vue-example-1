<template>
    <UserInfo :user="user" v-if="dataLoaded"></UserInfo>
</template>

<script>
import UserInfo from '@/components/UserInfo.vue'
import apis from '@/apis'

export default {
    name: "UserInfoContainer",
    data: function() {
        return {
            id: 0,
            user: {},
            dataLoaded: false,
        }
    },
    components: {
        UserInfo
    },
    mounted() {
        var vm = this;
        vm.id = vm.$route.params.id;

        // fetch user details from remote API
        apis.users(vm.id)
            .then((data) => {
                vm.user = data.user;
                vm.dataLoaded = true;
            })
    }
}
</script>
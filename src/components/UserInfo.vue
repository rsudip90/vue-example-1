<template>
    <div class="user-info">
        <strong>@{{ user.username }}</strong>
        <p class="fullname">{{ user.name }}</p>
        <p class="email">{{ user.email }}</p>
        <p class="address">{{ fmtUserAddress }}</p>
        <p class="phone">{{ user.phone }}</p>
        <p class="website">{{ user.website }}</p>
        <p class="company-info">{{ user.company.name }}</p>
    </div>
</template>

<script>
export default {
    name: "UserInfo",
    props: ["user"],
    computed: {
        fmtUserAddress: function() {
            return this.user.address.street + ", " +
                this.user.address.suite + ", " +
                this.user.address.city + ", " +
                this.user.address.zipcode + "."
        }
    }
}
</script>

<style scoped lang="scss">
.user-info {
    padding: 14px 4px;
    border-radius: 8px;
    box-shadow: 0px 0px 12px 2px rgba(0,0,0,0.15);
    margin: 20px 60px;

    .fullname {
        font-weight: bold;
        font-size: 16pt;
    }
}
</style>
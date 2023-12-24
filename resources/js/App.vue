<template>
    <div>
        <router-view></router-view>
    </div>
</template>

<script>

export default {
    name: 'app',
    components: {
    },
    computed: {
        isLoginRoute() {
            return this.$route.name === 'Login' || this.$route.name === 'Register';
        },
    },
};
</script>

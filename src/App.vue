<style lang="less" scoped>

#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}

h1,
h2 {
    font-weight: normal;
}

.content {
    margin-left: 120px;
}

ul {
    list-style-type: none;
    padding: 0;
}

ul#sidebar {
    width: 120px;
    float: left;
    li {}
}

li {
    margin: 0 10px;
}

a {
    color: #42b983;
}

</style>

<template>

<div id="app">

    <!-- <h1>{{ msg }}</h1> -->

    <ul id="sidebar">
        <li>
            <router-link to="/table">Go to table</router-link>
        </li>
        <li>
            <router-link to="/github">Go to github</router-link>
        </li>
        <li>
            <router-link to="/select">Go to select</router-link>
        </li>
    </ul>
    <!-- <hahaha></hahaha> -->
    <div class="content">
        <router-view></router-view>
    </div>
</div>

</template>

<script>

export default {
    name: 'app',
    data() {
        return {
            msg: 'Welcome to Your Vue.js Appssssssasdasdasd'
        }
    }
}

</script>

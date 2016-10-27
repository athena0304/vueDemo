<style scoped>

html,
body {
    font: 13px/18px sans-serif;
}

select {
    min-width: 300px;
}

</style>

<template>

<div>
    <p>
        Selected: {{ selected }}
    </p>
    <select2 :options="options" v-model="selected">
        <option disabled value="0">Select one</option>
    </select2>
    <h3><a href="http://select2.github.io/" target="_blank">select官网</a></h3>

</div>

</template>

<script type="text/javascript">


import select2 from './select2.vue'

export default {
    components: {
        "select2": select2
    },
    data() {
        return {
          selected: 0,
          options: [
            {id: 1, text: 'Hello'},
            {id: 2, text: 'World'}
          ]
        }
    }

}

</script>

<style lang="less">

body {
    font-family: Helvetica Neue, Arial, sans-serif;
    font-size: 14px;
    color: #444;
}

table {
    border: 2px solid #42b983;
    border-radius: 3px;
    background-color: #fff;
    width: 100%;
}

th {
    background-color: #42b983;
    color: rgba(255, 255, 255, 0.66);
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

td {
    background-color: #f9f9f9;
}

th,
td {
    min-width: 120px;
    padding: 10px 20px;
}

th.active {
    color: #fff;
}

th.active .arrow {
    opacity: 1;
}

.arrow {
    display: inline-block;
    vertical-align: middle;
    width: 0;
    height: 0;
    margin-left: 5px;
    opacity: 0.66;
}

.arrow.asc {
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-bottom: 4px solid #fff;
}

.arrow.dsc {
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-top: 4px solid #fff;
}

#search {
    float: left;
    margin-bottom: 10px;
}

</style>

<template>

<div>
    <h1>table</h1>
    <form id="search">
        Search
        <input name="query" v-model="searchQuery">
    </form>
    <table>
        <thead>
            <tr>
                <th v-for="key in columns" @click="sortBy(key)" :class="{ active: sortKey == key }">
                    {{key | capitalize}}
                    <span class="arrow" :class="sortOrders[key] > 0 ? 'asc' : 'dsc'"></span>
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="entry in filteredData">
                <td v-for="key in columns">
                    {{entry[key]}}
                </td>
            </tr>
        </tbody>
    </table>
</div>

</template>

<script type="text/javascript">

export default {
    data: function() {
        return {
            searchQuery: '',
            sortKey: '',
            sortOrders: {},
            filteredData: '',
            columns: ['name', 'power'],
            gridData: [{
                name: 'Chuck Norris',
                power: Infinity
            }, {
                name: 'Bruce Lee',
                power: 9000
            }, {
                name: 'Jackie Chan',
                power: 7000
            }, {
                name: 'Jet Li',
                power: 8000
            }]
        }
    },
    mounted: function() {
        var sortOrders = {}
        this.columns.forEach(function(key) {
            sortOrders[key] = 1
        })
        this.sortOrders = sortOrders;
    },
    filters: {
        capitalize: function(str) {
            return str.charAt(0).toUpperCase() + str.slice(1)
        }
    },
    computed: {
        filteredData: function() {
            var sortKey = this.sortKey;
            // console.log(this.sortOrders[sortKey])
            var order = this.sortOrders[sortKey] || 1;
            var searchQuery = this.searchQuery && this.searchQuery.toLowerCase();
            var data = this.gridData;

            if (searchQuery) {
                data = data.filter(function(row) {
                    return Object.keys(row).some(function(key) {
                        return String(row[key]).toLowerCase().indexOf(searchQuery) > -1
                    })
                })
            }
            if (sortKey) {
                data = data.slice().sort(function(a, b) {
                    a = a[sortKey];
                    b = b[sortKey];
                    // console.log(a+","+b)
                    return (a === b ? 0 : a > b ? 1 : -1) * order;
                })
            }
            // console.log(this.sortOrders)
            return data
        }
    },
    methods: {
        sortBy: function(key) {
            this.sortKey = key;
            this.sortOrders[key] = this.sortOrders[key] * -1;
            // console.log(this.sortOrders[key])

        }
    }

}

</script>

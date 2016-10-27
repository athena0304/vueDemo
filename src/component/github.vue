<style scoped>

#demo {
    font-family: 'Helvetica', Arial, sans-serif;
}

a {
    text-decoration: none;
    color: #f66;
}
ul {
    list-style-type: none;
    padding: 0;
}

li {
    line-height: 1.5em;
    margin-bottom: 20px;
}

.author,
.date {
    font-weight: bold;
}

</style>

<template>

<div>
    <h1>Latest Vue.js Commits</h1>
    <div>
        <span v-for="branch in branches">
        <input  type="radio" name="branch" :value="branch" v-model="currentBranch" :id="branch">
        <label :for="branch" v-text="branch"></label>
      </span>
    </div>
    <p>
        vuejs/vue@{{ currentBranch }}
    </p>
    <ul>
        <li v-for="record in commits">
            <a :href="record.html_url" target="_blank" class="commit">{{ record.sha.slice(0, 7) }}</a> - <span class="message">{{ record.commit.message | truncate }}</span>
            <br> by <span class="author"><a :href="record.author.html_url" target="_blank">{{ record.commit.author.name }}</a></span> at <span class="date">{{ record.commit.author.date | formatDate}}</span>
        </li>
    </ul>

</div>

</template>

<script type="text/javascript">

export default {
    data() {
            return {
                branches: ['master', '1.0'],
                currentBranch: 'master',
                commits: null,
                apiURL: 'https://api.github.com/repos/vuejs/vuejs.org/commits?per_page=3&sha='
            }
        },
        created: function() {
            this.fetchData()
        },
        watch: {
            currentBranch: 'fetchData'
        },
        filters: {
            truncate: function(v) {
                var newline = v.indexOf('\n')
                return newline > 0 ? v.slice(0, newline) : v
            },
            formatDate: function(v) {
                return v.replace(/T|Z/g, ' ')
            }
        },
        methods: {
            fetchData: function() {
                var xhr = new XMLHttpRequest();
                var self = this;
                xhr.open('GET', this.apiURL + self.currentBranch)
                xhr.onload = function() {
                    self.commits = JSON.parse(xhr.responseText);
                    console.log(self.commits[0].html_url)
                }
                xhr.send()
            }
        }
}

</script>

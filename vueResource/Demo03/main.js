/**
 * Created by mengfanxu on 17/4/20.
 */
(function () {


    new Vue({
        el: '#app',
        data: {
            search: '1',
            sort: '',
            sortMode: 1,
            url: 'data.json',
            gridData: []
        },
        created: function () {
            this.getData();
        },
        methods: {
            customFilter: function (item) {
                return item.name.indexOf(this.search) != -1
                    || item.age.toString().indexOf(this.search) != -1;
            },
            orderByName: function () {
                this.sort = 'name';
                this.sortMode == 1 ? this.sortMode = -1 : this.sortMode = 1;
            },
            orderByAge: function () {
                this.sort = 'age';
                this.sortMode == 1 ? this.sortMode = -1 : this.sortMode = 1;
            },
            getData: function () {
                this.$http
                    .get(this.url)
                    .then(function (res) {
                        this.$set('gridData', res.data.items);
                    })
            }
        }

    });

})();

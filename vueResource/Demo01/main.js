/**
 * Created by mengfanxu on 17/4/20.
 */
(function () {

    new Vue({
        el: '#app',
        data: {
            url: 'data.json',
            gridData: []
        },
        created: function () {
            this.getData();
        },
        methods: {
            getData: function () {
                var _self = this;
                _self.$http
                    .get(_self.url)
                    .then(function (res) {
                        _self.$set('gridData', res.data.items);
                    });
            }
        },
        components: {
            'grid': {
                props:["items"],
                template: '<table cellpadding="0" cellspacing="0">' +
                '<thead>' +
                '<tr>' +
                '<th>姓名</th>' +
                '<th>年龄</th>' +
                '</tr>' +
                '</thead>' +
                '<tbody>' +
                '<tr  v-for="item in items">' +
                '<td>{{item.name}}</td>' +
                '<td>{{item.age}}</td>' +
                '</tr>' +
                '</tbody>' +
                '</table>'
            }
        }
    })

})();

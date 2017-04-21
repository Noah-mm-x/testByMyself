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
                template: '#grid-template'
            }
        }
    })

})();

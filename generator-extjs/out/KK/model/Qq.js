Ext.define('KK.model.Qq', {
    extend: 'Ext.data.Model',
    fields: [{
            name: 'p',
            type: 'float'
        }, {
            name: 'd',
            type: 'date',
            format: 'd-m-Y'
        }, {
            name: 'k',
            type: 'kk'
        }
        //        {name: 'xxx', type: 'xxxx', defaultValue: true}
    ]
});

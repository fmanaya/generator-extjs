Ext.define('KK.model.Coche2', {
    extend: 'Ext.data.Model',
    fields: [{
            name: 'marca',
            type: 'string'
        }, {
            name: 'modelo',
            type: 'string'
        }, {
            name: 'fechaMat',
            type: 'date',
            format: 'd-m-Y'
        }, {
            name: 'precio',
            type: 'int'
        }, {
            name: 'valor',
            type: 'float'
        }, {
            name: 'ownerName',
            type: 'string'
        }, {
            name: 'ownerLasrName',
            type: 'string'
        }, {
            name: 'agent',
            type: 'string'
        }, {
            name: 'email',
            type: 'string'
        }, {
            name: 'telef',
            type: 'string'
        }
        //        {name: 'xxx', type: 'xxxx', defaultValue: true}
    ]
});

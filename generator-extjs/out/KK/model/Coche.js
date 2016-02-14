Ext.define('KK.model.Coche', {
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
            name: 'precio2',
            type: 'int'
        }, {
            name: 'ownerName',
            type: 'string'
        }, {
            name: 'ownerLasrName',
            type: 'string'
        }, {
            name: 'fechaNac',
            type: 'date',
            format: 'd-m-Y'
        }, {
            name: 'agent',
            type: 'string'
        }, {
            name: 'descripcion',
            type: 'string'
        }, {
            name: 'revision',
            type: 'date',
            format: 'd-m-Y'
        }
        //        {name: 'xxx', type: 'xxxx', defaultValue: true}
    ]
});

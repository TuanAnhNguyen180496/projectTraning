require([
    "dojo/store/Memory",
    "dojo/data/ObjectStore",
    "dojox/grid/DataGrid",
    "dojo/domReady!"
], function(Memory, ObjectStore, DataGrid){
    let data = [
        { Test:'abc', age:'15', gender:'nam',phone:'090909',moneyLoan:'20121212' },
        /* array of data */
    ];
    let objectStore = new Memory({
        data: data
    });
    let grid = new DataGrid({
        store: ObjectStore({objectStore: objectStore}),
        structure: [
            {name:"Test", field:"Test", width: "20%"},
            {name:"Age", field:"age", width: "20%"},
            {name:"Gender", field:"gender", width: "20%"},
            {name:"Phone", field:"phone", width: "20%"},
            {name:"Money Loan", field:"moneyLoan", width: "20%"}
        ]
    }, "work");
    grid.startup();
});
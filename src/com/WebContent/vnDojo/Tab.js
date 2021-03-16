require([
    "dojo/dom-attr", "dojo/query",
    "dijit/layout/TabContainer", "dijit/layout/ContentPane",
    "dojo/domReady!"
], function(attr, query, TabContainer, ContentPane){

    query(".tc1cp").forEach(function(n){
        new ContentPane({
            // just pass a title: attribute, this, we're stealing from the node
            title: attr.get(n, "title")
        }, n);
    });
    var tc = new TabContainer({
        style: attr.get("tc1-prog", "style")
    }, "tc1-prog");
    tc.startup();
});
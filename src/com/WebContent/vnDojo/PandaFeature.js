define([
        "dojo/_base/declare",
        "ecm/widget/layout/_LaunchBarPane",
        "dojo/text!./templates/PandaFeature.html",
        "dojo/query",
        "dijit/layout/TabContainer",
        "dijit/layout/ContentPane",
        "dojo/domReady!",
        "dojo/dom-attr"
    ],
    function (declare,
              _LaunchBarPane,
              template, query, TabContainer, ContentPane, domReady, attr) {
        /**
         * @name vnDojo.PandaFeature
         * @class
         * @augments ecm.widget.layout._LaunchBarPane
         */
        return declare("vnDojo.PandaFeature", [
            _LaunchBarPane
        ], {
            /** @lends vnDojo.PandaFeature.prototype */

            templateString: template,

            // Set to true if widget template contains DOJO widgets.
            widgetsInTemplate: false,

            postCreate: function () {
                this.logEntry("postCreate");
                this.inherited(arguments);

                /**
                 * Add custom logic (if any) that should be necessary after the feature pane is created. For example,
                 * you might need to connect events to trigger the pane to update based on specific user actions.
                 */

                this.logExit("postCreate");
            },

            /**
             * Optional method that sets additional parameters when the user clicks on the launch button associated with
             * this feature.
             */
            setParams: function (params) {
                this.logEntry("setParams", params);

                if (params) {

                    if (!this.isLoaded && this.selected) {
                        this.loadContent();
                    }
                }

                this.logExit("setParams");
            },

            /**
             * Loads the content of the pane. This is a required method to insert a pane into the LaunchBarContainer.
             */
            loadContent: function () {
                query(".tc1cp").forEach(function (n) {
                    new ContentPane({
                        // just pass a title: attribute, this, we're stealing from the node
                        title: attr.get(n, "title")
                    }, n);
                });
                var tc = new TabContainer({
                    style: attr.get("tc1-prog", "style")
                }, "tc1-prog");
                tc.startup();

                this.logEntry("loadContent");

                if (!this.isLoaded) {
                    /**
                     * Add custom load logic here. The LaunchBarContainer widget will call this method when the user
                     * clicks on the launch button associated with this feature.
                     */
                    this.isLoaded = true;
                    this.needReset = false;
                }

                this.logExit("loadContent");
            },

            /**
             * Resets the content of this pane.
             */
            reset: function () {
                this.logEntry("reset");

                /**
                 * This is an option method that allows you to force the LaunchBarContainer to reset when the user
                 * clicks on the launch button associated with this feature.
                 */
                this.needReset = false;

                this.logExit("reset");
            }
        });
    });

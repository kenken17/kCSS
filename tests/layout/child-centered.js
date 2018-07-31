import { mobile, tablet, desktop, bigScreen } from "../breakpoints";

let mainContainerHeight;

module.exports = {
    tags: ["child-centered"],
    "Should have all the containers and children"(client) {
        client
            .url("http://localhost:8080/examples/layout/child-centered.html")
            .waitForElementVisible(".main-container");

        client.expect.element(".child-a").to.be.present;

        client.end();
    },

    "Mobile: Should see child-a at center"(client) {
        client
            .url("http://localhost:8080/examples/layout/child-centered.html")
            .resizeWindow(mobile.width, mobile.height)
            .waitForElementVisible(".main-container");

        // First set the window height
        client.getElementSize(".main-container", function(result) {
            mainContainerHeight = result.value.height;
        });

        client.getElementSize(".child-a", function(result) {
            this.assert.equal(typeof result, "object");
            this.assert.equal(result.status, 0);
            this.assert.equal(result.value.width, mobile.width);
            this.assert.equal(result.value.height, mainContainerHeight / 2);
        });

        client.getLocation(".child-a", function(result) {
            this.assert.equal(typeof result, "object");
            this.assert.equal(result.status, 0);
            this.assert.equal(result.value.x, 0);
            this.assert.equal(result.value.y, mainContainerHeight / 4);
        });

        client.end();
    },

    "Tablet: Should see child-a at center"(client) {
        client
            .url("http://localhost:8080/examples/layout/child-centered.html")
            .resizeWindow(tablet.width, tablet.height)
            .waitForElementVisible(".main-container");

        // First set the window height
        client.getElementSize(".main-container", function(result) {
            mainContainerHeight = result.value.height;
        });

        client.getElementSize(".child-a", function(result) {
            this.assert.equal(typeof result, "object");
            this.assert.equal(result.status, 0);
            this.assert.equal(result.value.width, tablet.width / 2);
            this.assert.equal(result.value.height, mainContainerHeight);
        });

        client.getLocation(".child-a", function(result) {
            this.assert.equal(typeof result, "object");
            this.assert.equal(result.status, 0);
            this.assert.equal(result.value.x, tablet.width / 4);
            this.assert.equal(result.value.y, 0);
        });

        client.end();
    },

    "desktop: Should see child-a at center"(client) {
        client
            .url("http://localhost:8080/examples/layout/child-centered.html")
            .resizeWindow(desktop.width, desktop.height)
            .waitForElementVisible(".main-container");

        // First set the window height
        client.getElementSize(".main-container", function(result) {
            mainContainerHeight = result.value.height;
        });

        client.getElementSize(".child-a", function(result) {
            this.assert.equal(typeof result, "object");
            this.assert.equal(result.status, 0);
            this.assert.equal(result.value.width, desktop.width);
            this.assert.equal(result.value.height, mainContainerHeight / 2);
        });

        client.getLocation(".child-a", function(result) {
            this.assert.equal(typeof result, "object");
            this.assert.equal(result.status, 0);
            this.assert.equal(result.value.x, 0);
            this.assert.equal(result.value.y, mainContainerHeight / 4);
        });

        client.end();
    },

    "Big Screen: Should see child-a at center"(client) {
        client
            .url("http://localhost:8080/examples/layout/child-centered.html")
            .resizeWindow(bigScreen.width, bigScreen.height)
            .waitForElementVisible(".main-container");

        // First set the window height
        client.getElementSize(".main-container", function(result) {
            mainContainerHeight = result.value.height;
        });

        client.getElementSize(".child-a", function(result) {
            this.assert.equal(typeof result, "object");
            this.assert.equal(result.status, 0);
            this.assert.equal(result.value.width, bigScreen.width / 2);
            this.assert.equal(result.value.height, mainContainerHeight);
        });

        client.getLocation(".child-a", function(result) {
            this.assert.equal(typeof result, "object");
            this.assert.equal(result.status, 0);
            this.assert.equal(result.value.x, bigScreen.width / 4);
            this.assert.equal(result.value.y, 0);
        });

        client.end();
    },
};

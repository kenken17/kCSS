import { mobile, tablet, desktop, bigScreen } from "../breakpoints";

let mainContainerHeight;

module.exports = {
    tags: ["full"],
    "Should have all the containers and children"(client) {
        client
            .url("http://localhost:8080/examples/layout/full.html")
            .waitForElementVisible(".main-container");

        client.expect.element(".child-a").to.be.present;
        client.expect.element(".child-b").to.be.present;
        client.expect.element(".child-c").to.be.present;
        client.expect.element(".container-child-c").to.be.present;
        client.expect.element(".child-c-1").to.be.present;
        client.expect.element(".child-c-2").to.be.present;

        client.end();
    },

    "Mobile: Should see child-a at top"(client) {
        client
            .url("http://localhost:8080/examples/layout/full.html")
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
            this.assert.equal(result.value.height, mainContainerHeight / 3);
        });

        client.getLocation(".child-a", function(result) {
            this.assert.equal(typeof result, "object");
            this.assert.equal(result.status, 0);
            this.assert.equal(result.value.x, 0);
            this.assert.equal(result.value.y, 0);
        });

        client.end();
    },

    "Mobile: Should see child-b in the middle"(client) {
        client
            .url("http://localhost:8080/examples/layout/full.html")
            .resizeWindow(mobile.width, mobile.height)
            .waitForElementVisible(".main-container");

        client.getElementSize(".child-b", function(result) {
            this.assert.equal(typeof result, "object");
            this.assert.equal(result.status, 0);
            this.assert.equal(result.value.width, mobile.width);
            this.assert.equal(result.value.height, mainContainerHeight / 3);
        });

        client.getLocation(".child-b", function(result) {
            this.assert.equal(typeof result, "object");
            this.assert.equal(result.status, 0);
            this.assert.equal(result.value.x, 0);
            this.assert.equal(result.value.y, mainContainerHeight / 3);
        });

        client.end();
    },

    "Mobile: Should see child-c split into two cells"(client) {
        client
            .url("http://localhost:8080/examples/layout/full.html")
            .resizeWindow(mobile.width, mobile.height)
            .waitForElementVisible(".main-container");

        client.getElementSize(".child-c", function(result) {
            this.assert.equal(typeof result, "object");
            this.assert.equal(result.status, 0);
            this.assert.equal(result.value.width, mobile.width);
            this.assert.equal(result.value.height, mainContainerHeight / 3);
        });

        client.getLocation(".child-c", function(result) {
            this.assert.equal(typeof result, "object");
            this.assert.equal(result.status, 0);
            this.assert.equal(result.value.x, 0);
            this.assert.equal(result.value.y, mainContainerHeight / 3 * 2);
        });

        client.end();
    },

    "Mobile: Should see child-c-1 as half of the child-c container 200px widht"(client) {
        client
            .url("http://localhost:8080/examples/layout/full.html")
            .resizeWindow(mobile.width, mobile.height)
            .waitForElementVisible(".main-container");

        client.getElementSize(".child-c-1", function(result) {
            this.assert.equal(typeof result, "object");
            this.assert.equal(result.status, 0);
            this.assert.equal(result.value.width, mobile.width / 2);
            this.assert.equal(result.value.height, mainContainerHeight / 3 );
        });

        client.getLocation(".child-c-1", function(result) {
            this.assert.equal(typeof result, "object");
            this.assert.equal(result.status, 0);
            this.assert.equal(result.value.x, 0);
            this.assert.equal(result.value.y, mainContainerHeight / 3 * 2);
        });

        client.end();
    },

    "Mobile: Should see child-c-2 as half on right"(client) {
        client
            .url("http://localhost:8080/examples/layout/full.html")
            .resizeWindow(mobile.width, mobile.height)
            .waitForElementVisible(".main-container");

        client.getElementSize(".child-c-2", function(result) {
            this.assert.equal(typeof result, "object");
            this.assert.equal(result.status, 0);
            this.assert.equal(result.value.width, mobile.width / 2);
            this.assert.equal(result.value.height, mainContainerHeight / 3);
        });

        client.getLocation(".child-c-2", function(result) {
            this.assert.equal(typeof result, "object");
            this.assert.equal(result.status, 0);
            this.assert.equal(result.value.x, mobile.width / 2);
            this.assert.equal(result.value.y, mainContainerHeight / 3 * 2);
        });

        client.end();
    },

};

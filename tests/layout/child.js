import { mobile, tablet, dekstop, bigScreen } from "../breakpoints";

let mainContainerHeight;

module.exports = {
    tags: ["child"],
    "Should have all the containers and children"(client) {
        client
            .url("http://localhost:8080/examples/layout/child.html")
            .waitForElementVisible(".main-container");

        client.expect.element(".child-a").to.be.present;
        client.expect.element(".child-b").to.be.present;
        client.expect.element(".child-c").to.be.present;

        client.end();
    },

    "Mobile: Should see child-a at left"(client) {
        client
            .url("http://localhost:8080/examples/layout/child.html")
            .resizeWindow(mobile.width, mobile.height)
            .waitForElementVisible(".main-container");

        // First set the window height
        client.getElementSize(".main-container", function(result) {
            mainContainerHeight = result.value.height;
        });

        client.getElementSize(".child-a", function(result) {
            this.assert.equal(typeof result, "object");
            this.assert.equal(result.status, 0);
            this.assert.equal(result.value.width, 100);
            this.assert.equal(result.value.height, mainContainerHeight);
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
            .url("http://localhost:8080/examples/layout/child.html")
            .resizeWindow(mobile.width, mobile.height)
            .waitForElementVisible(".main-container");

        client.getElementSize(".child-b", function(result) {
            this.assert.equal(typeof result, "object");
            this.assert.equal(result.status, 0);
            this.assert.equal(result.value.width, 100);
            this.assert.equal(result.value.height, mainContainerHeight);
        });

        client.getLocation(".child-b", function(result) {
            this.assert.equal(typeof result, "object");
            this.assert.equal(result.status, 0);
            this.assert.equal(result.value.x, 100);
            this.assert.equal(result.value.y, 0);
        });

        client.end();
    },

    "Mobile: Should see child-c on the right with 200px width"(client) {
        client
            .url("http://localhost:8080/examples/layout/child.html")
            .resizeWindow(mobile.width, mobile.height)
            .waitForElementVisible(".main-container");

        client.getElementSize(".child-c", function(result) {
            this.assert.equal(typeof result, "object");
            this.assert.equal(result.status, 0);
            this.assert.equal(result.value.width, 200);
            this.assert.equal(result.value.height, mainContainerHeight);
        });

        client.getLocation(".child-c", function(result) {
            this.assert.equal(typeof result, "object");
            this.assert.equal(result.status, 0);
            this.assert.equal(result.value.x, 200);
            this.assert.equal(result.value.y, 0);
        });

        client.end();
    },

    "Tablet: Should see child-a at the top"(client) {
        client
            .url("http://localhost:8080/examples/layout/child.html")
            .resizeWindow(tablet.width, tablet.height)
            .waitForElementVisible(".main-container");

        // First set the window height
        client.getElementSize(".main-container", function(result) {
            mainContainerHeight = result.value.height;
        });

        client.getElementSize(".child-a", function(result) {
            this.assert.equal(typeof result, "object");
            this.assert.equal(result.status, 0);
            this.assert.equal(result.value.width, 600);
            this.assert.equal(result.value.height, mainContainerHeight / 4);
        });

        client.getLocation(".child-a", function(result) {
            this.assert.equal(typeof result, "object");
            this.assert.equal(result.status, 0);
            this.assert.equal(result.value.x, 0);
            this.assert.equal(result.value.y, 0);
        });

        client.end();
    },

    "Tablet: Should see child-b in the middle"(client) {
        client
            .url("http://localhost:8080/examples/layout/child.html")
            .resizeWindow(tablet.width, tablet.height)
            .waitForElementVisible(".main-container");

        client.getElementSize(".child-b", function(result) {
            this.assert.equal(typeof result, "object");
            this.assert.equal(result.status, 0);
            this.assert.equal(result.value.width, 600);
            this.assert.equal(result.value.height, mainContainerHeight / 4);
        });

        client.getLocation(".child-b", function(result) {
            this.assert.equal(typeof result, "object");
            this.assert.equal(result.status, 0);
            this.assert.equal(result.value.x, 0);
            this.assert.equal(result.value.y, 100);
        });

        client.end();
    },

    "Tablet: Should see child-c on the bottom"(client) {
        client
            .url("http://localhost:8080/examples/layout/child.html")
            .resizeWindow(tablet.width, tablet.height)
            .waitForElementVisible(".main-container");

        client.getElementSize(".child-c", function(result) {
            this.assert.equal(typeof result, "object");
            this.assert.equal(result.status, 0);
            this.assert.equal(result.value.width, 600);
            this.assert.equal(result.value.height, mainContainerHeight / 2);
        });

        client.getLocation(".child-c", function(result) {
            this.assert.equal(typeof result, "object");
            this.assert.equal(result.status, 0);
            this.assert.equal(result.value.x, 0);
            this.assert.equal(result.value.y, mainContainerHeight / 2);
        });

        client.end();
    }
};

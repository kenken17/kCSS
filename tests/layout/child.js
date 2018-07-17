import { mobile, tablet, desktop, bigScreen } from "../breakpoints";

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
            this.assert.equal(result.value.width, mobile.width / 4);
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
            this.assert.equal(result.value.width, mobile.width / 4);
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
            this.assert.equal(result.value.width, mobile.width / 2);
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

            // Looks like calc is not as accurate, just to cater the 0.5px off..
            this.assert.equal(
                result.value.height,
                Math.ceil(mainContainerHeight / 4)
            );
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

            // Looks like calc is not as accurate, just to cater the 0.5px off..
            this.assert.equal(
                result.value.height,
                Math.floor(mainContainerHeight / 4)
            );
        });

        client.getLocation(".child-b", function(result) {
            this.assert.equal(typeof result, "object");
            this.assert.equal(result.status, 0);
            this.assert.equal(result.value.x, 0);
            this.assert.equal(result.value.y, mainContainerHeight / 4);
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
    },

    "Desktop: Should see child-a at left"(client) {
        client
            .url("http://localhost:8080/examples/layout/child.html")
            .resizeWindow(desktop.width, desktop.height)
            .waitForElementVisible(".main-container");

        // First set the window height
        client.getElementSize(".main-container", function(result) {
            mainContainerHeight = result.value.height;
        });

        client.getElementSize(".child-a", function(result) {
            this.assert.equal(typeof result, "object");
            this.assert.equal(result.status, 0);
            this.assert.equal(result.value.width, desktop.width / 4);
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

    "Desktop: Should see child-b in the middle"(client) {
        client
            .url("http://localhost:8080/examples/layout/child.html")
            .resizeWindow(desktop.width, desktop.height)
            .waitForElementVisible(".main-container");

        client.getElementSize(".child-b", function(result) {
            this.assert.equal(typeof result, "object");
            this.assert.equal(result.status, 0);
            this.assert.equal(result.value.width, desktop.width / 4);
            this.assert.equal(result.value.height, mainContainerHeight);
        });

        client.getLocation(".child-b", function(result) {
            this.assert.equal(typeof result, "object");
            this.assert.equal(result.status, 0);
            this.assert.equal(result.value.x, 300);
            this.assert.equal(result.value.y, 0);
        });

        client.end();
    },

    "Desktop: Should see child-c on the right with 600px width"(client) {
        client
            .url("http://localhost:8080/examples/layout/child.html")
            .resizeWindow(desktop.width, desktop.height)
            .waitForElementVisible(".main-container");

        client.getElementSize(".child-c", function(result) {
            this.assert.equal(typeof result, "object");
            this.assert.equal(result.status, 0);
            this.assert.equal(result.value.width, desktop.width / 2);
            this.assert.equal(result.value.height, mainContainerHeight);
        });

        client.getLocation(".child-c", function(result) {
            this.assert.equal(typeof result, "object");
            this.assert.equal(result.status, 0);
            this.assert.equal(result.value.x, 600);
            this.assert.equal(result.value.y, 0);
        });

        client.end();
    },

    "Big Screen: Should see child-a at the top"(client) {
        client
            .url("http://localhost:8080/examples/layout/child.html")
            .resizeWindow(bigScreen.width, bigScreen.height)
            .waitForElementVisible(".main-container");

        // First set the window height
        client.getElementSize(".main-container", function(result) {
            mainContainerHeight = result.value.height;
        });

        client.getElementSize(".child-a", function(result) {
            this.assert.equal(typeof result, "object");
            this.assert.equal(result.status, 0);
            this.assert.equal(result.value.width, bigScreen.width);

            // Looks like calc is not as accurate, just to cater the 0.5px off..
            this.assert.equal(
                result.value.height,
                Math.ceil(mainContainerHeight / 4)
            );
        });

        client.getLocation(".child-a", function(result) {
            this.assert.equal(typeof result, "object");
            this.assert.equal(result.status, 0);
            this.assert.equal(result.value.x, 0);
            this.assert.equal(result.value.y, 0);
        });

        client.end();
    },

    "Big Screen: Should see child-b in the middle"(client) {
        client
            .url("http://localhost:8080/examples/layout/child.html")
            .resizeWindow(bigScreen.width, bigScreen.height)
            .waitForElementVisible(".main-container");

        client.getElementSize(".child-b", function(result) {
            this.assert.equal(typeof result, "object");
            this.assert.equal(result.status, 0);
            this.assert.equal(result.value.width, bigScreen.width);

            // Looks like calc is not as accurate, just to cater the 0.5px off..
            this.assert.equal(
                result.value.height,
                Math.floor(mainContainerHeight / 4)
            );
        });

        client.getLocation(".child-b", function(result) {
            this.assert.equal(typeof result, "object");
            this.assert.equal(result.status, 0);
            this.assert.equal(result.value.x, 0);
            this.assert.equal(result.value.y, mainContainerHeight / 4);
        });

        client.end();
    },

    "Big Screen: Should see child-c on the bottom"(client) {
        client
            .url("http://localhost:8080/examples/layout/child.html")
            .resizeWindow(bigScreen.width, bigScreen.height)
            .waitForElementVisible(".main-container");

        client.getElementSize(".child-c", function(result) {
            this.assert.equal(typeof result, "object");
            this.assert.equal(result.status, 0);
            this.assert.equal(result.value.width, bigScreen.width);
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

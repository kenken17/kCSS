import { mobile, tablet, desktop, bigScreen } from "../breakpoints";

let mainContainerHeight;

module.exports = {
    tags: ["container"],
    "Should have all the containers and children"(client) {
        client
            .url("http://localhost:8080/examples/layout/container.html")
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
            .url("http://localhost:8080/examples/layout/container.html")
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

    "Mobile: Should see child-b in the middle"(client) {
        client
            .url("http://localhost:8080/examples/layout/container.html")
            .resizeWindow(mobile.width, mobile.height)
            .waitForElementVisible(".main-container");

        client.getElementSize(".child-b", function(result) {
            this.assert.equal(typeof result, "object");
            this.assert.equal(result.status, 0);
            this.assert.equal(result.value.width, mobile.width);
            this.assert.equal(result.value.height, mainContainerHeight / 4);
        });

        client.getLocation(".child-b", function(result) {
            this.assert.equal(typeof result, "object");
            this.assert.equal(result.status, 0);
            this.assert.equal(result.value.x, 0);
            this.assert.equal(result.value.y, mainContainerHeight / 4);
        });

        client.end();
    },

    "Mobile: Should see child-c stack up two cells"(client) {
        client
            .url("http://localhost:8080/examples/layout/container.html")
            .resizeWindow(mobile.width, mobile.height)
            .waitForElementVisible(".main-container");

        client.getElementSize(".child-c", function(result) {
            this.assert.equal(typeof result, "object");
            this.assert.equal(result.status, 0);
            this.assert.equal(result.value.width, mobile.width);
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

    "Mobile: Should see child-c-1 same as child-c but is 100px"(client) {
        client
            .url("http://localhost:8080/examples/layout/container.html")
            .resizeWindow(mobile.width, mobile.height)
            .waitForElementVisible(".main-container");

        client.getElementSize(".child-c-1", function(result) {
            this.assert.equal(typeof result, "object");
            this.assert.equal(result.status, 0);
            this.assert.equal(result.value.width, mobile.width);
            this.assert.equal(result.value.height, mainContainerHeight / 4);
        });

        client.getLocation(".child-c-1", function(result) {
            this.assert.equal(typeof result, "object");
            this.assert.equal(result.status, 0);
            this.assert.equal(result.value.x, 0);
            this.assert.equal(result.value.y, mainContainerHeight / 2);
        });

        client.end();
    },

    "Mobile: Should see child-c-2 at the bottom"(client) {
        client
            .url("http://localhost:8080/examples/layout/container.html")
            .resizeWindow(mobile.width, mobile.height)
            .waitForElementVisible(".main-container");

        client.getElementSize(".child-c-2", function(result) {
            this.assert.equal(typeof result, "object");
            this.assert.equal(result.status, 0);
            this.assert.equal(result.value.width, mobile.width);
            this.assert.equal(result.value.height, mainContainerHeight / 4);
        });

        client.getLocation(".child-c-2", function(result) {
            this.assert.equal(typeof result, "object");
            this.assert.equal(result.status, 0);
            this.assert.equal(result.value.x, 0);
            this.assert.equal(result.value.y, mainContainerHeight / 4 * 3);
        });

        client.end();
    },

    "Tablet: Should see child-a at top"(client) {
        client
            .url("http://localhost:8080/examples/layout/container.html")
            .resizeWindow(tablet.width, tablet.height)
            .waitForElementVisible(".main-container");

        // First set the window height
        client.getElementSize(".main-container", function(result) {
            mainContainerHeight = result.value.height;
        });

        client.getElementSize(".child-a", function(result) {
            this.assert.equal(typeof result, "object");
            this.assert.equal(result.status, 0);
            this.assert.equal(result.value.width, tablet.width / 3);
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

    "Tablet: Should see child-b as the second cell in a row"(client) {
        client
            .url("http://localhost:8080/examples/layout/container.html")
            .resizeWindow(tablet.width, tablet.height)
            .waitForElementVisible(".main-container");

        client.getElementSize(".child-b", function(result) {
            this.assert.equal(typeof result, "object");
            this.assert.equal(result.status, 0);
            this.assert.equal(result.value.width, tablet.width / 3);
            this.assert.equal(result.value.height, mainContainerHeight);
        });

        client.getLocation(".child-b", function(result) {
            this.assert.equal(typeof result, "object");
            this.assert.equal(result.status, 0);
            this.assert.equal(result.value.x, tablet.width / 3);
            this.assert.equal(result.value.y, 0);
        });

        client.end();
    },

    "Tablet: Should see child-c as the third cell in the row"(client) {
        client
            .url("http://localhost:8080/examples/layout/container.html")
            .resizeWindow(tablet.width, tablet.height)
            .waitForElementVisible(".main-container");

        client.getElementSize(".child-c", function(result) {
            this.assert.equal(typeof result, "object");
            this.assert.equal(result.status, 0);
            this.assert.equal(result.value.width, tablet.width / 3);
            this.assert.equal(result.value.height, mainContainerHeight);
        });

        client.getLocation(".child-c", function(result) {
            this.assert.equal(typeof result, "object");
            this.assert.equal(result.status, 0);
            this.assert.equal(result.value.x, tablet.width / 3 * 2);
            this.assert.equal(result.value.y, 0);
        });

        client.end();
    },

    "Tablet: Should see child-c-1 same as child-c but is half (100px)"(client) {
        client
            .url("http://localhost:8080/examples/layout/container.html")
            .resizeWindow(tablet.width, tablet.height)
            .waitForElementVisible(".main-container");

        client.getElementSize(".child-c-1", function(result) {
            this.assert.equal(typeof result, "object");
            this.assert.equal(result.status, 0);
            this.assert.equal(result.value.width, tablet.width / 3 / 2);
            this.assert.equal(result.value.height, mainContainerHeight);
        });

        client.getLocation(".child-c-1", function(result) {
            this.assert.equal(typeof result, "object");
            this.assert.equal(result.status, 0);
            this.assert.equal(result.value.x, tablet.width / 3 * 2);
            this.assert.equal(result.value.y, 0);
        });

        client.end();
    },

    "Tablet: Should see child-c-2 as the last cell on the right"(client) {
        client
            .url("http://localhost:8080/examples/layout/container.html")
            .resizeWindow(tablet.width, tablet.height)
            .waitForElementVisible(".main-container");

        client.getElementSize(".child-c-2", function(result) {
            this.assert.equal(typeof result, "object");
            this.assert.equal(result.status, 0);
            this.assert.equal(result.value.width, tablet.width / 3 / 2);
            this.assert.equal(result.value.height, mainContainerHeight);
        });

        client.getLocation(".child-c-2", function(result) {
            this.assert.equal(typeof result, "object");
            this.assert.equal(result.status, 0);
            this.assert.equal(result.value.x, tablet.width / 3 / 2 * 5);
            this.assert.equal(result.value.y, 0);
        });

        client.end();
    },

    "Desktop: Should see child-a at top"(client) {
        client
            .url("http://localhost:8080/examples/layout/container.html")
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

    "Desktop: Should see child-b in the middle"(client) {
        client
            .url("http://localhost:8080/examples/layout/container.html")
            .resizeWindow(desktop.width, desktop.height)
            .waitForElementVisible(".main-container");

        client.getElementSize(".child-b", function(result) {
            this.assert.equal(typeof result, "object");
            this.assert.equal(result.status, 0);
            this.assert.equal(result.value.width, desktop.width);
            this.assert.equal(result.value.height, mainContainerHeight / 4);
        });

        client.getLocation(".child-b", function(result) {
            this.assert.equal(typeof result, "object");
            this.assert.equal(result.status, 0);
            this.assert.equal(result.value.x, 0);
            this.assert.equal(result.value.y, mainContainerHeight / 4);
        });

        client.end();
    },

    "Desktop: Should see child-c stack up two cells"(client) {
        client
            .url("http://localhost:8080/examples/layout/container.html")
            .resizeWindow(desktop.width, desktop.height)
            .waitForElementVisible(".main-container");

        client.getElementSize(".child-c", function(result) {
            this.assert.equal(typeof result, "object");
            this.assert.equal(result.status, 0);
            this.assert.equal(result.value.width, desktop.width);
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

    "Desktop: Should see child-c-1 same as child-c but is 100px"(client) {
        client
            .url("http://localhost:8080/examples/layout/container.html")
            .resizeWindow(desktop.width, desktop.height)
            .waitForElementVisible(".main-container");

        client.getElementSize(".child-c-1", function(result) {
            this.assert.equal(typeof result, "object");
            this.assert.equal(result.status, 0);
            this.assert.equal(result.value.width, desktop.width);
            this.assert.equal(result.value.height, mainContainerHeight / 4);
        });

        client.getLocation(".child-c-1", function(result) {
            this.assert.equal(typeof result, "object");
            this.assert.equal(result.status, 0);
            this.assert.equal(result.value.x, 0);
            this.assert.equal(result.value.y, mainContainerHeight / 2);
        });

        client.end();
    },

    "Desktop: Should see child-c-2 at the bottom"(client) {
        client
            .url("http://localhost:8080/examples/layout/container.html")
            .resizeWindow(desktop.width, desktop.height)
            .waitForElementVisible(".main-container");

        client.getElementSize(".child-c-2", function(result) {
            this.assert.equal(typeof result, "object");
            this.assert.equal(result.status, 0);
            this.assert.equal(result.value.width, desktop.width);
            this.assert.equal(result.value.height, mainContainerHeight / 4);
        });

        client.getLocation(".child-c-2", function(result) {
            this.assert.equal(typeof result, "object");
            this.assert.equal(result.status, 0);
            this.assert.equal(result.value.x, 0);
            this.assert.equal(result.value.y, mainContainerHeight / 4 * 3);
        });

        client.end();
    },

    "Big Screen: Should see child-a on the left"(client) {
        client
            .url("http://localhost:8080/examples/layout/container.html")
            .resizeWindow(bigScreen.width, bigScreen.height)
            .waitForElementVisible(".main-container");

        // First set the window height
        client.getElementSize(".main-container", function(result) {
            mainContainerHeight = result.value.height;
        });

        client.getElementSize(".child-a", function(result) {
            this.assert.equal(typeof result, "object");
            this.assert.equal(result.status, 0);
            this.assert.equal(result.value.width, bigScreen.width / 3);
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

    "Big Screen: Should see child-b as the second cell in a row"(client) {
        client
            .url("http://localhost:8080/examples/layout/container.html")
            .resizeWindow(bigScreen.width, bigScreen.height)
            .waitForElementVisible(".main-container");

        client.getElementSize(".child-b", function(result) {
            this.assert.equal(typeof result, "object");
            this.assert.equal(result.status, 0);
            this.assert.equal(result.value.width, bigScreen.width / 3);
            this.assert.equal(result.value.height, mainContainerHeight);
        });

        client.getLocation(".child-b", function(result) {
            this.assert.equal(typeof result, "object");
            this.assert.equal(result.status, 0);
            this.assert.equal(result.value.x, bigScreen.width / 3);
            this.assert.equal(result.value.y, 0);
        });

        client.end();
    },

    "Big Screen: Should see child-c as the third cell in the row"(client) {
        client
            .url("http://localhost:8080/examples/layout/container.html")
            .resizeWindow(bigScreen.width, bigScreen.height)
            .waitForElementVisible(".main-container");

        client.getElementSize(".child-c", function(result) {
            this.assert.equal(typeof result, "object");
            this.assert.equal(result.status, 0);
            this.assert.equal(result.value.width, bigScreen.width / 3);
            this.assert.equal(result.value.height, mainContainerHeight);
        });

        client.getLocation(".child-c", function(result) {
            this.assert.equal(typeof result, "object");
            this.assert.equal(result.status, 0);
            this.assert.equal(result.value.x, bigScreen.width / 3 * 2);
            this.assert.equal(result.value.y, 0);
        });

        client.end();
    },

    "Big Screen: Should see child-c-1 same as child-c but is half (300px)"(
        client
    ) {
        client
            .url("http://localhost:8080/examples/layout/container.html")
            .resizeWindow(bigScreen.width, bigScreen.height)
            .waitForElementVisible(".main-container");

        client.getElementSize(".child-c-1", function(result) {
            this.assert.equal(typeof result, "object");
            this.assert.equal(result.status, 0);
            this.assert.equal(result.value.width, bigScreen.width / 3 / 2);
            this.assert.equal(result.value.height, mainContainerHeight);
        });

        client.getLocation(".child-c-1", function(result) {
            this.assert.equal(typeof result, "object");
            this.assert.equal(result.status, 0);
            this.assert.equal(result.value.x, bigScreen.width / 3 * 2);
            this.assert.equal(result.value.y, 0);
        });

        client.end();
    },

    "Big Screen: Should see child-c-2 as the last cell on the right"(client) {
        client
            .url("http://localhost:8080/examples/layout/container.html")
            .resizeWindow(bigScreen.width, bigScreen.height)
            .waitForElementVisible(".main-container");

        client.getElementSize(".child-c-2", function(result) {
            this.assert.equal(typeof result, "object");
            this.assert.equal(result.status, 0);
            this.assert.equal(result.value.width, bigScreen.width / 3 / 2);
            this.assert.equal(result.value.height, mainContainerHeight);
        });

        client.getLocation(".child-c-2", function(result) {
            this.assert.equal(typeof result, "object");
            this.assert.equal(result.status, 0);
            this.assert.equal(result.value.x, bigScreen.width / 6 * 5);
            this.assert.equal(result.value.y, 0);
        });

        client.end();
    }
};

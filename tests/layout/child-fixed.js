import { mobile, tablet, desktop, bigScreen } from "../breakpoints";

let mainContainerHeight;

module.exports = {
    tags: ["child-fixed"],
    "Should have all the containers and children"(client) {
        client
            .url("http://localhost:8080/examples/layout/child-fixed.html")
            .waitForElementVisible(".main-container");

        client.expect.element(".child-a").to.be.present;
        client.expect.element(".child-b").to.be.present;
        client.expect.element(".child-c").to.be.present;
        client.expect.element(".container-child-c").to.be.present;
        client.expect.element(".child-c-1").to.be.present;
        client.expect.element(".child-c-2").to.be.present;
        client.expect.element(".child-c-3").to.be.present;

        client.end();
    },

    "Mobile: Should see child-a at left 100px"(client) {
        client
            .url("http://localhost:8080/examples/layout/child-fixed.html")
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
            this.assert.equal(result.value.height, 100);
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
            .url("http://localhost:8080/examples/layout/child-fixed.html")
            .resizeWindow(mobile.width, mobile.height)
            .waitForElementVisible(".main-container");

        client.getElementSize(".child-b", function(result) {
            this.assert.equal(typeof result, "object");
            this.assert.equal(result.status, 0);
            this.assert.equal(result.value.width, (mobile.width - 100) / 2);
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

    "Mobile: Should see child-c split into three cells"(client) {
        client
            .url("http://localhost:8080/examples/layout/child-fixed.html")
            .resizeWindow(mobile.width, mobile.height)
            .waitForElementVisible(".main-container");

        client.getElementSize(".child-c", function(result) {
            this.assert.equal(typeof result, "object");
            this.assert.equal(result.status, 0);
            this.assert.equal(result.value.width, (mobile.width - 100) / 2);
            this.assert.equal(result.value.height, mainContainerHeight);
        });

        client.getLocation(".child-c", function(result) {
            this.assert.equal(typeof result, "object");
            this.assert.equal(result.status, 0);
            this.assert.equal(result.value.x, ((mobile.width - 100) / 2) + 100);
            this.assert.equal(result.value.y, 0);
        });

        client.end();
    },

    "Mobile: Should see child-c-1 of the child-c container 100px height"(client) {
        client
            .url("http://localhost:8080/examples/layout/child-fixed.html")
            .resizeWindow(mobile.width, mobile.height)
            .waitForElementVisible(".main-container");

        client.getElementSize(".child-c-1", function(result) {
            this.assert.equal(typeof result, "object");
            this.assert.equal(result.status, 0);
            this.assert.equal(result.value.width, 100);
            this.assert.equal(result.value.height, 100);
        });

        client.getLocation(".child-c-1", function(result) {
            this.assert.equal(typeof result, "object");
            this.assert.equal(result.status, 0);
            this.assert.equal(result.value.x, ((mobile.width - 100) / 2) + 100);
            this.assert.equal(result.value.y, 0);
        });

        client.end();
    },

    "Mobile: Should see child-c-2 at the middle cell of right"(client) {
        client
            .url("http://localhost:8080/examples/layout/child-fixed.html")
            .resizeWindow(mobile.width, mobile.height)
            .waitForElementVisible(".main-container");

        client.getElementSize(".child-c-2", function(result) {
            this.assert.equal(typeof result, "object");
            this.assert.equal(result.status, 0);
            this.assert.equal(result.value.width, (mobile.width - 100) / 2);
            this.assert.equal(result.value.height, (mainContainerHeight - 100) / 2);
        });

        client.getLocation(".child-c-2", function(result) {
            this.assert.equal(typeof result, "object");
            this.assert.equal(result.status, 0);
            this.assert.equal(result.value.x, ((mobile.width - 100) / 2) + 100);
            this.assert.equal(result.value.y, 100);
        });

        client.end();
    },

    "Mobile: Should see child-c-3 at the bottom cell of right"(client) {
        client
            .url("http://localhost:8080/examples/layout/child-fixed.html")
            .resizeWindow(mobile.width, mobile.height)
            .waitForElementVisible(".main-container");

        client.getElementSize(".child-c-3", function(result) {
            this.assert.equal(typeof result, "object");
            this.assert.equal(result.status, 0);
            this.assert.equal(result.value.width, (mobile.width - 100) / 2);
            this.assert.equal(result.value.height, (mainContainerHeight - 100) / 2);
        });

        client.getLocation(".child-c-3", function(result) {
            this.assert.equal(typeof result, "object");
            this.assert.equal(result.status, 0);
            this.assert.equal(result.value.x, ((mobile.width - 100) / 2) + 100);
            this.assert.equal(result.value.y, ((mainContainerHeight - 100) / 2) + 100);
        });

        client.end();
    },

    "Tablet: Should see child-a at top 100px"(client) {
        client
            .url("http://localhost:8080/examples/layout/child-fixed.html")
            .resizeWindow(tablet.width, tablet.height)
            .waitForElementVisible(".main-container");

        // First set the window height
        client.getElementSize(".main-container", function(result) {
            mainContainerHeight = result.value.height;
        });

        client.getElementSize(".child-a", function(result) {
            this.assert.equal(typeof result, "object");
            this.assert.equal(result.status, 0);
            this.assert.equal(result.value.width, 100);
            this.assert.equal(result.value.height, 100);
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
            .url("http://localhost:8080/examples/layout/child-fixed.html")
            .resizeWindow(tablet.width, tablet.height)
            .waitForElementVisible(".main-container");

        client.getElementSize(".child-b", function(result) {
            this.assert.equal(typeof result, "object");
            this.assert.equal(result.status, 0);
            this.assert.equal(result.value.width, tablet.width);
            this.assert.equal(result.value.height, (mainContainerHeight - 100) / 2);
        });

        client.getLocation(".child-b", function(result) {
            this.assert.equal(typeof result, "object");
            this.assert.equal(result.status, 0);
            this.assert.equal(result.value.x, 0);
            this.assert.equal(result.value.y, 100);
        });

        client.end();
    },

    "Tablet: Should see child-c split into three cells"(client) {
        client
            .url("http://localhost:8080/examples/layout/child-fixed.html")
            .resizeWindow(tablet.width, tablet.height)
            .waitForElementVisible(".main-container");

        client.getElementSize(".child-c", function(result) {
            this.assert.equal(typeof result, "object");
            this.assert.equal(result.status, 0);
            this.assert.equal(result.value.width, tablet.width);
            this.assert.equal(result.value.height, (mainContainerHeight - 100) / 2);
        });

        client.getLocation(".child-c", function(result) {
            this.assert.equal(typeof result, "object");
            this.assert.equal(result.status, 0);
            this.assert.equal(result.value.x, 0);
            this.assert.equal(result.value.y, ((mainContainerHeight - 100) / 2) + 100);
        });

        client.end();
    },

    "Tablet: Should see child-c-1 of the child-c container 100px"(client) {
        client
            .url("http://localhost:8080/examples/layout/child-fixed.html")
            .resizeWindow(tablet.width, tablet.height)
            .waitForElementVisible(".main-container");

        client.getElementSize(".child-c-1", function(result) {
            this.assert.equal(typeof result, "object");
            this.assert.equal(result.status, 0);
            this.assert.equal(result.value.width, 100);
            this.assert.equal(result.value.height, 100);
        });

        client.getLocation(".child-c-1", function(result) {
            this.assert.equal(typeof result, "object");
            this.assert.equal(result.status, 0);
            this.assert.equal(result.value.x, 0);
            this.assert.equal(result.value.y, ((mainContainerHeight - 100) / 2) + 100);
        });

        client.end();
    },

    "Tablet: Should see child-c-2 at the middle cell of bottom"(client) {
        client
            .url("http://localhost:8080/examples/layout/child-fixed.html")
            .resizeWindow(tablet.width, tablet.height)
            .waitForElementVisible(".main-container");

        client.getElementSize(".child-c-2", function(result) {
            this.assert.equal(typeof result, "object");
            this.assert.equal(result.status, 0);
            this.assert.equal(result.value.width, (tablet.width - 100) / 2);
            this.assert.equal(result.value.height, (mainContainerHeight - 100) / 2);
        });

        client.getLocation(".child-c-2", function(result) {
            this.assert.equal(typeof result, "object");
            this.assert.equal(result.status, 0);
            this.assert.equal(result.value.x, 100);
            this.assert.equal(result.value.y, ((mainContainerHeight - 100) / 2) + 100);
        });

        client.end();
    },

    "Tablet: Should see child-c-3 at the right cell of bottom"(client) {
        client
            .url("http://localhost:8080/examples/layout/child-fixed.html")
            .resizeWindow(tablet.width, tablet.height)
            .waitForElementVisible(".main-container");

        client.getElementSize(".child-c-3", function(result) {
            this.assert.equal(typeof result, "object");
            this.assert.equal(result.status, 0);
            this.assert.equal(result.value.width, (tablet.width - 100) / 2);
            this.assert.equal(result.value.height, (mainContainerHeight - 100) / 2);
        });

        client.getLocation(".child-c-3", function(result) {
            this.assert.equal(typeof result, "object");
            this.assert.equal(result.status, 0);
            this.assert.equal(result.value.x, ((tablet.width - 100) / 2) + 100);
            this.assert.equal(result.value.y, ((mainContainerHeight - 100) / 2) + 100);
        });

        client.end();
    },

    "Desktop: Should see child-a at left 100px"(client) {
        client
            .url("http://localhost:8080/examples/layout/child-fixed.html")
            .resizeWindow(desktop.width, desktop.height)
            .waitForElementVisible(".main-container");

        // First set the window height
        client.getElementSize(".main-container", function(result) {
            mainContainerHeight = result.value.height;
        });

        client.getElementSize(".child-a", function(result) {
            this.assert.equal(typeof result, "object");
            this.assert.equal(result.status, 0);
            this.assert.equal(result.value.width, 100);
            this.assert.equal(result.value.height, 100);
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
            .url("http://localhost:8080/examples/layout/child-fixed.html")
            .resizeWindow(desktop.width, desktop.height)
            .waitForElementVisible(".main-container");

        client.getElementSize(".child-b", function(result) {
            this.assert.equal(typeof result, "object");
            this.assert.equal(result.status, 0);
            this.assert.equal(result.value.width, (desktop.width - 100) / 2);
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

    "Desktop: Should see child-c split into three cells"(client) {
        client
            .url("http://localhost:8080/examples/layout/child-fixed.html")
            .resizeWindow(desktop.width, desktop.height)
            .waitForElementVisible(".main-container");

        client.getElementSize(".child-c", function(result) {
            this.assert.equal(typeof result, "object");
            this.assert.equal(result.status, 0);
            this.assert.equal(result.value.width, (desktop.width - 100) / 2);
            this.assert.equal(result.value.height, mainContainerHeight);
        });

        client.getLocation(".child-c", function(result) {
            this.assert.equal(typeof result, "object");
            this.assert.equal(result.status, 0);
            this.assert.equal(result.value.x, ((desktop.width - 100) / 2) + 100);
            this.assert.equal(result.value.y, 0);
        });

        client.end();
    },

    "Desktop: Should see child-c-1 of the child-c container 100px height"(client) {
        client
            .url("http://localhost:8080/examples/layout/child-fixed.html")
            .resizeWindow(desktop.width, desktop.height)
            .waitForElementVisible(".main-container");

        client.getElementSize(".child-c-1", function(result) {
            this.assert.equal(typeof result, "object");
            this.assert.equal(result.status, 0);
            this.assert.equal(result.value.width, 100);
            this.assert.equal(result.value.height, 100);
        });

        client.getLocation(".child-c-1", function(result) {
            this.assert.equal(typeof result, "object");
            this.assert.equal(result.status, 0);
            this.assert.equal(result.value.x, ((desktop.width - 100) / 2) + 100);
            this.assert.equal(result.value.y, 0);
        });

        client.end();
    },

    "Desktop: Should see child-c-2 at the middle cell of right"(client) {
        client
            .url("http://localhost:8080/examples/layout/child-fixed.html")
            .resizeWindow(desktop.width, desktop.height)
            .waitForElementVisible(".main-container");

        client.getElementSize(".child-c-2", function(result) {
            this.assert.equal(typeof result, "object");
            this.assert.equal(result.status, 0);
            this.assert.equal(result.value.width, (desktop.width - 100) / 2);
            this.assert.equal(result.value.height, (mainContainerHeight - 100) / 2);
        });

        client.getLocation(".child-c-2", function(result) {
            this.assert.equal(typeof result, "object");
            this.assert.equal(result.status, 0);
            this.assert.equal(result.value.x, ((desktop.width - 100) / 2) + 100);
            this.assert.equal(result.value.y, 100);
        });

        client.end();
    },

    "Desktop: Should see child-c-3 at the bottom cell of right"(client) {
        client
            .url("http://localhost:8080/examples/layout/child-fixed.html")
            .resizeWindow(desktop.width, desktop.height)
            .waitForElementVisible(".main-container");

        client.getElementSize(".child-c-3", function(result) {
            this.assert.equal(typeof result, "object");
            this.assert.equal(result.status, 0);
            this.assert.equal(result.value.width, (desktop.width - 100) / 2);
            this.assert.equal(result.value.height, (mainContainerHeight - 100) / 2);
        });

        client.getLocation(".child-c-3", function(result) {
            this.assert.equal(typeof result, "object");
            this.assert.equal(result.status, 0);
            this.assert.equal(result.value.x, ((desktop.width - 100) / 2) + 100);
            this.assert.equal(result.value.y, ((mainContainerHeight - 100) / 2) + 100);
        });

        client.end();
    },

    "Big Screen: Should see child-a at top 100px"(client) {
        client
            .url("http://localhost:8080/examples/layout/child-fixed.html")
            .resizeWindow(bigScreen.width, bigScreen.height)
            .waitForElementVisible(".main-container");

        // First set the window height
        client.getElementSize(".main-container", function(result) {
            mainContainerHeight = result.value.height;
        });

        client.getElementSize(".child-a", function(result) {
            this.assert.equal(typeof result, "object");
            this.assert.equal(result.status, 0);
            this.assert.equal(result.value.width, 100);
            this.assert.equal(result.value.height, 100);
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
            .url("http://localhost:8080/examples/layout/child-fixed.html")
            .resizeWindow(bigScreen.width, bigScreen.height)
            .waitForElementVisible(".main-container");

        client.getElementSize(".child-b", function(result) {
            this.assert.equal(typeof result, "object");
            this.assert.equal(result.status, 0);
            this.assert.equal(result.value.width, bigScreen.width);
            this.assert.equal(result.value.height, (mainContainerHeight - 100) / 2);
        });

        client.getLocation(".child-b", function(result) {
            this.assert.equal(typeof result, "object");
            this.assert.equal(result.status, 0);
            this.assert.equal(result.value.x, 0);
            this.assert.equal(result.value.y, 100);
        });

        client.end();
    },

    "Big Screen: Should see child-c split into three cells"(client) {
        client
            .url("http://localhost:8080/examples/layout/child-fixed.html")
            .resizeWindow(bigScreen.width, bigScreen.height)
            .waitForElementVisible(".main-container");

        client.getElementSize(".child-c", function(result) {
            this.assert.equal(typeof result, "object");
            this.assert.equal(result.status, 0);
            this.assert.equal(result.value.width, bigScreen.width);
            this.assert.equal(result.value.height, (mainContainerHeight - 100) / 2);
        });

        client.getLocation(".child-c", function(result) {
            this.assert.equal(typeof result, "object");
            this.assert.equal(result.status, 0);
            this.assert.equal(result.value.x, 0);
            this.assert.equal(result.value.y, ((mainContainerHeight - 100) / 2) + 100);
        });

        client.end();
    },

    "Big Screen: Should see child-c-1 of the child-c container 100px"(client) {
        client
            .url("http://localhost:8080/examples/layout/child-fixed.html")
            .resizeWindow(bigScreen.width, bigScreen.height)
            .waitForElementVisible(".main-container");

        client.getElementSize(".child-c-1", function(result) {
            this.assert.equal(typeof result, "object");
            this.assert.equal(result.status, 0);
            this.assert.equal(result.value.width, 100);
            this.assert.equal(result.value.height, 100);
        });

        client.getLocation(".child-c-1", function(result) {
            this.assert.equal(typeof result, "object");
            this.assert.equal(result.status, 0);
            this.assert.equal(result.value.x, 0);
            this.assert.equal(result.value.y, ((mainContainerHeight - 100) / 2) + 100);
        });

        client.end();
    },

    "Big Screen: Should see child-c-2 at the middle cell of bottom"(client) {
        client
            .url("http://localhost:8080/examples/layout/child-fixed.html")
            .resizeWindow(bigScreen.width, bigScreen.height)
            .waitForElementVisible(".main-container");

        client.getElementSize(".child-c-2", function(result) {
            this.assert.equal(typeof result, "object");
            this.assert.equal(result.status, 0);
            this.assert.equal(result.value.width, (bigScreen.width - 100) / 2);
            this.assert.equal(result.value.height, (mainContainerHeight - 100) / 2);
        });

        client.getLocation(".child-c-2", function(result) {
            this.assert.equal(typeof result, "object");
            this.assert.equal(result.status, 0);
            this.assert.equal(result.value.x, 100);
            this.assert.equal(result.value.y, ((mainContainerHeight - 100) / 2) + 100);
        });

        client.end();
    },

    "Big Screen: Should see child-c-3 at the right cell of bottom"(client) {
        client
            .url("http://localhost:8080/examples/layout/child-fixed.html")
            .resizeWindow(bigScreen.width, bigScreen.height)
            .waitForElementVisible(".main-container");

        client.getElementSize(".child-c-3", function(result) {
            this.assert.equal(typeof result, "object");
            this.assert.equal(result.status, 0);
            this.assert.equal(result.value.width, (bigScreen.width - 100) / 2);
            this.assert.equal(result.value.height, (mainContainerHeight - 100) / 2);
        });

        client.getLocation(".child-c-3", function(result) {
            this.assert.equal(typeof result, "object");
            this.assert.equal(result.status, 0);
            this.assert.equal(result.value.x, ((bigScreen.width - 100) / 2) + 100);
            this.assert.equal(result.value.y, ((mainContainerHeight - 100) / 2) + 100);
        });

        client.end();
    },
};

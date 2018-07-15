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

        client.getElementSize(".child-a", function(result) {
            this.assert.equal(typeof result, "object");
            this.assert.equal(result.status, 0);
            this.assert.equal(result.value.width, 400);
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
            .url("http://localhost:8080/examples/layout/container.html")
            .resizeWindow(mobile.width, mobile.height)
            .waitForElementVisible(".main-container");

        client.getElementSize(".child-b", function(result) {
            this.assert.equal(typeof result, "object");
            this.assert.equal(result.status, 0);
            this.assert.equal(result.value.width, 400);
            this.assert.equal(result.value.height, 100);
        });

        client.getLocation(".child-b", function(result) {
            this.assert.equal(typeof result, "object");
            this.assert.equal(result.status, 0);
            this.assert.equal(result.value.x, 0);
            this.assert.equal(result.value.y, 100);
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
            this.assert.equal(result.value.width, 400);
            this.assert.equal(result.value.height, 200);
        });

        client.getLocation(".child-c", function(result) {
            this.assert.equal(typeof result, "object");
            this.assert.equal(result.status, 0);
            this.assert.equal(result.value.x, 0);
            this.assert.equal(result.value.y, 200);
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
            this.assert.equal(result.value.width, 400);
            this.assert.equal(result.value.height, 100);
        });

        client.getLocation(".child-c-1", function(result) {
            this.assert.equal(typeof result, "object");
            this.assert.equal(result.status, 0);
            this.assert.equal(result.value.x, 0);
            this.assert.equal(result.value.y, 200);
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
            this.assert.equal(result.value.width, 400);
            this.assert.equal(result.value.height, 100);
        });

        client.getLocation(".child-c-2", function(result) {
            this.assert.equal(typeof result, "object");
            this.assert.equal(result.status, 0);
            this.assert.equal(result.value.x, 0);
            this.assert.equal(result.value.y, 300);
        });

        client.end();
    },

    "Tablet: Should see child-a at top"(client) {
        client
            .url("http://localhost:8080/examples/layout/container.html")
            .resizeWindow(table.width, tablet.height)
            .waitForElementVisible(".main-container");

        client.getElementSize(".child-a", function(result) {
            this.assert.equal(typeof result, "object");
            this.assert.equal(result.status, 0);
            this.assert.equal(result.value.width, 200);
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

    "Tablet: Should see child-b as the second cell in a row"(client) {
        client
            .url("http://localhost:8080/examples/layout/container.html")
            .resizeWindow(table.width, tablet.height)
            .waitForElementVisible(".main-container");

        client.getElementSize(".child-b", function(result) {
            this.assert.equal(typeof result, "object");
            this.assert.equal(result.status, 0);
            this.assert.equal(result.value.width, 200);
            this.assert.equal(result.value.height, 100);
        });

        client.getLocation(".child-b", function(result) {
            this.assert.equal(typeof result, "object");
            this.assert.equal(result.status, 0);
            this.assert.equal(result.value.x, 200);
            this.assert.equal(result.value.y, 0);
        });

        client.end();
    },

    "Tablet: Should see child-c as the third cell in the row"(client) {
        client
            .url("http://localhost:8080/examples/layout/container.html")
            .resizeWindow(table.width, tablet.height)
            .waitForElementVisible(".main-container");

        client.getElementSize(".child-c", function(result) {
            this.assert.equal(typeof result, "object");
            this.assert.equal(result.status, 0);
            this.assert.equal(result.value.width, 200);
            this.assert.equal(result.value.height, 100);
        });

        client.getLocation(".child-c", function(result) {
            this.assert.equal(typeof result, "object");
            this.assert.equal(result.status, 0);
            this.assert.equal(result.value.x, 400);
            this.assert.equal(result.value.y, 0);
        });

        client.end();
    },

    "Tablet: Should see child-c-1 same as child-c but is half (100px)"(client) {
        client
            .url("http://localhost:8080/examples/layout/container.html")
            .resizeWindow(table.width, tablet.height)
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
            this.assert.equal(result.value.x, 400);
            this.assert.equal(result.value.y, 0);
        });

        client.end();
    },

    "Tablet: Should see child-c-2 as the last cell on the right"(client) {
        client
            .url("http://localhost:8080/examples/layout/container.html")
            .resizeWindow(table.width, tablet.height)
            .waitForElementVisible(".main-container");

        client.getElementSize(".child-c-2", function(result) {
            this.assert.equal(typeof result, "object");
            this.assert.equal(result.status, 0);
            this.assert.equal(result.value.width, 100);
            this.assert.equal(result.value.height, 100);
        });

        client.getLocation(".child-c-2", function(result) {
            this.assert.equal(typeof result, "object");
            this.assert.equal(result.status, 0);
            this.assert.equal(result.value.x, 500);
            this.assert.equal(result.value.y, 0);
        });

        client.end();
    },

    "Desktop: Should see child-a at top"(client) {
        client
            .url("http://localhost:8080/examples/layout/container.html")
            .resizeWindow(desktop.width, desktop.height)
            .waitForElementVisible(".main-container");

        client.getElementSize(".child-a", function(result) {
            this.assert.equal(typeof result, "object");
            this.assert.equal(result.status, 0);
            this.assert.equal(result.value.width, 1200);
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
            .url("http://localhost:8080/examples/layout/container.html")
            .resizeWindow(desktop.width, desktop.height)
            .waitForElementVisible(".main-container");

        client.getElementSize(".child-b", function(result) {
            this.assert.equal(typeof result, "object");
            this.assert.equal(result.status, 0);
            this.assert.equal(result.value.width, 1200);
            this.assert.equal(result.value.height, 100);
        });

        client.getLocation(".child-b", function(result) {
            this.assert.equal(typeof result, "object");
            this.assert.equal(result.status, 0);
            this.assert.equal(result.value.x, 0);
            this.assert.equal(result.value.y, 100);
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
            this.assert.equal(result.value.width, 1200);
            this.assert.equal(result.value.height, 200);
        });

        client.getLocation(".child-c", function(result) {
            this.assert.equal(typeof result, "object");
            this.assert.equal(result.status, 0);
            this.assert.equal(result.value.x, 0);
            this.assert.equal(result.value.y, 200);
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
            this.assert.equal(result.value.width, 1200);
            this.assert.equal(result.value.height, 100);
        });

        client.getLocation(".child-c-1", function(result) {
            this.assert.equal(typeof result, "object");
            this.assert.equal(result.status, 0);
            this.assert.equal(result.value.x, 0);
            this.assert.equal(result.value.y, 200);
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
            this.assert.equal(result.value.width, 1200);
            this.assert.equal(result.value.height, 100);
        });

        client.getLocation(".child-c-2", function(result) {
            this.assert.equal(typeof result, "object");
            this.assert.equal(result.status, 0);
            this.assert.equal(result.value.x, 0);
            this.assert.equal(result.value.y, 300);
        });

        client.end();
    },

    "Big Screen: Should see child-a at top"(client) {
        client
            .url("http://localhost:8080/examples/layout/container.html")
            .resizeWindow(bigScreen.width, bigScreen.height)
            .waitForElementVisible(".main-container");

        client.getElementSize(".child-a", function(result) {
            this.assert.equal(typeof result, "object");
            this.assert.equal(result.status, 0);
            this.assert.equal(result.value.width, 600);
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

    "Big Screen: Should see child-b as the second cell in a row"(client) {
        client
            .url("http://localhost:8080/examples/layout/container.html")
            .resizeWindow(bigScreen.width, bigScreen.height)
            .waitForElementVisible(".main-container");

        client.getElementSize(".child-b", function(result) {
            this.assert.equal(typeof result, "object");
            this.assert.equal(result.status, 0);
            this.assert.equal(result.value.width, 600);
            this.assert.equal(result.value.height, 100);
        });

        client.getLocation(".child-b", function(result) {
            this.assert.equal(typeof result, "object");
            this.assert.equal(result.status, 0);
            this.assert.equal(result.value.x, 600);
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
            this.assert.equal(result.value.width, 600);
            this.assert.equal(result.value.height, 100);
        });

        client.getLocation(".child-c", function(result) {
            this.assert.equal(typeof result, "object");
            this.assert.equal(result.status, 0);
            this.assert.equal(result.value.x, 1200);
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
            this.assert.equal(result.value.width, 300);
            this.assert.equal(result.value.height, 100);
        });

        client.getLocation(".child-c-1", function(result) {
            this.assert.equal(typeof result, "object");
            this.assert.equal(result.status, 0);
            this.assert.equal(result.value.x, 1200);
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
            this.assert.equal(result.value.width, 300);
            this.assert.equal(result.value.height, 100);
        });

        client.getLocation(".child-c-2", function(result) {
            this.assert.equal(typeof result, "object");
            this.assert.equal(result.status, 0);
            this.assert.equal(result.value.x, 1500);
            this.assert.equal(result.value.y, 0);
        });

        client.end();
    }
};

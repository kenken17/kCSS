import { mobile, tablet, desktop, bigScreen } from "../breakpoints";

let mainContainerHeight;

module.exports = {
    tags: ["child-full"],
    "Should have all the containers and children"(client) {
        client
            .url("http://localhost:8080/examples/layout/child-full.html")
            .waitForElementVisible(".main-container");

        client.expect.element(".child-a").to.be.present;
        client.expect.element(".child-b").to.be.present;
        client.expect.element(".child-c").to.be.present;
        client.expect.element(".container-child-c").to.be.present;
        client.expect.element(".child-c-1").to.be.present;
        client.expect.element(".child-c-2").to.be.present;
        client.expect.element(".child-c-3").to.be.present;
        client.expect.element(".container-child-c-3").to.be.present;
        client.expect.element(".child-c-3-1").to.be.present;
        client.expect.element(".child-c-3-2").to.be.present;
        client.expect.element(".child-c-3-3").to.be.present;

        client.end();
    },

    "Mobile: Should see child-a at left"(client) {
        client
            .url("http://localhost:8080/examples/layout/child-full.html")
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
            .url("http://localhost:8080/examples/layout/child-full.html")
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
            this.assert.equal(result.value.x, mobile.width / 4);
            this.assert.equal(result.value.y, 0);
        });

        client.end();
    },

    "Mobile: Should see child-c split into three cells"(client) {
        client
            .url("http://localhost:8080/examples/layout/child-full.html")
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
            this.assert.equal(result.value.x, mobile.width / 2);
            this.assert.equal(result.value.y, 0);
        });

        client.end();
    },

    "Mobile: Should see child-c-1 of the child-c container at top"(client) {
        client
            .url("http://localhost:8080/examples/layout/child-full.html")
            .resizeWindow(mobile.width, mobile.height)
            .waitForElementVisible(".main-container");

        client.getElementSize(".child-c-1", function(result) {
            this.assert.equal(typeof result, "object");
            this.assert.equal(result.status, 0);
            this.assert.equal(result.value.width, mobile.width / 2);

            // Looks like calc is not as accurate, just to cater the 0.5px off..
            this.assert.equal(result.value.height, Math.ceil(mainContainerHeight / 4));
        });

        client.getLocation(".child-c-1", function(result) {
            this.assert.equal(typeof result, "object");
            this.assert.equal(result.status, 0);
            this.assert.equal(result.value.x, mobile.width / 2);
            this.assert.equal(result.value.y, 0);
        });

        client.end();
    },

    "Mobile: Should see child-c-2 at the middle cell of right"(client) {
        client
            .url("http://localhost:8080/examples/layout/child-full.html")
            .resizeWindow(mobile.width, mobile.height)
            .waitForElementVisible(".main-container");

        client.getElementSize(".child-c-2", function(result) {
            this.assert.equal(typeof result, "object");
            this.assert.equal(result.status, 0);
            this.assert.equal(result.value.width, mobile.width / 2);

            // Looks like calc is not as accurate, just to cater the 0.5px off..
            this.assert.equal(result.value.height, Math.floor(mainContainerHeight / 4));
        });

        client.getLocation(".child-c-2", function(result) {
            this.assert.equal(typeof result, "object");
            this.assert.equal(result.status, 0);
            this.assert.equal(result.value.x, mobile.width / 2);
            this.assert.equal(result.value.y, mainContainerHeight / 4);
        });

        client.end();
    },

    "Mobile: Should see child-c-3 at the bottom cell of right and split into three cells"(client) {
        client
            .url("http://localhost:8080/examples/layout/child-full.html")
            .resizeWindow(mobile.width, mobile.height)
            .waitForElementVisible(".main-container");

        client.getElementSize(".child-c-3", function(result) {
            this.assert.equal(typeof result, "object");
            this.assert.equal(result.status, 0);
            this.assert.equal(result.value.width, mobile.width / 2);
            this.assert.equal(result.value.height, mainContainerHeight / 2);
        });

        client.getLocation(".child-c-3", function(result) {
            this.assert.equal(typeof result, "object");
            this.assert.equal(result.status, 0);
            this.assert.equal(result.value.x, mobile.width / 2);
            this.assert.equal(result.value.y, mainContainerHeight / 2);
        });

        client.end();
    },

    "Mobile: Should see child-c-3-1 of the child-c-3 container at middle left"(client) {
        client
            .url("http://localhost:8080/examples/layout/child-full.html")
            .resizeWindow(mobile.width, mobile.height)
            .waitForElementVisible(".main-container");

        client.getElementSize(".child-c-3-1", function(result) {
            this.assert.equal(typeof result, "object");
            this.assert.equal(result.status, 0);
            this.assert.equal(result.value.width, (mobile.width / 2) / 4);
            this.assert.equal(result.value.height, mainContainerHeight / 2);
        });

        client.getLocation(".child-c-3-1", function(result) {
            this.assert.equal(typeof result, "object");
            this.assert.equal(result.status, 0);
            this.assert.equal(result.value.x, mobile.width / 2);
            this.assert.equal(result.value.y, mainContainerHeight / 2);
        });

        client.end();
    },

    "Mobile: Should see child-c-3-2 at the middle cell at bottom"(client) {
        client
            .url("http://localhost:8080/examples/layout/child-full.html")
            .resizeWindow(mobile.width, mobile.height)
            .waitForElementVisible(".main-container");

        client.getElementSize(".child-c-3-2", function(result) {
            this.assert.equal(typeof result, "object");
            this.assert.equal(result.status, 0);
            this.assert.equal(result.value.width, (mobile.width / 2) / 4);
            this.assert.equal(result.value.height, mainContainerHeight / 2);
        });

        client.getLocation(".child-c-3-2", function(result) {
            this.assert.equal(typeof result, "object");
            this.assert.equal(result.status, 0);
            this.assert.equal(result.value.x, (mobile.width / 8) * 5);
            this.assert.equal(result.value.y, mainContainerHeight / 2);
        });

        client.end();
    },

    "Mobile: Should see child-c-3-3 at the right cell at bottom"(client) {
        client
            .url("http://localhost:8080/examples/layout/child-full.html")
            .resizeWindow(mobile.width, mobile.height)
            .waitForElementVisible(".main-container");

        client.getElementSize(".child-c-3-3", function(result) {
            this.assert.equal(typeof result, "object");
            this.assert.equal(result.status, 0);
            this.assert.equal(result.value.width, mobile.width / 4);
            this.assert.equal(result.value.height, mainContainerHeight / 2);
        });

        client.getLocation(".child-c-3-3", function(result) {
            this.assert.equal(typeof result, "object");
            this.assert.equal(result.status, 0);
            this.assert.equal(result.value.x, (mobile.width / 4) * 3);
            this.assert.equal(result.value.y, mainContainerHeight / 2);
        });

        client.end();
    },

    "Tablet: Should see child-a at top"(client) {
        client
            .url("http://localhost:8080/examples/layout/child-full.html")
            .resizeWindow(tablet.width, tablet.height)
            .waitForElementVisible(".main-container");

        // First set the window height
        client.getElementSize(".main-container", function(result) {
            mainContainerHeight = result.value.height;
        });

        client.getElementSize(".child-a", function(result) {
            this.assert.equal(typeof result, "object");
            this.assert.equal(result.status, 0);
            this.assert.equal(result.value.width, tablet.width);

            // Looks like calc is not as accurate, just to cater the 0.5px off..
            this.assert.equal(result.value.height, Math.ceil(mainContainerHeight / 4));
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
            .url("http://localhost:8080/examples/layout/child-full.html")
            .resizeWindow(tablet.width, tablet.height)
            .waitForElementVisible(".main-container");

        client.getElementSize(".child-b", function(result) {
            this.assert.equal(typeof result, "object");
            this.assert.equal(result.status, 0);
            this.assert.equal(result.value.width, tablet.width);

            // Looks like calc is not as accurate, just to cater the 0.5px off..
            this.assert.equal(result.value.height, Math.floor(mainContainerHeight / 4));
        });

        client.getLocation(".child-b", function(result) {
            this.assert.equal(typeof result, "object");
            this.assert.equal(result.status, 0);
            this.assert.equal(result.value.x, 0);
            this.assert.equal(result.value.y, mainContainerHeight / 4);
        });

        client.end();
    },

    "Tablet: Should see child-c split into three cells"(client) {
        client
            .url("http://localhost:8080/examples/layout/child-full.html")
            .resizeWindow(tablet.width, tablet.height)
            .waitForElementVisible(".main-container");

        client.getElementSize(".child-c", function(result) {
            this.assert.equal(typeof result, "object");
            this.assert.equal(result.status, 0);
            this.assert.equal(result.value.width, tablet.width);
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

    "Tablet: Should see child-c-1 of the child-c container at left"(client) {
        client
            .url("http://localhost:8080/examples/layout/child-full.html")
            .resizeWindow(tablet.width, tablet.height)
            .waitForElementVisible(".main-container");

        client.getElementSize(".child-c-1", function(result) {
            this.assert.equal(typeof result, "object");
            this.assert.equal(result.status, 0);
            this.assert.equal(result.value.width, tablet.width / 4);
            this.assert.equal(result.value.height, mainContainerHeight / 2);
        });

        client.getLocation(".child-c-1", function(result) {
            this.assert.equal(typeof result, "object");
            this.assert.equal(result.status, 0);
            this.assert.equal(result.value.x, 0);
            this.assert.equal(result.value.y, mainContainerHeight / 2);
        });

        client.end();
    },

    "Tablet: Should see child-c-2 at the middle cell of bottom"(client) {
        client
            .url("http://localhost:8080/examples/layout/child-full.html")
            .resizeWindow(tablet.width, tablet.height)
            .waitForElementVisible(".main-container");

        client.getElementSize(".child-c-2", function(result) {
            this.assert.equal(typeof result, "object");
            this.assert.equal(result.status, 0);
            this.assert.equal(result.value.width, tablet.width / 4);
            this.assert.equal(result.value.height, mainContainerHeight / 2);
        });

        client.getLocation(".child-c-2", function(result) {
            this.assert.equal(typeof result, "object");
            this.assert.equal(result.status, 0);
            this.assert.equal(result.value.x, tablet.width / 4);
            this.assert.equal(result.value.y, mainContainerHeight / 2);
        });

        client.end();
    },

    "Tablet: Should see child-c-3 at the right cell of bottom and split into three cells"(client) {
        client
            .url("http://localhost:8080/examples/layout/child-full.html")
            .resizeWindow(tablet.width, tablet.height)
            .waitForElementVisible(".main-container");

        client.getElementSize(".child-c-3", function(result) {
            this.assert.equal(typeof result, "object");
            this.assert.equal(result.status, 0);
            this.assert.equal(result.value.width, tablet.width / 2);
            this.assert.equal(result.value.height, mainContainerHeight / 2);
        });

        client.getLocation(".child-c-3", function(result) {
            this.assert.equal(typeof result, "object");
            this.assert.equal(result.status, 0);
            this.assert.equal(result.value.x, tablet.width / 2);
            this.assert.equal(result.value.y, mainContainerHeight / 2);
        });

        client.end();
    },

    "Tablet: Should see child-c-3-1 of the child-c-3 container at middle"(client) {
        client
            .url("http://localhost:8080/examples/layout/child-full.html")
            .resizeWindow(tablet.width, tablet.height)
            .waitForElementVisible(".main-container");

        client.getElementSize(".child-c-3-1", function(result) {
            this.assert.equal(typeof result, "object");
            this.assert.equal(result.status, 0);
            this.assert.equal(result.value.width, tablet.width / 2);

            // Looks like calc is not as accurate, just to cater the 0.5px off..
            this.assert.equal(result.value.height, Math.ceil(mainContainerHeight / 8));
        });

        client.getLocation(".child-c-3-1", function(result) {
            this.assert.equal(typeof result, "object");
            this.assert.equal(result.status, 0);
            this.assert.equal(result.value.x, tablet.width / 2);
            this.assert.equal(result.value.y, mainContainerHeight / 2);
        });

        client.end();
    },

    "Tablet: Should see child-c-3-2 at the middle cell at bottom right"(client) {
        client
            .url("http://localhost:8080/examples/layout/child-full.html")
            .resizeWindow(tablet.width, tablet.height)
            .waitForElementVisible(".main-container");

        client.getElementSize(".child-c-3-2", function(result) {
            this.assert.equal(typeof result, "object");
            this.assert.equal(result.status, 0);
            this.assert.equal(result.value.width, tablet.width / 2);

            // Looks like calc is not as accurate, just to cater the 0.5px off..
            this.assert.equal(result.value.height, Math.ceil(mainContainerHeight / 8));
        });

        client.getLocation(".child-c-3-2", function(result) {
            this.assert.equal(typeof result, "object");
            this.assert.equal(result.status, 0);
            this.assert.equal(result.value.x, tablet.width / 2);
            this.assert.equal(result.value.y, (mainContainerHeight / 8) * 5);
        });

        client.end();
    },

    "Tablet: Should see child-c-3-3 at the bottom cell at bottom right"(client) {
        client
            .url("http://localhost:8080/examples/layout/child-full.html")
            .resizeWindow(tablet.width, tablet.height)
            .waitForElementVisible(".main-container");

        client.getElementSize(".child-c-3-3", function(result) {
            this.assert.equal(typeof result, "object");
            this.assert.equal(result.status, 0);
            this.assert.equal(result.value.width, tablet.width / 2);

            // Looks like calc is not as accurate, just to cater the 0.5px off..
            this.assert.equal(result.value.height, Math.floor(mainContainerHeight / 4));
        });

        client.getLocation(".child-c-3-3", function(result) {
            this.assert.equal(typeof result, "object");
            this.assert.equal(result.status, 0);
            this.assert.equal(result.value.x, tablet.width / 2);
            this.assert.equal(result.value.y, (mainContainerHeight / 4) * 3);
        });

        client.end();
    },

    "Desktop: Should see child-a at left"(client) {
        client
            .url("http://localhost:8080/examples/layout/child-full.html")
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
            .url("http://localhost:8080/examples/layout/child-full.html")
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
            this.assert.equal(result.value.x, desktop.width / 4);
            this.assert.equal(result.value.y, 0);
        });

        client.end();
    },

    "Desktop: Should see child-c split into three cells"(client) {
        client
            .url("http://localhost:8080/examples/layout/child-full.html")
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
            this.assert.equal(result.value.x, desktop.width / 2);
            this.assert.equal(result.value.y, 0);
        });

        client.end();
    },

    "Desktop: Should see child-c-1 of the child-c container at top"(client) {
        client
            .url("http://localhost:8080/examples/layout/child-full.html")
            .resizeWindow(desktop.width, desktop.height)
            .waitForElementVisible(".main-container");

        client.getElementSize(".child-c-1", function(result) {
            this.assert.equal(typeof result, "object");
            this.assert.equal(result.status, 0);
            this.assert.equal(result.value.width, desktop.width / 2);

            // Looks like calc is not as accurate, just to cater the 0.5px off..
            this.assert.equal(result.value.height, Math.ceil(mainContainerHeight / 4));
        });

        client.getLocation(".child-c-1", function(result) {
            this.assert.equal(typeof result, "object");
            this.assert.equal(result.status, 0);
            this.assert.equal(result.value.x, desktop.width / 2);
            this.assert.equal(result.value.y, 0);
        });

        client.end();
    },

    "Desktop: Should see child-c-2 at the middle cell of right"(client) {
        client
            .url("http://localhost:8080/examples/layout/child-full.html")
            .resizeWindow(desktop.width, desktop.height)
            .waitForElementVisible(".main-container");

        client.getElementSize(".child-c-2", function(result) {
            this.assert.equal(typeof result, "object");
            this.assert.equal(result.status, 0);
            this.assert.equal(result.value.width, desktop.width / 2);

            // Looks like calc is not as accurate, just to cater the 0.5px off..
            this.assert.equal(result.value.height, Math.floor(mainContainerHeight / 4));
        });

        client.getLocation(".child-c-2", function(result) {
            this.assert.equal(typeof result, "object");
            this.assert.equal(result.status, 0);
            this.assert.equal(result.value.x, desktop.width / 2);
            this.assert.equal(result.value.y, mainContainerHeight / 4);
        });

        client.end();
    },

    "Desktop: Should see child-c-3 at the bottom cell of right and split into three cells"(client) {
        client
            .url("http://localhost:8080/examples/layout/child-full.html")
            .resizeWindow(desktop.width, desktop.height)
            .waitForElementVisible(".main-container");

        client.getElementSize(".child-c-3", function(result) {
            this.assert.equal(typeof result, "object");
            this.assert.equal(result.status, 0);
            this.assert.equal(result.value.width, desktop.width / 2);
            this.assert.equal(result.value.height, mainContainerHeight / 2);
        });

        client.getLocation(".child-c-3", function(result) {
            this.assert.equal(typeof result, "object");
            this.assert.equal(result.status, 0);
            this.assert.equal(result.value.x, desktop.width / 2);
            this.assert.equal(result.value.y, mainContainerHeight / 2);
        });

        client.end();
    },

    "Desktop: Should see child-c-3-1 of the child-c-3 container at middle left"(client) {
        client
            .url("http://localhost:8080/examples/layout/child-full.html")
            .resizeWindow(desktop.width, desktop.height)
            .waitForElementVisible(".main-container");

        client.getElementSize(".child-c-3-1", function(result) {
            this.assert.equal(typeof result, "object");
            this.assert.equal(result.status, 0);
            this.assert.equal(result.value.width, (desktop.width / 2) / 4);
            this.assert.equal(result.value.height, mainContainerHeight / 2);
        });

        client.getLocation(".child-c-3-1", function(result) {
            this.assert.equal(typeof result, "object");
            this.assert.equal(result.status, 0);
            this.assert.equal(result.value.x, desktop.width / 2);
            this.assert.equal(result.value.y, mainContainerHeight / 2);
        });

        client.end();
    },

    "Desktop: Should see child-c-3-2 at the middle cell at bottom"(client) {
        client
            .url("http://localhost:8080/examples/layout/child-full.html")
            .resizeWindow(desktop.width, desktop.height)
            .waitForElementVisible(".main-container");

        client.getElementSize(".child-c-3-2", function(result) {
            this.assert.equal(typeof result, "object");
            this.assert.equal(result.status, 0);
            this.assert.equal(result.value.width, (desktop.width / 2) / 4);
            this.assert.equal(result.value.height, mainContainerHeight / 2);
        });

        client.getLocation(".child-c-3-2", function(result) {
            this.assert.equal(typeof result, "object");
            this.assert.equal(result.status, 0);
            this.assert.equal(result.value.x, (desktop.width / 8) * 5);
            this.assert.equal(result.value.y, mainContainerHeight / 2);
        });

        client.end();
    },

    "Desktop: Should see child-c-3-3 at the right cell at bottom"(client) {
        client
            .url("http://localhost:8080/examples/layout/child-full.html")
            .resizeWindow(desktop.width, desktop.height)
            .waitForElementVisible(".main-container");

        client.getElementSize(".child-c-3-3", function(result) {
            this.assert.equal(typeof result, "object");
            this.assert.equal(result.status, 0);
            this.assert.equal(result.value.width, desktop.width / 4);
            this.assert.equal(result.value.height, mainContainerHeight / 2);
        });

        client.getLocation(".child-c-3-3", function(result) {
            this.assert.equal(typeof result, "object");
            this.assert.equal(result.status, 0);
            this.assert.equal(result.value.x, (desktop.width / 4) * 3);
            this.assert.equal(result.value.y, mainContainerHeight / 2);
        });

        client.end();
    },

    "Big Screen: Should see child-a at top"(client) {
        client
            .url("http://localhost:8080/examples/layout/child-full.html")
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
            this.assert.equal(result.value.height, Math.ceil(mainContainerHeight / 4));
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
            .url("http://localhost:8080/examples/layout/child-full.html")
            .resizeWindow(bigScreen.width, bigScreen.height)
            .waitForElementVisible(".main-container");

        client.getElementSize(".child-b", function(result) {
            this.assert.equal(typeof result, "object");
            this.assert.equal(result.status, 0);
            this.assert.equal(result.value.width, bigScreen.width);

            // Looks like calc is not as accurate, just to cater the 0.5px off..
            this.assert.equal(result.value.height, Math.floor(mainContainerHeight / 4));
        });

        client.getLocation(".child-b", function(result) {
            this.assert.equal(typeof result, "object");
            this.assert.equal(result.status, 0);
            this.assert.equal(result.value.x, 0);
            this.assert.equal(result.value.y, mainContainerHeight / 4);
        });

        client.end();
    },

    "Big Screen: Should see child-c split into three cells"(client) {
        client
            .url("http://localhost:8080/examples/layout/child-full.html")
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
    },

    "Big Screen: Should see child-c-1 of the child-c container at left"(client) {
        client
            .url("http://localhost:8080/examples/layout/child-full.html")
            .resizeWindow(bigScreen.width, bigScreen.height)
            .waitForElementVisible(".main-container");

        client.getElementSize(".child-c-1", function(result) {
            this.assert.equal(typeof result, "object");
            this.assert.equal(result.status, 0);
            this.assert.equal(result.value.width, bigScreen.width / 4);
            this.assert.equal(result.value.height, mainContainerHeight / 2);
        });

        client.getLocation(".child-c-1", function(result) {
            this.assert.equal(typeof result, "object");
            this.assert.equal(result.status, 0);
            this.assert.equal(result.value.x, 0);
            this.assert.equal(result.value.y, mainContainerHeight / 2);
        });

        client.end();
    },

    "Big Screen: Should see child-c-2 at the middle cell of bottom"(client) {
        client
            .url("http://localhost:8080/examples/layout/child-full.html")
            .resizeWindow(bigScreen.width, bigScreen.height)
            .waitForElementVisible(".main-container");

        client.getElementSize(".child-c-2", function(result) {
            this.assert.equal(typeof result, "object");
            this.assert.equal(result.status, 0);
            this.assert.equal(result.value.width, bigScreen.width / 4);
            this.assert.equal(result.value.height, mainContainerHeight / 2);
        });

        client.getLocation(".child-c-2", function(result) {
            this.assert.equal(typeof result, "object");
            this.assert.equal(result.status, 0);
            this.assert.equal(result.value.x, bigScreen.width / 4);
            this.assert.equal(result.value.y, mainContainerHeight / 2);
        });

        client.end();
    },

    "Big Screen: Should see child-c-3 at the right cell of bottom and split into three cells"(client) {
        client
            .url("http://localhost:8080/examples/layout/child-full.html")
            .resizeWindow(bigScreen.width, bigScreen.height)
            .waitForElementVisible(".main-container");

        client.getElementSize(".child-c-3", function(result) {
            this.assert.equal(typeof result, "object");
            this.assert.equal(result.status, 0);
            this.assert.equal(result.value.width, bigScreen.width / 2);
            this.assert.equal(result.value.height, mainContainerHeight / 2);
        });

        client.getLocation(".child-c-3", function(result) {
            this.assert.equal(typeof result, "object");
            this.assert.equal(result.status, 0);
            this.assert.equal(result.value.x, bigScreen.width / 2);
            this.assert.equal(result.value.y, mainContainerHeight / 2);
        });

        client.end();
    },

    "Big Screen: Should see child-c-3-1 of the child-c-3 container at middle"(client) {
        client
            .url("http://localhost:8080/examples/layout/child-full.html")
            .resizeWindow(bigScreen.width, bigScreen.height)
            .waitForElementVisible(".main-container");

        client.getElementSize(".child-c-3-1", function(result) {
            this.assert.equal(typeof result, "object");
            this.assert.equal(result.status, 0);
            this.assert.equal(result.value.width, bigScreen.width / 2);

            // Looks like calc is not as accurate, just to cater the 0.5px off..
            this.assert.equal(result.value.height, Math.ceil(mainContainerHeight / 8));
        });

        client.getLocation(".child-c-3-1", function(result) {
            this.assert.equal(typeof result, "object");
            this.assert.equal(result.status, 0);
            this.assert.equal(result.value.x, bigScreen.width / 2);
            this.assert.equal(result.value.y, mainContainerHeight / 2);
        });

        client.end();
    },

    "Big Screen: Should see child-c-3-2 at the middle cell at bottom right"(client) {
        client
            .url("http://localhost:8080/examples/layout/child-full.html")
            .resizeWindow(bigScreen.width, bigScreen.height)
            .waitForElementVisible(".main-container");

        client.getElementSize(".child-c-3-2", function(result) {
            this.assert.equal(typeof result, "object");
            this.assert.equal(result.status, 0);
            this.assert.equal(result.value.width, bigScreen.width / 2);

            // Looks like calc is not as accurate, just to cater the 0.5px off..
            this.assert.equal(result.value.height, Math.ceil(mainContainerHeight / 8));
        });

        client.getLocation(".child-c-3-2", function(result) {
            this.assert.equal(typeof result, "object");
            this.assert.equal(result.status, 0);
            this.assert.equal(result.value.x, bigScreen.width / 2);
            this.assert.equal(result.value.y, (mainContainerHeight / 8) * 5);
        });

        client.end();
    },

    "Big Screen: Should see child-c-3-3 at the bottom cell at bottom right"(client) {
        client
            .url("http://localhost:8080/examples/layout/child-full.html")
            .resizeWindow(bigScreen.width, bigScreen.height)
            .waitForElementVisible(".main-container");

        client.getElementSize(".child-c-3-3", function(result) {
            this.assert.equal(typeof result, "object");
            this.assert.equal(result.status, 0);
            this.assert.equal(result.value.width, bigScreen.width / 2);

            // Looks like calc is not as accurate, just to cater the 0.5px off..
            this.assert.equal(result.value.height, Math.floor(mainContainerHeight / 4));
        });

        client.getLocation(".child-c-3-3", function(result) {
            this.assert.equal(typeof result, "object");
            this.assert.equal(result.status, 0);
            this.assert.equal(result.value.x, bigScreen.width / 2);
            this.assert.equal(result.value.y, (mainContainerHeight / 4) * 3);
        });

        client.end();
    }
};

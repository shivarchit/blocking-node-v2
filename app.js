const http = require("http");
const Express = require("express");

const app = new Express();

app.get("/block-me", async (req, res) => {
    try {

        await blockforTwoMinutes();
        res.status(200).json({
            isActionSuccess: true
        });

    } catch (error) {
        res.status(500).json({
            code: 123
        });
    }
});

app.get("/browser", async (req, res) => {
    try {
        res.status(200).json({
            isActionSuccess: true
        });

    } catch (error) {
        res.status(500).json({
            code: 456
        });
    }
});

async function blockforTwoMinutes() {
    try {
        let currentTime = Date.now();

        /* add two minutes to current time */
        currentTime += 120000;

        /* block the eventloop for two minutes */
        while (Date.now() < currentTime) {

        }
        return;
    } catch (error) {
        throw error;
    }
}

/* create server */

let __server = http.createServer(app);
__server.listen(80);

__server.on("listening", () => {
    console.log(`Application server started at http://localhost:80`);
})

__server.on("error", (ex) => {
    console.log(`Unable to start server ${ex.toString()}`);
})
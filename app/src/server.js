const express = require("express");

const app = express();

const PORT = 3000;

// Homepage
app.get("/", (req, res) => {
    res.send("🚀 Self-Healing Infrastructure Application");
});

// Health Check
app.get("/health", (req, res) => {
    res.status(200).json({
        status: "healthy",
        message: "Application is running successfully"
    });
});

// Stress Test
app.get("/stress", (req, res) => {

    const start = Date.now();

    while (Date.now() - start < 10000) {
        Math.sqrt(Math.random());
    }

    res.json({
        status: "completed",
        message: "CPU stress test finished"
    });

});

// Crash Application
app.get("/crash", (req, res) => {

    res.send("Application is shutting down...");

    process.exit(1);

});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
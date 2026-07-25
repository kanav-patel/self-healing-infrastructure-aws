const express = require("express");

const app = express();

const PORT = 3000;

const healthRoutes = require("./routes/healthRoutes");
const stressRoutes = require("./routes/stressRoutes");
const crashRoutes = require("./routes/crashRoutes");

// Homepage
app.get("/", (req, res) => {
    res.send("🚀 Self-Healing Infrastructure Application");
});

// Register Health Routes
app.use("/health", healthRoutes);
app.use("/stress", stressRoutes);
app.use("/crash", crashRoutes);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
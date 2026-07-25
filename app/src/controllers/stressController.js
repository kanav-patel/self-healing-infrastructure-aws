const stressTest = (req, res) => {

    const start = Date.now();

    while (Date.now() - start < 10000) {
        Math.sqrt(Math.random());
    }

    res.status(200).json({
        status: "completed",
        message: "CPU stress test finished"
    });

};

module.exports = stressTest;
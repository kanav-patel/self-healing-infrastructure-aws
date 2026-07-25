const crashApplication = (req, res) => {

    res.send("Application is shutting down...");

    process.exit(1);

};

module.exports = crashApplication;
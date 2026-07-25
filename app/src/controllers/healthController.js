const healthCheck = (req, res) => {

    res.status(200).json({
        status: "healthy",
        message: "Application is running successfully"
    });

};

module.exports = healthCheck;
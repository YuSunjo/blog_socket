// pm2 start auctionTower/auctionTower.config.js --env local

module.exports = {
    apps : [{
        name: 'blog_socket',
        script: './socket.js',
        watch: true,
        env_local: {
            NODE_ENV: "local",
        },
        env_dev: {
            NODE_ENV: "dev",
        },
        env_test: {
            NODE_ENV: "test",
        },
        env_production: {
            NODE_ENV: "production",
        }
    }]
};

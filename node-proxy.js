const config = {
    ['mochibean.com']: {
        target: {
            host: 'mochibean.com',
            port: 80,
        },
        xfwd: true,
        // secure: true, // Depends on your needs, could be false.
    },
    ['jearl.io']: {
        target: {
            host: 'jearl.io',
            port: 80
        },
    }
}

module.exports = config;
module.exports = function(bundler) {
    bundler.addAssetType('wast', require.resolve('./asset.js'));
}
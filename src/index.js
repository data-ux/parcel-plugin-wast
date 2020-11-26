module.exports = function(bundler) {
    bundler.addAssetType('wast', require.resolve('./asset.js'));
    bundler.addPackager('wasm', require.resolve('./packager.js'));
}
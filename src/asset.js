const { Asset } = require('parcel-bundler');
const wabtPromise = require('wabt')();


const filename = 'module.wast';

class WastAsset extends Asset {
  constructor(name, pkg, options) {
    super(name, pkg, options);
    this.type = 'wasm';
  }


  async generate() {
    const source = this.contents;
    const wabt = await wabtPromise;

    const module = wabt.parseWat(filename, source);
    const result = module.toBinary({ write_debug_names: false });

    return {
      wasm: Buffer.from(result.buffer).toString('hex')
    }
  }
}

module.exports = WastAsset

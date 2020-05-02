
let wasm;

const heap = new Array(32).fill(undefined);

heap.push(undefined, null, true, false);

function getObject(idx) { return heap[idx]; }

let heap_next = heap.length;

function dropObject(idx) {
    if (idx < 36) return;
    heap[idx] = heap_next;
    heap_next = idx;
}

function takeObject(idx) {
    const ret = getObject(idx);
    dropObject(idx);
    return ret;
}

let cachedTextDecoder = new TextDecoder('utf-8', { ignoreBOM: true, fatal: true });

cachedTextDecoder.decode();

let cachegetUint8Memory0 = null;
function getUint8Memory0() {
    if (cachegetUint8Memory0 === null || cachegetUint8Memory0.buffer !== wasm.memory.buffer) {
        cachegetUint8Memory0 = new Uint8Array(wasm.memory.buffer);
    }
    return cachegetUint8Memory0;
}

function getStringFromWasm0(ptr, len) {
    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));
}
/**
* @param {number} start
* @param {number} end
* @returns {number}
*/
export function next_i32(start, end) {
    var ret = wasm.next_i32(start, end);
    return ret >>> 0;
}

let cachegetInt32Memory0 = null;
function getInt32Memory0() {
    if (cachegetInt32Memory0 === null || cachegetInt32Memory0.buffer !== wasm.memory.buffer) {
        cachegetInt32Memory0 = new Int32Array(wasm.memory.buffer);
    }
    return cachegetInt32Memory0;
}
/**
* @returns {string}
*/
export function generate_cnpj() {
    try {
        wasm.generate_cnpj(8);
        var r0 = getInt32Memory0()[8 / 4 + 0];
        var r1 = getInt32Memory0()[8 / 4 + 1];
        return getStringFromWasm0(r0, r1);
    } finally {
        wasm.__wbindgen_free(r0, r1);
    }
}

let WASM_VECTOR_LEN = 0;

let cachedTextEncoder = new TextEncoder('utf-8');

const encodeString = (typeof cachedTextEncoder.encodeInto === 'function'
    ? function (arg, view) {
    return cachedTextEncoder.encodeInto(arg, view);
}
    : function (arg, view) {
    const buf = cachedTextEncoder.encode(arg);
    view.set(buf);
    return {
        read: arg.length,
        written: buf.length
    };
});

function passStringToWasm0(arg, malloc, realloc) {

    if (realloc === undefined) {
        const buf = cachedTextEncoder.encode(arg);
        const ptr = malloc(buf.length);
        getUint8Memory0().subarray(ptr, ptr + buf.length).set(buf);
        WASM_VECTOR_LEN = buf.length;
        return ptr;
    }

    let len = arg.length;
    let ptr = malloc(len);

    const mem = getUint8Memory0();

    let offset = 0;

    for (; offset < len; offset++) {
        const code = arg.charCodeAt(offset);
        if (code > 0x7F) break;
        mem[ptr + offset] = code;
    }

    if (offset !== len) {
        if (offset !== 0) {
            arg = arg.slice(offset);
        }
        ptr = realloc(ptr, len, len = offset + arg.length * 3);
        const view = getUint8Memory0().subarray(ptr + offset, ptr + len);
        const ret = encodeString(arg, view);

        offset += ret.written;
    }

    WASM_VECTOR_LEN = offset;
    return ptr;
}
/**
* @param {string} branch_no
* @returns {string}
*/
export function generate_cnpj_for_branch(branch_no) {
    try {
        var ptr0 = passStringToWasm0(branch_no, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        wasm.generate_cnpj_for_branch(8, ptr0, len0);
        var r0 = getInt32Memory0()[8 / 4 + 0];
        var r1 = getInt32Memory0()[8 / 4 + 1];
        return getStringFromWasm0(r0, r1);
    } finally {
        wasm.__wbindgen_free(r0, r1);
    }
}

/**
* @param {string} cnpj
* @returns {boolean}
*/
export function cnpj_is_valid(cnpj) {
    var ptr0 = passStringToWasm0(cnpj, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len0 = WASM_VECTOR_LEN;
    var ret = wasm.cnpj_is_valid(ptr0, len0);
    return ret !== 0;
}

function _assertClass(instance, klass) {
    if (!(instance instanceof klass)) {
        throw new Error(`expected instance of ${klass.name}`);
    }
    return instance.ptr;
}
/**
* @param {NFe} nfe
*/
export function calculate_nfe_dv(nfe) {
    _assertClass(nfe, NFe);
    wasm.calculate_nfe_dv(nfe.ptr);
}

/**
* @param {NFe} nfe
* @returns {string}
*/
export function generate_nfe_key(nfe) {
    try {
        _assertClass(nfe, NFe);
        var ptr0 = nfe.ptr;
        nfe.ptr = 0;
        wasm.generate_nfe_key(8, ptr0);
        var r0 = getInt32Memory0()[8 / 4 + 0];
        var r1 = getInt32Memory0()[8 / 4 + 1];
        return getStringFromWasm0(r0, r1);
    } finally {
        wasm.__wbindgen_free(r0, r1);
    }
}

/**
* @param {string} key
* @returns {NFeKeyValidationResult}
*/
export function validate_nfe_key(key) {
    var ptr0 = passStringToWasm0(key, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len0 = WASM_VECTOR_LEN;
    var ret = wasm.validate_nfe_key(ptr0, len0);
    return NFeKeyValidationResult.__wrap(ret);
}

function addHeapObject(obj) {
    if (heap_next === heap.length) heap.push(heap.length + 1);
    const idx = heap_next;
    heap_next = heap[idx];

    heap[idx] = obj;
    return idx;
}

function handleError(e) {
    wasm.__wbindgen_exn_store(addHeapObject(e));
}

function getArrayU8FromWasm0(ptr, len) {
    return getUint8Memory0().subarray(ptr / 1, ptr / 1 + len);
}
/**
*/
export class NFe {

    static __wrap(ptr) {
        const obj = Object.create(NFe.prototype);
        obj.ptr = ptr;

        return obj;
    }

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        wasm.__wbg_nfe_free(ptr);
    }
    /**
    * @returns {number}
    */
    get uf() {
        var ret = wasm.__wbg_get_nfe_uf(this.ptr);
        return ret;
    }
    /**
    * @param {number} arg0
    */
    set uf(arg0) {
        wasm.__wbg_set_nfe_uf(this.ptr, arg0);
    }
    /**
    * @returns {number}
    */
    get model() {
        var ret = wasm.__wbg_get_nfe_model(this.ptr);
        return ret;
    }
    /**
    * @param {number} arg0
    */
    set model(arg0) {
        wasm.__wbg_set_nfe_model(this.ptr, arg0);
    }
    /**
    * @returns {number}
    */
    get serie() {
        var ret = wasm.__wbg_get_nfe_serie(this.ptr);
        return ret;
    }
    /**
    * @param {number} arg0
    */
    set serie(arg0) {
        wasm.__wbg_set_nfe_serie(this.ptr, arg0);
    }
    /**
    * @returns {number}
    */
    get nfeNumber() {
        var ret = wasm.__wbg_get_nfe_nfeNumber(this.ptr);
        return ret >>> 0;
    }
    /**
    * @param {number} arg0
    */
    set nfeNumber(arg0) {
        wasm.__wbg_set_nfe_nfeNumber(this.ptr, arg0);
    }
    /**
    * @returns {number}
    */
    get issueMode() {
        var ret = wasm.__wbg_get_nfe_issueMode(this.ptr);
        return ret;
    }
    /**
    * @param {number} arg0
    */
    set issueMode(arg0) {
        wasm.__wbg_set_nfe_issueMode(this.ptr, arg0);
    }
    /**
    * @returns {number}
    */
    get code() {
        var ret = wasm.__wbg_get_nfe_code(this.ptr);
        return ret >>> 0;
    }
    /**
    * @param {number} arg0
    */
    set code(arg0) {
        wasm.__wbg_set_nfe_code(this.ptr, arg0);
    }
    /**
    * @returns {number}
    */
    get dv() {
        var ret = wasm.__wbg_get_nfe_dv(this.ptr);
        return ret;
    }
    /**
    * @param {number} arg0
    */
    set dv(arg0) {
        wasm.__wbg_set_nfe_dv(this.ptr, arg0);
    }
    /**
    * @returns {NFe}
    */
    static new() {
        var ret = wasm.nfe_new();
        return NFe.__wrap(ret);
    }
    /**
    * @returns {string}
    */
    get yearMonth() {
        try {
            wasm.nfe_yearMonth(8, this.ptr);
            var r0 = getInt32Memory0()[8 / 4 + 0];
            var r1 = getInt32Memory0()[8 / 4 + 1];
            return getStringFromWasm0(r0, r1);
        } finally {
            wasm.__wbindgen_free(r0, r1);
        }
    }
    /**
    * @param {string} yearMonth
    */
    set yearMonth(yearMonth) {
        var ptr0 = passStringToWasm0(yearMonth, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        wasm.nfe_set_yearMonth(this.ptr, ptr0, len0);
    }
    /**
    * @returns {string}
    */
    get issuerCnpj() {
        try {
            wasm.nfe_issuerCnpj(8, this.ptr);
            var r0 = getInt32Memory0()[8 / 4 + 0];
            var r1 = getInt32Memory0()[8 / 4 + 1];
            return getStringFromWasm0(r0, r1);
        } finally {
            wasm.__wbindgen_free(r0, r1);
        }
    }
    /**
    * @param {string} issuerCnpj
    */
    set issuerCnpj(issuerCnpj) {
        var ptr0 = passStringToWasm0(issuerCnpj, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        wasm.nfe_set_issuerCnpj(this.ptr, ptr0, len0);
    }
}
/**
*/
export class NFeKeyValidationResult {

    static __wrap(ptr) {
        const obj = Object.create(NFeKeyValidationResult.prototype);
        obj.ptr = ptr;

        return obj;
    }

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        wasm.__wbg_nfekeyvalidationresult_free(ptr);
    }
    /**
    * @returns {string}
    */
    get errorMessage() {
        try {
            wasm.nfekeyvalidationresult_errorMessage(8, this.ptr);
            var r0 = getInt32Memory0()[8 / 4 + 0];
            var r1 = getInt32Memory0()[8 / 4 + 1];
            return getStringFromWasm0(r0, r1);
        } finally {
            wasm.__wbindgen_free(r0, r1);
        }
    }
    /**
    * @returns {NFe}
    */
    get nfe() {
        var ret = wasm.nfekeyvalidationresult_nfe(this.ptr);
        return NFe.__wrap(ret);
    }
    /**
    * @returns {boolean}
    */
    get isValid() {
        var ret = wasm.nfekeyvalidationresult_isValid(this.ptr);
        return ret !== 0;
    }
}

async function load(module, imports) {
    if (typeof Response === 'function' && module instanceof Response) {

        if (typeof WebAssembly.instantiateStreaming === 'function') {
            try {
                return await WebAssembly.instantiateStreaming(module, imports);

            } catch (e) {
                if (module.headers.get('Content-Type') != 'application/wasm') {
                    console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", e);

                } else {
                    throw e;
                }
            }
        }

        const bytes = await module.arrayBuffer();
        return await WebAssembly.instantiate(bytes, imports);

    } else {

        const instance = await WebAssembly.instantiate(module, imports);

        if (instance instanceof WebAssembly.Instance) {
            return { instance, module };

        } else {
            return instance;
        }
    }
}

async function init(input) {
    if (typeof input === 'undefined') {
        input = import.meta.url.replace(/\.js$/, '_bg.wasm');
    }
    const imports = {};
    imports.wbg = {};
    imports.wbg.__wbg_new_59cb74e423758ede = function() {
        var ret = new Error();
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_stack_558ba5917b466edd = function(arg0, arg1) {
        var ret = getObject(arg1).stack;
        var ptr0 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        getInt32Memory0()[arg0 / 4 + 1] = len0;
        getInt32Memory0()[arg0 / 4 + 0] = ptr0;
    };
    imports.wbg.__wbg_error_4bb6c2a97407129a = function(arg0, arg1) {
        try {
            console.error(getStringFromWasm0(arg0, arg1));
        } finally {
            wasm.__wbindgen_free(arg0, arg1);
        }
    };
    imports.wbg.__wbindgen_object_drop_ref = function(arg0) {
        takeObject(arg0);
    };
    imports.wbg.__wbg_self_1b7a39e3a92c949c = function() {
        try {
            var ret = self.self;
            return addHeapObject(ret);
        } catch (e) {
            handleError(e)
        }
    };
    imports.wbg.__wbg_require_604837428532a733 = function(arg0, arg1) {
        var ret = require(getStringFromWasm0(arg0, arg1));
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_crypto_968f1772287e2df0 = function(arg0) {
        var ret = getObject(arg0).crypto;
        return addHeapObject(ret);
    };
    imports.wbg.__wbindgen_is_undefined = function(arg0) {
        var ret = getObject(arg0) === undefined;
        return ret;
    };
    imports.wbg.__wbg_getRandomValues_a3d34b4fee3c2869 = function(arg0) {
        var ret = getObject(arg0).getRandomValues;
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_getRandomValues_f5e14ab7ac8e995d = function(arg0, arg1, arg2) {
        getObject(arg0).getRandomValues(getArrayU8FromWasm0(arg1, arg2));
    };
    imports.wbg.__wbg_randomFillSync_d5bd2d655fdf256a = function(arg0, arg1, arg2) {
        getObject(arg0).randomFillSync(getArrayU8FromWasm0(arg1, arg2));
    };
    imports.wbg.__wbindgen_throw = function(arg0, arg1) {
        throw new Error(getStringFromWasm0(arg0, arg1));
    };

    if (typeof input === 'string' || (typeof Request === 'function' && input instanceof Request) || (typeof URL === 'function' && input instanceof URL)) {
        input = fetch(input);
    }

    const { instance, module } = await load(await input, imports);

    wasm = instance.exports;
    init.__wbindgen_wasm_module = module;

    return wasm;
}

export default init;


import init, {
    generate_nfe_key,
    calculate_nfe_dv,
    validate_nfe_key
} from '../theqatools_lib/wasm_tqt_lib.js';

(async function(){
    await init();
})();

export function generateKey(nfe) {
    return generate_nfe_key(nfe);
}

export function calculateDV(nfe) {
    return calculate_nfe_dv(nfe);
}

export function validateKey(accessKey) {
    return validate_nfe_key(accessKey);
}

export {NFe} from '../theqatools_lib/wasm_tqt_lib.js';

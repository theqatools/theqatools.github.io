import init, {
    cnpj_is_valid,
    generate_cnpj
} from './theqatools_lib/wasm_tqt_lib.js';

(async function(){
    await init();
})();

export function cnpjIsValid(cnpj) {
    return cnpj_is_valid(cnpj);
}

export function generateCnpj() {
    return generate_cnpj();
}

export function heyYou() {
    return hey();
}

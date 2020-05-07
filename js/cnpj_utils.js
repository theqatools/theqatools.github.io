import init, {
    cnpj_is_valid,
    generate_cnpj,
    generate_cnpj_for_branch
} from '../theqatools_lib/wasm_tqt_lib.js';

(async function(){
    await init();
})();

export function cnpjIsValid(cnpj) {
    return cnpj_is_valid(cnpj);
}

export function generateCnpj() {
    return generate_cnpj();
}

export function generateCnpjForBranch(branch_no) {
    return generate_cnpj_for_branch(branch_no);
}

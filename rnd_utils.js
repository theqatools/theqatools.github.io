import init, {
    next_i32
} from './theqatools_lib/wasm_tqt_lib.js';

(async function(){
    await init();
})();

export function nextI32(start, end) {
    return next_i32(start, end);
}

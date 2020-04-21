/* tslint:disable */
/* eslint-disable */
/**
* @returns {string} 
*/
export function generate_cnpj(): string;
/**
* @param {string} branch_no 
* @returns {string} 
*/
export function generate_cnpj_for_branch(branch_no: string): string;
/**
* @param {string} cnpj 
* @returns {boolean} 
*/
export function cnpj_is_valid(cnpj: string): boolean;
/**
* @param {NFe} nfe 
*/
export function calculate_nfe_dv(nfe: NFe): void;
/**
* @param {NFe} nfe 
* @returns {string} 
*/
export function generate_nfe_key(nfe: NFe): string;
/**
* @param {string} key 
* @returns {NFeKeyValidationResult} 
*/
export function validate_nfe_key(key: string): NFeKeyValidationResult;
export class NFe {
  free(): void;
/**
* @returns {NFe} 
*/
  static new(): NFe;
  code: number;
  dv: number;
  issueMode: number;
  issuerCnpj: string;
  model: number;
  nfeNumber: number;
  serie: number;
  uf: number;
  yearMonth: string;
}
export class NFeKeyValidationResult {
  free(): void;
  readonly errorMessage: string;
  readonly isValid: boolean;
  readonly nfe: NFe;
}

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly generate_cnpj: (a: number) => void;
  readonly generate_cnpj_for_branch: (a: number, b: number, c: number) => void;
  readonly cnpj_is_valid: (a: number, b: number) => number;
  readonly __wbg_nfe_free: (a: number) => void;
  readonly __wbg_get_nfe_uf: (a: number) => number;
  readonly __wbg_set_nfe_uf: (a: number, b: number) => void;
  readonly __wbg_get_nfe_model: (a: number) => number;
  readonly __wbg_set_nfe_model: (a: number, b: number) => void;
  readonly __wbg_get_nfe_serie: (a: number) => number;
  readonly __wbg_set_nfe_serie: (a: number, b: number) => void;
  readonly __wbg_get_nfe_nfeNumber: (a: number) => number;
  readonly __wbg_set_nfe_nfeNumber: (a: number, b: number) => void;
  readonly __wbg_get_nfe_issueMode: (a: number) => number;
  readonly __wbg_set_nfe_issueMode: (a: number, b: number) => void;
  readonly __wbg_get_nfe_code: (a: number) => number;
  readonly __wbg_set_nfe_code: (a: number, b: number) => void;
  readonly __wbg_get_nfe_dv: (a: number) => number;
  readonly __wbg_set_nfe_dv: (a: number, b: number) => void;
  readonly __wbg_nfekeyvalidationresult_free: (a: number) => void;
  readonly nfekeyvalidationresult_errorMessage: (a: number, b: number) => void;
  readonly nfekeyvalidationresult_nfe: (a: number) => number;
  readonly nfekeyvalidationresult_isValid: (a: number) => number;
  readonly nfe_new: () => number;
  readonly nfe_yearMonth: (a: number, b: number) => void;
  readonly nfe_set_yearMonth: (a: number, b: number, c: number) => void;
  readonly nfe_issuerCnpj: (a: number, b: number) => void;
  readonly nfe_set_issuerCnpj: (a: number, b: number, c: number) => void;
  readonly calculate_nfe_dv: (a: number) => void;
  readonly generate_nfe_key: (a: number, b: number) => void;
  readonly validate_nfe_key: (a: number, b: number) => number;
  readonly __wbindgen_free: (a: number, b: number) => void;
  readonly __wbindgen_malloc: (a: number) => number;
  readonly __wbindgen_realloc: (a: number, b: number, c: number) => number;
  readonly __wbindgen_exn_store: (a: number) => void;
}

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {InitInput | Promise<InitInput>} module_or_path
*
* @returns {Promise<InitOutput>}
*/
export default function init (module_or_path?: InitInput | Promise<InitInput>): Promise<InitOutput>;
        
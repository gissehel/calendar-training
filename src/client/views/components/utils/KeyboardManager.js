/**
 * @type {Object<string, ()=>{}}
 */
const bindedKeys = {};
let binded = false;
let domElement = null;

/**
 * The ApiKey structure
 * @typedef {Object} ApiKey
 * @property {string} keyName The keyName of the key
 * @property {bool} Ctrl true if the Ctrl key should be pressed
 * @property {bool} Alt true if the Alt key should be pressed
 * @property {bool} Shift true if the shift key should be pressed
 * @property {bool} Meta true if the Meta key should be pressed
 * @property {string} name The fully qualified name of the key
 */

/**
 * The key mods order
 */
const modOrder = ['Ctrl', 'Alt', 'Shift', 'Meta'];

/**
 * Get the correct canonical name for a key
 * @param {ApiKey} key 
 * @returns {string}
 */
export const getCanonName = (key) => [...modOrder].reverse().reduce((name, modName) => key[modName] ? `${modName}+${name}` : name, key.keyName);

/**
 * Get the correct canonical name for an event
 * @param {KeyboardEvent} event
 * @returns {string}
 */
export const getCanonNameForEvent = (event) => [...modOrder].reverse().reduce((name, modName) => event[modName.toLowerCase() + "Key"] ? `${modName}+${name}` : name, event.key);

/**
 * Parse a key and returns an API Key
 * 
 * @param {string} keyName The name of the key
 * @param {Object} params The params
 * @param {boolean} params.Ctrl true if the key should be used with Ctrl
 * @param {boolean} params.Alt true if the key should be used with Alt
 * @param {boolean} params.Shift true if the key should be used with Shift
 * @param {boolean} params.Meta true if the key should be used with Meta
 * @return {ApiKey}
 */
export const parseApiKey = (keyName, params) => {
    if (params === undefined && typeof (keyName) === 'object') {
        params = keyName;
        keyName = params.keyName;
    }
    if (params === undefined) {
        params = {};
    }
    const { Ctrl, Alt, Shift, Meta } = params;
    const name = getCanonName({ keyName, Ctrl, Alt, Shift, Meta });
    return { keyName, Ctrl, Alt, Shift, Meta, name };
}

/**
 * parse a keyboard event and return an object compatible with an API key
 * @param {KeyboardEvent} event The keyboard event to parse
 * @return {ApiKey}
 */
export const parseEvent = (event) => {
    const { ctrlKey: Ctrl, altKey: Alt, shiftKey: Shift, metaKey: Meta, key: keyName } = event;
    const name = getCanonName({ keyName, Ctrl, Alt, Shift, Meta });
    return { keyName, Ctrl, Alt, Shift, Meta, name };
}

/**
 * 
 * @param {KeyboardEvent} event The event to parse
 */
const onKeydownEvent = (event) => {
    const name = getCanonNameForEvent(event);
    const code = bindedKeys[name];
    if (code) {
        code();
        event.preventDefault();
    }
}

/**
 * Ensure that a binding exist or not depending on whether there are keys binded.
 */
export const ensureBinding = () => {
    if (domElement === null) {
        domElement = document.body;
    }
    if (binded && Object.keys(bindedKeys).length == 0) {
        document.removeEventListener("keydown", onKeydownEvent);
    }
    if (!binded && Object.keys(bindedKeys).length > 0) {
        document.addEventListener("keydown", onKeydownEvent);
    }
}

/**
 * Use the provided element to bind the keys instead of document.body
 * 
 * @param {HTMLElement} element 
 * @returns {void}
 */
export const useElement = (element) => {
    domElement = element;
}

/**
 * Bind a code to a key
 * 
 * @param {string} keyName The name of the key
 * @param {()=>{}} code The code to bind
 * @param {Object} params The params
 * @param {boolean} params.Ctrl true if the key should be used with Ctrl
 * @param {boolean} params.Alt true if the key should be used with Alt
 * @param {boolean} params.Shift true if the key should be used with Shift
 * @param {boolean} params.Meta true if the key should be used with Meta
 * @return {void}
 */
export const bindKey = (code, ...params) => {
    const key = parseApiKey(...params);
    const { name } = key;

    // This will remove the potentially existing binding for the name name.
    bindedKeys[name] = code;
    ensureBinding();
}

/**
 * Unbind code to a key
 * 
 * @param {string} keyName The name of the key
 * @param {Object} params The params
 * @param {boolean} params.Ctrl true if the key should be used with Ctrl
 * @param {boolean} params.Alt true if the key should be used with Alt
 * @param {boolean} params.Shift true if the key should be used with Shift
 * @param {boolean} params.Meta true if the key should be used with Meta
 * @return {void}
 */
export const unbindKey = (...params) => {
    const key = parseApiKey(...params);
    const { name } = key;

    if (name) {
        delete bindedKeys[name];
        ensureBinding();
    }
}

/**
 * Remove all key bindings
 * 
 * @returns {void}
 */
export const clearKeys = () => {
    bindedKeys = {};
    ensureBinding();
}

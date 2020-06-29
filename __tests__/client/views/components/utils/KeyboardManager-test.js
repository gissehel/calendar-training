import { parseEvent, unbindKey, bindKey, getCanonName, parseApiKey } from '../../../../../src/client/views/components/utils/KeyboardManager'

describe('KeyboardManager', () => {
    describe('parseApiKey', () => {
        test('parseApiKey - Ctrl+Meta+poide', () => {
            expect(parseApiKey('poide', { Ctrl: true, Meta: true, Shift: false }).name).toBe('Ctrl+Meta+poide');
        })
        test('parseApiKey - Meta+Shift+poide', () => {
            expect(parseApiKey('poide', { Ctrl: false, Meta: true, Shift: true }).name).toBe('Shift+Meta+poide');
        })
        test('parseApiKey - Ctrl+Meta+Shift+poide', () => {
            expect(parseApiKey('poide', { Ctrl: true, Meta: true, Shift: true }).name).toBe('Ctrl+Shift+Meta+poide');
        })
        test('parseApiKey - Meta+Ctrl+Shift+poide', () => {
            expect(parseApiKey('poide', { Meta: true, Ctrl: true, Shift: true }).name).toBe('Ctrl+Shift+Meta+poide');
        })
    })
})

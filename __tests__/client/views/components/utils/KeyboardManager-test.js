import { parseEvent, unbindKey, bindKey, getCanonName, parseApiKey } from '../../../../../src/client/views/components/utils/KeyboardManager'

//@ts-ignore
describe('KeyboardManager', () => {
    //@ts-ignore
    describe('parseApiKey', () => {

        //@ts-ignore
        test('parseApiKey - Ctrl+Meta+poide', () => {

            //@ts-ignore
            expect(
                parseApiKey({ keyName: 'poide', Ctrl: true, Meta: true, Shift: false }).name
            ).toBe(
                'Ctrl+Meta+poide'
            );
        })

        //@ts-ignore
        test('parseApiKey - Meta+Shift+poide', () => {
            //@ts-ignore
            expect(
                parseApiKey({ keyName: 'poide', Ctrl: false, Meta: true, Shift: true }).name
            ).toBe(
                'Shift+Meta+poide'
            );
        })

        //@ts-ignore
        test('parseApiKey - Ctrl+Meta+Shift+poide', () => {
            //@ts-ignore
            expect(
                parseApiKey({ keyName: 'poide', Ctrl: true, Meta: true, Shift: true }).name
            ).toBe(
                'Ctrl+Shift+Meta+poide'
            );
        })

        //@ts-ignore
        test('parseApiKey - Meta+Ctrl+Shift+poide', () => {
            //@ts-ignore
            expect(
                parseApiKey({ keyName: 'poide', Meta: true, Ctrl: true, Shift: true }).name
            ).toBe(
                'Ctrl+Shift+Meta+poide'
            );
        })

        //@ts-ignore
        test('parseApiKey - poide', () => {
            //@ts-ignore
            expect(
                parseApiKey({ keyName: 'poide' }).name
            ).toBe(
                'poide'
            );
        })

        //@ts-ignore
        test('parseApiKey - poide (simple)', () => {
            //@ts-ignore
            expect(
                parseApiKey('poide').name
            ).toBe(
                'poide'
            );
        })
    })
})

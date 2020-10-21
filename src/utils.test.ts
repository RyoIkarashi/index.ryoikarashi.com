import * as utils from './utils';

describe('isProduction', (): void => {
    if (process.env.NODE_ENV !== 'production') {
        test('should be false', (): void => {
            expect(utils.isProduction).toBe(false);
        });
    } else {
        test('should be true', (): void => {
            expect(utils.isProduction).toBe(true);
        });
    }
});

describe('prependStrOnlyDev', (): void => {
    const strToBePrepended = 'prefix_';
    const originalInput = 'hello';

    if (process.env.NODE_ENV !== 'production') {
        test('should prepend `_dev` in dev/test environment', (): void => {
            expect(utils.prependStrOnlyDev(originalInput, strToBePrepended)).toBe(`${strToBePrepended}${originalInput}`);
        });
    } else {
        test('should not prepend `_dev` in production', (): void => {
            process.env.NODE_ENV = 'production';
            expect(utils.prependStrOnlyDev(originalInput, strToBePrepended)).toBe(originalInput);
        });
    }
});

describe('prependDev', (): void => {
    const originalInput = 'hello';
    if (process.env.NODE_ENV !== 'production') {
        test('should prepend `dev_` prefix', (): void => {
            expect(utils.prependDev(originalInput)).toBe(`dev_${originalInput}`);
        });
    } else {
        test('should not prepend `dev_` prefix', (): void => {
            expect(utils.prependDev(originalInput)).toBe(`${originalInput}`);
        });
    }
});

describe('getRootCollectionName', (): void => {
    const collectionName = 'sample_collection';
    if (process.env.NODE_ENV !== 'production') {
        test('should prepend `dev_` prefix', (): void => {
            expect(utils.prependDev(collectionName)).toBe(`dev_${collectionName}`);
        });
    } else {
        test('should not prepend `dev_` prefix', (): void => {
            expect(utils.prependDev(collectionName)).toBe(`${collectionName}`);
        });
    }
});

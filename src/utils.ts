export const isProduction = process.env.NODE_ENV === 'production';

export const prependStrOnlyDev = (original: string, prependStr: string): string =>
    isProduction ? original : `${prependStr}${original}`;

export const prependDev = (original: string): string => prependStrOnlyDev(original, 'dev_');

export const getRootCollectionName = (collectionName: string): string => prependDev(collectionName);

export const sleep = (msec: number) => new Promise((resolve) => setTimeout(resolve, msec));

// Make sure to import the helper functions from the ssr entry point.
// eslint-disable-next-line import/no-unresolved
import { entryPointUriPathToPermissionKeys } from '@commercetools-frontend/application-shell/ssr';

export const entryPointUriPath = 'product-enhancement';

export const PERMISSIONS = entryPointUriPathToPermissionKeys(entryPointUriPath);

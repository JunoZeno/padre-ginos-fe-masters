/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { createFileRoute } from '@tanstack/react-router';

// Import Routes

import { Route as rootRoute } from './routes/__root';

// Create Virtual Routes

const PastLazyImport = createFileRoute('/past')();
const OrderLazyImport = createFileRoute('/order')();
const IndexLazyImport = createFileRoute('/')();

// Create/Update Routes

const PastLazyRoute = PastLazyImport.update({
  id: '/past',
  path: '/past',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/past.lazy').then((d) => d.Route));

const OrderLazyRoute = OrderLazyImport.update({
  id: '/order',
  path: '/order',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/order.lazy').then((d) => d.Route));

const IndexLazyRoute = IndexLazyImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route));

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/';
      path: '/';
      fullPath: '/';
      preLoaderRoute: typeof IndexLazyImport;
      parentRoute: typeof rootRoute;
    };
    '/order': {
      id: '/order';
      path: '/order';
      fullPath: '/order';
      preLoaderRoute: typeof OrderLazyImport;
      parentRoute: typeof rootRoute;
    };
    '/past': {
      id: '/past';
      path: '/past';
      fullPath: '/past';
      preLoaderRoute: typeof PastLazyImport;
      parentRoute: typeof rootRoute;
    };
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexLazyRoute;
  '/order': typeof OrderLazyRoute;
  '/past': typeof PastLazyRoute;
}

export interface FileRoutesByTo {
  '/': typeof IndexLazyRoute;
  '/order': typeof OrderLazyRoute;
  '/past': typeof PastLazyRoute;
}

export interface FileRoutesById {
  __root__: typeof rootRoute;
  '/': typeof IndexLazyRoute;
  '/order': typeof OrderLazyRoute;
  '/past': typeof PastLazyRoute;
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath;
  fullPaths: '/' | '/order' | '/past';
  fileRoutesByTo: FileRoutesByTo;
  to: '/' | '/order' | '/past';
  id: '__root__' | '/' | '/order' | '/past';
  fileRoutesById: FileRoutesById;
}

export interface RootRouteChildren {
  IndexLazyRoute: typeof IndexLazyRoute;
  OrderLazyRoute: typeof OrderLazyRoute;
  PastLazyRoute: typeof PastLazyRoute;
}

const rootRouteChildren: RootRouteChildren = {
  IndexLazyRoute: IndexLazyRoute,
  OrderLazyRoute: OrderLazyRoute,
  PastLazyRoute: PastLazyRoute,
};

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>();

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.jsx",
      "children": [
        "/",
        "/order",
        "/past"
      ]
    },
    "/": {
      "filePath": "index.lazy.jsx"
    },
    "/order": {
      "filePath": "order.lazy.jsx"
    },
    "/past": {
      "filePath": "past.lazy.jsx"
    }
  }
}
ROUTE_MANIFEST_END */

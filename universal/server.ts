import '@angular/localize/init';
import 'zone.js/dist/zone-node';
import {enableProdMode} from '@angular/core';
import { ngExpressEngine } from '@nguniversal/express-engine';
import * as express from 'express';
import { join } from 'path';
import { APP_BASE_HREF } from '@angular/common';
import { existsSync } from 'fs';
import 'localstorage-polyfill'


// Domino "Mock"
const distFolder = join(process.cwd(), 'dist/angular-project/browser');
const indexHtml = existsSync(join(distFolder, 'index.original.html')) ? 'index.original.html' : 'index';

// We're faking these element with dominos. Many guides online omit many of the window elements used in Angular. This can cause problems when deploying your applications
// cross-environments: e.g. it will run on bare-metal but not on AWS AKS.

const domino = require('domino');
const win = domino.createWindow(indexHtml);
import 'localstorage-polyfill';
(global as any).window = win;
(global as any).document = win.document;
(global as any).navigator = win.navigator;
(global as any).Event = win.Event;
(global as any).Event.prototype = win.Event.prototype;
(global as any).KeyboardEvent = win.KeyboardEvent;
(global as any).localStorage = localStorage;
(global as any).beforeMount = win.beforeMount;
(global as any).mouseMove = win.mouseMove;
(global as any).mouseLeave = win.mouseLeave;
(global as any).FocusEvent = win.FocusEvent;
(global as any).HTMLElement = win.HTMLElement;
(global as any).object = win.object;
(global as any).DOMTokenList = win.DOMTokenList;
(global as any).zoomed = win.zoomed;
(global as any).markerClick = win.markerClick;
(global as any).selection = win.selection;
(global as any).dataPointSelection = win.dataPointSelection;
(global as any).dataPointMouseEnter = win.dataPointMouseEnter;
(global as any).dataPointMouseLeave = win.dataPointMouseLeave;
(global as any).beforeZoom = win.beforeZoom;
(global as any).beforeResetZoom = win.beforeResetZoom;
(global as any).zoomed = win.zoomed;
(global as any).scrolled = win.scrolled;
(global as any).animationEnd = win.animationEnd;
(global as any).updated = win.updated;
(global as any).legendClick = win.legendClick;
(global as any).click = win.click;
(global as any).location = win.location;
(global as any).HTMLElement.prototype.getBoundingClientRect = () => {
  return {
    left: '',
    right: '',
    top: '',
    bottom: ''
};
};
import * as compression from 'compression';
import { AppServerModule } from './src/main.server';

// It is important that enableProdMode(); is here
enableProdMode();

// The Express app is exported so that it can be used by serverless Functions.
export function app() {
  const server = express();

  // Set server timezone - not standard in Universal installation
  process.env.TZ = "America/New_York";
  
  server.engine('html', ngExpressEngine({
    bootstrap: AppServerModule,
  }));

  server.set('view engine', 'html');
  server.set('views', distFolder);

  // Example Express Rest API endpoints
 // Serve static files from /browser
  server.get('*.*', express.static(distFolder, {
    maxAge: '1y'
  }));

  // All regular routes use the Universal engine
  server.get('*', (req, res) => {
    res.render(indexHtml, { req, providers: [{ provide: APP_BASE_HREF, useValue: req.baseUrl }] });
  });

  return server;
}

function run() {
  const port = process.env.PORT || 80;

  // Start up the Node server
  const server = app();
  server.use(compression());
  server.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

declare const __non_webpack_require__: NodeRequire;
const mainModule = __non_webpack_require__.main;
const moduleFilename = mainModule && mainModule.filename || '';
if (moduleFilename === __filename || moduleFilename.includes('iisnode')) {
  run();
}

export * from './src/main.server';

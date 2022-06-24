import { handler } from '../src/mocks/';
import { setupWorker } from 'msw';
import { addDecorator } from '@storybook/react';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  }
}

// if (typeof global.process === "undefined") {
//   const worker = setupWorker(...handler);
//     worker.start();
//     workerWorking = worker;
// }

// To enable MSW and match requests with MSW Request Handlers
let worker;
if (typeof global.process === "undefined") {
  worker = setupWorker(...handler);
  worker.start();
}

addDecorator( 
  (storyFn
    ,{ parameters: { msw = [] } }
  )=>{
    // console.log('handler passed through parameter from Character Story: ',msw);
    if (worker) {
      worker.use(...msw);
    }
    return storyFn();
  }
)

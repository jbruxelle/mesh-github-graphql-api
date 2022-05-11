import { getMeshSDK } from "./.mesh/index.mjs";
import { createServer } from "http";

const server = createServer((req, res) => {
  const sdk = getMeshSDK();
  sdk
    .Initialize({ repository: "my-minion-mr", owner: "dynamic-process" })
    .then((result) => {
      res.end(`
        Hello I'm calling Mesh SDK from ESM;
        ${JSON.stringify(result, null, 2)}
      `);
    });
  // sdk.Example({}).then((result) => {
  //   res.end(`
  //     Hello I'm calling Mesh SDK from ESM;
  //     ${JSON.stringify(result, null, 2)}
  //   `);
  // });
});

server.listen(4000);

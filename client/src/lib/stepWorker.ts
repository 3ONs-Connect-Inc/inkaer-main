import initOCCTLib from "occt-import-js";

const initOCCT = initOCCTLib as (
  opts?: { locateFile?: (file: string) => string }
) => Promise<any>;

let occtInstance: any = null;

self.onmessage = async (e) => {
  const { buffer } = e.data;

  if (!occtInstance) {
    occtInstance = await initOCCT({
      locateFile: () => "/occt-import-js.wasm",
    });
  }

  const result = occtInstance.ReadStepFile(new Uint8Array(buffer), null);

  if (result.success && result.meshes?.length) {
    const chunkSize = 10;
    for (let i = 0; i < result.meshes.length; i += chunkSize) {
      const chunk = result.meshes.slice(i, i + chunkSize);
      // Stream partial meshes
      (self as any).postMessage({ success: true, meshes: chunk });
      await new Promise((r) => setTimeout(r)); // yield to UI thread
    }
    (self as any).postMessage({ done: true });
  } else {
    (self as any).postMessage({ success: false });
  }
};

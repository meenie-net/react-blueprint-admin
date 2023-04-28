import Emittery from "emittery";

// Emittery.isDebugEnabled = true;
const emitter = new Emittery({ debug: { name: "myEmitter1" } });
export default emitter;

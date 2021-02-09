// Export actions
import * as ModuleA from "./ModuleA/actions";
import * as ModuleB from "./ModuleB/actions";

export const actions = [...ModuleA, ...ModuleB];

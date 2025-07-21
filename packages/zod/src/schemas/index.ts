import * as z from "zod";
import { extendZodWithOpenApi } from "zod-openapi";

extendZodWithOpenApi(z);

export default z;

export * from "./analytics";
export * from "./analytics-response";
export * from "./auth";
export * from "./domains";
export * from "./import-csv";
export * from "./integration";
export * from "./leads";
export * from "./misc";
export * from "./oauth";
export * from "./partners";
export * from "./program-onboarding";
export * from "./programs";
export * from "./rewards";
export * from "./tags";
export * from "./token";
export * from "./utils";
export * from "./workspaces";

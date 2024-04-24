import {
  type Output,
  array,
  literal,
  number,
  object,
  string,
  union,
} from "valibot";
import { offsetRangeSchema } from "./offsetRangeSchemata";

export const eventSchema = union([
  object({
    hashDigest: string(),
    kind: literal("jscodeshiftApplyString"),
    codemodSourceRange: offsetRangeSchema,
    timestamp: number(),
    mode: literal("control"),
  }),
  object({
    hashDigest: string(),
    kind: literal("path"),
    codemodSourceRange: offsetRangeSchema,
    snippetBeforeRanges: array(offsetRangeSchema),
    nodeType: string(),
    timestamp: number(),
    mode: union([literal("lookup"), literal("replacement")]),
    codes: array(string()),
  }),
  object({
    hashDigest: string(),
    kind: literal("pathReplace"),
    codemodSourceRange: offsetRangeSchema,
    snippetBeforeRanges: array(offsetRangeSchema),
    nodeType: string(),
    timestamp: number(),
    mode: literal("replacement"),
    codes: array(string()),
  }),
  object({
    hashDigest: string(),
    kind: literal("collectionFind"),
    codemodSourceRange: offsetRangeSchema,
    snippetBeforeRanges: array(offsetRangeSchema),
    nodeType: string(),
    timestamp: number(),
    mode: literal("lookup"),
  }),
  object({
    hashDigest: string(),
    kind: literal("collectionPaths"),
    codemodSourceRange: offsetRangeSchema,
    snippetBeforeRanges: array(offsetRangeSchema),
    timestamp: number(),
    mode: literal("lookup"),
  }),
  object({
    hashDigest: string(),
    kind: literal("collectionRemove"),
    codemodSourceRange: offsetRangeSchema,
    snippetBeforeRanges: array(offsetRangeSchema),
    nodeType: string(),
    timestamp: number(),
    mode: literal("removal"),
  }),
  object({
    hashDigest: string(),
    kind: literal("collectionReplace"),
    codemodSourceRange: offsetRangeSchema,
    snippetBeforeRanges: array(offsetRangeSchema),
    nodeType: string(),
    codes: array(string()),
    timestamp: number(),
    mode: literal("replacement"),
  }),
  object({
    hashDigest: string(),
    kind: literal("collectionToSource"),
    nodeType: string(),
    codemodSourceRange: offsetRangeSchema,
    timestamp: number(),
    mode: literal("control"),
  }),
  object({
    hashDigest: string(),
    kind: literal("printedMessage"),
    codemodSourceRange: offsetRangeSchema,
    message: string(),
    timestamp: number(),
    mode: literal("control"),
  }),
  object({
    hashDigest: string(),
    kind: literal("codemodExecutionError"),
    codemodSourceRange: offsetRangeSchema,
    message: string(),
    timestamp: number(),
    mode: literal("control"),
  }),
]);

export type Event = Output<typeof eventSchema>;

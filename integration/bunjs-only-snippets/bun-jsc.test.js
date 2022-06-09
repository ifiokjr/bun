import { describe, expect, it } from "bun:test";
import {
  describe as jscDescribe,
  describeArray,
  gcAndSweep,
  fullGC,
  edenGC,
  heapSize,
  heapStats,
  memoryUsage,
  getRandomSeed,
  setRandomSeed,
  isRope,
  callerSourceOrigin,
  noFTL,
  noOSRExitFuzzing,
  optimizeNextInvocation,
  numberOfDFGCompiles,
  releaseWeakRefs,
  totalCompileTime,
  reoptimizationRetryCount,
  drainMicrotasks,
} from "bun:jsc";

describe("bun:jsc", () => {
  function count() {
    var j = 0;
    for (var i = 0; i < 999999; i++) {
      j += i + 2;
    }

    return j;
  }

  it("describe", () => {
    jscDescribe([]);
  });
  it("describeArray", () => {
    describeArray([1, 2, 3]);
  });
  it("gcAndSweep", () => {
    gcAndSweep();
  });
  it("fullGC", () => {
    fullGC();
  });
  it("edenGC", () => {
    edenGC();
  });
  it("heapSize", () => {
    expect(heapSize() > 0).toBe(true);
  });
  it("heapStats", () => {
    heapStats();
  });
  it("memoryUsage", () => {
    memoryUsage();
  });
  it("getRandomSeed", () => {
    getRandomSeed(2);
  });
  it("setRandomSeed", () => {
    setRandomSeed(2);
  });
  it("isRope", () => {
    expect(isRope("a" + 123 + "b")).toBe(true);
    expect(isRope("abcdefgh")).toBe(false);
  });
  it("callerSourceOrigin", () => {
    expect(callerSourceOrigin()).toBe(import.meta.url);
  });
  it("noFTL", () => {});
  it("noOSRExitFuzzing", () => {});
  it("optimizeNextInvocation", () => {
    count();
    optimizeNextInvocation(count);
    count();
  });
  it("numberOfDFGCompiles", () => {
    expect(numberOfDFGCompiles(count)).toBe(3);
  });
  it("releaseWeakRefs", () => {
    releaseWeakRefs();
  });
  it("totalCompileTime", () => {
    totalCompileTime(count);
  });
  it("reoptimizationRetryCount", () => {
    reoptimizationRetryCount(count);
  });
  it("drainMicrotasks", () => {
    drainMicrotasks();
  });
});
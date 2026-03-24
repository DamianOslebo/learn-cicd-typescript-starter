import { describe, expect, test } from "vitest";
import { getAPIKey } from "../api/auth.js";
import { IncomingHttpHeaders } from "http";

describe("API Auth", () => {
  const headers: IncomingHttpHeaders = {
    authorization: "ApiKey my-secret-key",
  };

  test("returns API key from headers", () => {
    const apiKey = getAPIKey(headers);
    expect(apiKey).toBe("my-secret-key");
  });

  test("returns null if authorization header is missing", () => {
    const apiKey = getAPIKey({});
    expect(apiKey).toBeNull();
  });

  test("returns null if authorization header is not in correct format", () => {
    const apiKey = getAPIKey({ authorization: "Bearer my-secret-key" });
    expect(apiKey).toBeNull();
  });
});

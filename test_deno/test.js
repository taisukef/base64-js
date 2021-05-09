import * as t from "https://deno.land/std/testing/asserts.ts";
import { base64 } from "../base64.js";

Deno.test("simple", () => {
    const s = "base64";
    const str = base64.fromByteArray(new TextEncoder().encode(s));
    //console.log(str);
    t.assertEquals(str, "YmFzZTY0");
    const s2 = new TextDecoder().decode(base64.toByteArray(str));
    //console.log(s2);
    t.assertEquals(s, s2);
});

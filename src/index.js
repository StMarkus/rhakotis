import {
  convertCopticText,
  fontSupported,
  jimkinMethodValid,
} from "@stmarkus/coptic-font-unicode-converter";

const RHAKOTIS_DESC =
  "Rhacotis (romanized as Rhakotis) was the name for a city on the northern coast of Egypt at the site of Alexandria. Classical sources suggest Rhacotis as an older name for Alexandria before the arrival of Alexander the Great.";

const json = (data, init = {}) =>
  new Response(JSON.stringify(data), {
    ...init,
    headers: { "content-type": "application/json", ...(init.headers || {}) },
  });

const errorResponse = (status, message) =>
  new Response(null, { status, statusText: message });

export default {
  async fetch(request) {
    const url = new URL(request.url);

    if (url.pathname === "/" && request.method === "GET") {
      return new Response("");
    }

    if (url.pathname === "/status" && request.method === "GET") {
      return json({ Status: "Running", Rhakotis: RHAKOTIS_DESC });
    }

    if (
      (url.pathname === "/convert2Unicode" ||
        url.pathname === "/convert2Unicode/") &&
      request.method === "GET"
    ) {
      const params = url.searchParams;
      for (const required of ["text", "font", "jimkin"]) {
        if (!params.has(required)) {
          return errorResponse(
            400,
            `Missing expected URL query Parameter ${required}`
          );
        }
      }
      const font = params.get("font");
      const jimkin = params.get("jimkin");
      const text = params.get("text");

      if (!(await fontSupported(font))) {
        return errorResponse(400, "Provided font is NOT supported");
      }
      if (!jimkinMethodValid(jimkin)) {
        return errorResponse(
          400,
          "Provided Jimkin Combining Method is NOT valid"
        );
      }

      const converted = await convertCopticText(font, text, jimkin);
      return json({ text: converted });
    }

    return new Response("Not Found", { status: 404 });
  },
};

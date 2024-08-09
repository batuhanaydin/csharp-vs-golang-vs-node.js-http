package main

import (
    "github.com/valyala/fasthttp"
)

func main() {
    // Request handler function
    requestHandler := func(ctx *fasthttp.RequestCtx) {
        ctx.SetContentType("text/plain; charset=utf-8")
        ctx.SetStatusCode(fasthttp.StatusOK)
        ctx.WriteString("Hello, World!")
    }

    // Start the server
    if err := fasthttp.ListenAndServe(":8082", requestHandler); err != nil {
        panic("Error in ListenAndServe: " + err.Error())
    }
}

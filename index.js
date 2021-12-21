#!/usr/bin/env node

const { program } = require("commander");

program
    .option("-u, --url [value]", "The url of the parameters to parse")
    .parse();

const options = program.opts();

if (options.url) {
    let parts = options.url.split("?");
    parts = parts[1].split("&");

    console.log(parts);
}

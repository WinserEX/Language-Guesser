import { createRequire } from "module";
const require = createRequire(import.meta.url);
import { franc } from 'franc';
const langs = require('langs');   

const input = process.argv[2];
const langCode = franc(input);
if (langCode === "und") {
    console.log('Did not work properly');
} else {
    const language = langs.where("3", langCode);
    console.log(`Our best guess is ${language.name}`);
}
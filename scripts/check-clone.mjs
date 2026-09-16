import assert from 'node:assert/strict';
import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { createHash } from 'node:crypto';
const forbidden=/(?:https?:)?\/\/(?:[a-z0-9-]+\.)*isuntv\.com(?:[\/:?#\s"']|$)/i;
function check(dir) { for(const entry of readdirSync(dir,{withFileTypes:true})) {const p=join(dir,entry.name);if(entry.isDirectory())check(p);else if(/\.(ts|tsx|json|txt|xml|svg|css|js)$/.test(p))assert(!forbidden.test(readFileSync(p,'utf8')),`Forbidden domain in ${p}`);}}
for(const p of ['app','components','lib','public'])check(p);
for(const p of ['middleware.ts','worker.ts'])assert(!forbidden.test(readFileSync(p,'utf8')));
const translations=JSON.parse(readFileSync('lib/brand-translations.json'));
for(const [key,value]of Object.entries(translations))for(const locale of ['zh-Hans','ja','he','fr','es','hi'])assert(value[locale]?.trim(),`Missing ${locale}: ${key}`);
const identity=readFileSync('lib/brand-identity.ts','utf8');assert(identity.includes('https://www.tideisun.com/robin#robin-xie'));
const registry=readFileSync('lib/authorization-registry.json');assert.equal(createHash('sha256').update(registry).digest('hex'),'e07a0b7ad398a0072511a4f64c093df7f8075b60c28bb14836bbe0f4d383a821','Registry changed; compare approved canonical source and update provenance explicitly.');
const thumbs=JSON.parse(readFileSync('lib/thumbnail-cache.json'));for(const f of Object.values(thumbs))assert(readFileSync('public'+f).length>0);
assert(!/isuntv\.com/i.test(readFileSync('public/llms.txt','utf8')));
console.log(JSON.stringify({status:'PASS',brand_copy_entries:Object.keys(translations).length,local_thumbnails:Object.keys(thumbs).length,identity:'preserved',registry:'matches approved unpublished zero-record source',domain_isolation:'PASS'}));

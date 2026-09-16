# iSun1 · 阳光卫视

The independent, eight-language iSun1 media site is live at **https://isun1.com/**. Release date: 16 September 2026, ahead of the 18 September Taipei deadline. Production validation is recorded in `PROJECT_STATE.md`; DNS propagation and mail-form delivery are still being followed through. A published page is not a promise of universal Mainland connectivity or search-engine indexing.

## Ownership and locations

Robin Xie owns product intent and approval. Codex/Maimai owns execution and verification. This launch reverses the September 14 freeze for the new media site only. Retired iSunOne financial-business content remains archived and excluded from the new deployment.

- iMac control checkout: `/Users/robin/Developer/RobinOS/12_isuntv/isun1_clone`
- Studio canonical execution copy: `/Users/headlessnick/RobinOS2/12_ventures/12_isuntv/isun1_clone`
- Repository: https://github.com/RobinXie1984/isun1_clone
- `main`: editable application source and operational documentation. A push to main does **not** publish a new site.
- `gh-pages`: verified static public artifact; pushing this branch triggers GitHub Pages deployment.
- Source baseline: approved iSunTV version 36, commit `e55756bcd25bbe6beb8c453b4282288929502f7c`. Original source and deployment were not changed.
- Current application source: `3c6d2e47362ab9148e322567676d58a847fe3a2c`. Initial production artifact: `04268009` on gh-pages; resolve the full revision before rollback.

## Verified archive

Local archive directory: `/Users/robin/Developer/RobinOS/12_isuntv/isun1_archive`. A byte-identical verified copy is on Studio under `/Users/headlessnick/RobinOS2/12_ventures/12_isuntv/isun1_archive`.

| File | Verification |
| --- | --- |
| `isun1-legacy-20260916.zip` | 12,410 files; 4,525,863,949 ZIP bytes; full ZIP CRC, SHA-256 and every member hash independently verified on both machines |
| `isun1-deployment-configuration-20260916.zip` | Recoverable GitHub Pages, DNS and freeze/removal configuration; checksum verified on both machines |

SHA-256 values:

```text
ef600224830dcf85517884ab002bc4b9d5b92a3b7c84eb09023553fe1fd1bacc  isun1-legacy-20260916.zip
22027d5ddb188340d2de35cf036a878b30fdcceb487d605520c6164414681526  isun1-deployment-configuration-20260916.zip
```

The private archive includes historical customer/order exports. Never add these ZIPs, evidence directories or old business content to public Git or hosting. Rebuildable virtual environments and Git administrative files were excluded; Git bundles preserve recoverable history. The original Studio legacy folder remains preserved.

## Production hosting and DNS

GitHub Pages publishes `gh-pages` at the repository root, with `.nojekyll` and `CNAME` containing `isun1.com`. HTTPS is enforced; its certificate covers apex and www. `https://www.isun1.com/` redirects to `https://isun1.com/`.

Authoritative DNS remains at Wix (`ns14.wixdns.net`, `ns15.wixdns.net`):

| Record | Value |
| --- | --- |
| apex A | `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153` |
| www CNAME | `robinxie1984.github.io` |

Google Workspace MX, SPF, DKIM and existing mail-related aliases were preserved. Website changes must not alter them. The temporary `preview.isun1.com` test record was removed after acceptance. Its noindex artifact remains recoverable in gh-pages commit `bd47f53`.

The old `RobinXie1984/isunone-website` Pages CNAME was released in reversible commit `72daf1379c91e0311761fe5eb094f08ffb74681c`. Do not reattach that legacy repository to the production hostname.

Sites media v1 is retained as a fallback at https://isun1-suntv.robin10.chatgpt.site. Controlled Mainland probes returned widespread HTTP403 on that host while overseas controls succeeded, so it is **not** the accepted Mainland hosting route. Its project ID is `appgprj_6aaa01353d0881918117a898e930ca12`; do not create a duplicate. The `.openai/hosting.json` file describes this fallback, not current GitHub production.

## Release verification

- 10,962 generated HTML pages; 23,314 static files before production CNAME; 398,361,240 bytes.
- Every HTML language/canonical checked; 14,305 distinct local link and asset targets, zero missing targets.
- Complete public-text artifact scan rejects the original media domain, private keys and AppleDouble files.
- 112 GitHub preview routes passed locale, canonical and noindex checks. The same 112 production routes and 42 sampled assets matched the verified artifact byte-for-byte over strictly verified TLS.
- Eight 320-pixel mobile homepages passed overflow and visible-image checks; Hebrew RTL verified. Global carousel controls, search, programme pagination and unpublished authorization lookup were exercised in a browser.
- Mainland preview testing through `http.ping.pro` returned 55 HTTP200 results across 65 probes, including China Telecom, China Unicom and China Mobile; ten DNS failures remained. Initial production test showed cached former-host addresses at some nodes. Timestamped results and limitations are in local `evidence/`; this is sampled access evidence, not an all-network guarantee.
- Google sitewide removal is canceled. Google and Bing received the new sitemap; Bing has zero active URL blocks. Google live inspection of `/robin/` reported “URL is available to Google” and “Page can be indexed”. Submission and eligibility do not guarantee indexing or ranking.

## Build and deploy a maintenance release

Use Studio for heavy execution. Initiate all transfers from iMac and checksum-verify the bounded files being promoted. Preserve concurrent edits; do not use bidirectional sync or `rsync --delete`.

In the Studio project, use the existing locked Node toolchain (Node 22.13 or later):

```sh
npm ci
node scripts/check-clone.mjs
node scripts/test-authority.mjs
node scripts/test-google-relay.mjs
node scripts/test-public-cache.mjs
npx tsc --noEmit
npm run build:static
python3 scripts/check-static.py dist/client
```

`build:static` produces `dist/client`, generates robots/sitemap from the content source, checks all eight primary route sets, scans public artifacts and refuses a published/populated authorization registry without a current signed verification service. Build logs must be checked for prerender errors as well as process exit status.

Prepare a **new task-owned release directory** from only `dist/client`, preserve a sorted per-file SHA-256 manifest, add `CNAME` with `isun1.com`, and verify the transferred bytes. Never upload `dist/server`, `.env*`, `.dev.vars`, `.wrangler`, private keys, source archives, tools or evidence. `scripts/stage-release.py` is for the retained Sites fallback; it is not the GitHub Pages publishing path.

Publish the verified artifact through a clean, separate checkout/worktree of `gh-pages`. Preserve the previous commit, replace only tracked public artifact files, and inspect the staged changes before a normal commit/push. Keep production `robots.txt` crawlable and retain generated index/noindex decisions; do not promote a preview's blanket noindex policy. The public artifact includes RSC payloads and hashed client assets, which must be released together.

After publishing, confirm GitHub Pages build success, HTTPS enforcement, apex200/www301, all eight languages, search and page2 navigation, carousel, contact fallback, honest authorization state, canonical Person identity, sitemap XML, crawler access, 404 response, domain isolation and sampled Mainland carrier access. Save the new receipt and update this README and `PROJECT_STATE.md`.

## Rollback

Prefer restoring a known-good **media** artifact in a new gh-pages commit while keeping `CNAME`, mail DNS and the domain claim intact. Use the previous commit's complete public tree, not just HTML, because asset hashes and RSC payloads must match. Verify production before calling rollback complete.

The first good static production artifact is `04268009`. For a host-wide GitHub incident, Sites media v1 is a global fallback with known Mainland limitations. Restoring it requires apex A `162.159.143.30` and `172.66.3.26`, www CNAME `custom-domains.chatgpt.site`, active existing custom domains and strict HTTPS checks. The corresponding verification TXT records were retained. Do not remove mail records or change nameservers.

Legacy restoration is an emergency-only separate decision: recover the archived repository and its earlier DNS/configuration, retain noindex, and document why. Never reindex retired financial-business pages accidentally. A rollback does not authorize deleting the private archive.

## Content, identity and authorization

Business pages and navigation are authored in Simplified Chinese, Traditional Chinese, English, French, Spanish, Japanese, Hindi and Hebrew. Source video titles and original playlists are preserved. The inherited 166 source-backed drafts retain their actual language coverage; missing French, Spanish, Hindi and Hebrew episode summaries are explicitly pending and unindexed. Do not invent facts from video titles.

1,338 thumbnails are local, recorded in `lib/thumbnail-cache.json`; ten unavailable source images use the official logo. Fonts, images, text and navigation do not depend on YouTube. Original video playback remains on YouTube and may be unavailable in Mainland China; the site does not claim to host the full library.

Robin's canonical Person ID remains `https://www.tideisun.com/robin#robin-xie`, including the new `/robin/` profile. Visible names, identity aliases and executive/group roles must remain consistent. All site canonicals, alternates and sitemaps use iSun1-local URLs. The public artifact must contain no URLs or runtime dependencies to the original media domain or its subdomains.

The approved authorization registry is **unpublished with zero records**, SHA-256 `e07a0b7ad398a0072511a4f64c093df7f8075b60c28bb14836bbe0f4d383a821`. Check the canonical source before every release; copy only approved changes and reconcile this digest deliberately. Never invent authorization or imply that a portrait/verification illustration proves a license. The static verifier accurately reports the unpublished state and cannot substitute for a live revocation-aware service once records exist.

## Contact and future technical work

The current contact route provides a clear direct-email path to `admin@tideisun.com`. Its online form is disabled and never falsely confirms delivery. Restoring automated submissions requires existing admin mail-relay access plus a server-side endpoint accessible from Mainland China. Secrets must remain server-side; never place them in static JavaScript. The Safari admin session is presently blocked by the locked iMac; an unlock request is already pending.

Technical follow-up, in priority order:

1. Finish DNS-propagation and search-sitemap processing checks; distinguish actual failures from old cached addresses.
2. Complete the authorized relay when existing admin access is available, test delivery and rejection/rate limits, then enable the form. Direct email remains available meanwhile.
3. Before any public authorization records exist, integrate current signed verification/revocation and maintain one approved registry across editions.
4. Add source-backed episode summaries in the remaining languages only after reviewing source material; re-enable indexing per completed page.
5. Assess rights-cleared, Mainland-accessible video hosting after the legacy video backup is secured. This needs storage/rights decisions, not an invented mirror.
6. Review real load times, crawl outcomes and partnership enquiries before further infrastructure changes; keep deployments reproducible and previous artifacts recoverable.

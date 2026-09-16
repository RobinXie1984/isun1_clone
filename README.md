# iSun1 · 阳光卫视

Launch target: **18 September 2026, Taipei time**. This is the independent iSun1 edition of the approved iSunTV website. Implementation is in progress; this document does not certify launch or Mainland access.

## Ownership and locations

Robin Xie owns product intent and authorizes this rebuild and launch. Codex/Maimai owns implementation and evidence. The current request reverses the old iSun1 freeze/de-indexing decision for the new media site only; retired iSunOne financial-business content stays archived.

- Requested local checkout: `/Users/robin/Developer/RobinOS/12_isuntv/isun1_clone`
- Canonical Studio execution copy: `/Users/headlessnick/RobinOS2/12_ventures/12_isuntv/isun1_clone`
- Requested repository: [RobinXie1984/isun1_clone](https://github.com/RobinXie1984/isun1_clone)
- Intended public origin: `https://isun1.com`
- Current source: iSunTV approved source `e55756bcd25bbe6beb8c453b4282288929502f7c`, independently matched to live version 36 on 2026-09-16.

## Archive and rollback

Local backup directory: `/Users/robin/Developer/RobinOS/12_isuntv/isun1_archive`.
`isun1-legacy-20260916.zip` contains 12,410 source, deployment, private-archive, receipt and tool files, with a per-file SHA-256 manifest. Studio and iMac independently verified ZIP CRC and every file hash. ZIP SHA-256: `ef600224830dcf85517884ab002bc4b9d5b92a3b7c84eb09023553fe1fd1bacc`. The separate `isun1-deployment-configuration-20260916.zip` preserves current GitHub Pages settings and freeze/removal receipts. Private customer/order exports are included in the private backup and must never be committed or deployed. Rebuildable Python venv and Git administrative files are omitted; Git bundles preserve recoverable source history.

Legacy deployment is `RobinXie1984/isunone-website`, commit `7bfe2095c1162b499dd51740500b21013e1b8646`, GitHub Pages main/root with `www.isun1.com`. Existing Wix DNS: apex GitHub Pages A records `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`; www CNAME `robinxie1984.github.io`. Nameservers remain `ns14.wixdns.net` and `ns15.wixdns.net`. Recoverable configuration and earlier DNS receipts are archived. Mail records must be preserved during website cutover.

No live replacement or removal-request cancellation until the local ZIP is verified and the new release passes acceptance. Post-launch rollback should restore the previous good **media-site** release; do not accidentally reindex retired financial pages. If emergency legacy restoration is required, retain its noindex policy and document the decision.

## Required release acceptance

- Simplified Chinese default; Traditional Chinese, English, French, Spanish, Japanese, Hindi, Hebrew routes and adapted content.
- Same approved visual design, local assets, navigation, search, programme catalogue, profiles, contact and authorization journeys.
- No public links, redirects, metadata URLs or runtime dependencies to the old media domain or its subdomains. Strict automated scan of rendered HTML, headers, JSON, assets and source-derived URLs before publishing.
- All canonicals, language alternates, sitemap and robots point to iSun1-local URLs. Public crawling enabled after cutover. Cancel old Google sitewide removal and resolve any Bing blocks; notifications are not proof of indexing.
- Robin Person `@id` stays `https://www.tideisun.com/robin#robin-xie`; identity aliases and roles remain consistent, including `/robin`.
- Authorization registry must exactly match the approved source. It is currently unpublished with **zero records**; never fabricate authorization or blockchain validation.
- Mainland HTTP and key-journey checks across China Telecom, China Unicom and China Mobile, with time, location, result, screenshots/results where available. A Hong Kong/Singapore request is not Mainland evidence. External video-platform availability must be reported separately.
- Live desktop/mobile journey verification, sitemap, crawler responses, contact success/failure, noindex removal and actual DNS/TLS checks.

## Maintenance

Keep Studio canonical, initiate transfers only from iMac, compare hashes, and preserve concurrent edits. Follow `PROJECT_STATE.md` for current evidence and next action. Update source, authored translations and authorization registry in one reviewed release; check identity and domain isolation on every build. Runtime secrets remain in the hosting provider, outside Git and archives. Build uses the existing locked Vinext/React toolchain. Deployment and tested rollback instructions will be finalized with the accepted live release.

## Editorial coverage

All eight language editions have authored business pages, navigation, global-collaboration content, programme categories and search/verification/contact labels. The inherited catalogue retains original video titles and source URLs. The existing 166 source-backed video drafts are retained in their available languages; French, Spanish, Hindi and Hebrew summaries remain explicitly marked in preparation and unindexed until authored. Never generate episode facts from titles alone.

## Independent media assets

Catalogue thumbnails are cached under `public/thumbnails` and mapped by `lib/thumbnail-cache.json`. Original videos and playlists remain on YouTube; they may not play in Mainland China. This website does not claim to host the video library. Local text, photography, illustration, fonts and navigation must work without a YouTube request.

## Release checks

Run `node scripts/check-clone.mjs`, `node scripts/test-authority.mjs`, `node scripts/test-google-relay.mjs`, `node scripts/test-public-cache.mjs`, `npx tsc --noEmit`, and the installed Sites build helper in the Studio checkout. The registry check deliberately fails when its approved-source digest changes; reconcile the canonical registry before updating that digest. No private licensing signing key belongs in this repository.

## Standalone hosting candidate

`npm run build:static` generates a server-independent edition in `dist/client`. It preserves server-rendered content and uses browser-side search and pagination. `python3 scripts/check-static.py dist/client` checks every HTML language/canonical and local link/asset target. The build also scans the complete public artifact for the forbidden old domain and private keys, emits robots/sitemap from the same content source, and refuses a populated authorization registry until current verification is integrated.

The static contact page currently offers a clearly labelled direct-email fallback; it does not accept or falsely acknowledge submissions. A server-side mail relay is required before enabling the form. Never place relay credentials in static HTML or JavaScript.

The GitHub Pages acceptance hostname is being prepared independently of the current production route. Preview artifacts have noindex metadata and disallow crawling; production artifacts must retain their generated public robots and sitemap. Deploy only the verified artifact and preserve the previous release. Do not serve the private legacy ZIP, source evidence folders, server bundles, environment files or credentials.

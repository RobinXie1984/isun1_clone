# iSun1 clone — living project state

Updated 2026-09-16 13:33 Taipei time. Execution owner: Codex/Maimai. Intent/approval owner: Robin Xie. Launch deadline: September 18. Launch acceptance complete, with the observed network/content limits below. The unlocked Safari session resolved the mail-access blocker. Website and enquiry form are live; Google and Bing sitemap ingestion succeeded.

## Current release

- New eight-language media site published at https://isun1.com. Simplified default; Traditional, English, French, Spanish, Japanese, Hindi and Hebrew. Source `f14c0fa`, GitHub main at https://github.com/RobinXie1984/isun1_clone. Public artifact on `gh-pages`, release `af4cb9c247d9a4cb2d1939020a727c8517a577c2`.
- Standalone GitHub Pages selected after controlled Mainland probes showed broad HTTP403 failures on Sites hosting. GitHub acceptance preview passed 112 route checks and 55/65 normal-DNS HTTPS probes, including Telecom, Unicom and Mobile; remaining ten DNS failures are recorded, not called success.
- Wix DNS now apex GitHub four addresses 185.199.108.153 through 185.199.111.153; www CNAME robinxie1984.github.io. Google public DNS verifies these, unchanged five Google MX and Wix NS. Strict TLS at GitHub edge verifies apex200 and www301 to apex. Some recursive caches still reach Sites v1; latest /global/ probe has 50 HTTP200, one403 at a former Sites address, thirteen DNS failures and one unresolved/timeout. All three major carriers have successful GitHub responses. No universal-network guarantee is claimed.
- GitHub confirms approved certificate for apex and www, and HTTPS enforcement is enabled. Current production checks matched 112 pages and all 17 generated JS/CSS assets byte-for-byte with normal DNS and strict TLS (129/129).
- Temporary preview DNS was removed after completed testing to avoid an unclaimed hostname. Its noindex artifact is retained in gh-pages history `bd47f53`.
- Legacy GitHub source remains archived/noindex; only its CNAME claim was retired in reversible commit `72daf1379c91e0311761fe5eb094f08ffb74681c`. The old repository no longer owns the public domain.

## Archive and rollback

- Local `/Users/robin/Developer/RobinOS/12_isuntv/isun1_archive` and Studio equivalent contain independently verified legacy ZIP: 12,410 files, 4,525,863,949 ZIP bytes; SHA256 `ef600224830dcf85517884ab002bc4b9d5b92a3b7c84eb09023553fe1fd1bacc`. All members and CRC verified on both machines. Private archives are never published.
- Separate deployment-configuration ZIP SHA256 `22027d5ddb188340d2de35cf036a878b30fdcceb487d605520c6164414681526` preserves previous deployment/freeze configuration.
- Sites media v1 remains available as a global fallback: project appgprj_6aaa01353d0881918117a898e930ca12, preview https://isun1-suntv.robin10.chatgpt.site. Its verified clean package SHA256 `a0a5a6e5518957c916a5b77354858cd2a2a84515cf888cc028b99c99f0c1c81e`. Do not call it Mainland-ready.
- Prefer rollback to a known-good media artifact, not retired financial content. Original iSunTV source/deployment remains unchanged.

## Verification and content limits

- Static artifact: 10,962 HTML pages, 398,361,330 bytes; 14,305 internal link/asset targets, zero structural errors. Strict old-domain/private-key scan passed. Eight 320px mobile homepages and all eight enabled contact pages passed overflow/image checks; Hindi global and Hebrew contact screenshots inspected, desktop carousel pause/next passed.
- Browser search, programme page2 and unpublished authorization lookup passed. Canonical Robin Person ID remains https://www.tideisun.com/robin#robin-xie. Registry exactly matches approved source: unpublished, zero records. Static build refuses a populated registry until signed verification is integrated.
- 1,338 locally cached thumbnails; ten unavailable source images use logo fallback. YouTube videos remain external and may not play in Mainland China. Available 166 source-backed drafts retained; incomplete video-summary translations remain visibly pending/unindexed.
- Contact form is enabled in eight languages; Safari and Chrome production submissions succeeded and exact test markers/references were verified in the admin Sent-mail view. Inbox-label placement is not claimed. Direct email to admin@tideisun.com remains available. The existing Google send-only relay and its permissions were reused; its credential is held only in an encrypted server-side Cloudflare binding, never in static files, Git, or machine-to-machine transfers.

## Search reopening

- Google Search Console domain and www properties show Sep14 sitewide removal **Request canceled**, verified 12:13 Taipei.
- Google Search Console now reports sitemap **Success**, last read September 16, **832 discovered pages**. This resolves the initial fetch issue. The count matches the standalone production sitemap. Google live test at 12:18 confirms /robin/ available and indexable, and its indexing request was accepted. Discovery is not proof of indexing/ranking.
- Bing now reports sitemap **Success**, **832 discovered URLs**, zero sitemap errors/warnings and zero active/expired URL blocks. Canonical apex belongs to the existing property.
- Production /global/ normal-DNS Mainland sample: 50 HTTP200, one403 at a cached former Sites IP, thirteen DNS failures and one unresolved/timeout. New GitHub IPs succeeded across Telecom, Unicom and Mobile; propagation remains incomplete.

## Enquiry service release — September 16

- Dedicated Cloudflare Worker `isun1-enquiry` in existing Tidenet Ltd. account; active version prefix `ea75be42`. Public form endpoint: https://isun1-enquiry.isunmedia.com/contact . Only this new media subdomain was attached; no existing root site, mail records, nameservers, or original site route changed.
- Default workers.dev hostname was rejected as the public endpoint after 64/65 Mainland DNS failures. Dedicated media hostname returned 57/65 HTTP200, with Telecom/Unicom/Mobile successes; eight DNS failures remain recorded.
- Existing Apps Script version1, fixed recipient and send-only scope unchanged. Global relay limits remain 3/visitor/15 minutes and 100/day, shared with the original site. Timestamp/HMAC/nonce validation, bounded input, exact-origin CORS, no automatic resend and honest error fallback retained. Secrets are encrypted server bindings.
- Four authorized bounded test messages: two direct backend calls and one each from Safari and Chrome. Browser references: `4893f3c5-f8e9-4e07-9800-5a58a62b6fda` and `bfcf1674-4831-4320-943e-9a7637134342`. Exact markers and recipient verified in Workspace Sent mail; no claim of Inbox-label placement. Subsequent direct request returned HTTP429 without sending.
- Twenty-five worker fixtures, existing relay security/limit fixtures, TypeScript and production static build passed. First typecheck caught an unknown JSON result and accidentally included staging copies; response typing was corrected and work/evidence/dist excluded from the compiler. Full static scan: 10,962 HTML pages and 14,305 local targets, zero errors; old-domain/private-key scan passed. All 129 live page/asset checks matched the artifact.
- All eight live contact pages at 320px: form enabled, no horizontal overflow, no broken visible images, Hebrew RTL. Safari and Chrome both show provider-confirmed success after real submission. A standalone Chrome health-page navigation was client-blocked, while its actual website form worked; no browser security protection was changed.
- Source and operational evidence are retained on iMac and Studio. Public code, maintenance/rollback and acceptance documentation are on GitHub. Exact manifests and transfer receipts live under `evidence/mail-resume-20260916/`; preceding status/staging files are historical rollback evidence.

## Rollback and next action

Immediate frontend rollback: `04268009c4b5ab8ca269997fe83846dc5ded3d75`, the working media release with explicit direct-email fallback. Emergency backend pause: set this worker's `ENABLED=false`; preserve the shared Google relay used by the original site. The broader site/archive rollback is documented in README. No new OAuth scope, inbox permission, paid plan or recurring daemon was introduced.

Robin action: none for launch acceptance. Remaining technical follow-up: watch real partner enquiries and crawl results; recheck lingering carrier DNS failures; complete source-backed untranslated episode drafts; add live signed authorization verification before any records are published; assess rights-cleared Mainland video hosting after backup and rights decisions. These are ongoing maintenance/editorial work, not concealed launch blockers.

Source/registry invariant: original approved source remains `e55756bcd25bbe6beb8c453b4282288929502f7c`. Original Studio registry and both clone copies match SHA256 `e07a0b7ad398a0072511a4f64c093df7f8075b60c28bb14836bbe0f4d383a821`: unpublished, zero records. The verified private archives remain at the documented locations. No original-site content or registry mutation was made.

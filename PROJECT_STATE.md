# iSun1 clone — living project state

Updated 2026-09-16 12:31 Taipei time. Execution owner: Codex/Maimai. Intent/approval owner: Robin Xie. Launch deadline: September 18. Goal ACTIVE; remaining production verification and indexing follow-through in progress.

## Current release

- New eight-language media site published at https://isun1.com. Simplified default; Traditional, English, French, Spanish, Japanese, Hindi and Hebrew. Source `3c6d2e47362ab9148e322567676d58a847fe3a2c`, GitHub main at https://github.com/RobinXie1984/isun1_clone. Public artifact on `gh-pages`, release `04268009c4b5ab8ca269997fe83846dc5ded3d75`.
- Standalone GitHub Pages selected after controlled Mainland probes showed broad HTTP403 failures on Sites hosting. GitHub acceptance preview passed 112 route checks and 55/65 normal-DNS HTTPS probes, including Telecom, Unicom and Mobile; remaining ten DNS failures are recorded, not called success.
- Wix DNS now apex GitHub four addresses 185.199.108.153 through 185.199.111.153; www CNAME robinxie1984.github.io. Google public DNS verifies these, unchanged five Google MX and Wix NS. Strict TLS at GitHub edge verifies apex200 and www301 to apex. Some recursive caches still reach Sites v1; production first pass had 48 HTTP200, six403 at the former Sites addresses, ten DNS failures and one unresolved/timeout. Recheck after propagation.
- GitHub confirms approved certificate for apex and www, and HTTPS enforcement is enabled. Production HTTP checks matched 112 verified artifact pages byte-for-byte with strict TLS.
- Temporary preview DNS was removed after completed testing to avoid an unclaimed hostname. Its noindex artifact is retained in gh-pages history `bd47f53`.
- Legacy GitHub source remains archived/noindex; only its CNAME claim was retired in reversible commit `72daf1379c91e0311761fe5eb094f08ffb74681c`. The old repository no longer owns the public domain.

## Archive and rollback

- Local `/Users/robin/Developer/RobinOS/12_isuntv/isun1_archive` and Studio equivalent contain independently verified legacy ZIP: 12,410 files, 4,525,863,949 ZIP bytes; SHA256 `ef600224830dcf85517884ab002bc4b9d5b92a3b7c84eb09023553fe1fd1bacc`. All members and CRC verified on both machines. Private archives are never published.
- Separate deployment-configuration ZIP SHA256 `22027d5ddb188340d2de35cf036a878b30fdcceb487d605520c6164414681526` preserves previous deployment/freeze configuration.
- Sites media v1 remains available as a global fallback: project appgprj_6aaa01353d0881918117a898e930ca12, preview https://isun1-suntv.robin10.chatgpt.site. Its verified clean package SHA256 `a0a5a6e5518957c916a5b77354858cd2a2a84515cf888cc028b99c99f0c1c81e`. Do not call it Mainland-ready.
- Prefer rollback to a known-good media artifact, not retired financial content. Original iSunTV source/deployment remains unchanged.

## Verification and content limits

- Static artifact: 10,962 HTML pages, 398,361,240 bytes; 14,305 internal link/asset targets, zero structural errors. Strict old-domain/private-key scan passed. Eight 320px mobile editions passed overflow/image checks; Hindi global screenshot inspected, desktop carousel pause/next passed.
- Browser search, programme page2 and unpublished authorization lookup passed. Canonical Robin Person ID remains https://www.tideisun.com/robin#robin-xie. Registry exactly matches approved source: unpublished, zero records. Static build refuses a populated registry until signed verification is integrated.
- 1,338 locally cached thumbnails; ten unavailable source images use logo fallback. YouTube videos remain external and may not play in Mainland China. Available 166 source-backed drafts retained; incomplete video-summary translations remain visibly pending/unindexed.
- Contact offers explicit direct email to admin@tideisun.com. Form is disabled, no false submission confirmation. Existing admin mail-relay session in Safari is inaccessible while iMac locked; earlier unlock question pending. No passwords requested and no mail secrets copied. Server-backed form delivery remains unverified.

## Search reopening

- Google Search Console domain and www properties show Sep14 sitewide removal **Request canceled**, verified 12:13 Taipei.
- https://isun1.com/sitemap.xml submitted to domain property; submission accepted, fetch status still Couldn't fetch at 12:25. Independent strict-TLS fetch returns valid XML, 832 canonical static URLs. Google live test at 12:18 confirms /robin/ available to Google and indexable; its indexing request was accepted into the priority crawl queue. Actual indexing remains external/UNKNOWN.
- Bing reports zero active/expired URL blocks; canonical apex already belongs to the existing property. New sitemap submission accepted, Processing.
- Production /global/ normal-DNS Mainland sample: 49 HTTP200, six403 all at cached former Sites IPs, ten DNS failures. New GitHub IPs succeeded across Telecom, Unicom and Mobile; propagation remains incomplete.

## Next action

All 42 sampled production assets matched verified bytes. Checksum-mirror README/status/evidence to Studio and preserve the final commit. Follow through after recursive DNS caches expire and Google retries its sitemap fetch. Existing Safari admin access is still blocked by iMac lock (fresh check 12:18); pending unlock question remains the only Robin action. Complete the authorized mail integration once accessible. Direct-email contact remains available; do not claim automatic form delivery or universal propagation.

# iSun1 clone — living project state

Updated 2026-09-16, Taipei time. Owner: Codex/Maimai. Decision owner: Robin Xie.
Goal: launch the complete eight-language, Mainland-accessible iSunTV-design clone at iSun1.com by September 18. ACTIVE; preview deployed; production DNS cutover submitted, HTTPS validation pending. No completion claim.

## Current evidence

- Previous visible goal work concerned iSunTV DMARC, not this new objective. This continuation made fresh discovery progress; no verified iSun1 clone or archive existed in the requested local folders at entry.
- Current iSun1 is the frozen GitHub Pages legacy site. Studio canonical `isunone/isunone-website` is preserved. Live GitHub Pages configuration and source commit verified.
- Legacy ZIP created and fully verified on Studio: 12,410 files, 7,480,853,498 source bytes; ZIP 4,525,863,949 bytes; SHA256 ef600224830dcf85517884ab002bc4b9d5b92a3b7c84eb09023553fe1fd1bacc. Local transfer session 98787 completed; local CRC, full ZIP SHA-256 and all 12,410 member hashes independently passed. No production mutation.
- Independent iSun1 source initialized from live version 36; new Sites project appgprj_6aaa01353d0881918117a898e930ca12 registered once, version 1 published at https://isun1-suntv.robin10.chatgpt.site; public preview excluded from indexing by host guard. Original Site identity not reused. Initial source defaults root to Simplified Chinese, uses iSun1 URLs, preserves canonical Robin Person ID and zero-record authorization register.
- Eight business-language editions integrated, including 153 French/Spanish/Hindi brand-copy entries each, global page, navigation/catalogue/search/detail labels. TypeScript and first production build passed; 64 representative HTTP route checks passed. Original summary translation gaps remain explicitly labelled. 1,338 local thumbnails verified on both machines; 10 unavailable source images use official-logo fallback.
- Google removal prefix is `https://www.isun1.com/`; original request recorded Sep 14. Reversal awaits new-site readiness. Bing previously had no active block but IndexNow notifications submitted. Both require current recheck.
- Cloudflare login works but iSun1 authoritative NS remain Wix. Existing Wix Chrome tab available.
- Mainland testing service 17ce failed to resolve from this environment; alternative GFWCheck requires a new account/credits, not used. Seek free existing test services before an access escalation. Mainland availability UNKNOWN.

## Next action

Local archive and first preview complete (HTTP 200, Simplified Chinese rendered). Studio dev session 8807, http://192.168.68.59:5174/. Next: author all eight language editions; enforce domain isolation, synchronize registry, test and deploy. 112 hosted routes passed. On 2026-09-16 11:25 Taipei, apex A changed to 162.159.143.30 / 172.66.3.26 and www CNAME to custom-domains.chatgpt.site; four ownership TXT records added. Public Google DNS confirms new web records and unchanged Google Workspace MX. Provider ownership active, HTTPS pending_validation for both hosts. Do not claim live-domain readiness or cancel removal request until HTTPS and new content are verified. Safari mail-relay access is held by macOS lock; Robin has been asked only to unlock iMac. Other work continues.

## Current deployment / resumption

- Source and GitHub main: ef1734abbcfac4eb5ebbf4e25759b106635b02ae. Repository https://github.com/RobinXie1984/isun1_clone.
- Sites project appgprj_6aaa01353d0881918117a898e930ca12; version appgprj_6aaa01353d0881918117a898e930ca12~appgver_157ac39219f481919226d28011232ddb; deployment appgdep_6aaa09425cb08191ab6057c1016d2f7c succeeded.
- Custom-domain IDs: apex appgdom_6aaa098592bc819181551f26db91b8a1; www appgdom_6aaa0a1b4ab8819189c6b45aa7dba8c7. Both pending HTTPS as of 11:25 Taipei.
- Clean package evidence/isun1-v1-clean.tar.gz SHA256 a0a5a6e5518957c916a5b77354858cd2a2a84515cf888cc028b99c99f0c1c81e. First package contained AppleDouble entries and was rejected locally, never uploaded. COPYFILE_DISABLE=1 fixes packaging.
- All eight homepages visually/DOM checked at 390px; no horizontal overflow or broken above-fold images. French global mobile screenshot inspected. Language menu shows eight choices; carousel pause/next works.
- Mail is disabled with a clear direct-email fallback to admin@tideisun.com. Existing Sites secrets are redacted on retrieval; need existing admin Safari session, not a new privilege or paid service. iMac locked; unlock request pending. Chrome has nanobin only.
- Mainland baseline at http.ping.pro used 65 nodes against the legacy site. All three major carriers produced successful HTTP/redirect results, with DNS failures on some nodes. New production site still requires fresh post-cutover tests. BiuPing repeated identical per-carrier measurements, so do not treat its carrier independence as proven.
- Next: finish HTTPS activation, verify production content/indexability/redirects, reverse Google removal and inspect Bing, check post-cutover Mainland networks, enable/test approved relay once Safari accessible, finalize README and evidence.

## 11:42 Taipei — production validation and hosting correction

Both custom hostnames now have active TLS. New apex content verified HTTP 200, zh-Hans, correct canonical, index/follow, no old media domain. www verifies HTTP 308 to apex. DNS caches still vary. Mainland controlled probes to the current IP fail on multiple Telecom/Unicom/Mobile nodes with HTTP 403; Japan/US/Singapore controls return 200. Two Xiamen nodes returned 200; this does not pass multi-network acceptance. Search-removal reversal remains held.

Preparing a standalone static-export pilot for existing GitHub hosting because direct Cloudflare deployment credentials on Studio belong to a different account and cannot access Tidenet. No new credentials/scopes purchased or granted. Pilot changes are uncommitted in clone; deployed Sites v1 is unchanged. Current pilot build failed during prerender with NEXT_NOT_FOUND; bounded diagnosis in progress. This is not a completed launch.

## 11:57 Taipei — standalone candidate passed local acceptance

Static export now builds successfully: 10,962 HTML pages, 398,361,240 bytes before .nojekyll. Complete structural scan checks 14,305 local link/asset targets with zero errors, and all eight language groups. Fixed a real multi-root-layout 404 export failure, explicit locale generation and dynamic query handling. Search and programme pagination now read browser queries after hydration; authorization lookup preserves the honest unpublished state. No fabricated acceptance or records. A build gate blocks future populated registries until current signed verification is integrated.

Local browser tests passed search for 李德伦 (one result), programme page 2 (episode 25 first), and an unissued test authorization returning register not enabled. Public GitHub preview preparation in progress; live Sites route remains v1. Full Mainland acceptance still FAIL on that host. Mail session remains locked after a fresh Safari check; the existing unlock question remains pending.

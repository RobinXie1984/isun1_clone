# iSun1 release acceptance — 16 September 2026

Live site: https://isun1.com/
Source: `f14c0fa`
Public artifact: `af4cb9c247d9a4cb2d1939020a727c8517a577c2`

| Check | Result |
| --- | --- |
| Legacy backup | Both machines verified ZIP CRC, full SHA-256 and 12,410 member hashes |
| Build | 10,962 HTML pages; 23,314 public files; 398,361,330 bytes before CNAME |
| Internal targets | 14,305 link/asset destinations checked; zero missing targets |
| Domain isolation | Complete generated public-text scan passed; no original media-domain dependency |
| Eight-language/mobile | Eight locale homepages and all eight enabled contact pages checked at 320px; no horizontal overflow/broken visible images; Hebrew RTL |
| Key interactions | Search, programme pagination, carousel and honest unpublished authorization result exercised |
| Production artifact | 112 routes and all 17 generated JS/CSS assets matched verified bytes; normal DNS, strict TLS |
| HTTPS | GitHub certificate approved for apex/www; HTTPS enforced; www301 redirects to apex |
| Mail DNS | Existing Google MX/SPF/DKIM preserved; Wix nameservers unchanged |
| Mainland preview | 55/65 HTTPS responses200; Telecom/Unicom/Mobile represented; ten DNS failures retained |
| Mainland production /global/ | 50/65 responses200; one403 at a cached former Sites IP; thirteen DNS failures and one unresolved/timeout |
| Google reopening | Old sitewide removal canceled; sitemap Success, 832 discovered pages; /robin/ live test indexable and indexing request accepted |
| Bing reopening | Zero active blocks; sitemap Success, 832 discovered URLs; zero sitemap errors/warnings |
| Enquiry endpoint | 57/65 Mainland HTTP200, including Telecom/Unicom/Mobile; eight DNS failures |
| Live form | Safari and Chrome successful submissions; matching Workspace sent-mail records; separate real HTTP429 rejection; 25 worker checks passed |
| Authorization registry | Exact approved source; unpublished, zero records; static build fails if populated without live verification |

## Explicit remaining limits

- DNS propagation is incomplete at some recursive resolvers. A successful carrier sample does not guarantee all networks or future availability.
- Both search engines have successfully read the sitemap. Discovery and accepted indexing requests do not guarantee indexing or ranking.
- The form is enabled. Provider acceptance and exact sent-mail records are verified; Inbox-label placement is not claimed. Direct email remains available on delivery failures. The shared relay limits both sites to 100 enquiries/day.
- Original YouTube videos may not play in Mainland China. The locally served website and images do not require YouTube.
- The inherited 166 source-backed summaries retain their real language coverage; unfinished translations are labelled and unindexed.

Raw timestamped receipts are stored in the project `evidence/` directory on iMac and Studio. They include static-structure-checks.json, github-production-route-checks.json, github-pages-production.json, dns-github-production.json, mainland-github-preview.json, mainland-production-propagation.json, search-reopening.json and browser-acceptance.json. Evidence and private backups are deliberately excluded from public Git and deployment. See README for exact locations, maintenance and rollback.

Current form-release evidence is in `evidence/mail-resume-20260916/`: source-sync, build log, static manifest, publication receipt, 129 live artifact checks, backend tests, real rate-limit response, carrier results and browser/mail acceptance. No credentials or private mailbox contents are included in public Git.

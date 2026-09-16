# iSun1 release acceptance — 16 September 2026

Live site: https://isun1.com/  
Source: `3c6d2e47362ab9148e322567676d58a847fe3a2c`  
Public artifact: `04268009c4b5ab8ca269997fe83846dc5ded3d75`

| Check | Result |
| --- | --- |
| Legacy backup | Both machines verified ZIP CRC, full SHA-256 and 12,410 member hashes |
| Build | 10,962 HTML pages; 23,314 public files; 398,361,240 bytes before CNAME |
| Internal targets | 14,305 link/asset destinations checked; zero missing targets |
| Domain isolation | Complete generated public-text scan passed; no original media-domain dependency |
| Eight-language/mobile | Eight locale homepages checked at 320px; no horizontal overflow/broken visible images; Hebrew RTL |
| Key interactions | Search, programme pagination, carousel and honest unpublished authorization result exercised |
| Production artifact | 112 routes and 42 sampled assets matched verified bytes; strict TLS |
| HTTPS | GitHub certificate approved for apex/www; HTTPS enforced; www301 redirects to apex |
| Mail DNS | Existing Google MX/SPF/DKIM preserved; Wix nameservers unchanged |
| Mainland preview | 55/65 HTTPS responses200; Telecom/Unicom/Mobile represented; ten DNS failures retained |
| Mainland production /global/ | 49/65 responses200; six403 at former Sites IPs still cached; ten DNS failures |
| Google reopening | Old sitewide removal canceled; sitemap Success, 832 discovered pages; /robin/ live test indexable and indexing request accepted |
| Bing reopening | Zero active blocks; sitemap Success, 832 discovered URLs; zero sitemap errors/warnings |
| Authorization registry | Exact approved source; unpublished, zero records; static build fails if populated without live verification |

## Explicit remaining limits

- DNS propagation is incomplete at some recursive resolvers. A successful carrier sample does not guarantee all networks or future availability.
- Both search engines have successfully read the sitemap. Discovery and accepted indexing requests do not guarantee indexing or ranking.
- Contact's direct-email link works. Automatic form delivery is disabled and untested while the existing Safari admin session is inaccessible behind the iMac lock. No false delivery confirmation is shown.
- Original YouTube videos may not play in Mainland China. The locally served website and images do not require YouTube.
- The inherited 166 source-backed summaries retain their real language coverage; unfinished translations are labelled and unindexed.

Raw timestamped receipts are stored in the project `evidence/` directory on iMac and Studio. They include static-structure-checks.json, github-production-route-checks.json, github-pages-production.json, dns-github-production.json, mainland-github-preview.json, mainland-production-propagation.json, search-reopening.json and browser-acceptance.json. Evidence and private backups are deliberately excluded from public Git and deployment. See README for exact locations, maintenance and rollback.

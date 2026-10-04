# Analytics

Service: LibreCounter (cookieless page-view pixel, no account, no consent banner).

Site id: `oplante.github.io` (the live host). LibreCounter reads it from the page referrer. There is no separate account id.

Tracker (official hidden page-view pixel, not the unique-visitor image):

```html
<img src="https://librecounter.org/counter.svg" referrerPolicy="unsafe-url" width="0" height="0" alt="" style="position:absolute;width:0;height:0;border:0" />
```

`counter.svg` counts page views. `unique.svg` is not used. The image is zero-size and out of flow so the design does not change.

Stats:

`GET https://librecounter.org/oplante.github.io/siteStats?days=2`

- `byDay[].value` is page views for that calendar day. Use the previous calendar day, not today (`days=1` is today only and is still incomplete).
- There is no visitor count (no distinct visitors).
- `byPage` is totals for the whole requested window, not split by day.

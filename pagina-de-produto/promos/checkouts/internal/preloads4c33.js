
    (function() {
      var baseURL = "https://cdn.shopify.com/shopifycloud/checkout-web/assets/";
      var scripts = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/polyfills-legacy.BFV2MhXp.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/app-legacy.B_SrRWsA.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/OnePage-legacy.CLR3ANQx.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/DeliveryMethodSelectorSection-legacy.C4UD9SZC.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/VaultedDeliveryAddress-legacy.BU0CCDeM.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/Rollup-legacy.Bm9rz4nc.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/useUnauthenticatedErrorModal-legacy.CAysKAYX.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/ShopPayLogo-legacy.Dzdka6kZ.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/PurchaseOptionsAgreement-legacy.DsgRh2h6.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/PickupPointCarrierLogo-legacy.D8ycQrjs.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/hooks-legacy.COlo7hRg.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/LegacyVaultedShippingMethods-legacy.pCOG-w2L.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/Option-legacy._md8IPxX.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/OnePageModal-legacy.Dgqz_JvV.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/useShowShopPayOptin-legacy.D5p_40G5.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/Section-legacy.CZFMvA0W.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/google-pay-legacy.sZy7SFI1.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/PayButtonSection-legacy.ClwNepRE.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/context-legacy.FERGfN6H.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/publishMessage-legacy.CJZCe4xB.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/DutyOptions-legacy.BhdCwpfJ.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/SubscriptionPriceBreakdown-legacy.BdwjaVLE.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/StockProblemsLineItemList-legacy.DiEMxVJX.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/component-ShopPayVerificationSwitch-legacy.Bx1tAEZ4.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/index-legacy.CGGN8LAF.js"];
      var styles = [];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = [];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = [baseURL].concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res, next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        })();
      }

      function onLoaded() {
        preconnectAssets();
        prefetchAssets();
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  
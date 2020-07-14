const EMBED_BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://embed-scripts.onrender.com"
    : "https://db49aa9722b5.ngrok.io";

export default function Home() {
  return (
    <div className="container">
      <div>Hiiii</div>

      <button
        className="zmurl-checkout-modal-button"
        type="button"
        data-zmurl-action="checkout"
        data-zmurl-event-id="evt-QDi9j97FsQl9O2h"
      >
        Buy Tickets
      </button>

      <script
        id="zmurl-checkout"
        src={`${EMBED_BASE_URL}/checkout-button.js`}
      />

      {/*<script src="https://gumroad.com/js/gumroad-embed.js" />*/}
      {/*<div className="gumroad-product-embed" data-gumroad-product-id="IDiZb">*/}
      {/*  <a href="https://gumroad.com/l/IDiZb">Loading...</a>*/}
      {/*</div>*/}

      <button id="eventbrite-widget-modal-trigger-112325334098" type="button">
        EVENTBERITE Buy Tickets
      </button>

      <script src="https://www.eventbrite.com/static/widgets/eb_widgets.js" />

      <script
        type="text/javascript"
        dangerouslySetInnerHTML={{
          __html: `
            var exampleCallback = function() {
              console.log('Order complete!');
            };

            window.EBWidgets.createWidget({
              widgetType: 'checkout',
              eventId: '112325334098',
              modal: true,
              modalTriggerElementId: 'eventbrite-widget-modal-trigger-112325334098',
              onOrderComplete: exampleCallback
            });
          `,
        }}
      />

      <style jsx global>{`
        html,
        body {
          background-color: #f5f8fa;
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}

import Script from "next/script";

const pageID = process.env.NEXT_PUBLIC_FACEBOOK_PAGE_ID;

function FaceBook() {
  return (
    <div>
      <div id="fb-root"></div>
      <div id="fb-customer-chat" className="fb-customerchat"></div>
      <Script
        id="facebook"
        dangerouslySetInnerHTML={{
          __html: `
            var chatbox = document.getElementById('fb-customer-chat');
            chatbox.setAttribute("page_id", ${pageID});
            chatbox.setAttribute("attribution", "biz_inbox");
            
            window.fbAsyncInit = function() {
              FB.init({
                xfbml: true,
                version: 'v16.0'
              });
            };

            (function(d, s, id) {
              var js, fjs = d.getElementsByTagName(s)[0];
              if (d.getElementById(id)) return;
              js = d.createElement(s); js.id = id;
              js.src = 'https://connect.facebook.net/vi_VN/sdk/xfbml.customerchat.js';
              fjs.parentNode.insertBefore(js, fjs);
            })(document, 'script', 'facebook-jssdk');
          `,
        }}
      />
    </div>
  );
}

export default FaceBook;

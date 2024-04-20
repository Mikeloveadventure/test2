const Home = () => {
    const intercomScript = `
      <script>
        window.intercomSettings = {
          api_base: "https://api-iam.intercom.io",
          app_id: "pjd2a4rs",
          name: "Ram", // Full name
          user_id: "267", // a UUID for your user
          email: "ram@gmail.com", // the email for your user
          created_at: Date.now() // Signup date as a Unix timestamp
        };
      </script>
  
      <script>
        // We pre-filled your app ID in the widget URL: 'https://widget.intercom.io/widget/pjd2a4rs'
        (function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',w.intercomSettings);}else{var d=document;var i=function(){i.c(arguments);};i.q=[];i.c=function(args){i.q.push(args);};w.Intercom=i;var l=function(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/uwwrolxb';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);};if(document.readyState==='complete'){l();}else if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})();
      </script>
    `;
  
    return (
      <>
        <h1>Intercom Testing</h1>
        <div dangerouslySetInnerHTML={{ __html: intercomScript }} />
      </>
    );
  };
  
  export default Home;
  

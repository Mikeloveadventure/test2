const Home = () => {
    const intercomScript = `
      <script type="text/javascript">
  (function(d, t) {
      var v = d.createElement(t), s = d.getElementsByTagName(t)[0];
      v.onload = function() {
        window.voiceflow.chat.load({
          verify: { projectID: '662501360d7189e2f702aa48' },
          url: 'https://general-runtime.voiceflow.com',
          versionID: 'production'
        });
      }
      v.src = "https://cdn.voiceflow.com/widget/bundle.mjs"; v.type = "text/javascript"; s.parentNode.insertBefore(v, s);
  })(document, 'script');
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
  

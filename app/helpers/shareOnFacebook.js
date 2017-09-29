const shareOnFacebook = src => {
  FB.ui(
    {
      method: 'share',
      display: 'popup',
      href: src
    },
    function(response) {}
  );
};

export default shareOnFacebook;

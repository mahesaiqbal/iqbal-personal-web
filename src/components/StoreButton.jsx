function StoreButton({ googlePlayUrl, appStoreUrl }) {
  return (
    <div className="flex gap-4 items-center justify-center mt-6">
      {googlePlayUrl && (
        <a href={googlePlayUrl} target="_blank" rel="noopener noreferrer">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
            alt="Get it on Google Play"
            className="h-12"
          />
        </a>
      )}
      {appStoreUrl && (
        <a href={appStoreUrl} target="_blank" rel="noopener noreferrer">
          <img
            src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
            alt="Download on the App Store"
            className="h-12"
          />
        </a>
      )}
    </div>
  );
}

export default StoreButton;

import { Download, Features, SectionWrapper } from "./components";
import assets from "./assets";
const App = () => {
  return (
    <>
      <SectionWrapper
        title="You own store of Nifty NFTs. Start Selling & Grownig"
        description="Buy, store, collect NfTs, exchange & earn crypto. Join 25+ million NFTs in the NFT ecosystem."
        showBtn
        mockupImg={assets.homeHero}
        banner="banner"
      />
    </>
  );
};

export default App;

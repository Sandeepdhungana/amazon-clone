import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/WLA/Jan21/Headset/GW/v2/D20435715_WLA_BAU_Headsets_Heroes-Handpicked_DesktopTallHero_1500x600._CB662573932_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id="1234"
            title="Samsung Galaxy Note10 Lite (Aura Glow, 8GB RAM, 128GB Storage)"
            price={360}
            image="https://rukminim1.flixcart.com/image/352/352/k5r2mq80/mobile/z/h/a/samsung-galaxy-note10-lite-sm-n770fzkninu-original-imafzd7zhbhzfxjd.jpeg?q=70"
            rating={5}
          />
          <Product
            id="1235"
            title="NSTAR Back Cover for Samsung Galaxy Note 10 Plus"
            price={29.99}
            image="https://rukminim1.flixcart.com/image/352/352/k0463rk0/cases-covers/back-cover/n/8/v/nstar-bomtpnt10pls-3-original-imafjyr2z2ysense.jpeg?q=70"
            rating={3}
          />
        </div>
        <div className="home__row">
          <Product
            id="1236"
            title="Samsung Galaxy Note 20 Ultra 5G"
            price={1000}
            image="https://rukminim1.flixcart.com/image/352/352/kdhphu80/mobile/k/d/9/samsung-note-20-canvas-sm-n986bzngins-original-imafudkv3x4gxg9y.jpeg?q=70"
            rating={4}
          />

          <Product
            id="1237"
            title="Samsung Galaxy Note 20"
            price={700}
            image="https://rukminim1.flixcart.com/image/352/352/kdhphu80/mobile/y/c/y/samsung-note-20-canvas-sm-n980fzngins-original-imafudkrgzqqg8m4.jpeg?q=70"
            rating={3}
          />
          <Product
            id="1238"
            title="Karpine Edge To Edge Tempered Glass"
            price={290}
            image="https://rukminim1.flixcart.com/image/352/352/k0zlsi80/screen-guard/edge-to-edge-tempered-glass/5/z/g/karpine-kar5dblksama10s-original-imafknk6zqsdd9gr.jpeg?q=70"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="1239"
            title="Acer Nitro 5 Core i7 10th Gen "
            price={790}
            image="https://rukminim1.flixcart.com/image/352/352/kh0vonk0/computer/y/z/z/acer-original-imafx4uppchbwbys.jpeg?q=70"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;

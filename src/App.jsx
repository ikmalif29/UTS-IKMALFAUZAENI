import { useState } from "react";
import Clotes from "./Components/Clotes";
import Footer from "./Components/Footer";
import Header from "./Components/Header";

function App() {
  const [cartCount, setCartCount] = useState(0);

  const clotes = [
    {
      id: 1,
      name: "GARMOST VINTAGE JACKET RETRO SOFT SUEDE",
      price: "179.000.000",
      color: "Blue & White",
      image: "https://down-id.img.susercontent.com/file/sg-11134201-23010-cnttw5vhxwlv38",
    },
    {
      id: 2,
      name: "Jeans MAN Straight Leg Vintage - Denim",
      price: "229.000.000",
      color: "Blue",
      image: "https://img.lazcdn.com/g/p/5ae48415e70c3fa0a2305b8421d031d5.jpg_960x960q80.jpg_.webp",
    },
    {
      id: 3,
      name: "original vintage jacket leather clasicc",
      price: "1.500.000.000",
      color: "orange",
      image: "https://images.tokopedia.net/img/cache/700/hDjmkQ/2023/7/1/2985b7ef-8a65-4d4b-ab15-fbd54ae6f122.jpg",
    },
    {
      id: 4,
      name: "Cockpit USA The Mod Raider vintage sheepskin jacket made in the USA",
      price: "10.681.114",
      color: "Cokelat",
      image: "https://cdn11.bigcommerce.com/s-98f3d/images/stencil/1280x1280/products/3500/16590/Cockpit_USA_The_Mod_Raiders_Jacket_Brown_open__83402.1629667892.jpg?c=2",
    },
    {
      id: 5,
      name: "T-Shirt BANDEIRA BLACK – Screamous / Daily Wear",
      price: "209.000.000",
      color: "Black",
      image: "https://www.screamous.com/cdn/shop/products/id-11134201-23030-re6f88t6p9nvcd.jpg?v=1677933077",
    },
    {
      id: 6,
      name: "Jaket | Eiger Adventure Official",
      price: "459.000.000",
      color: "Grey",
      image: "https://d1yutv2xslo29o.cloudfront.net/product/variant/photo/910007288_GREY_1_6b92.jpg",
    },
    {
      id: 7,
      name: "Hodiee Vintage",
      price: "150.000.000",
      color: "Grey",
      image: "https://down-id.img.susercontent.com/file/id-11134201-7qul3-lhjtm3dykimzd4",
    },
    {
      id: 8,
      name: "Vintage Long Skirt Embroidered Spandex Skirt",
      price: "142.500.000",
      color: "Black",
      image: "https://images.tokopedia.net/img/cache/700/hDjmkQ/2023/12/4/de8b5312-1624-42b2-89a7-a4d6580f4aba.jpg",
    },
    {
      id: 9,
      name: "T-Shirt BANDEIRA BLACK – Screamous / Daily Wear",
      price: "249.900.000",
      color: "Black",
      image: "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full/catalog-image/99/MTA-155306735/brd-44261_phompphiess-sweater-rugby-vintage-pria-wanita_full01-47f0bf84.jpg",
    },
    {
      id: 10,
      name: "Men's Vintage Casual Abstark Short Sleeve Retro Hawaiian Beachs",
      price: "69.900.000",
      color: "White",
      image: "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//catalog-image/96/MTA-117790232/brd-44261_kemeja-pria-vintage-casual-abstark-lengan-pendek-retro-pantai-hawai-unisex-aneka-motif_full09-114d961f.jpg",
    },
    {
      id: 11,
      name: "Men's Shirts - Long Sleeve Men's Shirts - Vintage Retro Shirts 019",
      price: "379.000.000",
      color: "MIX",
      image: "https://images.tokopedia.net/img/cache/700/product-1/2020/10/30/inv/inv_449d204b-7176-4c15-83b2-266e755341bf_680_680.jpg"
    },
    {
      id: 12,
      name: "Men's Vintage Casual Abstark Short Sleeve Retro Hawaiian Beachs",
      price: "89.900.000",
      color: "Sage",
      image: "https://mausimpan.s3.ap-southeast-1.amazonaws.com/images/products/3bc6e577f6a48ab81f207b8f989ad0bf.jpg",
    },
    
  ];

  // Fungsi untuk menambah item ke cart
  const handleAddToCart = () => {
    setCartCount(cartCount + 1);
  };

  return (
    <>
      <Header cartCount={cartCount} />
      <Clotes product={clotes} onAddToCart={handleAddToCart} />
      <Footer />
    </>
  );
}

export default App;

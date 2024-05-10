import { FaStar } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";

const cardsData = [
  {
    img : "https://images-eu.ssl-images-amazon.com/images/I/61d+WbpFCiL.AC_SL240_.jpg",
      title : "Tata Sampann Unpolished Toor Dal/Arhar Dal, 1kg",
      sellingPrice :"₹207.00",
      actualPrice :"₹269.00",
      discountPrice : "26% OFF",
      rating: 4,
      noOfReviews: 1836
  },
  {
    img : "https://images-eu.ssl-images-amazon.com/images/I/81fXSjG2d6L.AC_SL240_.jpg",
    title : "Supersaver Aashirvaad Select Sharbati Atta, 5 kg, Premium 100%",
    sellingPrice :"₹294.00",
    actualPrice :"₹356.00",
    discountPrice : "17% OFF",
    rating: 5,
    noOfReviews: 4512
  },
  {
    img : "https://images-eu.ssl-images-amazon.com/images/I/710LT8Qp28L.AC_SL240_.jpg",
    title : "Supersaver Aashirvaad Atta with Multigrains, 5kg pack, The High Fibre Atta",
    sellingPrice : "₹313.00",
    actualPrice :"₹379.00",
    discountPrice : "23% OFF",
    rating: 1,
    noOfReviews: 4512
  },
  {
    img : "https://images-eu.ssl-images-amazon.com/images/I/81fccnKL9jL.AC_SL240_.jpg",
    title : "Amazon Brand - Vedaka Sabudana (Sago),Medium,...",
    sellingPrice :"₹65.00",
    actualPrice :"₹85.00",
    discountPrice : "24% OFF",
    rating: 4,
    noOfReviews: 6574
  },
  {
    img : "https://images-eu.ssl-images-amazon.com/images/I/81mi0O6oZoL.AC_SL240_.jpg",
    title : "SeedsAmazon Brand - Vedaka Black Peppercorn (Kali Mirc…",
    sellingPrice :"₹109.00",
    actualPrice :"₹165.00",
    discountPrice : "34% OFF",
    rating: 2,
    noOfReviews: 7854
  },
  {
    img : "https://images-eu.ssl-images-amazon.com/images/I/618lHyWqdML.AC_SL240_.jpg",
    title : "Tata Sampann Unpolished Green Moong Dal (Whole),…",
    sellingPrice :"₹101.00",
    actualPrice :"₹104.00",
    discountPrice : "3% OFF",
    rating: 4.5,
    noOfReviews: 12186
  },
{
    img : "https://images-eu.ssl-images-amazon.com/images/I/71kVnkoyP-L.AC_SL240_.jpg",
    title : "Organic Tattva, Organic Whole Wheat Flour Chakki",
    sellingPrice :"₹300.00",
    actualPrice :"₹399.00",
    discountPrice : "25% OFF",
    rating: 4,
    noOfReviews: 3943
  },
{
    img : "https://images-eu.ssl-images-amazon.com/images/I/91JsALx2o4L.AC_SL240_.jpg",
    title : "Amazon Brand - Vedaka Popular Yellow Moong Dal,…",
    sellingPrice :"₹85.00",
    actualPrice :"₹150.00",
    discountPrice : "43% OFF",
    rating: 4.5,
    noOfReviews: 11796
  },
{
    img : "https://images-eu.ssl-images-amazon.com/images/I/81ILzuTdkbL.AC_SL240_.jpg",
    title : "LFortune Sunlite Refined Sunflower Oil, 1L",
    sellingPrice :"₹110.00",
    actualPrice :"₹125.00",
    discountPrice : "12% OFF",
    rating: 4.5,
    noOfReviews: 33913
},
{
    img : "https://images-eu.ssl-images-amazon.com/images/I/61-zRoFrfqL.AC_SL240_.jpg",
    title : "Tata Salt, 1kg",
    sellingPrice :"₹25.00",
    actualPrice :"₹₹28.00",
    discountPrice : "11% OFF",
    rating: 4.5,
    noOfReviews:63418
  },
]


function App() {
  return (
    <div style={{
      display : "flex",
      gap: "10px",
      flexWrap:  "wrap",
      marginLeft: "20px",
      marginBottom: "20px",
      marginTop: "20px",
    }}>
      {cardsData.map((ele)=> {
        return(
          <div style={{
            width : "250px",
            padding : "10px 20px"
           
          }}>
            <img height= "120px" src={ele.img} alt={ele.title}/>
            <p>{ele.title}</p>
            <FaStar style={{color : "#ffa41c"}}/>
            <FaStar style={{color : "#ffa41c"}}/>
            <FaStar style={{color : "#ffa41c"}}/>
            <FaStar style={{color : "#ffa41c"}}/>
            <FaRegStar />
            <span>{ele.noOfReviews}</span>
            <h3>{ele.sellingPrice}</h3>
            <del>{ele.actualPrice}</del>
            <p>{ele.discountPrice}</p>
            <button style={{
              backgroundColor : 'yellow',
              borderRadius : "30px",
              border: "none",
              padding : '10px 20px'
            }}>Add to Cart</button>
          </div>
        )
      })}
    </div>
  );
}

export default App;

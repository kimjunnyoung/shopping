// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { API_URL } from "../config/contansts";
// import MainProduct from "../main/MainProduct";

// const Search = ({ setShowSearch }) => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [searchResult, setSearchResult] = useState([]);

//   const performSearch = async () => {
//     try {
//       const response = await axios.get(
//         `${API_URL}/search?searchTerm=${searchTerm}`
//       );
//       const products = response.data;
//       setSearchResult(products);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   useEffect(() => {
//     performSearch(); // 검색어가 변경될 때마다 검색 수행
//   }, [searchTerm]);

//   return (
//     <div className="search-container">
//       <input
//         placeholder="검색"
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//       />
//       <button onClick={() => setShowSearch(false)}>닫기</button>
//       {/* 검색 결과를 표시합니다. */}
//       <ul className="search-results">
//         {searchResult.map((product, index) => (
//           <li key={index}>
//             <MainProduct product={product} />
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Search;

//다신 보지 말자.

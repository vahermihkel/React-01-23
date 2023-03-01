import React from 'react'

// 1. Muudan URLi vastuvõtlikkuse muutuja osas+
// 2. Võimaldan kuskilt lehelt sinna URL-le sattuda, saates kaasa selle muutuja+
// 3. Võtame useParams abil muutuja kasutusele (useParams osas import!)+
// 4. Võtame kõik tooted import abil
// 5. Otsime sobiva toote üles (tooted on käes, ID on käes, ketrame kõiki tooteid kuni ID-d matchivad)+
// 6. Teisendame URL parameetri numbriks
// 7. Kuvame HTMLs <div>{productFound.id}</div>
// 8. Valideerimine kui toodet ei leitud (siis võiks teada anda)

// import productsFromFile from "../data/products.json";

function SingleProduct() {
  // const {id} = useParams();
         // productsFromFile[0]  <- esimene   productsFromFile[1] <- teine
  // const found = productsFromFile[49950471]; <- 49miljonilise järjekorranumbri
  // const productFound = productsFromFile.find(element => element.id === Number(id));

  return (
    <div>SingleProduct</div>
  )
}

export default SingleProduct
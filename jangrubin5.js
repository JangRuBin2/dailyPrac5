const basicData = [
  {number : 1, name : "코카콜라", price : 1500},
  {number : 2, name : "사이다", price : 1200},
  {number : 3, name : "포카리스웨트", price : 1000},
  {number : 4, name : "칸쵸", price : 800},
  {number : 5, name : "오예스", price : 1000},
  {number : 6, name : "초코파이", price : 1200},
  {number : 7, name : "허니버터칩", price : 1500},
  {number : 8, name : "새우깡", price : 900},
  {number : 9, name : "치즈볼", price : 1200},
  {number : 10, name : "신라면", price : 900}
];

const currency = {
  thousand : {value:1000, name :"일천원권"},
  fiveThousand : {value:5000, name :"오천원권"},
  tenThousand : {value:10000, name :"일만원권"},
  fiveHundred : {value:500, name :"오백원"},
  hundred : {value:100, name :"일백원"},
};

// 우리 학원 휴게실에 있는 자판기에 들어있는 음료슈의 정보를 담은 배열입니다.
// 아래의 exampleOne()은 임의의 돈에대해 얼마짜리를 넣었는지 확인 할 수 있께 로직을 구성 합니다.
function exampleOne(inputPrice, currency, basicData) {
  // Q1. 넣은 금액에 맞게 currency.thousand.name을 반환하여
  // 금액을 넣었다는 문구를 console.log를 통해 제작하세요
  // Q2. 만약 넣은 금액이 1천원일때 basicData를 통해 구매가능한 상품을
  // console.log에 출력하세요
  // Q3. 만약 넣은 금액이 모든 제품의 가격보다 적다면 잔액이 부족하다는 문구출력
  // Q4. 만약 넣은 금액이 제품 가격보다 많다면 당신은 부자라는 문구 출력
//  console.log(currency.thousand.name)
//  가격 출력
let currencyName = Object.values(currency).map(money => money.name)
let currencyValue = Object.values(currency).map(obj => obj.value)

// for(let i=0; i<currencyValue.length; i++) {
//   if(inputPrice === currencyValue[i]) {
//     // console.log(currencyName[i])
//     return console.log(currencyName[i] + "원을 넣었습니다")
//   } 
// }
for(let i=0; i<basicData.length; i++) {
 if(inputPrice >=basicData[0].price) {
  console.log("gk")
 }
}
//  console.log(currencyName)
//  console.log(currencyValue)


 


}
exampleOne(500,currency,basicData)
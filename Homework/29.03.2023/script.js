// 2. Дан массив с товарами. Для каждого товара создать карточку. Стилизовать карточку (title, price). 
//Если товар есть на складе, то цвет заднего фона сделать зеленым. А если нет - то серым

const products = [
  {
    id: 1,
    title: 'Apple',
    price: 100+" $",
    in_stock: true
  },
  {
    id: 2,
    title: 'Orange',
    price: 200+" $",
    in_stock: false
  },
  {
    id: 3,
    title: 'Kiwi',
    price: 150+" $",
    in_stock: true
  },
  {
    id: 4,
    title: 'Banana',
    price: 300+" $",
    in_stock: false
  }
]
/* objects access */
const apple = products[0];
const orange = products[1];
const kiwi = products[2];
const banana = products[3];
const container = document.querySelector('.container')


/* objects access */

/* objects */
//--------------APPLE------------------
const appleCard = document.createElement("div")
const appleTitle = document.createElement("p")
const applePrice = document.createElement("p")
appleTitle.innerText=apple.title
applePrice.innerText=apple.price
//--------------ORANGE------------------
const orangeCard = document.createElement("div")
const orangeTitle = document.createElement("p")
const orangePrice = document.createElement("p")
orangeTitle.innerText=orange.title
orangePrice.innerText=orange.price
//--------------KIWI------------------
const kiwiCard = document.createElement("div")
const kiwiTitle = document.createElement("p")
const kiwiPrice = document.createElement("p")
kiwiTitle.innerText=kiwi.title
kiwiPrice.innerText=kiwi.price
//--------------BANANA------------------
const bananaCard = document.createElement("div")
const bananaTitle = document.createElement("p")
const bananaPrice = document.createElement("p")
bananaTitle.innerText=banana.title
bananaPrice.innerText=banana.price

/* objects */

/* get class */
const getClass = (object, className) => object.classList.add(className);

getClass(appleCard,'appleCard')
getClass(applePrice,'applePrice')
getClass(appleTitle,'appleTitle')

getClass(orangeCard,'orangeCard')
getClass(orangePrice,'orangePrice')

getClass(kiwiCard,'kiwiCard')
getClass(kiwiPrice,'kiwiPrice')

getClass(bananaCard,'bananaCard')
getClass(bananaPrice,'bananaPrice')
/* get class */

apple.in_stock === true ? appleCard.style.backgroundColor='green':appleCard.style.backgroundColor='grey'
orange.in_stock === true ? orangeCard.style.backgroundColor='green':orangeCard.style.backgroundColor='grey'
kiwi.in_stock === true ? kiwiCard.style.backgroundColor='green':kiwiCard.style.backgroundColor='grey'
banana.in_stock === true ? bananaCard.style.backgroundColor='green':bananaCard.style.backgroundColor='grey'

appleCard.append(appleTitle,applePrice,)

orangeCard.append(orangeTitle,orangePrice)
kiwiCard.append(kiwiTitle,kiwiPrice)
bananaCard.append(bananaTitle,bananaPrice)
container.append(appleCard,orangeCard,kiwiCard,bananaCard)







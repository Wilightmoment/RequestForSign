const categories = document.querySelectorAll('.sign-category')
const start = document.querySelector('.sign-start')
const signMain = document.querySelector('.sign-main')
const bgImg = document.querySelector('.bg-img')
const bgLine = document.querySelector('.bg-line')
const restart = document.querySelector('.restart')
const signDetail = document.querySelector('.sign-detail')
const detailTitle = signDetail.querySelector('.detail-title')
const detailMain = signDetail.querySelector('.detail-main')
const detailLucky = signDetail.querySelector('.detail-lucky')
const bell = document.querySelector('#bell')
let choose = ''
const luckySign = ['大兇', '中兇', '小兇', '大吉', '中吉', '小吉']

categories.forEach(category => category.addEventListener('click', selectCategory))
start.addEventListener('click', startSign)
restart.addEventListener('click', restartSign)

function selectCategory () {
  categories.forEach(category => {
    if (category.classList.contains('active')) {
      category.classList.remove('active')
    }
  })
  this.classList.add('active')
  choose = this.dataset.category
  start.classList.remove('cant')
}

function startSign () {
  if (!choose) return
  const index = Math.floor(Math.random() * luckySign.length)
  const lucky = luckySign[index]
  bell.play()
  if (index < 3) detailLucky.classList.add('red')
  detailLucky.textContent = lucky
  signMain.classList.add('hide')
  bgImg.classList.add('full')
  bgLine.classList.add('active')
  signDetail.classList.add('active')
  detailTitle.classList.add('active')
  setTimeout(()=>{
    detailTitle.classList.add('complete')
    detailMain.classList.add('active')
  }, 4000)
}

function init () {
  choose = ''
  start.className = 'sign-start cant'
  bgImg.className = 'bg-img'
  bgLine.className = 'bg-line'
  signDetail.className = 'sign-detail'
  detailTitle.className = 'detail-title'
  detailMain.className = 'detail-main'
  detailLucky.className = 'detail-lucky'
  categories.forEach(category => {
    if (category.classList.contains('active')) {
      category.classList.remove('active')
    }
  })
  setTimeout(()=>signMain.className = 'sign-main', 1000)
}

function restartSign () {
  init()
}

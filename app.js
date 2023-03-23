// let ism = prompt('Ismingizni kiriting')

// let birinchiharf = ism.charAt().toUpperCase()
// let davomi =ism. slice(1).toLowerCase()
// let hallo = birinchiharf + davomi
// alert(`Salom , ${hallo}`)

// const names = ['miryoqub','suhrob','ilhom']
// for (let i = 0; i<names.length; i++){
//     let headletter = names[i].charAt().toUpperCase()
//     let smollletter = names[i].slice(1).toLocaleLowerCase()
//     let ismlar = headletter+smollletter
//     console.log(ismlar)}
// const mehmonlar = ('Miryoqub','Suhrob')

// if (mehmonlar.length > 3){
// console.log('mehmonlar soni yetarlicha bor')}
//  const parol = 'password00 '
//  if (parol.length >= 12){
//     console.log('Sizning parolingiz juda uzun !')
// }else if (parol.length >= 8){   
//     console.log('Sizning parolingiz yetarlicha kuchli !')
// }else{
//     console.log('sizning parolingiz yetarlicha kuchli emas!')
// }
// let ism = prompt('Ismingizni kiritin:')
// let yosh = +prompt('Yoshingizni kiriting:')

// let yil = 2023-yosh
// let yili = (`Sizning tug'ilgan yilingiz:${yil}`)
// let mons = yosh*12
// let hafta = (yosh*365/7).toFixed()
// let kun = yosh*365
// let aboute = `Qadirli ${ism} . Siz ${yil} -yilda tug'ilgansiz . ${mons} oy yashagansiz. ${hafta} hafta yashagansiz.${kun } kun yashagansiz `
// alert(aboute)

// console.log(yili)
// console.log(`Sizning yashagan oyingiz : ${mons}`)
// console.log(`Sizning yashagan haftangiz : ${hafta}`)
// console.log(`Sizning yashagan kuningiz : ${kun}`)


 
// let ism = prompt('Ismingizni kiriting ')
// if (ismlar.includes(ism)){
//     alert(`Ha. Bu ${ism} ismi  haqiqatdan bor`)
// }else{
//     alert( `Yo'q. Bu ${ism} ismi     yoq `)
// }
// const ismlar = ['Miryoqub','Suxrob','Ilhom','Aziz']

// for (let i = 0; i<ismlar.length; i++){
//     let bekk = `bek`
//     let bek = ismlar[i]+bekk
   
//     console.log(bek)
// } 

// let viloyat =prompt('Qaysi viloyatda yashaysiz?')

// if (viloyat = `Toshkent`){
//     alert(`Toshken viloyatining aholisi soni 327223 . Ularning 20% i  qariyalar, 40% i  o'rta yoshdagilar va 40% i  yoshlar hisoblanadi.`)
// }else if(viloyat = `Farg'ona`){
//     alert(`Farg'ona viloyatining aholisi soni 327223 . Ularning 20% i  qariyalar, 40% i  o'rta yoshdagilar va 40% i  yoshlar hisoblanadi.`)
// }else if(viloyat =` Namangan`){
//     alert(`Namangan  viloyatining aholisi soni 327223 . Ularning 20% i  qariyalar, 40% i  o'rta yoshdagilar va 40% i  yoshlar hisoblanadi.`)
// }

// let viloyatNomi = prompt('Qaysi viloyatda yashaysiz?')

// switch(viloyatNomi){
//      case "Toshkent":
//         alert(`Toshken viloyatining aholisi soni 327223 . Ularning 20% i  qariyalar, 40% i  o'rta yoshdagilar va 40% i  yoshlar hisoblanadi.`)
//         break
//     case "Farg'ona":
//          alert(`Farg'ona viloyatining aholisi soni 327223 . Ularning 20% i  qariyalar, 40% i  o'rta yoshdagilar va 40% i  yoshlar hisoblanadi.`)
//             break
//     case "Namangan":
//         alert(`Namangan viloyatining aholisi soni 327223 . Ularning 20% i  qariyalar, 40% i  o'rta yoshdagilar va 40% i  yoshlar hisoblanadi.`)
//             break
//     default:
//         alert(`Hozircha ${viloyatNomi} viloyati bazada mavjud emas`)
// }

// let ism = prompt(`Ismingizni kiriting`)


const greet = (ism) => {
    return `Hello ${ism}`
}
let result = greet(`Miryoqub`)
console.log(result)

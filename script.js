let list = []
let all_cost = 0

const but_buy_lumonad = document.querySelector("#lumonad_buy")
const but_buy_moxito = document.querySelector("#moxito_buy")
const but_buy_cheaps = document.querySelector("#сheaps_buy")
const but_buy_gummi = document.querySelector("#gummi_buy")
const but_buy_crountons = document.querySelector("#crountons_buy")
const but_ok = document.querySelector("#ok_form_order")
const clear_but = document.querySelector("#clear_basket")

// async function send_order() {
//   const response = await fetch('https://whisking-remark-quickly.ngrok-free.dev/receive-text', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//       product: list,
//       cost: all_cost,
//       player_name: name
//     })
//   });

//   const data = await response.json();
//   console.log(data);
// }

clear_but.addEventListener('click', function (){
    list = []
    all_cost = 0
})

async function send_order() {
  const response = await fetch('https://whisking-remark-quickly.ngrok-free.dev/receive-text', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      product: list,
      cost: all_cost
    })
  });

  const data = await response.json();
  console.log(data);
}

but_buy_lumonad.addEventListener('click', function (){
    all_cost += 15
    list.push('Смачний лимонад 100мл 15грн')
    console.log(list)
})

but_buy_moxito.addEventListener('click', function (){
    all_cost += 15
    list.push('Дуже смачне мохіто 100мл 15грн')
    console.log(list)
})

but_buy_cheaps.addEventListener('click', function (){
    all_cost += 10
    list.push('Чипси сметана і зелень 25гр 10грн')
    console.log(list)
})

but_buy_gummi.addEventListener('click', function (){
    all_cost += 3
    list.push('Жилейки рошен 1шт 3грн')
    console.log(list)
})

but_buy_crountons.addEventListener('click', function (){
    all_cost += 17
    list.push('Сузарики 1порція 17грн')
    console.log(list)
})

async function send_order() {
  const response = await fetch('https://whisking-remark-quickly.ngrok-free.dev/receive-text', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      product: list,
      cost: all_cost,
    })
  });

  const data = await response.json();
  console.log(data);
}

but_ok.addEventListener('click', async function (){
  send_order()
  list = []
  all_cost = 0
})

// async function send_order() {
//   const response = await fetch('https://whisking-remark-quickly.ngrok-free.dev/receive-text', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//       product: list,
//       cost: all_cost,
//       name_player: name
//     })
//   });

//   const data = await response.json();
//   console.log(data);
// }

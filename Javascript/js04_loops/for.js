// * =======================================================
// *             FOR LOOP
// * =======================================================

console.log(" **** FOR ****");

// for (let i = 1; i <= 100; i++) {
//   console.log(`${i}-FS14`);
// }

// // for (let i = 1; i <=128; i *=2) {
// //     console.log('${i}-FS14');
// // }

// const n = prompt("Enter your number");
// let sum = 0;

// for (let i = 1; i <= n; i++) {
//   sum = sum + i;
//   console.log(sum);
// }
// console.log(`SUM: ${sum}`);

const adet = prompt("kac adet sayi uretmek istersiniz:?")

for (let sayac = 1; sayac <= adet; sayac++) {
  const rasgeleSayi = Math.round(Math.random() * 100)
  //   rasgeleSayi++ //*!Uncaught TypeError: Assignment to constant variable.
  console.log(`${sayac}. sayiniz : ${rasgeleSayi}`)
}
//* NOT:
//* Math.floor() =>en yakin alt tamsayiya yuvarlar
//* Math.ceil() =>en yaki ust tamsayiya yuvarlar
//* Math.round() => degerine gore yuvarlar.
//* Math.trunc() => kesirli sayinin tam kismini alir.

//? ODEV1: Girilen bir sayinin Asal olup olmadigini yazdiran kodu
//? for dongulerini kullanarak yaziniz.

// exercices faciles 
//ex1
const nombres = [1 , 2 ,3 ,4 ,5];
console.log(nombres);

//ex2
const  elements =["apple", "banana", "cherry"];
 console.log(elements[1]);

 //ex3
 let nbrs =[10, 20, 30, 40];
 console.log(nbrs);
 //modifie
  nbrs[2]=50;
  console.log(nbrs);
   
  //ex4
  const fruits=["mango", "peach", "pear"];
 // console.log(fruits);
  //ajouter

  fruits[3]="citron";
  console.log(fruits);

  //ex5
  let elem =["dog","peach","pear"];
  //console.log(elem);
   //supprime
   delete elem[2];
   console.log(elem);
   
   //ex6
   const information ={
    name: "safae", age: 21 

   };
   console.log(information);

   //ex7
   let person = {
    nom: "john", age: 25
   };
   console.log(person);

   //ex8
   const book ={
    title:"JavaScript 101", author:"John Doe"
   };
  // console.log(book);
   //modifie
   book.author ="safia";
   console.log(book);
    
   //ex9
   let car = { make:"toyota",model:"Corolla"};

//console.log(car);
//ajouter
car.year= '25' ;
console.log(car);

//ex10

let persone = {
    nom:"safoua" , age:"24"
};

   // Vérification si la propriété 'age' existe dans l'objet person
const propriété= 'age' in persone;

// Affichage du résultat
console.log(propriété); 


////les exercices moyenne

//ex11
const élément= [1, 2, 3, 4, 5 ] ;
for (let i=0 ; i< élément.length ; i++){
   
     console.log(élément[i]); 
}

//ex12

let nbr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

function  nbrpaire( n ) {
   return n % 2 === 0  ;

}
let  numbrepaire = nbr . filter( nbrpaire );
 console.log( " numbre paire "  + numbrepaire);

 //ex 12
 let a= [1, 2, 3 ] ;//tableau 1
 let b = [4, 5, 6 ]; //tableau 2

// console.log(a,b);

 // ajouter
 a [3]= 4;
 a [4] = 5 ;
 a [5] = 6 ;
 console.log(a);
 
 //ex14
 const tabl = ["apple" , "banana" , "cherry" , "date" ];

 console.log(tabl);

 //supp
 delete tabl [1];
 console.log(tabl);

 //ex15

 const numbers = [5, 1, 8, 4, 7 ];

 function croissante (a,b){

   return a-b ;
 }
 numbers.sort(croissante);
 console.log(numbers);

 //ex16

 const nomb = [1, 2, 3, 4 ];
 function multp (m) {
   return m*2 ;

 } 
 let nbresmultp = nomb.map(multp);
 console.log(nbresmultp) ;

 //ex17

 let care = {make:1 , 
    model:2 , 
     year:3 , 
    color:4 };

 let nbrdeprop = Object.keys(care).length;
  
 console.log( nbrdeprop);

 //ex18

 const personn={
   name :" maroua" ,
    age: 22 ,
    occupation : "etudier"
 }; 
 for(const clé in personn){

  console.log(clé +" : " + personn[clé]);
  
 
}

//ex




 












 
















 

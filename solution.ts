const formatValue = (input: string | number | boolean): string | number | boolean => {
  if (typeof input === "string") {
    return input.toUpperCase();
  } else if (typeof input === "number") {
    return input * 10;
  } else { 
    return !input;
  }
};


const getLength = (input: string | number[]): number => {
   if (Array.isArray(input)) { 
        return input.length;
    }
    else{
       return input.length                       
    }
};


class Person{
   name:string;
   age:number;
   
   constructor(name:string,age:number){
      this.name=name,
      this.age=age                        
   }

   getDetails(){
       return `'Name: ${this.name}, Age: ${this.age}'`                     
   }
}

interface bookType{
  title: string;
  rating: number;
}
    const filterByRating=(books:bookType[]):bookType[] =>{
        const heighRating =books.filter(book=>book.rating>=4)
        return heighRating;
    }


interface User{
  id:number;
   name:string;
   email:string;
   isActive:boolean
}
    const filterActiveUsers=(users:User[]):User[]=>{
        const activeUsers=users.filter(user=>user.isActive=== true)
        return activeUsers;
    }


interface Book{
   title:string;
   author:string;
   publishedYear:number;
   isAvailable:boolean;                           
}

const printBookDetails=(book:Book)=>{
console.log(`Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${book.isAvailable === true?"Yes":"No"}`)
}

function getUniqueValues<T>(array1: T[], array2: T[]): T[] {
    const result: T[] = [];
    const alreadyInArray = (value: T): boolean => {
        for (let i = 0; i < result.length; i++) {
            if (result[i] === value) return true;
        }
        return false;
    };
    for (const item of array1) {
        if (!alreadyInArray(item)) {
            result.push(item);
        }
    }
    for (const item of array2) {
        if (!alreadyInArray(item)) {
            result.push(item);
        }
    }
    return result;
}



interface Product{
   name:string;
   price:number;
   quantity:number;
   discount?:number;
}
    const calculateTotalPrice=(products:Product[]):number=>{
      return products.reduce((total, product) => {
    const Total = product.price * product.quantity;
    const discount = product.discount ? (Total * product.discount) / 100 : 0;
    return total + (Total - discount);
  }, 0);
    }
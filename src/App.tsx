import React from 'react';
import './App.css';

//Написання класів та продвинутих типі на мові TypeScript

//Створення інтефрейсу для наслідування
interface Employee {
  firstName: string;
  lastName: string;
  role: string;
  getSalary: () => number;
}

// Створення класу 'Менеджер'котрий буде імплементувати інтферйес 'Employee'
// Тобто буде обов'язково використовувати його властивості та методи
class Manager implements Employee {
  firstName: string;
  lastName: string;
  role: string;
  salary: number;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName
    this.role = "Manager"
    this.salary = 50000
  }

  getSalary(): number{
    return this.salary
  }
}

//Аналогічно створюю клас 'Developer'
class Developer implements Employee {
  firstName: string;
  lastName: string;
  role: string;
  salary: number;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName
    this.role = "Developer"
    this.salary = 60000
  }

  getSalary(): number{
    return this.salary
  }
}

// Використання класів
const manager = new Manager("John", "Doe");
const developer = new Developer("Yurii", "Typescript")

console.log(
  `${manager.firstName} ${manager.lastName} (${manager.role}) Salary: $${manager.getSalary()}`
) // Вивід інфоомації про працівника у консоль

console.log(
  `${developer.firstName} ${developer.lastName} (${developer.role}) Salary: $${developer.getSalary()}`
) // Вивід інфоомації про працівника у консоль



// *==================================================================================================


//Створення класу 'Book'
class Book {
  readonly title: string;
  readonly author: string;
  public ratings: number[] = [];
  
  constructor(title: string, author: string) {
    this.title = title;
    this.author = author;
  }  

  //Створення публічного методу, котрий добавляє рейтинг
  public addRating = (rating: number) :void => {
    if (rating >= 1 && rating <= 5) {
      this.ratings.push(rating)
      console.log(`Rating ${rating} added for ${this.title}`)
    } else {
      console.log(`Invalid rating. Plase provide a rating between 1 and 5`)
    }
  }

  public getAvarageRating(): number {
    if (this.ratings.length === 0) {
      return 0
    };
    const sum = this.ratings.reduce((acc, rating) => acc + rating, 0);
    return sum / this.ratings.length;
  }

  public displayInfo(): void {
    console.log(`Title: ${this.title}, Author: ${this.author}`);
  }
}

//Приклади використання класу Book
const book1 = new Book("The Catcher in the Rye", "J.D. Salinger");
const book2 = new Book("To Kill a Mockingbird", "Harper Lee");

book1.addRating(4);
book1.addRating(5);
book2.addRating(3);

console.log(`Avarage rating for ${book1.title}: ${book1.getAvarageRating()}`)
console.log(`Avarage rating for ${book2.title}: ${book2.getAvarageRating()}`)

book1.displayInfo() //Виводимо інформацію про книжку
book2.displayInfo() //Виводимо інформацію про книжку

function App() {
  return (
    <div className="App">
      <header className="App-header">

      </header>
    </div>
  );
}

export default App;

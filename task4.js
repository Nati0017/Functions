export class FriendAge {
    constructor(name,year, month, day, ) {
      this.name = name; 
      this.month = month
      this.year = year
      this.day = day
    }
  
  returnAge () {
    let age = new Date().getFullYear() - this.year; 
    return this.name + ` is ` + age + ` today!`
  }

  }
  
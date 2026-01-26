class MyClass {
  public log(): void {
    console.log(this)
  }
}

const instance = new MyClass()

const abc = (callback: () => void): void => {
  callback()
}

abc(instance.log)

// const myLog = instance.log
// myLog()

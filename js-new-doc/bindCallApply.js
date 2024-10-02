const userInfo = {
    name: 'John',
    age: 20
}

function getName(city, country) {
    console.log(this.name, this.age, city, country)
}

// bind
const userInfoBind = getName.bind(userInfo)
userInfoBind('New York', 'USA')

// call
getName.call(userInfo, 'New York', 'USA')

// apply
getName.apply(userInfo, ['New York', 'USA'])